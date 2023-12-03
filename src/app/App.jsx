import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AuthPage } from '../pages/AuthPage';
import { OrdersPage } from '../pages/OrdersPage';
import { MessagePage } from '../pages/MessagePage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/auth' element={<AuthPage />} />
				<Route path='/orders' element={<OrdersPage />} />
				<Route path='/message' element={<MessagePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
