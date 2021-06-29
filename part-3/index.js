const App = () => {
	return (
		<div>
			<Person
				name="Sophocles"
				age={2500}
				hobbies={['writing plays', 'being clever', 'satirizing ancient Greek society']}
			/>
			<Person name="Ashley" age={27} hobbies={['playing Sims', 'watching TikTok', 'walking my dog']} />
			<Person name="Ashton Kutcher" age={38} hobbies={['making mediocre rom-coms', 'investing in Binti']} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
