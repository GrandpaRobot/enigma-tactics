import { writable } from 'svelte/store';
import type { BoardSpaceState, PieceState } from '../types';
import { boardSize } from '../lib/constants';

const defaultBoard: BoardSpaceState[][] = Array.from(Array(boardSize), () =>
	Array.from(Array(boardSize), () => {
		return {
			occupant: undefined
		};
	})
);
function setBoardState() {
	const { subscribe, set, update } = writable(defaultBoard);

	return {
		subscribe,
		reset: () => set(defaultBoard),
		updateBoard: (pieces: PieceState[]) =>
			update((board) => {
				board.forEach((row) => row.forEach((space) => (space.occupant = undefined)));
				pieces.forEach((piece) => {
					const isPositionValid =
						piece.position.x >= 1 &&
						piece.position.x <= boardSize &&
						piece.position.y >= 1 &&
						piece.position.y <= boardSize;
					if (!isPositionValid) return;
					board[piece.position.y - 1][piece.position.x - 1].occupant = piece.profession;
				});
				return board;
			})
	};
}

export const board = setBoardState();
