type PaginationProps = {
  currentPage: number;
  totalPages: number;
  target: string;
  url: string;
};

const getPages = (currentPage: number, totalPages: number): number[] => {
  const pages: number[] = [];
  if (totalPages <= 1) {
    return pages;
  }

  let from = currentPage - 2;
  let to = currentPage + 2;
  if (from < 1) {
    from = 1;
    to = from + 4;
  } else if (to > totalPages) {
    to = totalPages;
    from = to - 4;
  }
  from = Math.max(from, 1);
  to = Math.min(to, totalPages);

  for (let i = from; i <= to; i++) {
    pages.push(i);
  }

  return pages;
};

export const Pagination = ({ currentPage, totalPages, url, target }: PaginationProps) => (
  <div className="join">
    {getPages(currentPage, totalPages).map((page) => (
      <button
        className={`join-item btn${page === currentPage ? ' btn-active' : ''}`}
        hx-get={url.replace(':page', String(page))}
        hx-target={target}
      >{page}</button>
    ))}
  </div>
);
