/* eslint-disable react/prop-types */
import React from 'react';

const PersonForm = ({
	handleSubmit,
	newName,
	handleNameChange,
	newNumber,
	handleNumberChange,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				name:{' '}
				<input name="personName" value={newName} onChange={handleNameChange} />
			</div>
			<div>
				number: <input value={newNumber} onChange={handleNumberChange} />
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
};

export default PersonForm;
