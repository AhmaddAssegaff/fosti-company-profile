import type { ReactNode } from 'react';

export default function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <article className="prose prose-lg mx-auto">
      {children}
    </article>
  );
}
