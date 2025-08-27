import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //añadiremos server.AllowdHosts para permitir que se pueda acceder a la app desde una IP externa
  server: {allowedHosts: true}


})

