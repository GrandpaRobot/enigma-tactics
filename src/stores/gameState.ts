import { writable } from 'svelte/store';
import type { GameState } from '../types';

const initialGame: GameState = {
	phase: 'placement',
	roundCount: 0
};
function setBoardState() {
	const { subscribe, set, update } = writable(initialGame);

	return {
		subscribe,
		reset: () => set(initialGame)
	};
}

export const board = setBoardState();
