import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

const FeedbackScreen = () => {
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [feedback, setFeedback] = useState('');
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const onSubmit = async () => {
		if (localStorage.getItem('feedback-data')) {
			let newData = await localStorage.getItem('feedback-data');
			newData = JSON.parse(newData);
			newData.push({
				id: uuidv4(),
				name: name,
				address: address,
				phone: phone,
				feedback: feedback,
				show: true,
			});
			localStorage.setItem(
				'current-feedback',
				JSON.stringify({
					name: name,
					address: address,
					phone: phone,
					feedback: feedback,
				})
			);
			localStorage.setItem('feedback-data', JSON.stringify(newData));
			navigate('/main');
		} else {
			let newData = [];
			newData.push({
				id: uuidv4(),
				name: name,
				address: address,
				phone: phone,
				feedback: feedback,
				show: true,
			});
			localStorage.setItem(
				'current-feedback',
				JSON.stringify({
					name: name,
					address: address,
					phone: phone,
					feedback: feedback,
				})
			);
			localStorage.setItem('feedback-data', JSON.stringify(newData));
			navigate('/main');
		}
	};

	return (
		<div className='feedback-screen'>
			<div className='sub-heading'>Add a Testimonial</div>
			<div className='form-group'>
				<div className='sub-text'>Name *</div>
				<input
					type='text'
					onChange={(e) => {
						setName(e.target.value);
					}}
					value={name}
					className='input-bar'
					placeholder='Enter your Name'
				/>
			</div>
			<div className='form-group'>
				<div className='sub-text'>Address</div>
				<input
					type='text'
					onChange={(e) => {
						setAddress(e.target.value);
					}}
					value={address}
					className='input-bar'
					placeholder='Enter your Address'
				/>
			</div>
			<div className='form-group'>
				<div className='sub-text'>Phone</div>
				<input
					type='text'
					onChange={(e) => {
						setPhone(e.target.value);
					}}
					value={phone}
					className='input-bar'
					placeholder='Enter your Phone'
				/>
			</div>
			<div className='form-group'>
				<div className='sub-text'>Comments/Feedback</div>
				<textarea
					type='text'
					rows='4'
					onChange={(e) => {
						setFeedback(e.target.value);
					}}
					value={feedback}
					className='input-bar'
					placeholder='Thanks for your valuable Feedback'
				/>
			</div>
			<button onClick={onSubmit} className='submit-button'>
				Submit
			</button>
		</div>
	);
};

export default FeedbackScreen;
