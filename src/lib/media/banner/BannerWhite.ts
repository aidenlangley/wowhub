import { browser } from '$app/env';
import { prefetch } from '$app/navigation';
import { assets } from '$app/paths';

export const src = `${assets}/images/banner-white.png`;
export const alt = 'wowhub banner white';

if (browser) prefetch(src);
