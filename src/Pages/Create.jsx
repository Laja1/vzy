import React from "react";

export default function Create() {
  return (
    <div className="items-center bg-[#111]  flex-col mx-auto justify-center flex pt-[100px]">
      <p className="lg:text-[65px] font-bold text-white">
        Create beautiful <br />
        websites with AI
      </p>
      <p className="lg:text-[25px] lg:w-[550px] w-[300px]  text-center text-[#999999] p-3">
        Vzy is an AI website builder built to help Freelancers, Agencies,
        Creators, and more create stunning websites fast without design or
        coding skills.
      </p>
      <button>
    
        <div className="bg-[#fff] hover:bg-[#999999] py-3 show-xl rounded-lg px-4">
          <p className="text-black">Create Free Site</p>
        </div>
      </button>
      <div className="w-[100%]">
        <img
          src="https://vzy.s3.amazonaws.com/uploads/6333a6ea741f45554380ba95/jnlmco9b_1691560890083.webp"
          alt="Vzy AI website builder showing features like instant customization, AI SEO content and different responsive sections."
          className=""
        />
      </div>
    </div>
  );
}
