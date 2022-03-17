import { useEffect, useState } from 'react';


const CarouselScreen = () => {
	const [feedback, setFeedback] = useState([]);

	const getFeedbackData = async () => {
		const feedbackData = await localStorage.getItem('feedback-data');
		if (feedbackData) {
			setFeedback(JSON.parse(feedbackData));
		}
	};

	useEffect(() => {
		getFeedbackData();
	}, []);

	return (
		<div className='carousel-screen'>
			<div className='sub-heading'></div>
			<div className='sub-heading'></div>
		</div>
	);
};

export default CarouselScreen;
