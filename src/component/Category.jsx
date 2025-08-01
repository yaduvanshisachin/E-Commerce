import React from 'react'

export default function Category({finalCategory, setCatName}) {
    let cat = finalCategory.map((v,i) => {
        return (
            <li key={i} onClick={()=>setCatName(v)} className='p-[10px] hover:bg-[#f0f0f0] cursor-pointer font-serif'>{v}</li>
        )
    })

  return (
    <div>
      <h3 className='text-[25px] font-[500] p-[10px]'>Category </h3>
      <ul className='h-[calc(100vh-120px)] overflow-y-auto'>
        {/* <li className='p-[10px] hover:bg-[#f0f0f0] cursor-pointer font-serif'>Product 1</li>
        <li className='p-[10px] hover:bg-[#f0f0f0] cursor-pointer font-serif'>Product 2</li>
        <li className='p-[10px] hover:bg-[#f0f0f0] cursor-pointer font-serif'>Product 3</li>
        <li className='p-[10px] hover:bg-[#f0f0f0] cursor-pointer font-serif'>Product 4</li>
        <li className='p-[10px] hover:bg-[#f0f0f0] cursor-pointer font-serif'>Product 5</li> */}
        {cat}
      </ul>
    </div>
  )
}
