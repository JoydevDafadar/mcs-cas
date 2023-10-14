import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex items-start justify-between bg-gradient-to-r from-[#0076CE] to-[#65058ec9] px-40 py-10">
      <div className="w-[30vw] pr-[10vw]">
        <img src={logo} alt="" className=" grayscale-0 " />
        <p className=" text-base text-white opacity-80">
          India&apos;s first platform dedicated to simplifying partner search
        </p>
      </div>

      <div className=" flex items-start justify-between w-[60vw]">
        <div className=" mx-4">
          <h1 className=" font-bold text-white">COMPANY</h1>
          <p className=" text-white py-2 opacity-80">About </p>
          <p className=" text-white py-2 opacity-80">Pricing </p>
          <p className=" text-white py-2 opacity-80">Careers </p>
        </div>
        <div className=" mx-4">
          <h1 className=" font-bold text-white">SOLUTIONS</h1>
          <p className=" text-white py-2 opacity-80">Search </p>
          <p className=" text-white py-2 opacity-80">Contact </p>
          <p className=" text-white py-2 opacity-80">Reacharch </p>
          <p className=" text-white py-2 opacity-80">Academy </p>
        </div>
        <div className=" mx-4">
          <h1 className=" font-bold text-white">RESOURCES</h1>
          <p className=" text-white py-2 opacity-80">Blogs </p>
          <p className=" text-white py-2 opacity-80">Forms </p>
        </div>
        <div className=" mx-4">
          <h1 className=" font-bold text-white">SUPPORT</h1>
          <p className=" text-white py-2 opacity-80">Help </p>
          <p className=" text-white py-2 opacity-80">Contact Us </p>
        </div>
        <div className=" mx-4">
          <h1 className=" font-bold text-white">LEGAL</h1>
          <p className=" text-white py-2 opacity-80">Privacy </p>
          <p className=" text-white py-2 opacity-80">Terms</p>
          <p className=" text-white py-2 opacity-80">Accessibility</p>
        </div>
      </div>

    </div>
  );
};

export default Footer;
