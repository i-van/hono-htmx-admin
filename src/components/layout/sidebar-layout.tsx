import type { PropsWithChildren } from 'hono/jsx';
import { BaseLayout, BaseLayoutProps } from './base-layout';

const Sidebar = () => (
  <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
    <li><a href="/">Home</a></li>
    <li><a href="/users">Users</a></li>
    <li><a hx-post="/logout" hx-target="body">Logout</a></li>
  </ul>
);

export const SidebarLayout = ({ children, title }: PropsWithChildren<BaseLayoutProps>) => (
  <BaseLayout title={title}>
    <div className="drawer lg:drawer-open">
      <input type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-4">
        {children}
      </div>
      <div className="drawer-side">
        <Sidebar />
      </div>
    </div>
  </BaseLayout>
);
