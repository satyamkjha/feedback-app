import logo from './logo.svg';
import './App.css';
import BigScreen from './BigScreen';
import MainScreen from './MainScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedbackScreen from './FeedbackScreen';
import AdminScreen from './AdminScreen';
import CarouselScreen from './CarouselScreen';
import { useState } from 'react';
import LoginScreen from './LoginScreen';
import SelectComment from './SelectComments';

function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<Routes>
					<Route exact path='/big' element={<BigScreen />} />
					<Route exact path='/admin' element={<AdminScreen />} />
					<Route exact path='/main' element={<MainScreen />} />
					<Route exact path='/login' element={<LoginScreen />} />
					<Route exact path='/select' element={<SelectComment />} />
					<Route exact path='/feedback' element={<FeedbackScreen />} />
					<Route exact path='/carousel' element={<CarouselScreen />} />
					<Route exact path='/' element={<MainScreen />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
