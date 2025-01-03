'use client';

import PrivacyView from '@/components/PrivacyView';
import TermsView from '@/components/TermsView';
// import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

// export const metadata:Metadata = {
//   title: 'Privacy',
// }

const page = () => {
  const [active, setactive] = React.useState<boolean>(true);

  return (
    <div className='w-full bg-white'>
      <div className='px-5 mx-auto md:w-[80%] lg:w-[70%] my-12 md:my-32'>
        <div className='flex flex-row gap-x-4 mb-5'>
          <button className={`${active === false ? 'text-[#132D46]' : 'text-[#099971] border-2 border-[#099971]'}  py-2 px-4 flex flex-row items-center gap-x-2 rounded-full`} onClick={()=> setactive(true)}>
          {active === true && <Image src={'/shieldTick.svg'} width={100} height={100} className='h-5 w-5' alt='pic.png' /> }
            <p className=''>
              Privacy Policy
            </p>
          </button>
          <button className={`${active === true ? 'text-[#132D46]' : 'text-[#099971] border-2 border-[#099971]'}  py-2 px-4 flex flex-row items-center gap-x-2 rounded-full`} onClick={()=> setactive(false)}>
          {active === false && <Image src={'/starTerms.svg'} width={100} height={100} className='h-5 w-5' alt='pic.png' /> }
            <p className=''>
              Terms and Conditions
            </p>

          </button>
        </div>

        {active ? <PrivacyView /> : <TermsView />}
      </div>
    </div>
  );
};

export default page;
