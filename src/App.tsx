import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { ChatPage } from './pages/ChatPage/ChatPage'
import MainPage from './pages/MainPage'

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='/chat' element={<ChatPage />} />
		</Routes>
	)
}

export default App
