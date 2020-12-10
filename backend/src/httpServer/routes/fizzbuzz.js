import { Router } from 'express'
import { fizzBuzzGenerate } from '../../controller'

const routes = Router()

routes.post('/', (request, response) => {

	const { initialNumber, finalNumber } = request.body

	const fizzBuzzGenerator = fizzBuzzGenerate(initialNumber, finalNumber)

	response.status(200).json({ message: "Generate fizz buzz", data: null})
})
  
export default routes