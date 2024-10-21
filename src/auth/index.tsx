import { Hono } from 'hono';
import { BaseLayout } from '../components/layout';
import { LoginForm } from './login-form';

export const router = new Hono();

router.get('/login', (c) => {
  const { session } = c.var;
  if (session.get('userId')) {
    return c.redirect('/');
  }
  return c.html(
    <BaseLayout title="Dashboard | Login">
      <div className="hero min-h-screen">
        <LoginForm />
      </div>
    </BaseLayout>
  )
});

router.post('/login', async (c) => {
  const { userRepository, session } = c.var;
  const values = await c.req.parseBody();
  const errors = { email: '', password: '' };
  if (!values.email) {
    errors.email = 'Email is empty';
  }
  if (!values.password) {
    errors.password = 'Password is empty';
  }
  if (values.email && values.password) {
    const user = await userRepository.fetchOneByEmail(String(values.email));
    if (user?.password === values.password) {
      session.set('userId', user.id);
      c.header('HX-Redirect', '/');
      return c.redirect('/');
    } else {
      errors.email = 'Invalid email or password';
    }
  }

  return c.html(
    <LoginForm values={values} errors={errors} />
  );
});

router.post('/logout', (c) => {
  const { session } = c.var;
  session.deleteSession();

  c.header('HX-Redirect', '/');
  return c.redirect('/');
});
