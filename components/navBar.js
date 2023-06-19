// import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="flex items-center p-4 gap-5">
        <p>Email: abdulrauflukman9@gmail.com</p>
        <p>Phone No: +2348089287065</p>
      </div>
      <div className="bg-lime-900 flex justify-evenly items-center gap-20 p-4">
        <div className="text-2xl font-bold cursor-pointer">Your Name</div>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4 cursor-pointer">
            <li>
              <a className="hover:text-blue-300">Home</a>
            </li>
            <li>
              <a className="hover:text-blue-300">About</a>
            </li>
            <li>
              <a className="hover:text-blue-300">Portfolio</a>
            </li>
            <li>
              <a className="hover:text-blue-300">Services</a>
            </li>
            <li>
              <a className="hover:text-blue-300">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
