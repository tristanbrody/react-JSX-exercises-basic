const Person = ({ name, age, hobbies }) => {
	const voteMessage = age >= 18 ? <h3>Please go vote!</h3> : <h3>You must be 18 to vote</h3>;
	const nameAbbreviated = name.length > 8 ? name.slice(0, 6) : name;
	return (
		<div>
			<p>Learn some information about {nameAbbreviated}:</p>
			<ul>
				<li>{voteMessage}</li>
				Hobbies:
				{hobbies.map(hobby => (
					<li>{hobby}</li>
				))}
			</ul>
		</div>
	);
};
