import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { CookieStore, sessionMiddleware } from 'hono-sessions';
import { router as authRouter } from './auth';
import { router as homeRouter } from './home';
import { router as userRouter } from './user';
import { UserRepository } from './user/user.repository';

const app = new Hono();

app.use('*', sessionMiddleware({
  store: new CookieStore(),
  encryptionKey: '1234567890123456789012345678901234567890',
  expireAfterSeconds: 900,
  cookieOptions: {
    sameSite: 'Lax',
    path: '/',
    httpOnly: true,
  },
}))

const userRepository = new UserRepository();
app.use(async (c, next) => {
  c.set('userRepository', userRepository);
  await next();
});

app.use(async (c, next) => {
  const { session } = c.var;
  if (session.get('userId') || c.req.path === '/login') {
    await next();
  } else {
    return c.redirect('/login');
  }
});

app.route('/', authRouter);
app.route('/', homeRouter);
app.route('/', userRouter);

const port = parseInt(process.env.PORT || '', 10) || 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
