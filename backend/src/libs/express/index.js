import expressServer from 'express'
import http from 'http'

export const app = expressServer()
export const server = http.Server(app)