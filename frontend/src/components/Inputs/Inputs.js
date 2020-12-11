import React, { useState } from 'react'

const Inputs = () => {

	const [initialNumber, setInitialNumber] = useState([])
	const [finalNumber, setFinalNumber] = useState([])

	const handleChangeInput = () => {

	}

	return (
		<div>
			<form>
				<label>
					Initial Number
					<input type="submit" value={initialNumber} onChange={handleChangeInput} name="InitialNumber" />
				</label>
				<label>
					Final Number
					<input type="submit" value={finalNumber} onChange={handleChangeInput} name="FinalNumber" />
				</label>
			</form>
		</div>
	)
}

export default Inputs