import express from 'express';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import api from './routes.js';
import chat from './chat.js';
import { addClient } from './events.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false })); // Twilio posts form-encoded webhooks
// Phinite tools call from the cloud; the demo page is same-origin. Keep CORS open — it's a sandbox.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.get('/api/events', (_req, res) => addClient(res));
app.use('/api/chat', chat);
app.use('/api', api);
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Paytm Sandbox running on http://localhost:${PORT}`);
  console.log(`API base for Phinite SANDBOX_URL: http://localhost:${PORT}  (use the tunnel URL when Phinite calls it)`);
});
