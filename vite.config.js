import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Reactfolio/", // replace base value with your repository name i.e. https://github.com/saqibbedar/Reactfolio so in github url repository name is "/Reactfolio/".
});
