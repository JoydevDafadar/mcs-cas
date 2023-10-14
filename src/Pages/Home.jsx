import Navbar from "../Component/Navbar";

import avtar1 from "../assets/avtar1.png";
import avatr2 from "../assets/avtar2.png";
import avtar3 from "../assets/avtar3.png";
import group from "../assets/Group.png";
import Footer from "../Component/Footer";
import { useSelector } from "react-redux";
import { selectCa } from "../features/caSlice";
import {  useState } from "react";
import { Link } from "react-router-dom";

// To fetch steps Dinamically
const steps = [
  {
    id: 1,
    heading: "Commencement of business",
    para: "Commencement of business",
    due: "Within 180 days",
    penalty: [
      {
        price: 50000,
        msg: "for the company",
      },
      {
        price: 1000,
        msg: "/day for directors",
      },
    ],
  },
  {
    id: 2,
    heading: "Auditor Appointment",
    para: "Company informs new auditor and submits ADT.1 form to ROC.",
    due: "Within 30 days",
    penalty: [
      {
        price: 300,
        msg: " per month.",
      },
    ],
  },
  {
    id: 3,
    heading: "DIN eKYC",
    para: "Directors share personal information for identification & verification",
    due: "Every Year",
    penalty: [
      {
        price: 5000,
        msg: " one time.",
      },
    ],
  },
  {
    id: 4,
    heading: "DPT-3",
    para: "Companies report money taken from people to ROC; auditors confirm details.",
    due: "Within 30 Days",
    penalty: [
      {
        price: 300,
        msg: " per month.",
      },
    ],
  },
  {
    id: 5,
    heading: "MCA Form AOC-4",
    para: "It's like an official report card for a company's documents",
    due: "On or Before 30th November",
    penalty: [
      {
        price: 200,
        msg: " per day.",
      },
      {
        price: null,
        msg: "(No upper limi)*",
      },
    ],
  },
  {
    id: 6,
    heading: "MCA Form MGT-7",
    para: "Companies must annually report activities and finances to the registrar.",
    due: "On or Before 31st December",
    penalty: [
      {
        price: 200,
        msg: "per day(No upper limit)*",
      },
      {
        price: null,
        msg: "(No upper limi)*",
      },
    ],
  },
];

const Home = () => {

  const cas = useSelector(selectCa);

  // Fitering Out The ca name by Seached name

  const [name, setName] = useState(null);
  let filterCas = [];
  if (name !== null) {
    // filtercas will Store the new filterd ca objects and its a Array of Object
    filterCas = cas.filter((obj) => {
      const data = obj.name;

      // console.log(obj)
      return data.toUpperCase().includes(name.toUpperCase());
    });
  }
  

  return (
    <>
      <Navbar></Navbar>

      <section className=" z-10 relative bg-gradient-to-r from-[#f9eef3] via-[#ddeef5]  to-[#fef2ff] pt-48 flex items-start justify-center px-40 pb-6 ">
        <div className=" z-10 w-1/2 mr-6">
          <h1 className=" text-6xl font-bold py-4">
            Find{" "}
            <span className=" bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text">
              Partners
            </span>{" "}
            (CAs) available online
          </h1>
          <p>
            {" "}
            <span className=" font-bold">CONNECT</span> with us where your
            services are listed and visible to a myriad of businesses seeking
            CA’s for compliance support
          </p>
          <div className=" relative my-16">
            <input
              type="text"
              placeholder="Search by Name"
              className="w-80 h-12 border-[1px] border-gray-500 rounded-lg px-4 placeholder-gray-500"
              onChange={(e) => setName(e.target.value)}
            />
            {name && (
              <div className=" absolute top-12 w-80 px-4 bg-white left-0 shadow-lg rounded-xl">
                {filterCas.length === 0 ? (
                  <p className="text-base my-4 text-red-400">
                    No Matched data Found
                  </p>
                ) : (
                  <ul>
                    {filterCas.map((obj, ind) => {
                      return (
                        <>
                          <Link to={`/ca/${obj.id}`}> <li key={ind} className="text-xl my-4 font-bold text-sky-400">
                            {obj.name}{" "}
                          </li></Link>
                        </>
                      );
                    })}
                  </ul>
                )}
              </div>
            )}
            <button className=" bg-sky-400 text-white font-bold font-xl px-10 h-12 rounded-lg">
              Search
            </button>
          </div>
        </div>

        <div className=" z-10 w-1/2 flex items-start">
          <div className=" mt-20 mx-2 ">
            <img src={avtar1} alt="" />
          </div>
          <div className=" mt-0 mx-2">
            <img src={avatr2} alt="" />
          </div>
          <div className=" mt-10 mx-2 ">
            <img src={avtar3} alt="" />
          </div>
        </div>

        <div className=" z-0 absolute bottom-0 right-0 w-screen h-[6rem] border-b-[6rem] border-b-white border-l-[100vw] border-l-transparent"></div>
      </section>

      <section className=" my-40 ">
        <h1 className="px-40 text-center text-6xl font-bold my-6">
          Want to{" "}
          <span className=" bg-gradient-to-r  from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text">
            Join
          </span>{" "}
          Us?
        </h1>
        <p className=" px-40 text-lg text-center">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>

        <div
          className="px-40 py-12 flex flex-wrap items-center justify-evenly"
          style={{ backgroundImage: "url(../src/assets/background.png)" }}
        >
          {steps.map((ele, ind) => (
            <>
              <div
                key={ind}
                className=" relative w-[21rem]  my-4 p-4 bg-white rounded-xl shadow-lg"
              >
                <div className="absolute top-[-8px] left-[-8px] bg-gradient-to-r from-[#0076CE] to-[#9400D3] rounded-md px-2 py-1 text-2xl font-bold text-white">
                  {ele.id}
                  <sup className=" text-base">st</sup>
                </div>
                <h3 className=" text-center font-bold text-lg">
                  {ele.heading}
                </h3>
                <p className="text-center text-base">{ele.para}</p>
                <div className=" flex p-2 bg-gray-400 my-4 h-[6rem] ">
                  <div className="w-[35%] p-1">
                    <h4 className=" text-sky-400 font-medium">Due Dates</h4>
                    <p>{ele.due}</p>
                  </div>
                  <div className="w-[65%] p-1">
                    <h4 className=" text-red-600 font-medium">Penalty fees</h4>
                    {ele.penalty.map((item, key) => (
                      <>
                        <p key={key}>
                          <span className=" font-medium underline">
                            {item.price !== null ? `₹${item.price}` : ""}
                          </span>{" "}
                          {item.msg}
                        </p>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        <p className=" px-40 text-base text-left">
          * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200
          every day until you file the form . There is no maximum penalty
          amount. So, if you dont file the form for a year, you will owe ₹73,000
          per form
        </p>
      </section>

      <section className=" pb-20 px-40">
        <img src={group} alt="" />
      </section>

      <Footer></Footer>
    </>
  );
};

export default Home;
