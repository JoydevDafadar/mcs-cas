import Navbar from "../Component/Navbar";

import calender from "../assets/calendar.png";
import star from "../assets/star.png";

import oneCA from "../assets/oneCA.png";
import Footer from "../Component/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCa } from "../features/caSlice";

const OneCA = () => {
  const param = useParams();
  const cas = useSelector(selectCa);

  // Finding the Perticular Ca by its id
  const person = cas.filter((obj) => {
    return obj.id === +param.id;
  });

  return (
    <>
      <Navbar></Navbar>

      <section className="flex items-start justify-center px-40 pt-32">
        <div className=" w-[40vw] p-6">
          <h1 className=" text-3xl font-bold py-4">{person[0].name}</h1>
          <p className="text-lg">{person[0].intro}</p>
          <p className=" py-4 flex items-center justify-start">
            {" "}
            <img src={star} alt="" className=" px-2" />{" "}
            <span className=" text-sky-400 font-bold py-4">
              {person[0].rating}
            </span>{" "}
            {`{${person[0].reviewCount}}`}{" "}
          </p>

          <div className=" p-4 rounded-lg shadow-lg">
            <div className=" flex items-center justify-between">
              <p className=" text-lg py-4">{person[0].taskComplexity}</p>
              <p>{person[0].price}</p>
            </div>
            <p className=" flex items-center justify-start py-4">
              <img src={calender} alt="" className=" mr-2" />
              {person[0].deliveryTime}
            </p>
            <div className=" flex items-center justify-between">
              <button className=" w-[48%] py-2 text-white bg-sky-400 rounded-lg">
                Request Proposal
              </button>
              <button className=" w-[48%] py-2 border-[2px] border-sky-400 rounded-lg">
                Chat With Me
              </button>
            </div>
          </div>
          <div className=" my-8 p-4 rounded-lg shadow-lg">
            <h1 className=" text-2xl font-bold py-4">What People Say ?</h1>
            <p className=" pb-8">
              I cannot express enough gratitude for the support Micheal has
              provided in managing my personal finances. Their attention to
              detail and deep understanding of financial markets has ensured
              that my investments are in safe hands. I highly recommend their
              services to anyone seeking financial guidance.
            </p>
          </div>
        </div>

        <div className=" w-[60vw] p-6 ">
          <img src={oneCA} alt="" className="rounded-lg py-4 " />

          <h1 className=" py-4 text-2xl font-bold">About {person[0].name}</h1>
          <div className=" py-4 flex items-center justify-between">
            <div>
              <p className=" font-bold opacity-40">From</p>
              <p>{person[0].about.from}</p>
            </div>
            <div>
              <p className=" font-bold opacity-40">PARTNER SINCE</p>
              <p>{person[0].about.partnerSince}</p>
            </div>
            <div>
              <p className=" font-bold opacity-40">AVERAGE RESPONSE TIME</p>
              <p>{person[0].about.averageResponseTime}</p>
            </div>
          </div>

          <div className=" py-4">
            <p className=" font-bold opacity-40">About </p>
            <p className="text-lg">{person[0].about.description}</p>
          </div>
          <div className=" flex items-start justify-between">
            <div className=" py-4">
              <p className=" font-bold opacity-40">SERVICES I OFFER </p>
              <ul className=" list-disc pl-8 my-2">
                {person[0].about.services.map((item, ind) => {
                  return (
                    <>
                      <li key={ind}>{item}</li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className=" py-4">
              <p className=" font-bold opacity-40">WHY ME? </p>
              <ul className=" list-disc pl-8 my-2">
                {person[0].about.benefits.map((item, ind) => {
                  return (
                    <>
                      <li key={ind}>{item}</li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default OneCA;
