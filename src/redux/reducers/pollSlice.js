import {createSlice} from "@reduxjs/toolkit";

const pollSlice = createSlice({
	name: "pollSlice",
	initialState: [
		{
			"voted": false,
			"chosenIndex": undefined,
			"question": "What is your favorite programming language?",
			"options": [
				{"text": "Python", "votes": 45},
				{"text": "JavaScript", "votes": 30},
				{"text": "C++", "votes": 15},
				{"text": "Other", "votes": 10}
			]
		},
		{
			"voted": false,
			"chosenIndex": undefined,
			"question": "What is your favorite gaming genre?",
			"options": [
				{"text": "Action", "votes": 35},
				{"text": "Role-Playing Games (RPG)", "votes": 40},
				{"text": "Simulation", "votes": 15},
				{"text": "Puzzle", "votes": 10}
			]
		},
		{
			"voted": false,
			"chosenIndex": undefined,
			"question": "What is your preferred weekend activity?",
			"options": [
				{"text": "Reading a book", "votes": 25},
				{"text": "Going hiking", "votes": 30},
				{"text": "Playing video games", "votes": 35},
				{"text": "Watching movies", "votes": 10}
			]
		}
	],
	reducers: {
		addPoll(state, action) {
			state.push(action.payload);
		},
		addPollVote(state, action) {
			console.log(action)
			const index = state.findIndex(x => x.question === action.payload.question);
			const optionIndex = state[index].options.findIndex(option => option.text === action.payload.text);

			console.log(index);
			console.log(optionIndex);

			state[index].options[optionIndex].votes += 1;
			state[index].voted = true;
			state[index].chosenIndex = optionIndex;
		}
	}
});

export const {addPoll, addPollVote} = pollSlice.actions;
export default pollSlice.reducer;