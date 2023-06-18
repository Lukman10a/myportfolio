const NavBar = () => {
  return (
    <nav className="flex justify-around items-center p-10">
      <div>Lukman</div>
      <ul className="flex space-x-3">
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
