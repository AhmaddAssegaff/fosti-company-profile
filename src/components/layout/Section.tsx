type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={`py-16 md:py-24 ${className ?? ""}`}>
      {children}
    </section>
  );
};
