import { useEffect, useState } from 'react';
import './App.css';
import axiosInstance from './config/axiosInstance';
import { Link } from 'react-router-dom';
import { TextField, Autocomplete, Box, Stack, Button } from '@mui/material';
import { faker } from '@faker-js/faker';
import { SignOutButton, SignInButton, SignedIn, SignedOut } from '@clerk/clerk-react';

function App() {
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState('');
	const [autocomplete, setAutocomplete] = useState([]);
	const [refreshUsers, setRefreshUsers] = useState(false);
	const [user, setUser] = useState({
		name: faker.person.fullName(),
		email: Math.ceil(Math.random() * 100),
	});

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axiosInstance.get('/users');
				console.log(response.data);
				setUsers(response.data);
				setAutocomplete(response.data);
			} catch (e) {
				console.error(e);
			}
		};

		fetchUsers();
	}, [refreshUsers]);

	useEffect(() => {
		console.log(users, 'users');
		if (search === '') return setAutocomplete(users);
		const fetchAutocomplete = async () => {
			try {
				const response = await axiosInstance.get(`/autocomplete/users/${search}`);
				console.log('reloaded');
				setAutocomplete(response.data);
			} catch (e) {
				console.error(e);
			}
		};

		fetchAutocomplete();
	}, [search]);

	const handleSearch = (newValue: any) => {
		console.log(newValue.target.value);
		setSearch(newValue.target.value);
	};

	const addNewUser = async () => {
		try {
			console.log({ user });
			const response = await axiosInstance.post('/users', user);
			setUser({ name: '', email: '' });
			setRefreshUsers(!refreshUsers);
			console.log(response);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<>
			<SignedOut>
				<SignInButton />
			</SignedOut>
			<SignedIn>
				<SignOutButton aftersignouturl='/' />
			</SignedIn>

			<h1>All users</h1>

			<Autocomplete
				disablePortal
				id='combo-box-demo'
				options={autocomplete}
				onKeyUp={handleSearch}
				getOptionLabel={(option) => option.name}
				renderInput={(params) => (
					<TextField
						{...params}
						label='Users'
					/>
				)}
			/>
			<Stack direction='row'>
				<Box>
					{users.length !== 0 &&
						users.map((user: any) => (
							<h2 key={user._id}>
								<Link to={`/${user._id}`}>{user.name}</Link>
							</h2>
						))}
				</Box>
				<SignedIn>
					<Stack
						spacing={2}
						mt={3}
						ml={10}
					>
						<TextField
							label='Name'
							type='text'
							id='name'
							name='name'
							required
							value={user.name}
							onChange={(e) => setUser({ ...user, name: e.target.value })}
						/>
						<TextField
							label='Age'
							type='text'
							id='age'
							name='age'
							required
							value={user.email}
							onChange={(e) => setUser({ ...user, email: e.target.value })}
						/>

						<Button
							variant='contained'
							type='button'
							onClick={addNewUser}
						>
							Add new user
						</Button>
					</Stack>
				</SignedIn>
			</Stack>
		</>
	);
}

export default App;
