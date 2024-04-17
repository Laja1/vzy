import React from "react";
import { MdOutlineStar } from "react-icons/md";
export default function Website() {
  return (
    <div className="items-center   bg-[#111] flex-col mx-auto justify-center flex pt-[40px]">
      <p className="lg:text-[40px] text-white font-bold md:text-[30px] text-[25px]">
        60K websites made in Vzy
      </p>

      <div className="grid grid-rows-3 lg:grid-cols-3 gap-3 ">
        <div className="flex-col bg-[#222] rounded-lg w-[350px] p-3 justify-center items-center flex ">
          <div className="flex-row flex">
            <MdOutlineStar color="white" size={23} />
            <MdOutlineStar color="white" size={23} />
            <MdOutlineStar color="white" size={23} />
            <MdOutlineStar color="white" size={23} />
            <MdOutlineStar color="white" size={23} />
          </div>
          <div>
            <p className="text-white text-center">
              Clean, sleek and modern, <br />
              just the features you need
            </p>
          </div>
        </div>
        <div className="flex-col bg-[#222] rounded-lg w-[350px] p-3 justify-center items-center flex ">
          <div className="flex-row flex">
            <MdOutlineStar color="white" size={23} />
            <MdOutlineStar color="white" size={23} />
            <MdOutlineStar color="white" size={23} />
            <MdOutlineStar color="white" size={23} />
            <MdOutlineStar color="white" size={23} />
          </div>
          <div>
            <p className="text-white text-center">
              Clean, sleek and modern, <br />
              just the features you need
            </p>
          </div>
        </div>

        <div className="flex-col bg-[#222] rounded-lg w-[350px] p-3 justify-center items-center flex ">
          <div className="flex-row flex">
            <MdOutlineStar color="white" size={23} />
            <MdOutlineStar color="white" size={23} />
            <MdOutlineStar color="white" size={23} />
            <MdOutlineStar color="white" size={23} />
            <MdOutlineStar color="white" size={23} />
          </div>
          <div>
            <p className="text-white text-center">
              Clean, sleek and modern, <br />
              just the features you need
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 pt-10 h-[90vh]  items-center justify-center lg:px-20 px-10 mx-auto lg:grid-cols-2">
        <div className=" flex-col px-3 justify-center flex">
          <p className="text-white text-left text-4xl font-bold  ">
            AI-powered <br />
            website builder ✨
          </p>
          <p className="text-white ">
            Vzy uses AI to automate your website design process. Just tell Vzy
            what your business is about, and watch it get to work! You can
            create a stunning website effortlessly, even without coding or
            design skills. Best of all, you can manage multiple websites on one
            account and use your custom domains. It's perfect for freelancers,
            small businesses, landing pages, and portfolios
          </p>
        </div>
        <div>
          <img
            src="https://vzy.s3.amazonaws.com/uploads/6333a6ea741f45554380ba95/us20l7ax_1691562524161.webp"
            alt="Vzy AI website builder. Add your business name, type of business and description to generate a website"
            className=""
          />
        </div>
      </div>
      <div className="grid grid-rows-2 pt-3 h-[100vh]   items-center justify-center lg:px-20 gap-10 px-10 mx-auto lg:grid-cols-2">
        <div>
          <img
            src="https://vzy.s3.amazonaws.com/uploads/6333a6ea741f45554380ba95/2ndjzatm_1691562238819.webp"
            alt="Customize your website easily on any desktop or mobile browser"
            class="Fill grey"
          />
        </div>
        <div className=" flex-col px-3 justify-center flex">
          <p className="text-white text-left text-4xl font-bold  ">
            AI-powered <br />
            website builder ✨
          </p>
          <p className="text-white ">
            Vzy uses AI to automate your website design process. Just tell Vzy
            what your business is about, and watch it get to work! You can
            create a stunning website effortlessly, even without coding or
            design skills. Best of all, you can manage multiple websites on one
            account and use your custom domains. It's perfect for freelancers,
            small businesses, landing pages, and portfolios
          </p>
        </div>
      </div>
      <div className="grid grid-rows-2 pt-6 h-[100vh]  items-center justify-center lg:px-20 px-10 mx-auto lg:grid-cols-2">
        <div className=" flex-col px-3 justify-center flex">
          <p className="text-white text-left text-4xl font-bold  ">
            Enjoy access to
            <br />
            essential tools ⚡️
          </p>
          <p className="text-white ">
            Vzy offers SSL to secure your website, CDN for faster load times,
            AWS & Google Cloud hosting to ensure reliable performance. Use our
            forms and CRM to capture emails and manage contacts.
            Privacy-friendly analytics to track website growth. SEO and social
            sharing to grow online visibility. If you prefer to host your
            website elsewhere, Vzy makes it easy to transfer or export your
            website.
          </p>
        </div>
        <img
          src="https://vzy.s3.amazonaws.com/uploads/6333a6ea741f45554380ba95/kunqa970_1691562391909.webp"
          alt="Vzy AI website builder is integrated with CDN, AWS and Google Cloud hosting"
          class=""
        />
      </div>
    </div>
  );
}
