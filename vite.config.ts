import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function photoUploadPlugin(): Plugin {
  return {
    name: 'photo-upload-middleware',
    configureServer(server) {
      server.middlewares.use('/api/upload-photo', (req, res) => {
        if (req.method === 'POST') {
          const chunks: any[] = [];
          req.on('data', chunk => chunks.push(chunk));
          req.on('end', () => {
            try {
              const body = Buffer.concat(chunks).toString('utf-8');
              const parsed = JSON.parse(body);
              const base64Data = (parsed.data || '').replace(/^data:image\/\w+;base64,/, '');
              const buffer = Buffer.from(base64Data, 'base64');
              const targetDir = path.resolve(process.cwd(), 'public/images');
              const rootImagesDir = path.resolve(process.cwd(), 'images');
              const distImagesDir = path.resolve(process.cwd(), 'dist/images');
              for (const d of [targetDir, rootImagesDir]) {
                if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
              }
              const filename = parsed.filename || (parsed.target === 'about' ? '3.jpeg' : '5.jpeg');
              const writeToDirs = (name: string, data: Buffer) => {
                fs.writeFileSync(path.join(targetDir, name), data);
                fs.writeFileSync(path.join(rootImagesDir, name), data);
                if (fs.existsSync(distImagesDir)) {
                  fs.writeFileSync(path.join(distImagesDir, name), data);
                }
              };
              writeToDirs(filename, buffer);
              if (parsed.target === 'about' || filename.includes('3') || filename.includes('about')) {
                writeToDirs('3.jpeg', buffer);
                writeToDirs('about-portrait.jpg', buffer);
              } else {
                writeToDirs('5.jpeg', buffer);
                writeToDirs('1.jpeg', buffer);
                writeToDirs('hero-portrait.jpg', buffer);
                writeToDirs('vihanga-1.jpg', buffer);
              }
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, url: `./images/${filename}` }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: String(err) }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss(), photoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
