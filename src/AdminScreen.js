import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AdminScreen = () => {
	const [feedback, setFeedback] = useState([]);

	const navigate = useNavigate();

	const getFeedbackData = async () => {
		const feedbackData = await localStorage.getItem('feedback-data');
		if (feedbackData) {
			setFeedback(JSON.parse(feedbackData));
		}
	};

	useEffect(() => {
		getFeedbackData();
	}, []);

	const onSubmit = (id) => {
		console.log('adjaklsndl');
		let newFeedbackData = [];
		feedback.forEach((item) => {
			if (item.id === id) {
				newFeedbackData.push({
					id: item.id,
					name: item.name,
					address: item.address,
					phone: item.phone,
					feedback: item.feedback,
					show: !item.show,
				});
			} else {
				newFeedbackData.push(item);
			}
		});
		localStorage.setItem('feedback-data', JSON.stringify(newFeedbackData));
		getFeedbackData();
	};

	return (
		<div className='feedback-screen'>
			<button
				style={{ marginRight: '10vw', marginBottom: '5vh' }}
				onClick={() => navigate('/main')}
				className='submit-button'>
				Back
			</button>
			{feedback?.map((item) => (
				<div className='feedback-item'>
					<div className='feedback-row'>
						<div className='small-field'>Name: {item.name}</div>
					</div>
					{/* <div className='feedback-row'>
						<div className='large-field'>Address: {item.address}</div>
					</div>
					<div className='feedback-row'>
						<div className='large-field'>Feedback: {item.feedback}</div>
					</div> */}
					<button
						onClick={() => onSubmit(item.id)}
						className='submit-button no-right-margin'>
						{item.show ? 'Hide' : 'Show'}
					</button>
				</div>
			))}
		</div>
	);
};

export default AdminScreen;
