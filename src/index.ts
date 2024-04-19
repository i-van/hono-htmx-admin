import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { router as rootRouter } from './root';

const app = new Hono();

app.route('/', rootRouter);

const port = parseInt(process.env.PORT || '', 10) || 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
