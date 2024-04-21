type TableRowProps = {
  fields: string[];
};

export const TableRow = ({ fields }: TableRowProps) => (
  <tr>
    {fields.map(f => <td>{f}</td>)}
  </tr>
);
