import { browser } from '$app/env';
import { prefetch } from '$app/navigation';
import { assets } from '$app/paths';

export const src = `${assets}/images/logo/logo.png`;
export const alt = 'wowhub logo';

if (browser) prefetch(src);
