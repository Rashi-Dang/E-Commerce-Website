// import React from 'react'
// import { useEffect,useState } from 'react'

// const Cart = ({cart,handleqty,handleremove}) => {
//   const [tamnt,setTamnt]=useState(0)

//   const totalamount=()=>{
//       let sum=0;
//       for(let i of cart){
//           sum=sum+(i.qty*i.price)
//       }
//       setTamnt(sum);
//   }
//   useEffect(()=>{
//       totalamount()
//   },[cart])

//   return (
//     <>
//        <h1 className="text-4xl text-center my-3 "> Shopping Cart</h1>
//        <div className='container m-auto rounded-md border w-1/2 p-4 bg-black text-white'>
//         {
//           cart?.map((item,index)=>{
          
//             const { image, title, price, qty, category, id }=item;

//             return(
//               <div className='flex' key={index}>

//               <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 m-2">
//                 <img src={image} alt="" className="h-full w-full object-cover object-center" />
//               </div>
        
//               <div>
//                 <div>
//                   <p className='w-44'>{title}</p>
//                   <p className='text-amber-600'>${price}</p>
//                 </div>
//               </div>
        
//               <div>
//                 <button onClick={()=>handleqty("+",index)} className="bg-amber-500 py-2 px-4 rounded-md text-xl text-white mx-2 my-3">+</button>
//                 <span className="text-purple text-xl">{qty}</span>
//                 <button onClick={()=>handleqty("-",index)} className="bg-amber-500 py-2 px-4 rounded-md text-xl text-white mx-1 my-3">-</button>
//               </div>
        
//               <div>
//                 <button onClick={() => handleremove(index)} className="bg-red-600 text-white px-3 py-2 rounded-md mx-11 my-4">Remove</button>
//               </div>
//             </div>
//             )
//           })
//         }
  
//   </div>  

// <div className='w-1/2 border rounded-md m-auto text-right bg-black text-white p-4'>
//     <p> SubTotal : <span className='text-amber-600 font-black'>${tamnt}</span></p>
// </div>
// </>    

//   )
// }

// export default Cart

import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'


const Cart = ({cart,handleqty,handleremove}) => {
  const [tamnt,setTamnt]=useState(0)

  const totalamount=()=>{
      let sum=0;
      for(let i of cart){
          sum=sum+(i.qty*i.price)
      }
      setTamnt(sum);
  }
  useEffect(()=>{
      totalamount()
  },[cart])

  return (
    <>
      <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

    <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <div class="space-y-6">
        {
          cart?.map((item,index)=>{
          
            const { image, title, price, qty, category, id }=item;
            return(
              <div key={index}> 
          <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <a href="#" class="shrink-0 md:order-1">
                <img class="h-20 w-20 dark:hidden" src={image} alt="imac image" />
                <img class="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
              </a>

              <label for="counter-input" class="sr-only">Choose quantity:</label>
              <div class="flex items-center justify-between md:order-3 md:justify-end">
                <div class="flex items-center">
                  <button  onClick={()=>handleqty("-",index)} type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"> -
                    {/* <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg> */}
                  </button>
                  <span className='m-2'>{qty}</span>
                  {/* <input type="text" id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" required />  */}
                  <button  onClick={()=>handleqty("+",index)} type="button" id="increment-button" data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div class="text-end md:order-4 md:w-32">
                  <p class="text-base font-bold text-gray-900 dark:text-white">${price}</p>
                </div>
              </div>

              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" class="text-base font-medium text-gray-900 hover:underline dark:text-white">{title}</a>

                <div class="flex items-center gap-4">
                  {/* <button type="button" class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                    <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                    </svg>
                    Add to Favorites
                  </button> */}

                  <button  onClick={() => handleremove(index)} type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>

            )
        })
      }

              <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <p class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

          <div class="space-y-4">
            <div class="space-y-2">
              {/* <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">$7,592.00</dd>
              </dl> */}

              <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd class="text-base font-bold text-gray-900 dark:text-white">${tamnt}</dd>
            </dl>
          </div>

          <a href="#" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</a>

          <div class="flex items-center justify-center gap-2">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
            <Link to="/blogs" href="#" title="" class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
              Continue Shopping
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </Link>
          </div>
          </div>

          </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</section>

    </>
  )
}

export default Cart
