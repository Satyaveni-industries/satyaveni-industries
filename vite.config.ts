import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  
  const generateLogoPlugin = () => {
    return {
      name: 'generate-logo',
      async buildStart() {
        const publicDir = path.resolve(__dirname, 'public');
        const logoPath = path.join(publicDir, 'logo.png');
        if (fs.existsSync(logoPath)) return; // Already generated

        const apiKey = env.GEMINI_API_KEY;
        if (!apiKey) {
          console.log('No API key found for logo generation');
          return;
        }

        console.log('Generating logo via Vite plugin...');
        try {
          const { GoogleGenAI } = await import('@google/genai');
          const ai = new GoogleGenAI({ apiKey });
          const prompt = "A premium, high-end minimalist logo for 'SATYAVENI BIODERGRADABLE INDUSTRIES'. The design features a central 'Tree of Life' with elegant, organic roots and branches. Encircling the tree are sophisticated, thin metallic 'Saturn-style' rings. Sprouting subtly from the outer rings are a single detailed ear of corn and minimalist compostable bags/packaging covers. The entire emblem has a 3D embossed, aged bronze and brass texture with a very subtle forest green patina for an 'eco-luxury' feel. The background is a clean, dark slate with a soft spotlight. Typography is a prestigious, high-end serif font. The aesthetic is royal, grounded, and innovative, avoiding bright or cartoonish colors in favor of muted, metallic earth tones";

          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: { parts: [{ text: prompt }] },
            config: { imageConfig: { aspectRatio: "1:1" } }
          });

          let base64Data = '';
          for (const part of response.candidates?.[0]?.content?.parts || []) {
            if (part.inlineData) {
              base64Data = part.inlineData.data;
              break;
            }
          }

          if (base64Data) {
            if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
            fs.writeFileSync(logoPath, Buffer.from(base64Data, 'base64'));
            console.log('Logo generated and saved to public/logo.png');
          }
        } catch (err) {
          console.error('Failed to generate logo:', err);
        }
      }
    };
  };

  return {
    base: './',
    plugins: [react(), tailwindcss(), generateLogoPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
