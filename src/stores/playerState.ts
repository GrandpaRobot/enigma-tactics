import { writable } from 'svelte/store';
import { Professions, type PlayerState, type PieceState, type Axis } from '../types';
import { board } from './boardState';

const defaultPiecesState = [
	{ id: '1', profession: Professions.fighter, position: { x: 0, y: 0 }, health: 10 },
	{ id: '2', profession: Professions.fighter, position: { x: 0, y: 0 }, health: 10 },
	{ id: '3', profession: Professions.cleric, position: { x: 0, y: 0 }, health: 10 },
	{ id: '4', profession: Professions.mage, position: { x: 0, y: 0 }, health: 10 }
];
const playerDefault = {
	id: '1',
	name: 'Player 1',
	piecesState: defaultPiecesState
};
function setPlayerState(defaultPlayerData: PlayerState) {
	const { subscribe, set, update } = writable(defaultPlayerData);

	return {
		subscribe,
		reset: () => set(defaultPlayerData),
		placePiece: (piece: PieceState, axis: Axis, value: number) => {
			console.log(piece);
			return update((player) => {
				const pieceIndex = player.piecesState.findIndex((p) => p.id === piece.id);
				player.piecesState[pieceIndex].position[axis] = value;
				board.updateBoard(player.piecesState);
				return player;
			});
		}
	};
}

export const player = setPlayerState(playerDefault);

export const computer = setPlayerState({ ...playerDefault, name: 'Computer' });
