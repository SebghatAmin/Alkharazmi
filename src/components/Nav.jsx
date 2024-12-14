const Nav = () => {
  return (
    <header className="fixed w-full top-0">
      <nav className="flex items-center justify-between h-40 w-full bg-gray-900">
        <a href="https://gaaga.wpengine.com/" rel="home">
          <img
            className="ml-20 mr-auto"
            src="/al-kharazmi_circle-facebook.png"
            alt="Al-kharazmi"
            width="64"
            height="24"
          />
        </a>
        <ul className="flex text-neutral-50 ml-96 relative">
          <li className="p-5 text-4xl font-bold font-sans">HOME</li>
          <li className="p-5 text-4xl font-bold font-sans relative group bg-gray-900">
            PAGES
            <ul className="absolute left-0 hidden group-hover:flex top-full bg-gray-900 flex-col p-5 text-xl w-60 space-y-2 rounded shadow-lg">
              <li className=" p-2 rounded">PROCESS</li>
              <li className=" p-2 rounded">FAQ</li>
              <li className=" p-2 rounded">PRICING PLAN</li>
              <li className=" p-2 rounded">OUR TEAM</li>
              <li className=" p-2 rounded">CAREER</li>
              <li className=" p-2 rounded">404 PAGE</li>
            </ul>
          </li>
          <li className="p-5 text-4xl font-bold font-sans">PROJECTS</li>
          <li className="p-5 text-4xl font-bold font-sans">SERVICES</li>
          <li className="p-5 text-4xl font-bold font-sans">BLOG</li>
          <li className="p-5 text-4xl font-bold font-sans">CONTACT US</li>
        </ul>
        <div className="flex items-center justify-center border-2 border-red-500 w-72 mr-10 h-28">
          <h1 className="font-sans font-bold text-4xl text-white">
            Let's start
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
