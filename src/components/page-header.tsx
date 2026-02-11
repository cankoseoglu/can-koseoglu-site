export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-lg text-neutral-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
