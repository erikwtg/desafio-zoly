export default {
	fizzBuzz(initialNumber, finalNumber) {
		const array  = []

		for(let i = initialNumber; i <= finalNumber; i++) {

			if (i % 3 == 0 && i % 5 == 0) {
				array.push("FizzBuzz")
			} else if (i % 3 == 0 && i % 5 !== 0) {
				array.push("Fizz")
			} else if (i % 5 == 0 && i % 3 !== 0) {
				array.push("Buzz")
			} else {
				array.push(i)
			}
		}

		return array
	}
}