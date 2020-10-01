import http from 'http'
import supertest from 'supertest'
import app from './app'
import Person from './models/Person'
import Movie from './models/Movie'

describe('POST /movies/:movieId/actores/:actorId', () => {
  const api = supertest(http.createServer(app.callback()))

  it('adds the actor to the movie', async () => {
    const movie = await Movie.query().insert({ name: 'Back to the Future' })
    const actor = await Person.query().insert({ firstName: 'Michael', lastName: 'Fox' })
    const response = await api.post(`/movies/${movie.id}/actors/${actor.id}`)

    expect(response.status).toBe(200)
  })
})
