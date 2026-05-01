import { copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const index = join(root, 'dist', 'index.html');
if (existsSync(index)) {
	copyFileSync(index, join(root, 'dist', '404.html'));
}
