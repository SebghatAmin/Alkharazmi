const Nav = () => {
  return (
    <header className="fixed w-full top-0">
      <nav className="flex items-center justify-between  h-40 w-full bg-gray-900 ">
        <a href="https://gaaga.wpengine.com/" rel="home">
          <img
            className="ml-20 mr-auto"
            src="/al-kharazmi_circle-facebook.png"
            alt="GaaGa Site"
            width="64"
            height="24"
          />
        </a>
        <ul className="flex text-neutral-50 ml-96">
          <li className="p-5 text-4xl font-bold font-sans">HOME</li>
          <li className="p-5 text-4xl font-bold font-sans">PAGES</li>
          <li className="p-5 text-4xl font-bold font-sans">PROJECTS</li>
          <li className="p-5 text-4xl font-bold font-sans">SERVICES</li>
          <li className="p-5 text-4xl font-bold font-sans">BLOG</li>
          <li className="p-5 text-4xl font-bold font-sans">CONTACT US</li>
        </ul>
        <div className="flex items-center justify-center border-2 border-red-500 w-72  mr-10 h-28">
          <h1 className="font-sans font-bold text-4xl text-white">
            Lets start
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
