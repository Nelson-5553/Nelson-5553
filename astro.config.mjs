import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'; // Importa el adaptador de Vercel

export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // Cambia la salida a 'server' para que use serverless en Vercel
  adapter: vercel(), // Configura el adaptador de Vercel
});
