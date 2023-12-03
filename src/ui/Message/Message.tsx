import { FC } from 'react'
import { MessageI } from '../../types/Message'
import styles from './Message.module.scss'
interface MessageProps {
	message: MessageI
}
const Message: FC<MessageProps> = ({ message }) => {
    console.log('hello', message)
	return (
		<div className={styles['container-to']}>
			<p>{message?.text}</p>
		</div>
	)
}
export default Message
