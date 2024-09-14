import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static'; // Importa el adaptador de Vercel

export default defineConfig({
  integrations: [tailwind()],
  output: 'static', // Cambia la salida a 'server' para que use serverless en Vercel
  adapter: vercel(), // Configura el adaptador de Vercel
});
