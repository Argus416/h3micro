import { useEffect, useState } from 'react';
import './App.css';
import axiosInstance from './config/axiosInstance';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axiosInstance.get('/users');
				setUsers(response.data);
			} catch (e) {
				console.error(e);
			}
		};
		fetchUsers();
	}, []);

	return (
		<>
			<div>
				<h1>All users titi</h1>
				{users.length !== 0 &&
					users.map((user: any) => (
						<h2 key={user.id}>
							<a href={`/${user.id}`}>{user.name}</a>
						</h2>
					))}
			</div>
		</>
	);
}

export default App;
