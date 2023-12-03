import { useNavigate } from 'react-router-dom'
import styles from './ChatTop.module.scss'

const ChatTop = () => {
	const navigate = useNavigate()
	const handleLeave = () => {
		localStorage.removeItem('user')
		navigate('/')
	}
	return (
		<div className={styles.root}>
			<button onClick={() => handleLeave()}>Покинути канал</button>
		</div>
	)
}
export default ChatTop
