import React from "react";
import { consult } from "../../utils/array";

import image1 from "../../assets/images/ict1.jpg";
import image2 from "../../assets/images/ict2.jpg";
import image3 from "../../assets/images/ict3.jpg";

import icon1 from "../../assets/icons/01.svg";
import icon2 from "../../assets/icons/02.svg";
import icon3 from "../../assets/icons/03.svg";

function Ict2() {
  return (
    <div className="max-w-[1400px] mx-auto my-20 px-5">
      <p className="text-[33px] leading-[60px] lg:uppercase font-bold mb-4">
        Products and Services
      </p>

      <div className="lg:flex gap-10">
        <div className="lg:w-1/2 ">
          <img src={image1} alt="" className="mb-5 py-5" />
        </div>
        <div className="lg:w-1/2">
          <div className="lg:flex gap-2">
            <img src={icon1} alt="" className="p-1" />
            <p className="text-xl capitalize lg:uppercase lg:text-[25px] lg:leading-[50px] font-bold p-1 my-2">
              Consultancy services
            </p>
          </div>
          <div>
            <p className="lg:text-xl leading-8 lg:leading-10 text-justify">
              BHAKOR CONSULT LTD has extensive experience in the delivery of
              consulting services targeted at developing, promoting, stimulating
              and supporting clients in setting up and running their IT
              environment and information systems. As an indication, consulting
              services involve the following key domains:
            </p>
            {consult.map((items) => (
              <p
                key={items.id}
                className="lg:text-xl leading-8 lg:leading-10 my-3 text-justify"
              >
                <span className="font-bold">{items.name}</span>
                {items.content}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:flex flex-row-reverse gap-10 mt-20">
        <div className="lg:w-1/2 ">
          <img src={image2} alt="" className="mb-5 py-5" />
        </div>
        <div className="lg:w-1/2">
          <div className="lg:flex gap-2">
            <img src={icon2} alt="" className="p-1" />
            <p className="text-xl capitalize lg:uppercase lg:text-[25px] lg:leading-[50px] font-bold p-1 my-2">
              ICT Infrastructure Deployments
            </p>
          </div>
          <div>
            <p className="lg:text-xl leading-8 lg:leading-10 text-justify">
              The African economy is evolving rapidly. The changes in fiscal and
              economic policies, global recognition of African businesses and
              entrepreneurs, and Africa’s position in world trade markets are
              some of the reasons shareholder and customer expectations are
              higher. Globalization, new media platforms and technology have
              raised peoples’ thought processes, and where service delivery was
              once tolerated, competitive service delivery and updated
              technology have dominated the scene. We provide IT infrastructure
              deployments, enterprise business solutions, business integration
              solutions, Information management & support toolsas well as other
              IT based services. Our core competence is building IT based
              business solutions geared towards meeting peculiar organizational
              needs. We specialize in e-learning deployments, database
              management, cloud management services, digital library
              implementation and process automation.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex gap-10 mt-20">
        <div className="lg:w-1/2 ">
          <img src={image3} alt="" className="mb-5 py-5" />
        </div>
        <div className="lg:w-1/2">
          <div className="lg:flex gap-2">
            <img src={icon3} alt="" className="p-1" />
            <p className="text-xl capitalize lg:uppercase lg:text-[25px] lg:leading-[50px] font-bold p-1 my-2">
              Connectivity Infrastructure Development
            </p>
          </div>
          <div>
            <p className="lg:text-xl leading-8 lg:leading-10 text-justify">
              Implementation of local area networks (LAN), wide area networks
              employing modern global protocols such as TCP/IP and IPX;
              metropolitan area networks, campus area networks and the attendant
              communication infrastructure design and implementation using VSAT,
              Fiber, Microwave and a mix of terrestrial networks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ict2;
