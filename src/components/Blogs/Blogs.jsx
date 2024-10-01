import React from 'react'
import Heading from '../Shared/Heading'
import blog1 from "../../assets/blogs/blog-1.jpg"
import blog2 from "../../assets/blogs/blog-2.jpg"
import blog3 from "../../assets/blogs/blog-3.jpg"
const blogCards = [
    {
        id: 1,
        title: "How to choose perfect smartwatch",
        subtitle: 'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?',
        published: "Jan 20, 2024 by Dilshad",
        image: blog1,
        aosDelay:"0"
    },
    {
        id: 2,
        title: "How to choose perfect gadget",
        subtitle: 'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?',
        published: "Jan 20, 2024 by Satya",
        image: blog2,
        aosDelay:"200"
    },
    {
        id: 3,
        title: "How to choose perfect VR headset",
        subtitle: 'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?',
        published: "Jan 20, 2024 by Sabir",
        image: blog3,
        aosDelay:"400"
    },

]
const Blogs = () => {
  return (
    <div>
      <div className="container">
        <Heading title={"Recent News"} subtitle={"Explore Our Blogs"}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3'>
            {blogCards.map((card) => (
                <div key={card.id} data-aos="fade-up" data-aos-delay={card.aosDelay} className='group duration-300'>
                    <div className='overflow-hidden rounded-2xl mb-2'>
                        <img className='object-cover hover:scale-105 duration-500 w-full h-[250px] rounded-2xl' src={card.image} alt="" />
                    </div>
                    <div className='space-y-2'>
                        <span className='text-xs text-gray-500'>{card.published}</span>
                        <h2 className='font-bold line-clamp-1'>{card.title}</h2>
                        <p className='font-semibold text-gray-600 dark:text-gray-400 line-clamp-2 text-sm'>{card.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
