import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { type Ardoise, ardoises } from '../../data.ts';

export const load: PageServerLoad = ({ params }) => {
    // Seuls les numéros d'ardoise sous forme décimale simple sont acceptés (pas de 0, 01, 1e0, 0x1…)
    if (!/^[1-9]\d*$/.test(params.slug)) error(404, 'Ardoise introuvable');

    const index = Number(params.slug) - 1;
    const ardoise = ardoises[index];

    if (!ardoise) error(404, 'Ardoise introuvable');

    const result: { ardoise: Ardoise, previous?: Ardoise, next?: Ardoise } = {ardoise};

    if (index >= 1) {
        result.previous = ardoises[index - 1];
    }

    if (index < ardoises.length - 1) {
        result.next = ardoises[index + 1];
    }

    return result;
};
