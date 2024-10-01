import React from 'react';
import Button from '../Shared/Button';

const ProductCard = ({ data }) => {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data.map((card) => (
          <div key={card.id} data-aos="fade-up" data-aos-delay={card.aosDelay} className='group duration-300'>
            <div className='mb-3 relative'>
              <img className='object-contain rounded-2xl' src={card.image} alt="" />
              <div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 rounded-2xl bg-white group-hover:opacity-80 duration-300'>
                <div className='flex w-full h-full items-center justify-center'>
                  <Button text={"Add to cart"} bgColor={"bg-primary"} textColor={"text-white"} />
                </div>
              </div>
            </div>
            <div className='text-center lg:text-left'>
              <h2 className='font-bold'>{card.title}</h2>
              <p className='font-semibold text-gray-400'>{card.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
