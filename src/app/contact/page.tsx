'use client'
import React from 'react';
import { TbArrowUpRight } from 'react-icons/tb';
import Image from 'next/image';
//@ts-ignore
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Contact',
// }

const page = () => {
  const tawkMessengerRef = React.useRef<any>(null);

  const handleOpen = () => {
    tawkMessengerRef?.current.maximize();
  };

  const projectId = process.env.NEXT_PUBLIC_PROPERTY_ID || '';
  const widgetId = process.env.NEXT_PUBLIC_WIDGET_ID || '';

  return (
    <div className='w-full flex flex-col'>
      <div className='w-[90%] md:w-[80%] lg:w-[65%] xl:w-[63%] mx-auto my-20 md:my-32'>
        <h1 className='text-4xl md:text-6xl font-semibold text-[#132D46]'>Contact Us</h1>
        <div className='bg-[#F9FAFB] rounded-3xl flex w-full mt-10 flex-row  relative justify-between'>
          <div className='pl-4 md:pl-10 py-10 md:py-16 w-[43%] '>
            <h4 className='text-[#132D46] text-2xl md:text-5xl font-semibold mb-3'>
              Live Chat
            </h4>
            <p className='text-[#637381] text-base my-4 font-general'>
              Urgently want to reach out to us?
            </p>
            <p className='text-[#A8B3BD] font-poppins text-lg font-medium'>
              180b Freedom Way, 
              <br />
              Lekki, Lagos State.
              <br />
              <br />
              support@buytaja.com
            </p>

            <p className='w-[60%] md:w-[100%] mt-10 text-[#000000] font-poppins font-medium'>
              We're available 9am - 9pm WAT, seven days a week. (and we
              respond within 5 mins!)
            </p>

            <button
              className='bg-white flex flex-row gap-x-2 h-[40px] px-3 rounded-full mt-10 items-center border border-[#132D46]'
              onClick={handleOpen}
              id='tawkto_button'>
              <p className='text-black text-center m-auto text-sm font-semibold font-general'>
                Start a conversation
              </p>
              <div className='rounded-full h-[20px] w-[20px] bg-[#132D46] first-letter:'>
                <TbArrowUpRight size={20} color={'#fff'} />
              </div>
            </button>
          </div>

          <div className='w-[55%] md:h-[570px]'>
            <Image
              src={'/images/contact.png'}
              width={200}
              height={200}
              className={' w-full hidden md:block object-cover h-full rounded-3xl'}
              alt='pic.png'
            />
          </div>
        </div>
      </div>
      <div className=''>
        <TawkMessengerReact
          propertyId={projectId}
          widgetId={widgetId}
          ref={tawkMessengerRef}
        />
      </div>
    </div>
  );
};

export default page;
