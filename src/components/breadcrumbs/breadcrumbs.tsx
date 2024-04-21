type BreadcrumbsProps = {
  items: { label: string; url?: string }[];
};

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
  <div className="breadcrumbs">
    <ul>
      {items.map(i => (
        i.url ? <li><a href={i.url}>{i.label}</a></li> : <li>{i.label}</li>
      ))}
    </ul>
  </div>
);
