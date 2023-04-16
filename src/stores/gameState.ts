import { writable } from 'svelte/store';
import { GamePhases, type GameState } from '../types';

const initialGame: GameState = {
	phase: GamePhases.waiting,
	roundCount: 0
};
function setBoardState() {
	const { subscribe, set, update } = writable(initialGame);

	return {
		subscribe,
		reset: () => set(initialGame),
		setPhase: (phase: GamePhases) => update((game) => ({ ...game, phase }))
	};
}

export const game = setBoardState();
