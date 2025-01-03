import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import items from "../../data/items.json";
import Image from "next/image";
import Link from "next/link";
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getStores } from "@/api/apiServices";
import 'swiper/css'


const FeaturedStores = ({
  hide,
  heading,
  footnote,
  storeSize,
  clickable,
  handleClick,
}: {
  heading: string | JSX.Element;
  footnote: string | JSX.Element;
  hide?: boolean;
  storeSize?: string;
  clickable?: boolean;
  handleClick?: (link: string) => void;
}) => {

  const {
    isLoading,
    isError,
    error,
    data: stores
} = useQuery('stores', getStores)

  const [forwarding, setforwarding] = React.useState({
    forward: true,
    backward: false,
  });
  const [swipe, setSwipe] = React.useState(false);

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

  // React.useEffect(() => {
  //   console.log(swipeRef.current.swiper.isEnd);
  //   console.log(swipeRef.current.swiper.isBeginning);
  //   console.log(swipeRef.current.swiper);

  //   if(swipeRef.current?.swiper.activeIndex < 1){
  //     // console.log("true");
      
  //     setforwarding({forward : true, 
  //       backward: false
  //     })
  //   }

  //   if(swipeRef.current?.swiper.activeIndex == 2){
  //     setforwarding({ forward : false,
  //       backward : true
  //     })
  //   }
  //   if(swipeRef.current?.swiper.activeIndex < 2 && swipeRef.current?.swiper.activeIndex > 0 ){
  //     console.log("swipe");
      
  //     setforwarding({ forward: true,
  //       backward: true
  //     })
  //   }
    
    
    
  // }, [swipeRef.current?.swiper.activeIndex,swipe])

  // React.useEffect(() => {
  //   console.log(forwarding);

  // }, [forwarding])

  return (
    <div className={hide ? `w-full` : `w-full md:w-[80%] px-5 py-10 md:py-24`}>
      {!hide && (
        <div>
          <p className="text-white font-semibold text-2xl md:text-4xl lg:text-6xl">
            {heading}
          </p>
        </div>
      )}

      <div className="flex flex-row justify-start my-10 w-full gap-3">
        <Swiper
          centeredSlides={false}
          ref={swipeRef}
          slidesPerView={1}
          spaceBetween={20}
          modules={[EffectFade, Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            920: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          lazyPreloadPrevNext={2}
          pagination={{
            clickable: true,
          }}
          className="w-full"
        >
          {stores?.map((store: any) => {
            const { image, logo, url, name,id } = store;
            return (
              <SwiperSlide
                key={id}
                className={`rounded-xl !w-[190px] !h-[180px] md:!w-[${
                  storeSize || "300px"
                }] md:!h-[${storeSize || "300px"}] mr-2`}
                onClick={() =>
                  clickable ? handleClick?.("https://korahq.com") : null
                }
              >
                <Link href={url} target="_blank" className=" rounded-xl w-full h-full relative flex object-cover ">
                  <Image
                    src={image}
                    height={200}
                    width={200}
                    className="!w-full !h-full object-cover rounded-xl "
                    alt={"pic" + ".png"}
                  />
                  <div className="absolute bottom-3 right-2 !h-[90px] w-[90px] p-[14px] rounded-full flex justify-center items-center bg-white">
                    <div>
                        <Image
                        src={logo}
                        height={100}
                        width={300}
                        className='h-[25px] w-full'
                        
                        alt={"pic" + ".png"}
                      />
                    </div>
                  
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {!hide && (
        <div className="flex flex-col md:flex-row md:justify-between gap-x-3">
          <p className="text-[#A8B3BD] font-general">{footnote}</p>
          <div className="flex flex-row gap-x-5 mt-10 md:mt-0">
            <button
              onClick={goBack}
              className={`rounded-full border ${
                forwarding.backward ? "border-white" : "border-[#8c8c8c]"
              } border-2 h-12 w-12 flex flex-row items-center justify-center`}
              // disabled={!forwarding.backward}
            >
              <BsChevronLeft
                size={22}
                color={forwarding.backward ? "white" : "grey"}
              />
            </button>
            <button
              onClick={goNext}
              className={`rounded-full border ${
                forwarding.forward ? "border-white" : "border-[#8c8c8c]"
              } border-2 h-12 w-12 flex flex-row items-center justify-center`}
              // disabled={!forwarding.forward}
            >
              <BsChevronRight
                size={22}
                color={forwarding.forward ? "white" : "grey"}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedStores;
