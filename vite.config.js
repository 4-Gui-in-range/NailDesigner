import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/**
 * GitHub Pages (repositório project site): defina GH_PAGES_BASE=/nome-do-repo/
 * no build. O workflow em .github/workflows já usa o nome do repositório.
 * Site na raiz (domínio próprio ou user.github.io): use '/' (padrão).
 */
const base = process.env.GH_PAGES_BASE || '/';

export default defineConfig({
	base,
	plugins: [react()],
	resolve: {
		extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		outDir: 'dist',
		emptyOutDir: true,
	},
	server: {
		port: 3000,
	},
});
