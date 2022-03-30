import { createServer } from 'miragejs'
import { requestFactory } from './factories/requestFactory'
import { userFactory } from './factories/userFactory'
import { Models } from './models'
import { dayOffRoutes } from './routes/dayOffRequest'
import { userRoutes } from './routes/user'

export const initBackendMocks = () =>
  createServer({
    models: Models,
    factories: {
      user: userFactory,
      dayOffRequest: requestFactory,
    },
    routes() {
      this.namespace = 'api'
      userRoutes(this)
      dayOffRoutes(this)
    },
    seeds(server) {
      server.createList('user', 50)
    },
  })