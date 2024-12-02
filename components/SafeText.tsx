export const SafeText = ({ children }: { children: string }) => {
  const safeText = children.split("'").join("&apos;");
  return <span dangerouslySetInnerHTML={{ __html: safeText }} />;
}; 