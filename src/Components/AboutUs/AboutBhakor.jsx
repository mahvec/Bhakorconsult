import React from "react";

function AboutBhakor() {
  return (
    <div>
      <div className="bg-[url('/src/assets/images/aboutbhakor.jpg')] mt-10 lg:mt-28 w-full bg-cover bg-center bg-no-repeat flex items-center justify-center h-[590px] ">
        <div className="w-fit lg:w-[640px] lg:h-auto text-black bg-white mx-5 p-3 leading-6 py-10 lg:pl-10 lg:pr-[100px]">
          <p className="font-bold text-2xl mb-5 lg:text-[48px] lg:leading-[70px]">
            About Bhakor Consult
          </p>
          <p className="lg:text-xl leading-8 lg:leading-10 text-justify mb-5">
            BHAKOR CONSULT is an innovative Information and Communication
            Technologies (ICT) service provider, Energy and Consultancy Services
            company.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutBhakor;
