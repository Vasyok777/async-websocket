import { useEffect, useRef } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { MessageI } from '../../types/Message'
import Message from '../../ui/Message/Message'
import { ChatSend } from '../ChatSend/ChatSend'
import ChatTop from '../ChatTop'
import styles from './Chat.module.scss'

export const Chat = () => {
	const ulElement = useRef<HTMLUListElement>(null)
	const messages = useAppSelector<MessageI[]>(state => state.messages.messages)
	useEffect(() => {
		if (ulElement.current)
			ulElement.current.scrollTop = ulElement.current.scrollHeight
	}, [messages])
	return (
		<>
			<div className={styles.wrapper}>
				<ChatTop />
				<ul ref={ulElement} className={styles.chat}>
					{messages.map(message => (
						<li key={message.id}>
							<Message message={message} />
						</li>
					))}
				</ul>
				<ChatSend />
			</div>
		</>
	)
}
