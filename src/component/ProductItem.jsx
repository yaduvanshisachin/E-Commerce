import React from 'react'

function ProductItem({pdata}) {
  return (
    <div className='bg-white rounded-[10px] shadow-lg p-[20px] text-center cursor-pointer'>
      <img src={pdata.thumbnail} alt="Product 1" className='w-[100] h-[220px] object-cover' />
      <h3 className='text-[20px] font-semibold mt-[10px]'>{pdata.title}</h3>
      <p className='text-gray-600'> Rs. {pdata.price}</p>
    </div>
  )
}

export default ProductItem