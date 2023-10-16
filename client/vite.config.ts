import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: '0.0.0.0',
		strictPort: true,
		port: 5173,
		watch: {
			usePolling: true,
		},
		hmr: {
			host: '0.0.0.0',
			port: 5174,
		},
	},
	plugins: [react()],
});
