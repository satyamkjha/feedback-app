import { useEffect, useState } from 'react';



const BigScreen = () => {
	const [showFeedback, setShowFeedback] = useState(false);
	const [feedback, setFeedback] = useState(null);

	let flag = false;

	const checkFeedback = () => {
		console.log('checking');
		if (localStorage.getItem('current-feedback')) {
			let feed = localStorage.getItem('current-feedback');
			setFeedback(JSON.parse(feed));
			if (!flag) {
				setShowFeedback(true);
				flag = true;
				setInterval(() => {
					console.log('deleting');
					flag = false;
					setShowFeedback(false);
					localStorage.removeItem('current-feedback');
				}, 10000);
			}
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!flag) {
				checkFeedback();
			}
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<>
			{!showFeedback && (
				<div className='tech-slideshow'>
					<div className='mover'>
						<div className='row flex'>
							<div className='column flex'>
								<div
									className='rectH'
									style={{ backgroundImage: 'url(./slideshow/image-h-1.jpg)' }}
								/>
								<div className='row flex'>
									<div
										className='rectV'
										style={{
											backgroundImage: 'url(./slideshow/image-v-1.jpg)',
										}}
									/>
									<div
										className='rectV'
										style={{
											backgroundImage: 'url(./slideshow/image-v-2.jpg)',
										}}
									/>
								</div>
								<div
									className='rectH'
									style={{ backgroundImage: 'url(./slideshow/image-h-2.jpg)' }}
								/>
							</div>
							<div className='column flex'>
								<div className='row flex'>
									<div
										className='square'
										style={{
											backgroundImage: 'url(./slideshow/image-s-1.jpg)',
										}}
									/>
									<div
										className='square'
										style={{
											backgroundImage: 'url(./slideshow/image-s-2.jpg)',
										}}
									/>{' '}
								</div>
								<div className='row flex'>
									<div
										className='square'
										style={{
											backgroundImage: 'url(./slideshow/image-s-3.jpg)',
										}}
									/>
									<div
										className='square'
										style={{
											backgroundImage: 'url(./slideshow/image-s-4.jpg)',
										}}
									/>{' '}
								</div>
							</div>
							<div className='column flex'>
								<div
									className='rectH'
									style={{ backgroundImage: 'url(./slideshow/image-h-3.jpg)' }}
								/>
								<div
									className='rectH'
									style={{ backgroundImage: 'url(./slideshow/image-h-4.jpg)' }}
								/>
								<div className='row flex'>
									<div
										className='rectV'
										style={{
											backgroundImage: 'url(./slideshow/image-v-3.jpg)',
										}}
									/>
									<div
										className='rectV'
										style={{
											backgroundImage: 'url(./slideshow/image-v-4.jpg)',
										}}
									/>
								</div>
							</div>

							<div className='column flex'>
								<div
									className='rectH'
									style={{ backgroundImage: 'url(./slideshow/image-h-5.jpg)' }}
								/>
								<div className='row flex'>
									<div
										className='rectV'
										style={{
											backgroundImage: 'url(./slideshow/image-v-5.jpg)',
										}}
									/>
									<div
										className='rectV'
										style={{
											backgroundImage: 'url(./slideshow/image-v-6.jpg)',
										}}
									/>
								</div>
								<div
									className='rectH'
									style={{ backgroundImage: 'url(./slideshow/image-h-6.jpg)' }}
								/>
							</div>
							<div className='column flex'>
								<div className='row flex'>
									<div
										className='square'
										style={{
											backgroundImage: 'url(./slideshow/image-s-5.jpg)',
										}}
									/>
									<div
										className='square'
										style={{
											backgroundImage: 'url(./slideshow/image-s-6.jpg)',
										}}
									/>{' '}
								</div>
								<div className='row flex'>
									<div
										className='square'
										style={{
											backgroundImage: 'url(./slideshow/image-s-7.jpg)',
										}}
									/>
									<div
										className='square'
										style={{
											backgroundImage: 'url(./slideshow/image-s-8.jpg)',
										}}
									/>{' '}
								</div>
							</div>
							<div className='column flex'>
								<div
									className='rectH'
									style={{ backgroundImage: 'url(./slideshow/image-h-7.jpg)' }}
								/>
								<div
									className='rectH'
									style={{ backgroundImage: 'url(./slideshow/image-h-8.jpg)' }}
								/>
								<div className='row flex'>
									<div
										className='rectV'
										style={{
											backgroundImage: 'url(./slideshow/image-v-7.jpg)',
										}}
									/>
									<div
										className='rectV'
										style={{
											backgroundImage: 'url(./slideshow/image-v-8.jpg)',
										}}
									/>
								</div>
							</div>

							<div className='column flex'>
								<div
									className='rectH'
									style={{ backgroundImage: 'url(./slideshow/image-h-9.jpg)' }}
								/>
								<div className='row flex'>
									<div
										className='rectV'
										style={{
											backgroundImage: 'url(./slideshow/image-v-9.jpg)',
										}}
									/>
									<div
										className='rectV'
										style={{
											backgroundImage: 'url(./slideshow/image-v-10.jpg)',
										}}
									/>
								</div>
								<div
									className='rectH'
									style={{ backgroundImage: 'url(./slideshow/image-h-10.jpg)' }}
								/>
							</div>
							<div className='column flex'>
								<div className='row flex'>
									<div
										className='square'
										style={{
											backgroundImage: 'url(./slideshow/image-s-9.jpg)',
										}}
									/>
									<div
										className='square'
										style={{
											backgroundImage: 'url(./slideshow/image-s-10.jpg)',
										}}
									/>{' '}
								</div>
								<div className='row flex'>
									<div
										className='square'
										style={{
											backgroundImage: 'url(./slideshow/image-s-11.jpg)',
										}}
									/>
									<div
										className='square'
										style={{
											backgroundImage: 'url(./slideshow/image-s-12.jpg)',
										}}
									/>{' '}
								</div>
							</div>
							<div className='column flex'>
								<div
									className='rectH'
									style={{ backgroundImage: 'url(./slideshow/image-h-11.jpg)' }}
								/>
								<div
									className='rectH'
									style={{ backgroundImage: 'url(./slideshow/image-h-12.jpg)' }}
								/>
								<div className='row flex'>
									<div
										className='rectV'
										style={{
											backgroundImage: 'url(./slideshow/image-v-11.jpg)',
										}}
									/>
									<div
										className='rectV'
										style={{
											backgroundImage: 'url(./slideshow/image-v-12.jpg)',
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			{showFeedback && (
				<div className='carousel-screen'>
					<div className='sub-heading'>{feedback?.feedback}</div>
					<div className='sub-heading'>- {feedback?.name}</div>
				</div>
			)}
		</>
	);
};

export default BigScreen;
