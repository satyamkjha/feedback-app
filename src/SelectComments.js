import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const SelectComment = ({ showBig }) => {
	const [feedback, setFeedback] = useState([]);

	const navigate = useNavigate();

	const getFeedbackData = async () => {
		let feedbackData = await localStorage.getItem('feedback-data');
		feedbackData = JSON.parse(feedbackData);
		if (feedbackData) {
			let filterFeedback = [];
			feedbackData?.forEach((item) => {
				if (item.show) {
					filterFeedback.push(item);
				}
			});
			setFeedback(filterFeedback);
		}
	};

	useEffect(() => {
		getFeedbackData();
	}, []);

	return (
		<div className='feedback-screen'>
			<div className='sub-heading'>Select a Comment</div>
			<div className='feedback-row'>
				<button
					style={{
						marginBottom: '5vh',
						marginRight: '10vw',
					}}
					onClick={() => {
						navigate('/main');
					}}
					className='submit-button'>
					Back
				</button>
			</div>

			{feedback?.map((item) => (
				<div className='feedback-item'>
					<div className='feedback-row'>
						<div className='small-field'>Name: {item.name}</div>
						<button
							style={{ marginRight: '0' }}
							onClick={() => {
								console.log('asdkjaskjd');
								localStorage.setItem('current-feedback', JSON.stringify(item));
							}}
							className='submit-button'>
							Show
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default SelectComment;
