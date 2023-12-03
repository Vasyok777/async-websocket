import { io, Socket } from 'socket.io-client'

// Check if the environment variable is defined
const serverUrl = process.env.REACT_APP_SERVER_URL
if (!serverUrl) {
	throw new Error('REACT_APP_SERVER_URL is not defined in the environment')
}

// Initialize socket with the defined server URL
const socket: Socket = io(serverUrl)

export default socket
