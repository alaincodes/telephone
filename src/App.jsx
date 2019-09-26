/* eslint-disable linebreak-style */

import React, { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

// eslint-disable-next-line no-undef
const uuidv4 = require('uuid/v4');

function App() {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
	]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filterName, setFilterName] = useState('');

	const getFilterName = persons.filter((name) => {
		return name.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1;
	});

	const checkDuplicateName = persons.find(
		(person) => person.name.toLowerCase() === newName.toLowerCase(),
	);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (checkDuplicateName) {
			alert(`${newName} is already added to phonebook`);
		} else {
			const personObject = {
				name: newName,
				number: newNumber,
				id: uuidv4(),
			};

			setPersons(persons.concat(personObject));
		}

		setNewName('');
		setNewNumber('');
	};

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};

	const handleFilterChange = (event) => {
		setFilterName(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter filterName={filterName} handleFilterChange={handleFilterChange} />
			<h2>add a new</h2>
			<PersonForm
				handleSubmit={handleSubmit}
				newName={newName}
				handleNameChange={handleNameChange}
				newNumber={newNumber}
				handleNumberChange={handleNumberChange}
			/>
			<h2>Numbers</h2>
			<Persons getFilterName={getFilterName} />
		</div>
	);
}

export default App;
