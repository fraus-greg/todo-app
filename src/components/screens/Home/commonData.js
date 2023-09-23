import { nanoid } from 'nanoid'

export const commonData = [
	{
		id: nanoid(),
		title: 'This is a default todo',
		isCompleted: false
	},
	{
		id: nanoid(),
		title: 'This is second default todo',
		isCompleted: false
	}
]
