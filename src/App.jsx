export default function App() {
  return (
    <header className="flex items-center  h-40 w-full bg-gray-900 ">
      <a href="https://gaaga.wpengine.com/" rel="home">
        <img
          className="ml-20 mr-auto"
          src="./public/al-kharazmi_circle-facebook.png"
          alt="GaaGa Site"
          width="64"
          height="24"
        />
      </a>
      <ul className="flex text-neutral-50 mr-auto bg-slate-600">
        <li className="p-5 text-4xl font-bold font-sans">HOME</li>
        <li className="p-5 text-4xl font-bold font-sans">PAGES</li>
        <li className="p-5 text-4xl font-bold font-sans">PROJECTS</li>
        <li className="p-5 text-4xl font-bold font-sans">SERVICES</li>
        <li className="p-5 text-4xl font-bold font-sans">BLOG</li>
        <li className="p-5 text-4xl font-bold font-sans">CONTACT US</li>
      </ul>
    </header>
  );
}
