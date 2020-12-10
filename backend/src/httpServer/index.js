import { server, app } from '../libs'
import defaultMiddlewares from './middleware'
import routes from './routes'
import { env  } from '../config'

const httpPort = env.PORT_HTTP

export default () => {
	
	defaultMiddlewares(app)
	routes(app)

	server.listen(httpPort, () => console.log(`Running server on port: ${httpPort}`))
};