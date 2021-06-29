const App = () => {
	return (
		<div>
			<FirstComponent />
			<NamedComponent name="tristo" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
