import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import items from '../../data/items.json';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import Link from 'next/link';
import { TbArrowUpRight } from 'react-icons/tb';
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getMarketPromotions } from "@/api/apiServices";
import 'swiper/css'

const SectionFour = () => {
  const {
    isLoading,
    isError,
    error,
    data: promotions
} = useQuery('promotions', getMarketPromotions)
  const details = [
    {
      name: 'Accessories',
      img: '/category/gem.svg',
    },
    {
      name: 'Sneakers',
      img: '/category/shoe.svg',
    },
    {
      name: 'Bags',
      img: '/category/bag.svg',
    },
    {
      name: 'Men',
      img: '/category/men.svg',
    },
    {
      name: 'Women',
      img: '/category/women.svg',
    },
  ];

  const [forwarding, setforwarding] = React.useState({
    forward: true,
    backward: false,
  });
  const swipeRef = React.useRef<any>(null);
  const goNext = () => {
    if (swipeRef.current !== null && swipeRef.current.swiper !== null) {
      swipeRef.current.swiper.slideNext();
      setforwarding({
        forward: true,
        backward: false,
      });
    }
  };
  const goBack = () => {
    if (swipeRef.current !== null && swipeRef.current.swiper !== null) {
      swipeRef.current.swiper.slidePrev();
      setforwarding({
        forward: false,
        backward: true,
      });
    }
  };

  const swipedetails = [
    {
      title: '8th Birthday Sale Up to 75% off!',
      desc: "Our Biggest Sale Ever! Don't Miss It!",
      img: ' https://itaja-bucket.s3.us-west-2.amazonaws.com/store-images/Vitamins.WB.Website_ProductPage_CategoriesBanner__1600x2100px_20230503_ms_big.jpeg',
      bg1: ' rgb(60, 146, 220)',
      // bg2: '#ff8520',
      logo: ' https://itaja-bucket.s3.us-west-2.amazonaws.com/store-logo/download%20%285%29%20%281%29.png',
      store: "Women's Best",
      button: true,
      text:"white"
    },
    {
      title: 'Once Upon A Dream: The Collection is Here!',
      desc: 'Introducing our "Once Upon a Dream" collection, where each dress weaves a unique tale of femininity and elegance.',
      img: 'https://itaja-bucket.s3.us-west-2.amazonaws.com/store-images/368571187_314675084356552_6495452406049449115_n.jpg',
      bg1: 'rgb(215, 252, 251)',
      // bg2: '#449bbc',
      store: "House of CB",
      logo: 'https://itaja-bucket.s3.us-west-2.amazonaws.com/store-logo/download%20%2811%29.png',
      text:"black"

    },
    {
      title: 'Sales: Up to 78% off on Boohoo right now!',
      desc: 'Visit the sales section of Boohoo to see mouthwatering deals on clothes and accessories!',
      img: ' https://itaja-bucket.s3.us-west-2.amazonaws.com/store-images/370905545_18392530402053986_4249935713854055060_n.jpg',
      bg1: 'rgb(247, 238, 158)',
      // bg2: '#bb3279',
      store: "Boohoo",
      logo: 'https://itaja-bucket.s3.us-west-2.amazonaws.com/store-logo/download%20%283%29.png',
      text:"black"

    },
    {
      title: '25% OFF ALMOST EVERYTHING!',
      desc: 'Use the code SPLASHOUT at checkout',
      img: 'https://itaja-bucket.s3.us-west-2.amazonaws.com/store-images/371048647_657233272793589_431469574005901676_n.jpg',
      bg1: 'rgb(60, 146, 220)',
      // bg2: '#bb3279',
      store: "PrettyLittleThing",
      logo: ' https://itaja-bucket.s3.us-west-2.amazonaws.com/store-logo/images%20%281%29.png',
      text:"white"

    },
    {
      title: ' Your FALL Season Glowup',
      desc: '8000+ Markdowns on Bestsellers',
      img: 'https://itaja-bucket.s3.us-west-2.amazonaws.com/store-images/368352582_699818918837467_2425891052611373641_n.jpg',
      bg1: 'rgb(220, 236, 250)',
      // bg2: '#bb3279',
      store: "Shein",
      logo: ' https://itaja-bucket.s3.us-west-2.amazonaws.com/store-logo/download%20%281%29.png',
      text:"Black"

    },
  ];
  return (
    <div className='min-h-[40vh] px-5 w-full md:w-[80%] lg:w-[85%] py-20 overflow-visible mt-[80px]'>
      
      <h2 className='font-bold text-3xl md:text-6xl md:max-w-[45%] text-white'>
      Start Shopping with Taja
      </h2>
      <p className='text-[#A8B3BD] md:max-w-[450px] mt-3'>
      taja gives you the freedom to shop from any store in the world, while managing your logistics and payment.
      </p>

      <div className='flex flex-row overflow-x-scroll md:overflow-x-hidden mt-16 w-full no-scrollbar gap-3'>
        {details.map((detail, index) => (
          <div
            key={index}
            className='flex flex-row justify-center items-center bg-[#0B0C0D] rounded-full  gap-2 px-5  py-1 '>
            <Image
              src={detail.img}
              alt={detail.name + '.png'}
              className='h-[42px] w-[40px]'
              width={100}
              height={100}
            />
            <p className='text-[#A8B3BD] md:font-bold text-sm md:text-lg'>
              {detail.name}
            </p>
          </div>
        ))}
      </div>

      <div
        className={`flex flex-col md:flex-row md:gap-x-3 md:items-center w-full`}>
        <div className='flex flex-col justify-start my-10 w-full h-[820px]'>
          <Swiper
            ref={swipeRef}
            slidesPerView={1}
            spaceBetween={20}
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, EffectFade, Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              920: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            className='w-full flex-col flex '>
            {promotions?.map((mk : any) => {
                return (
                  <SwiperSlide
                    key={mk.id}
                    className='rounded-xl !w-full flex flex-col '
                    style={{
                      background: mk.backgroundColor,
                    }}>
                      <div className='flex rounded-xl !w-full flex-col lg:flex-row  gap-4 h-full'>
                    <div className='w-full lg:w-[35%] md:w-[100%] h-[50%] lg:h-[100%]  '>
                        <div className='w-full lg:w-[100%] md:w-[100%] h-[100%] lg:h-full '>
                          <Image
                            src={mk.store.image}
                            height={400}
                            width={400}
                            className='rounded-xl lg:h-[200px] w-full '  
                            alt={'pic' + '.png'}
                          />
                        </div>
                    </div>
                    <div className=' flex h-[50%] lg:mx-0 px-4 lg:w-[62%] w-[100%] justify-center lg:h-full'>
                      <div className={`text-left w-[100%] lg:w-[100%] flex flex-col h-full gap-6 justify-center  ${mk.storeId === 35 || mk.storeId === 10 || mk.storeId === 8 ? "text-black" : "text-white"}`}>
                        <h1 className={` text-[20px] md:text-[28px] lg:text-[33px] xl:text-[40px] leading-[105%] font-semibold `}>
                          {mk.title}
                        </h1>
                        <p className='text-xs  max-w-[90%] lg:max-w-[90%]'>
                          {mk.storeId === 35 ? "Embrace timeless grace and enchantment." : mk.description}
                        </p>
                        <div className="flex-row-reverse justify-between items-center flex">
                        {/* {button && (
                          <Link
                            href={'/try-it-out'}
                            className='bg-white flex flex-row gap-x-2 h-[40px] px-3 py-2 rounded-full items-center mr-auto '>
                            <p className='text-black text-center m-auto text-sm font-semibold'>
                              Shop now
                            </p>
                            <div className='rounded-full h-[20px] w-[20px] bg-[#FB5E13] first-letter:'>
                              <TbArrowUpRight size={20} />
                            </div>
                          </Link>
                        )} */}
                         <div className='bg-white rounded-full h-[90px] w-[90px] flex flex-row items-center justify-center p-[14px]  md:mr-0'>
                        <div>
                          <Image
                            src={mk.store.logo}
                            alt='pic.png'
                            width={80}
                            height={25}
                            className='h-[25px] w-full '
                          />
                        </div>
                      </div>
                        </div>
                      </div>
                     
                    </div>
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
        <div className='flex flex-row justify-between gap-x-3 md:rotate-[90deg] h-fit w-fit md:justify-start'>
          <button
            onClick={goBack}
            className={`rounded-full border ${
              forwarding.backward ? 'border-white' : 'border-[#8c8c8c]'
            } border-2 h-12 w-12 flex flex-row items-center justify-center`}>
            <BsChevronLeft
              size={22}
              color={forwarding.backward ? 'white' : 'grey'}
            />
          </button>
          <button
            onClick={goNext}
            className={`rounded-full border ${
              forwarding.forward ? 'border-white' : 'border-[#8c8c8c]'
            } border-2 h-12 w-12 flex flex-row items-center justify-center`}>
            <BsChevronRight
              size={22}
              color={forwarding.forward ? 'white' : 'grey'}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
