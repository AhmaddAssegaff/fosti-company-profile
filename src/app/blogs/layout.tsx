import type { ReactNode } from 'react';
import { Container } from '../../components/layout/Container'

export default function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Container className="py-16">
      <article className="prose prose-lg dark:prose-invert">
        {children}
      </article>
    </Container>
  );
}
