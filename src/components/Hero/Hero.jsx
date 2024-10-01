import React from 'react'
import Slider from 'react-slick'
import image1 from '../../assets/hero/headphone.png'
import image2 from '../../assets/category/vr.png'
import image3 from '../../assets/category/macbook.png'
const heroSlide =[
    {
        id:1,
        img: image1,
        subtitle:"Beats Solo",
        title: 'Wireless',
        title2: "headphone",
    },
    {
        id:2,
        img: image2,
        subtitle:"Beats Solo",
        title: 'Wireless',
        title2: "virtual",
    },
    {
        id:3,
        img: image3,
        subtitle:"Beats Solo",
        title: 'Branded',
        title2: "laptops",
    }
]
const Hero = () => {
    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: true
    };
    return (
        <div className='container'>
            <div className='flex justify-center items-center overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color'>
                <div className='container'>
                    <Slider {...settings}>
                        {heroSlide.map((slide)=> 
                            <div key={slide.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    <div className='relative z-10 flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                                        <h1 data-aos="fade-right" className='text-xl font-bold'>{slide.subtitle}</h1>
                                        <h1 data-aos="fade-up" className='text-xl sm:text-6xl lg:text-7xl font-bold'>{slide.title}</h1>
                                        <h1 data-aos="fade-left" className='text-2xl sm:text-5xl uppercase text-white dark:text-white/25 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{slide.title2}</h1>
                                        <div data-aos="fade-up">
                                            <button className='text-sm sm:text-base bg-primary text-white p-2 rounded-lg hover:scale-110 duration-300'>
                                                Shop By Category
                                            </button>
                                        </div>
                                    </div>
                                    <div className='order-1 sm:order-2'>
                                        <div>
                                            <img data-aos="zoom-in" src={slide.img} className='relative z-40 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] w-[400px] h-[200px] sm:h-[450px] sm:scale-105 lg:scale-110' alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Hero
