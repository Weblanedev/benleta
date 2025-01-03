import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import screens from '../../data/screens.json';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Image from 'next/image';

const SlantSliders = () => {
  const swipeRef = React.useRef<any>(null);

  return (
    <div className='flex flex-row justify-start my-10 w-full'>
      <div className='hidden md:block'>
      <Swiper
        loop
        //resizeObserver
        //navigation={true}
        //centeredSlides={true}
        ref={swipeRef}
        slidesPerView={8}
        spaceBetween={45}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect='slide'
        modules={[Autoplay, EffectFade, Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          920: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 10,
            spaceBetween: 20,
          },
        }}
        lazyPreloadPrevNext={2}
        pagination={{
          clickable: true,
          
        }}
        scrollbar={{ draggable: true }}
        className='w-full'>
        {screens.map((team, index) => {
          return (
            <SwiperSlide
              key={index}
              className='rounded-2xl md:!w-[270px] md:!h-[560px]  '>
                {/* <div className=' w-fit h-full border border-blue-100'> */}
                <Image
                src={team.img}
                height={400}
                width={400}
                className='rounded-xl w-full h-full object-cover '
                alt={'picture' + '.png'}
              />
                {/* </div> */}
             
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
      <div className='block md:hidden'>
      <Swiper
        //loop
        //resizeObserver
        //navigation={true}
        centeredSlides={false}
        ref={swipeRef}
        slidesPerView={8}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect='slide'
        modules={[EffectFade, Pagination, Autoplay]}
        breakpoints={{
          768: {
            slidesPerView: 9,
            spaceBetween: 20,
          },
          920: {
            slidesPerView: 10,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 10,
            spaceBetween: 20,
          },
        }}
        lazyPreloadPrevNext={2}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        className='w-full'>
        {screens.map((team, index) => {
          return (
            <SwiperSlide
              key={team.id}
              className='rounded-2xl !w-[250px] !h-[520px] md:!w-[320px] md:!h-[700px] mr-3 '>
              <Image
                src={team.img}
                height={400}
                width={400}
                className='rounded-xl w-full h-full object-contain'
                alt={'picture' + '.png'}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </div>
  );
};

export default SlantSliders;
