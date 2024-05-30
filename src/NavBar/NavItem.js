function NavItem({ icon, children }) {
  return (
    <div className="nav-item">
        {icon}
      <a href="#" className="nav-link">
        {children}
      </a>
    </div>
  );
}

export default NavItem;