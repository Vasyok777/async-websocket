import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MessageI } from './../../../types/Message'
import { MessagesState } from './types'
const initialState: MessagesState = {
	messages: [],
	inputMessage: '',
	typingUsers: [],
}
const MessagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		addMessage(state, action: PayloadAction<{ message: MessageI }>) {
			state.messages.push(action.payload.message)
		},
		changeInputMessage(state, action: PayloadAction<{ body: string }>) {
			state.inputMessage = action.payload.body
		},
		userTyping(state, action: PayloadAction<{ userId: string }>) {
			state.typingUsers.push(action.payload.userId)
		},
		userStoppedTyping(state, action: PayloadAction<{ userId: string }>) {
			state.typingUsers = state.typingUsers.filter(
				userId => userId !== action.payload.userId
			)
		},
	},
})
export const { addMessage, changeInputMessage, userTyping, userStoppedTyping } =
	MessagesSlice.actions
export default MessagesSlice.reducer
