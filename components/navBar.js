// import Link from 'next/link';

const NavBar = () => {
  return (
    // <nav className="grid grid-rows-2 text-white cursor-pointer hover:text-blue-300">
    //   <div className="bg-slate-800 flex gap-4 justify-around items-center">
    //     <p>Email: abdulrauflukman9@gmail.com</p>
    //     <p>Phone No: +2348089287065</p>
    //   </div>
    //   <div className="flex justify-around items-center gap-10 p-5 bg-lime-900">
    //     <div>Lukman</div>
    //     <ul className="flex space-x-3">
    //       <li>Home</li>
    //       <li>About</li>
    //       <li>Portfolio</li>
    //       <li>Services</li>
    //       <li>Contact</li>
    //     </ul>
    //   </div>
    // </nav>

    // ...

    <nav className="bg-gray-900 text-white">
      <div className="flex items-center p-4 gap-5">
        <p>Email: abdulrauflukman9@gmail.com</p>
        <p>Phone No: +2348089287065</p>
      </div>
      <div className="bg-lime-900 flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Your Name</div>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
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
