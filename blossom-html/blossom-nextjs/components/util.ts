import type { CSSProperties } from 'react';

export const dl = (s: string): CSSProperties => ({ ['--d']: s } as CSSProperties);
