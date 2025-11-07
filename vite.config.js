import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from "@tailwindcss/vite";
import path from 'path';
import {fileURLToPath} from "url";
import {visualizer} from "rollup-plugin-visualizer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), "")

    return {
        base: env.VITE_BASE_PATH || "/",
        server: {
            host: true,
        },
        build: {
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (!id.includes('node_modules')) return;

                        // React ecosystem
                        if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) return 'react-core';

                        // Axios (network layer)
                        if (id.includes('axios')) return 'axios';

                        // Small utils
                        if (id.includes('clsx') || id.includes('tailwind-merge')) return 'utils';

                        // Default vendor chunk
                        return 'vendor';
                    }
                }
            },
            chunkSizeWarningLimit: 500,
            sourcemap: mode === 'development',
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@ui': path.resolve(__dirname, 'src/components/ui'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@img': path.resolve(__dirname, 'src/assets/images'),
                '@hooks': path.resolve(__dirname, 'src/hooks'),
                '@api': path.resolve(__dirname, 'src/lib/api'),
                '@context': path.resolve(__dirname, 'src/context'),
                '@utils': path.resolve(__dirname, 'src/lib/utils'),
            }
        },
        plugins: [
            react(),
            tailwindcss(),
            env.ANALYZE === "true" &&
            visualizer({
                filename: "analyze.html",
                open: true,
                gzipSize: true,
                brotliSize: true
            }),
        ].filter(Boolean),
    }
});