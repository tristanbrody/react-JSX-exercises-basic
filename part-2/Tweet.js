const Tweet = ({ byUsername, byName, date, message }) => {
	return (
		<p>
			<ul>
				<li>{byUsername}</li>
				<li>{byName}</li>
				<li>{date}</li>
				<li>{message}</li>
			</ul>
		</p>
	);
};
