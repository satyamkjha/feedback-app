import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const LoginScreen = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const onSubmit = async () => {
		if (username !== '' && password !== '') {
			if (username === 'admin' && password === 'icit@goa') {
				localStorage.setItem('LOGGED_IN', 'true');
				navigate('/admin');
			} else {
			}
		} else {
		}
	};

	return (
		<div className='feedback-screen'>
			<div className='sub-heading'>Login</div>
			<div className='form-group'>
				<div className='sub-text'>Username *</div>
				<input
					type='text'
					onChange={(e) => {
						setUsername(e.target.value);
					}}
					style={{
						width: '40vw',
					}}
					value={username}
					className='input-bar'
					placeholder='Enter your Name'
				/>
			</div>
			<div className='form-group'>
				<div className='sub-text'>Password</div>
				<input
					type='text'
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					style={{
						width: '40vw',
					}}
					value={password}
					className='input-bar'
					placeholder='Enter your Address'
				/>
			</div>
			<button
				style={{ marginRight: '29vw' }}
				onClick={onSubmit}
				className='submit-button'>
				Login
			</button>
		</div>
	);
};

export default LoginScreen;
