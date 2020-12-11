import React, { useState } from 'react';
import Header from '../Header/Header';
import api from '../../services/api';

import './App.css';

const App = () => {
	
	const [cards, setCards] = useState([]);

	async function handleGenerateCards() {
		const response = await api.post('/fizzbuzz', {
			initialNumber: 1,
			finalNumber: 100
		});

		const { data } = response;
		
		setCards([...cards, data]);
	};

  return (
		<>
			<Header title="Cards"/>
			<ul>
				{ cards.map(card => <li key={card}>{card}</li>) }
			</ul>
			<button type="button" onClick={handleGenerateCards}>Start</button>
		</>
	)
};

export default App;