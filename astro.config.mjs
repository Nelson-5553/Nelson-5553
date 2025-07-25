import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel'; // Importa el adaptador de Vercel

import react from '@astrojs/react';

export default defineConfig({
  prefetch:true,
  integrations: [tailwind(), react()],
  output: 'server', // Cambia la salida a 'server' para que use serverless en Vercel
  adapter: vercel({ 
    edgeMiddleware: true,
  }), // Configura el adaptador de Vercel
});