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
    <script src="https://unpkg.com/htmx.org@1.9.12"
            integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2"
            crossorigin="anonymous" />
    <script src="https://cdn.tailwindcss.com" />
  </head>
  <body>{children}</body>
  </html>
);
