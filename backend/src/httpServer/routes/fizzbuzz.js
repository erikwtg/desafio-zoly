import { Router } from 'express'
import generalFunctions from '../../controller'

const routes = Router()

routes.post('/', (request, response) => {

	const { initialNumber = 0, finalNumber = 100 } = request.body

	const fizzBuzzGenerator = generalFunctions.fizzBuzz(initialNumber, finalNumber)

	response.status(200).json({ message: "Generate fizz buzz", data: fizzBuzzGenerator})
})
  
export default routes