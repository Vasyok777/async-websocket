import { useEffect } from 'react'
import { Chat } from '../../components/Chat/Chat'
import Sidebar from '../../components/Sidebar'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { wsConnect } from '../../store/slices/webSocket/webSocket.slice'
import styles from './ChatPage.module.scss'
export const ChatPage = () => {
	const dispacth = useAppDispatch()
	useEffect(() => {
		dispacth(wsConnect())
	}, [])
	return (
		<div className={styles.root}>
			<Sidebar />
			<Chat />
		</div>
	)
}
