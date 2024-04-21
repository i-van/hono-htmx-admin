import { Hono } from 'hono';
import { SidebarLayout } from '../components/layout';

export const router = new Hono();

router.get('/', (c) => c.html(
  <SidebarLayout title="Dashboard">
    <h1>Home</h1>
  </SidebarLayout>
));
