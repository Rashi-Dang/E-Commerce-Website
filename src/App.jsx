import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blogs from './Pages/Blogs'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Productdetail from './Pages/Productdetail'
import Cart from './Pages/Cart'
import { ProtectedRoute } from './Components/ProtectedRoute'
import { Login } from './Pages/Login'
import 'flowbite'

function App() {
    const [cart, setCart] = useState([]);

    const addtoCart =(prd)=>{  
      // setCart([...cart,prd])
      //  console.log(cart);  


        let ispresent=false

        cart.forEach((item,index)=>{
          if (item.id === prd.id){
            ispresent=true;
          }
        })
    
        if(ispresent){
          alert("This product already added to the cart")
        }
        else{
        setCart([...cart,prd])
        console.log(cart)
        }
    
    }
    
 
// quantity handle function 
    const handleqty=(sign,index)=>{
      let ind=cart.findIndex((value,pos)=>pos==index)
      console.log(ind);
      switch(sign){
        case "+":
          cart[ind].qty=cart[ind].qty+1;
          break;
        case "-":
          if(cart[ind].qty!=1){  
            cart[ind].qty=cart[ind].qty-1
          }          
      }
      setCart([...cart])   
    }

  // remove item from cart

  const handleremove=(index)=>{
    cart.splice(index,1)
    setCart([...cart])
  }

  
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Layout cartlength={cart.length}/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blogs' element={<Blogs addtoCart={addtoCart}/>}/>
      <Route path='/login' element={<Login/>}/>
      {/* <Route path='/cart' element={<Cart cart={cart} handleqty={handleqty} handleremove={handleremove}/>}/> */}
      <Route path='/blogs/:id/:title' element={<Productdetail addtoCart={addtoCart}/>}/>
      <Route path='/cart' element={<ProtectedRoute Comp={Cart} cart={cart} handleqty={handleqty} handleremove={handleremove}/>}/>

      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
