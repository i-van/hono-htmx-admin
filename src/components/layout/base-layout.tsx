import type { PropsWithChildren } from 'hono/jsx';

export type BaseLayoutProps = {
  title: string;
};

export const BaseLayout = ({ children, title }: PropsWithChildren<BaseLayoutProps>) => (
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>{title}</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.10.2/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://unpkg.com/htmx.org@2.0.3"
            integrity="sha384-0895/pl2MU10Hqc6jd4RvrthNlDiE9U1tWmX7WRESftEDRosgxNsQG/Ze9YMRzHq"
            crossorigin="anonymous"></script>
    <script src="https://cdn.tailwindcss.com" />
  </head>
  <body>{children}</body>
  </html>
);
