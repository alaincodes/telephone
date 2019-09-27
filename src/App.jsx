/* eslint-disable linebreak-style */

import React, { useState, useEffect } from 'react';
import './App.css';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';

// eslint-disable-next-line no-undef
const uuidv4 = require('uuid/v4');

function App() {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filterName, setFilterName] = useState('');

	useEffect(() => {
		personService
			.getAll()
			.then((initialPersons) => {
				setPersons(initialPersons);
			})
			.catch((error) => {
				console.log(error, 'error');
			});
	}, []);

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

			// eslint-disable-next-line no-unused-vars
			personService
				.create(personObject)
				.then((returnedPerson) => {
					setPersons(persons.concat(returnedPerson));
					setNewName('');
					setNewNumber('');
				})
				.catch((error) => {
					console.log(error, 'error');
				});
		}
	};

	const handleDelete = (id) => {
		personService
			.remove(id)
			.then(() => {
				setPersons(persons.filter((p) => p.id !== id));
			})
			.catch((error) => {
				console.log(error, 'error');
			});
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
			<Persons getFilterName={getFilterName} handleDelete={handleDelete} />
		</div>
	);
}

export default App;
