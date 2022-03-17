import { useNavigate } from 'react-router-dom';

const MainScreen = () => {
	const navigate = useNavigate();
	return (
		<div className='main-screen'>
			<div className='heading'>INDIAN CUSTOMS & INDIRECT TAXES MUSEUM</div>
			<div className='button-div'>
				<button onClick={() => navigate('/feedback')} className='main-button'>
					Leave a Comment
				</button>
				<button onClick={() => navigate('/admin')} className='main-button'>
					View Select Comments
				</button>
			</div>
		</div>
	);
};

export default MainScreen;
