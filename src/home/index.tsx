import { Hono } from 'hono';
import { SidebarLayout } from '../components/layout';
import { Breadcrumbs } from '../components/breadcrumbs';

export const router = new Hono();

router.get('/', (c) => c.html(
  <SidebarLayout title="Dashboard">
    <Breadcrumbs items={[{ label: 'Home' }]} />
  </SidebarLayout>
));
