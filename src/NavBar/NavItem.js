function NavItem({ children }) {
  return (
    <div className="nav-item">
      <a href="#" className="nav-link">
        {children}
      </a>
    </div>
  );
}

export default NavItem;