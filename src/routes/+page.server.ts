import type { PageServerLoad } from './$types';
import { getInitialTracks } from '$lib/server/db';

export const load = (() => {
	const tracks = getInitialTracks();

	return {
		tracks
	};
}) satisfies PageServerLoad;
