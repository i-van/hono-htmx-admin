import { Hono } from 'hono';
import { SidebarLayout } from '../components/layout';
import { Table, TableRow } from '../components/table';
import { Pagination } from '../components/pagination';
import { UserRepository } from './user.repository';

const userRepository = new UserRepository();

export const router = new Hono();

router.get('/users', (c) => c.html(
  <SidebarLayout title="Dashboard | Users">
    <h1>Users</h1>
    <div id="user-list" hx-get="/users/list" hx-trigger="load" />
  </SidebarLayout>
));

router.get('/users/list/:page?', async (c) => {
  const page = Number(c.req.param('page')) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;
  const rows = await userRepository.fetchAll({ offset, limit });
  const rowCount = await userRepository.countAll();
  const totalPages = Math.ceil(rowCount / limit);

  return c.html(
    <>
      <Table headers={['', 'Full Name', 'Role']}>
        {rows.map(r => (
          <TableRow fields={[String(r.id), `${r.firstName} ${r.lastName}`, r.role]} />
        ))}
      </Table>
      <div className="flex flex-col items-center mt-4">
        <Pagination currentPage={page} totalPages={totalPages} url="/users/list/:page" target="#user-list" />
      </div>
    </>
  );
});
