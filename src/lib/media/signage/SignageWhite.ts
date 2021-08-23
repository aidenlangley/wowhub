import { browser } from '$app/env';
import { prefetch } from '$app/navigation';
import { assets } from '$app/paths';

export const src = `${assets}/images/signage-white.png`;
export const alt = 'wowhub signage white';

if (browser) prefetch(src);
