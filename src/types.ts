export enum Professions {
	'fighter' = 'fighter',
	'mage' = 'mage',
	'cleric' = 'cleric',
	'rogue' = 'rogue',
	'archer' = 'archer',
	'lancer' = 'lancer'
}

export interface Position {
	x: number;
	y: number;
}

export interface BoardSpaceState {
	occupant: Professions | undefined;
}

export interface PieceState {
	id: string;
	profession: Professions;
	position: Position;
	health: number;
}
export interface PlayerState {
	id: string;
	name: string;
	piecesState: PieceState[];
}

export type Axis = 'x' | 'y';

export type GameState = {
	phase: 'placement' | 'battle';
	roundCount: number;
};
