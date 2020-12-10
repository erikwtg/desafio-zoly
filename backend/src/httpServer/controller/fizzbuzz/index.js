
export default {
	listAll (req, res) {
		console.log('CONTROLLER LISTALL')
		return res.status(200)
	},

	generate (req, res) {
		try {
			console.log('CONTROLLER GENERATE')
			return res.status(200)
		} catch (Error) {
			console.log(Error)
		}
	}
}