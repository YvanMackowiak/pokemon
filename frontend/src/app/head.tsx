interface HeadProps {
  title?: string;
  description?: string;
}

export default function Head({
  title = "Titre par défaut",
  description = "Description par défaut",
}: HeadProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}
