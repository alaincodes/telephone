/* eslint-disable react/prop-types */
import React from 'react';

const Persons = ({ getFilterName }) => {
	return (
		<div>
			{getFilterName.map((person) => (
				<p key={person.id}>
					{person.name} {person.number}
				</p>
			))}
		</div>
	);
};

export default Persons;
