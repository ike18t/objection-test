import { Model } from 'objection'
import { unlinkSync } from 'fs'
import Knex from 'knex'
import knexConfig from './knexfile'
import knexCleaner from 'knex-cleaner'

const testDbName = `./test_db_${process.env.JEST_WORKER_ID}.db`
let knex!: Knex

beforeAll(async () => {
  knex = Knex({
    ...knexConfig.test,
    connection: { ...knexConfig.test.connection, filename: testDbName },
  })
  Model.knex(knex)
  await knex.migrate.latest()
})

beforeEach(async () => {
  await knexCleaner.clean(knex)
})

afterAll(async () => {
  knex.destroy()
  unlinkSync(testDbName)
})
