import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { RegPage } from '../pages/AuthPage/Reg/RegPage';
import { AuthPage } from '../pages/AuthPage/Auth/AuthPage';
import { OrdersPage } from '../pages/OrdersPage';
import { MessagePage } from '../pages/MessagePage';
import { ChoiceRolePage } from '../pages/ChoiceRolePage/ChoiceRolePage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />

				<Route path='/auth' element={<AuthPage />} />
				<Route path='/reg' element={<RegPage />} />

				<Route path='/orders' element={<OrdersPage />} />
				<Route path='/message' element={<MessagePage />} />
				<Route path='/choice' element={<ChoiceRolePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
