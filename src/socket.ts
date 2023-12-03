import { Socket, io } from 'socket.io-client'
import {
	ClientToServerListen,
	ServerToClientListen,
} from './store/middleware/types'

let socket: Socket<ServerToClientListen, ClientToServerListen>
export default socket = io('ws://localhost:5000')
