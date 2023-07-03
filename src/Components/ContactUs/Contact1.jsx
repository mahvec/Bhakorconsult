import React from "react";
import back from "../../assets/images/aboutbhakor.jpg"

function Contact1() {
  return (
    <div>
      <div style={{ backgroundImage: `url(${back})` }} className={` mt-10 lg:mt-28 w-full bg-cover bg-center bg-no-repeat flex items-center justify-center h-[590px]`} >
        <div className="w-fit lg:w-[640px] lg:h-auto text-black bg-white mx-5 p-3 leading-6 py-10 lg:pl-10 lg:pr-[100px]">
          <p className="font-bold text-[33px] leading-10 mb-5 lg:text-[48px] lg:leading-[70px] p-1">
            Contact Us
          </p>
          <p className="lg:text-xl  lg:leading-10 text-justify mb-5 p-1">
            At BHAKOR CONSULT we value your feedback and are always eager to
            hear from our customers and partners. Whether you have a question, a
            suggestion, or a comment, we are here to help. You can reach us by
            phone, email, or by filling out our contact form.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact1;
