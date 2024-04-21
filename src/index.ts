import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { router as homeRouter } from './home';
import { router as userRouter } from './user';
import { UserRepository } from './user/user.repository';

const app = new Hono();

const userRepository = new UserRepository();
app.use(async (c, next) => {
  c.set('userRepository', userRepository);
  await next();
});

app.route('/', homeRouter);
app.route('/', userRouter);

const port = parseInt(process.env.PORT || '', 10) || 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
