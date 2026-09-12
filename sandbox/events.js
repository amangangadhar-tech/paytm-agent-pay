// Tiny SSE hub. The demo page subscribes to /api/events; routes call broadcast().

const clients = new Set();

export function addClient(res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
    'Access-Control-Allow-Origin': '*',
  });
  res.write(`event: hello\ndata: ${JSON.stringify({ ts: new Date().toISOString() })}\n\n`);
  clients.add(res);
  const heartbeat = setInterval(() => res.write(': ping\n\n'), 25000);
  res.on('close', () => {
    clearInterval(heartbeat);
    clients.delete(res);
  });
}

export function broadcast(type, payload) {
  const frame = `event: ${type}\ndata: ${JSON.stringify(payload)}\n\n`;
  for (const res of clients) res.write(frame);
}

export function clientCount() {
  return clients.size;
}
