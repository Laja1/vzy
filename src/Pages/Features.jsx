import React from "react";
import { PiBrowsersThin, PiFile, PiGlobe,PiChartBar,PiEnvelopeOpenThin,PiSwatchesThin } from "react-icons/pi";
import { IoPhonePortraitOutline, IoShareOutline,IoSearchOutline } from "react-icons/io5"
import { AiOutlineThunderbolt } from "react-icons/ai";
export default function Features() {
  return (
    <div className="items-center pb-20 gap-3  bg-[#111] flex-col mx-auto justify-center flex ">
      <p className="text-white text-left text-4xl font-bold  lg:pr-[60%] ">All the features</p>
      <div className="lg:flex-row flex-col flex gap-5">
        <div className="bg-[#222222] rounded-xl flex-row flex justify-between items-center px-3 w-[343px] h-[92px]">
          <p className="text-white">AI integration</p>
          <div className="bg-[#111]  w-[50px] h-[50px] rounded-full items-center flex justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
          </div>
        </div>
        <div className="bg-[#222222] rounded-xl flex-row flex justify-between items-center px-3 w-[343px] h-[92px]">
          <p className="text-white">Multiple Sites</p>
          <div className="bg-[#111]  w-[50px] h-[50px] rounded-full items-center flex justify-center ">
           <PiBrowsersThin color="white" size={23}/>
          </div>
        </div>
        <div className="bg-[#222222] rounded-xl flex-row flex justify-between items-center px-3 w-[343px] h-[92px]">
          <p className="text-white">Multiple pages</p>
          <div className="bg-[#111]  w-[50px] h-[50px] rounded-full items-center flex justify-center ">
          <PiFile color="white" size={23}/>
          </div>
        </div>
          </div>
          <div className="lg:flex-row flex-col flex gap-5">
        <div className="bg-[#222222] rounded-xl flex-row flex justify-between items-center px-3 w-[343px] h-[92px]">
          <p className="text-white">Custom domain</p>
          <div className="bg-[#111]  w-[50px] h-[50px] rounded-full items-center flex justify-center ">
           <PiGlobe color="white" size={23}/>
          </div>
        </div>
        <div className="bg-[#222222] rounded-xl flex-row flex justify-between items-center px-3 w-[343px] h-[92px]">
          <p className="text-white">Mobile Editor</p>
          <div className="bg-[#111]  w-[50px] h-[50px] rounded-full items-center flex justify-center ">
           <IoPhonePortraitOutline color="white" size={23}/>
          </div>
        </div>
        <div className="bg-[#222222] rounded-xl flex-row flex justify-between items-center px-3 w-[343px] h-[92px]">
          <p className="text-white">Dark Mode</p>
          <div className="bg-[#111]  w-[50px] h-[50px] rounded-full items-center flex justify-center ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>

          </div>
        </div>
          </div>
          <div className="lg:flex-row flex-col flex gap-5">
        <div className="bg-[#222222] rounded-xl flex-row flex justify-between items-center px-3 w-[343px] h-[92px]">
          <p className="text-white">Easy Sharing</p>
          <div className="bg-[#111]  w-[50px] h-[50px] rounded-full items-center flex justify-center ">
          <IoShareOutline  color="white" size={23}/>
          </div>
        </div>
        <div className="bg-[#222222] rounded-xl flex-row flex justify-between items-center px-3 w-[343px] h-[92px]">
          <p className="text-white">Built-in analytics</p>
          <div className="bg-[#111]  w-[50px] h-[50px] rounded-full items-center flex justify-center ">
           <PiChartBar color="white" size={23}/>
          </div>
        </div>
        <div className="bg-[#222222] rounded-xl flex-row flex justify-between items-center px-3 w-[343px] h-[92px]">
          <p className="text-white">Blazing fast</p>
          <div className="bg-[#111]  w-[50px] h-[50px] rounded-full items-center flex justify-center ">
          <AiOutlineThunderbolt color="white" size={23}/>
          </div>
        </div>
          </div>
          <div className="lg:flex-row flex-col flex gap-5">
        <div className="bg-[#222222] rounded-xl flex-row flex justify-between items-center px-3 w-[343px] h-[92px]">
          <p className="text-white">Email signups</p>
          <div className="bg-[#111]  w-[50px] h-[50px] rounded-full items-center flex justify-center ">
                      <PiEnvelopeOpenThin color="white" size={23} />
          </div>
        </div>
        <div className="bg-[#222222] rounded-xl flex-row flex justify-between items-center px-3 w-[343px] h-[92px]">
          <p className="text-white">SEO Ready</p>
          <div className="bg-[#111]  w-[50px] h-[50px] rounded-full items-center flex justify-center ">
           <IoSearchOutline color="white" size={23}/>
          </div>
        </div>
        <div className="bg-[#222222] rounded-xl flex-row flex justify-between items-center px-3 w-[343px] h-[92px]">
          <p className="text-white">Multiple pages</p>
          <div className="bg-[#111]  w-[50px] h-[50px] rounded-full items-center flex justify-center ">
          <PiSwatchesThin color="white" size={23}/>
          </div>
        </div>
      </div>
    </div>
  );
}
