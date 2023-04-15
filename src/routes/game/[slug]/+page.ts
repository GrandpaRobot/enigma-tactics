/** @type {import('./$types').PageLoad} */
export function load({ params, url }) {
	const opponentType = url.searchParams.get('opponent') || 'human';
	return {
		gameId: params.slug,
		opponentType
	};
}
