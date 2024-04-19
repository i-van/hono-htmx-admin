import { Hono } from 'hono';
import { SidebarLayout } from '../components/layout';

export const router = new Hono();

router.get('/', (c) => c.html(
  <SidebarLayout title="Dashboard">
    <h1>Root</h1>
  </SidebarLayout>
));
