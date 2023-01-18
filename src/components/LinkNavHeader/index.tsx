interface ChildrenProps {
  children: string;
  href?: string;
}
export const LinkNavBar = ({ children, href }: ChildrenProps) => {
  return <a href={href}>{children}</a>;
};
