import { useParams } from 'react-router-dom';

const Name = () => {
	const { name } = useParams();

	return (
		<div>
			<h1>Hi {name}</h1>
		</div>
	);
};

export default Name;
