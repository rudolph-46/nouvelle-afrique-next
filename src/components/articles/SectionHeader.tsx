interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="mb-6">
      <h2 className="section-header text-section-title">
        {title}
      </h2>
      <div className="content-divider mt-4" />
    </div>
  );
};

export default SectionHeader;
