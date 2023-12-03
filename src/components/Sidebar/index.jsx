import { useEffect, useState } from 'react'
import socket from './../../services/socketService.ts'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		socket.on('responseNewUser', data => setUsers([...data]))
	}, [socket, users])

	const filteredList = users.filter(
		(value, index, self) =>
			index ===
			self.findIndex(
				t => t.user === value.user && t.socketID === value.socketID
			)
	)
	return (
		<aside className={styles.root}>
			<h2>Users</h2>
			<ul>
				{filteredList?.map(item => (
					<li key={item.socketID}>{item.user}</li>
				))}
			</ul>
		</aside>
	)
}
export default Sidebar
