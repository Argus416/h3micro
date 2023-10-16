import { faker } from '@faker-js/faker';
import _ from 'lodash';
import './App.css';
import { API_URL } from './config';
import { useEffect, useState } from 'react';
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
				<h1>All users</h1>
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
