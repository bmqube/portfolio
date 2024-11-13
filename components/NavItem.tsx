export const NavItem = ({ children, href, icon: Icon }: any) => (
  <a
    href={href}
    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-purple-900/50 transition-colors"
  >
    <Icon size={18} />
    <span>{children}</span>
  </a>
);
