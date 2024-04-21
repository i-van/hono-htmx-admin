import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { router as rootRouter } from './root';
import { router as userRouter } from './user';

const app = new Hono();

app.route('/', rootRouter);
app.route('/', userRouter);

const port = parseInt(process.env.PORT || '', 10) || 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
