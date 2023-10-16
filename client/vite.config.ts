import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: '0.0.0.0',
		watch: {
			usePolling: true,
		},
		strictPort: true,
		port: 5173,
		hmr: {
			host: '0.0.0.0',
			port: 3010,
		},
	},
	plugins: [react()],
});
