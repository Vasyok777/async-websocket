import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import socketIO from 'socket.io-client'
import styles from './MainPage.module.scss'

const socket = socketIO('ws://localhost:5000')

const MainPage = () => {
	const [user, setUser] = useState('')
	const navigate = useNavigate()
	const handleSubmit = (e: any) => {
		e.preventDefault()
		localStorage.setItem('user', user)
		socket.emit('newUser', {
			user,
			socketID: socket.id,
		})
		navigate('/chat')
	}
	return (
		<main className={styles.main}>
			<form onSubmit={handleSubmit}>
				<h2>Login to the chat</h2>
				<label htmlFor='user'></label>
				<input
					type='text'
					id='user'
					placeholder='Enter your name'
					value={user}
					onChange={e => setUser(e.target.value)}
					className={styles.input}
				/>
				<button type='submit'>Login</button>
			</form>
		</main>
	)
}
export default MainPage
