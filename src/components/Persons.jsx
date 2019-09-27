/* eslint-disable react/prop-types */
import React from 'react';

const Persons = ({ getFilterName, handleDelete }) => {
	return (
		<div>
			{getFilterName.map((person) => (
				<p key={person.id}>
					{person.name} {person.number}{' '}
					<button onClick={() => handleDelete(person.id, person.name)}>
						delete
					</button>
				</p>
			))}
		</div>
	);
};

export default Persons;
