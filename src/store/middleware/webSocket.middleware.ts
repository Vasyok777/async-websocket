import { Middleware } from '@reduxjs/toolkit'
import { io, Socket } from 'socket.io-client'
import { v4 } from 'uuid'
import { MessageI } from '../../types/Message'
import { typeConnect } from '../../types/typeConnect'
import {
	addMessage,
	changeInputMessage,
} from '../slices/messages/messages.slice'
import { MessagesState } from '../slices/messages/types'
import { WebSocketState } from '../slices/webSocket/types'
import { AppState } from '../types'
import { ClientToServerListen, ServerToClientListen } from './types'

let socket: Socket<ServerToClientListen, ClientToServerListen>

export const webSocketMiddleware: Middleware<{}, AppState> =
	store => next => action => {
		const webSocketState: WebSocketState = store.getState().webSocket
		const messagesState: MessagesState = store.getState().messages
		if (webSocketState.connect === typeConnect.Disconnected && !socket) {
			const serverUrl = process.env.REACT_APP_SERVER_URL!
			socket = io(serverUrl)
			socket.on('connect', () => {
				console.log('Вы успешно подключились к чату')
			})
			socket.on('connect_error', () => {
				console.log('Вы не подключены')
			})
			socket.on('disconnect', () => {
				console.log(`${socket.id} user disconnected`)
			})
			socket.on('message', message => {
				console.log('Message received:', message)
				store.dispatch(addMessage({ message }))
			})
		} else if (webSocketState.connect === typeConnect.Connected && socket) {
			if (action.type === 'webSocket/send' && messagesState.inputMessage) {
				const message: MessageI = {
					id: v4(),
					socketId: socket.id,
					text: messagesState.inputMessage,
					name: localStorage.getItem('user'),
				}
				socket.emit('message', message)
				store.dispatch(changeInputMessage({ body: '' }))
			}
		}

		next(action)
	}
