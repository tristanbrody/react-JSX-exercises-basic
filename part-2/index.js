const App = () => {
	return (
		<div>
			<Tweet byUsername="tristo" byName="trist" date="6/28/21" message="Hi there"></Tweet>
			<Tweet byUsername="tristo" byName="trist" date="6/28/21" message="Hi there"></Tweet>
			<Tweet byUsername="tristo" byName="trist" date="6/28/21" message="Hi there"></Tweet>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
