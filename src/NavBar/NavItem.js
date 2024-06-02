function NavItem({ icon, children }) {
  return (
    <div className="nav-item">
        {icon}
        
        <div className="nav-item-children">
        {children}
      </div>
    </div>
  );
}

export default NavItem;