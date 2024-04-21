import type { PropsWithChildren } from 'hono/jsx';

type TableProps = {
  headers: string[];
};

export const Table = ({ children, headers }: PropsWithChildren<TableProps>) => (
  <table className="table table-zebra">
    <thead>
    <tr>
      {headers.map(h => <th>{h}</th>)}
    </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);
