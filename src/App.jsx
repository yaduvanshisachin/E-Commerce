import { useEffect, useState } from 'react'
import './App.css'
import Category from './component/Category'
import axios from 'axios'
import ProductItem from './component/ProductItem';

function App() {
  const [finalCategory, setFinalCategory] = useState([]);
  const [finalProduct, setFinalProduct] = useState([]);
  const [catName, setCatName] = useState('');

  let getCategory = () => {
    axios.get('https://dummyjson.com/products/category-list')
      .then((res) => {
        // console.log(res.data);
        setFinalCategory(res.data)
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }

  let getProduct = () => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        // console.log(res.data.products);
        setFinalProduct(res.data.products);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }

  let pItems = finalProduct.map((v, i) => {
    return (
      <ProductItem key={i} pdata={v}/>
    )
  })

  useEffect(() => {
    getCategory();
    getProduct();
    // console.log(finalCategory);
  }, [])

  useEffect(() => {
    if(catName !== '') {
      // console.log(catName);
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((res) => {
        // console.log(res.data.products);
        setFinalProduct(res.data.products)
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
    }
  }, [catName])

  return (
    <>
    <div className='py-[40px]'>
      <div className='max-w-[1320px] mx-auto'>
        <h1 className='text-center text-[40px] font-bold mb-[20px]'>Our Product</h1>
        <div className='grid grid-cols-[30%_auto] gap-[20px]'>
          <div className='rounded-[10px] w-[250px] bg-[#f8f8f8] '>
            {/* {finalCategory.length} */}
            <Category finalCategory={finalCategory} setCatName={setCatName}/>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            {/* <ProductItem /> */}
            {finalProduct.length >= 1 ? pItems : 'No Product Found'}
          </div>
        </div>
      </div>  
    </div>
      
    </>
  )
}

export default App

// function ProductItem({pdata}) {
//   return (
//     <div className='bg-white rounded-[10px] shadow-lg p-[20px] text-center cursor-pointer'>
//       <img src={pdata.thumbnail} alt="Product 1" className='w-[100] h-[220px] object-cover' />
//       <h3 className='text-[20px] font-semibold mt-[10px]'>{pdata.title}</h3>
//       <p className='text-gray-600'> Rs. {pdata.price}</p>
//     </div>
//   )
// }
//'https://dummyjson.com/products'
// 'https://dummyjson.com/products/category-list'
// `https://dummyjson.com/products/category/${catName}`
