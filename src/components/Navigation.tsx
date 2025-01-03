'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { checkRoute } from '@/utils/checkRoute';

export default function Navigation() {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const deskLinks = [
    { name: 'Home', url: '/', svg: '/shop.svg' },
    { name: 'Privacy Policy', url: '/privacy', svg: '/shield.svg' },
    { name: 'Contact Us', url: '/contact', svg: '/message-2.svg' },
  ];

  return (
    <div id='navbar' className='relative w-full '>
      <nav className={`flex  items-center text-xl `}>
        <div className='flex  w-full flex-row items-center justify-between bg-transparent lg:px-12 p-5'>
          <Link
            href='/'
            className=' flex flex-row cursor-pointer text-3xl no-underline  w-fit'
            onClick={closeMobileMenu}>
            <Image
              width={150}
              height={80}
              src={'/newtajalogo.png'}
              alt='logo.png'
              className='h-[40px] w-[75px] lg:w-[115px] lg:h-[55px]'
            />
          </Link>
          <div className=' block z-20 cursor-pointer  ' onClick={handleClick}>
            {click ? (
              <div className='block md:hidden'>
                <div className='h-[1.5px] w-6 rotate-45 bg-[#132D46]'></div>
                <div className='ml-auto mt-1 h-[1.5px] w-6 -rotate-45 bg-[#132D46]'></div>
              </div>
            ) : (
              <div className='block md:hidden'>
                <div className={`h-[2px] w-6 bg-[#132D46]`} />
                <div className={`ml-auto mt-2 h-[2px] w-4 bg-[#132D46]`} />
              </div>
            )}
          </div>

          {/* Mobile View */}
          <ul
            className={`z-[2] pl-0 md:hidden ${
              click
                ? 'h-[100vh] top-0 fixed right-0 m-auto flex w-full list-none flex-col justify-center gap-[15px] bg-[#fff] text-center transition-all md:w-[60vw] md:justify-start'
                : ' m-auto mr-8 hidden list-none flex-col justify-center gap-[15px] text-center transition-all md:w-[60vw] md:justify-start'
            }`}>
            {deskLinks.map((item, index) => {
              return (
                <li key={index} className=' md:hidden'>
                  <Link
                    href={item.url}
                    onClick={() => {
                      closeMobileMenu();
                    }}
                    className={`cursor-pointer font-mono text-lg uppercase text-[#132D46]`}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop view */}
          <div
            className={` hidden gap-3 ${
              click ? 'hidden' : 'md:flex md:flex-row justify-between w-full'
            }`}>
            <div className='flex flex-row gap-x-7 mx-auto  items-center my-auto px-4 py-[10px] '>
              {deskLinks.splice(0, 3).map((item, index) => {
                return (
                  <Link
                    href={item.url}
                    key={index}
                    className={`text-[16px] hover:text-[#099971] flex gap-2 ${
                      checkRoute(item.url)
                        ? 'text-[#fff] hover:text-[#ffff]  rounded-full bg-[#099971] px-3 py-[5px] font-bold'
                        : 'text-[#637381] hover:text-[#099971]'
                    }`}>
                    <Image
                      alt='link.svg'
                      width={100}
                      height={100}
                      src={item.svg}
                      className={`w-5 h-5 mt-1  ${
                        !checkRoute(item.url) ? 'hidden' : ''
                      }`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
