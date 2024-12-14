import {configureStore} from "@reduxjs/toolkit";
import pollSlice from "./reducers/pollSlice.js";

const saveToLocalStorage = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("reduxState", serializedState);
	} catch (e) {
		console.error("Error saving state to localStorage:", e);
	}
};

const loadFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem("reduxState");
		if (serializedState === null) return undefined;
		return JSON.parse(serializedState);
	} catch (e) {
		console.error("Error loading state from localStorage:", e);
		return undefined;
	}
};

const store = configureStore({
	reducer: {
		polls: pollSlice,
	},
	preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => {
	saveToLocalStorage(store.getState());
});

export default store;