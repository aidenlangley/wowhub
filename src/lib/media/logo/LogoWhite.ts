import { browser } from '$app/env';
import { prefetch } from '$app/navigation';
import { assets } from '$app/paths';

export const src = `${assets}/images/logo/logo-white.png`;
export const alt = 'wowhub logo white';

if (browser) prefetch(src);
