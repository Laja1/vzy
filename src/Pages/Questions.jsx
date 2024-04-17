import React, { useState } from "react";
import { FaXTwitter,FaSquareInstagram,FaYoutube,FaLinkedin } from "react-icons/fa6";
export default function Questions() {
  const [openCollapse, setOpenCollapse] = useState(null);

  const toggleCollapse = (index) => {
    setOpenCollapse(openCollapse === index ? null : index);
  };

  return (
    <div className="items-center  gap-3 bg-[#111] flex-col mx-auto justify-center flex">
      <p className="text-white text-left text-xl lg:text-4xl font-bold  lg:pr-[40%] ">
        Questions we get asked a lot
      </p>
      <div className="w-[360px] md:[700px] lg:w-[1000px] ">
        <div className="collapse collapse-arrow bg-[#222222] rounded-lg mb-4">
          <input
            type="radio"
            name="my-accordion-2"
            checked={openCollapse === 0}
            onChange={() => toggleCollapse(0)}
          />
          <div className="collapse-title text-xl font-medium">
            <p className="text-white text-sm">What is vzy?</p>
          </div>
          <div className="collapse-content">
            {openCollapse === 0 && (
              <p className="text-[#999]">
                Vzy is an Al-powered website builder that creates
                fully-functional websites in minutes, no design or coding skills
                required.
              </p>
            )}
          </div>
        </div>

        <div className="collapse collapse-arrow bg-[#222222] rounded-lg mb-4">
          <input
            type="radio"
            name="my-accordion-2"
            checked={openCollapse === 1}
            onChange={() => toggleCollapse(1)}
          />
          <div className="collapse-title text-xl font-medium">
            <p className="text-white text-sm">
              How does the AI website builder work?{" "}
            </p>
          </div>
          <div className="collapse-content">
            {openCollapse === 1 && (
              <p className="text-[#999]">
                Creating a website is easy with Vzy. Just tell us about your
                business, and our AI will do the heavy lifting by adding
                content, style, images, forms, and SEO. You can edit and publish
                the website on your mobile or desktop browser.
              </p>
            )}
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#222222] rounded-lg mb-4">
          <input
            type="radio"
            name="my-accordion-2"
            checked={openCollapse === 2}
            onChange={() => toggleCollapse(2)}
          />
          <div className="collapse-title text-xl font-medium">
            <p className="text-white text-sm">
              Is Vzy AI available to everyone?{" "}
            </p>
          </div>
          <div className="collapse-content">
            {openCollapse === 2 && (
              <p className="text-[#999]">
                Heck yeah! Vzy AI is available to everyone.
              </p>
            )}
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#222222] rounded-lg mb-4">
          <input
            type="radio"
            name="my-accordion-2"
            checked={openCollapse === 2}
            onChange={() => toggleCollapse(2)}
          />
          <div className="collapse-title text-xl font-medium">
            <p className="text-white text-sm">
              Who can use the AI website builder?
            </p>
          </div>
          <div className="collapse-content">
            {openCollapse === 2 && (
              <p className="text-[#999]">
                Vzy can be used by anyone, including freelancers, web designers,
                and small business owners. It is made easy for people of all
                skill levels, whether they have coding or design knowledge or
                not.
              </p>
            )}
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#222222] rounded-lg mb-4">
          <input
            type="radio"
            name="my-accordion-2"
            checked={openCollapse === 2}
            onChange={() => toggleCollapse(2)}
          />
          <div className="collapse-title text-xl font-medium">
            <p className="text-white text-sm">How much does Vzy cost? </p>
          </div>
          <div className="collapse-content">
            {openCollapse === 2 && (
              <p className="text-[#999]">
                We got two payment options for you: Basic and Pro. Basic starts
                at just $15/month and Pro starts at $35/month. Both options come
                with a custom domain, web hosting, and CRM. But, and this is a
                big but, with Pro you can also export your site and add some
                custom code.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="items-center flex flex-col">
        <img
          src="https://vzy.s3.amazonaws.com/uploads/6333a6ea741f45554380ba95/bo9nc4t3_1691562653858.webp"
          className="w-[50%]"
        />
        <p className="text-3xl font-bold text-center text-white">
          The easiest way to
          <br />
          create a website
              </p>
              <p className="p-3 text-md text-center text-[#999]">No coding or design skills needed</p>
              <div className='bg-[#fff] hover:bg-[#999999] py-3 rounded-lg px-3'>
                <p className='text-black'>Create free site</p>
              </div>
          </div>
          <div className="lg:flex-row pt-10 flex-col flex  justify-center  lg:gap-10 "><p className="text-white border-b-2 border-solid border-[#222] lg:border-none hover:text-[#999999]">Updates</p><p className="border-b-2 border-solid hover:text-[#999999] border-[#222] lg:border-none  text-white">Pricing</p><p className="border-b-2 border-solid hover:text-[#999999] border-[#222] lg:border-none  text-white">Contact</p><p className="hover:text-[#999999] text-white">About</p></div>
          <div className="flex-row pt-10  flex   justify-center  lg:gap-10 "><div className="bg-[#222] items-center flex justify-center w-[40px] h-[40px] rounded-lg"><FaXTwitter size={18} color="white" /></div>
          <div className="bg-[#222] items-center flex justify-center w-[40px] h-[40px] rounded-lg"><FaSquareInstagram size={18} color="white"/></div>
          <div className="bg-[#222] items-center flex justify-center w-[40px] h-[40px] rounded-lg"><FaYoutube size={18} color="white"/></div>
          <div className="bg-[#222] items-center flex justify-center w-[40px] h-[40px] rounded-lg"><FaLinkedin   size={18} color="white"/></div>
          </div>
          <div className='bg-[#fff] hover:bg-[#999999] py-2 w-screen items-center flex justify-center'>
                <p className='text-black'>LAJA</p>
              </div>
      </div>
  );
}
