import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import * as Icon from 'react-icons/fi';
import Checkbox from 'react-custom-checkbox';
import * as XLSX from 'xlsx';

const AdminScreen = ({ showBig }) => {
	const [feedback, setFeedback] = useState([]);

	const navigate = useNavigate();

	const getFeedbackData = async () => {
		const feedbackData = await localStorage.getItem('feedback-data');
		if (feedbackData) {
			setFeedback(JSON.parse(feedbackData));
		}
	};

	const checkLogin = async () => {
		const loginRes = await localStorage.getItem('LOGGED_IN');
		if (loginRes !== 'true') {
			navigate('/main');
		}
	};

	useEffect(() => {
		getFeedbackData();
		checkLogin();
	}, []);

	const exportData = () => {
		let binaryWS = XLSX.utils.json_to_sheet(feedback);
		// Create a new Workbook
		var wb = XLSX.utils.book_new();
		// Name your sheet
		XLSX.utils.book_append_sheet(wb, binaryWS, 'Comments');
		// export your excel
		XLSX.writeFile(wb, `Comments.xlsx`);
	};

	const onCheckboxChange = (id) => {
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
			<div className='sub-heading'>Admin Panel</div>
			<div className='feedback-row'>
				<button
					style={{ marginBottom: '5vh', marginRight: '1vw' }}
					onClick={() => exportData()}
					className='submit-button'>
					Export Data
				</button>
				<button
					style={{
						marginBottom: '5vh',
						marginRight: '10vw',
						marginLeft: '0',
					}}
					onClick={() => {
						navigate('/main');
						localStorage.setItem('LOGGED_IN', 'false');
					}}
					className='submit-button'>
					Logout
				</button>
			</div>

			{feedback?.map((item) => (
				<div className='feedback-item'>
					<div className='feedback-row'>
						<div className='small-field'>Name: {item.name}</div>
						<Checkbox
							size={15}
							icon={<Icon.FiCheck color='#FFFFFF' size={14} />}
							style={{ alignSelf: 'flex-end' }}
							label='Show Comment'
							checked={item.show}
							onChange={() => {
								onCheckboxChange(item.id);
							}}
							labelStyle={{ color: '#FFFFFF', marginLeft: '1vw' }}
							borderColor='#FFFFFF'
						/>
					</div>

					<div className='feedback-row'>
						<div className='small-field'>Address: {item.address}</div>
						<div className='small-field'>Phone: {item.phone}</div>{' '}
					</div>
					<div className='feedback-row'>
						<div className='large-field'>Feedback: {item.feedback}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default AdminScreen;
