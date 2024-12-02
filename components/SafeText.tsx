export const SafeText = ({ children }: { children: string }) => {
  return <>{children.replace(/'/g, "'")}></>;
}; 