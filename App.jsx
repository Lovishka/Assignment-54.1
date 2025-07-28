import React from 'react';
import Product from "./product";

function App() {
 
  return (
    <div className='bg-gray-300'>
    
<div className=' bg-white h-20 flex  items-center'>
    <img className="w-40  ml-60"
    src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg"></img>
 </div>
    
  <div className='flex flex-col h-[calc(100vh-100)]  m-20  bg-white'>
    <div className='border-1 self-end m-30 mb-5'> 
      <select>
        <option  selected>
          Default Sorting
        </option>
        <option>
          Sort A-Z
        </option>
        <option>
          Sort Z-A
        </option>
        <option>
          Sort Price(Low to High)
        </option>
        <option>
          Sort Price(High to Low)
        </option>
      </select>
    </div>
    <div className='flex flex-col gap-y-20   gap-x-10 justify-center items-center'>
    
    

    <div className='flex ' >
  <Product link="https://mangalprinter.in/wp-content/uploads/2018/06/mug-red.jpg" category="Mugs"
  title="Black Printed Coffee Mug" price="$15.00" saleprice=""/>

 <Product link="https://mangalprinter.in/wp-content/uploads/2018/06/plain-cotton-collar-t-shirt-500x500-1.png" 
  category="T-shirt"
  title="Polo Printed T-Shirt" price="$34.00" saleprice=""/>

  <Product link="https://mangalprinter.in/wp-content/uploads/2018/06/IMG_9585-350x350-1.jpg" 
  category="Mugs"
  title="Father's Day Coffee Mug" price="$19.00" saleprice=""/>

 
       </div>
<          div className='flex'>

  <Product link="https://mangalprinter.in/wp-content/uploads/2018/06/plain-cotton-collar-t-shirt-500x500-1.png" 
  category="T-shirt"
  title="Collar Professional Printed Tshirt"  price="$25.00" saleprice="$34.00"/>

  <Product link="https://mangalprinter.in/wp-content/uploads/2018/06/mug-red.jpg"
   category="Mugs"
  title="Personalised Mug" price="$15.00" saleprice=""/>
 <Product link="https://mangalprinter.in/wp-content/uploads/2018/06/personalised-birthday-girl-mug_1.png" category="Mugs"
  title="Personalised Coffee Mug" price="$25.00" saleprice=""/>
    </div>
  
      <div className='flex mb-10'>
  <Product link="https://mangalprinter.in/wp-content/uploads/2018/06/designer-printed-t-shirt-500x500-1.jpg" category="T-shirt"
  title="Personalised Printed T-shirt" price="$25.00" saleprice=""/>

<Product link="https://mangalprinter.in/wp-content/uploads/2018/06/round.jpg" category="T-Shirt"
  title="Birthday Printed Tshirt" price="$25.00" saleprice=""/> 

  <Product link="https://mangalprinter.in/wp-content/uploads/2018/06/mug-red.jpg" category="Mugs"
  title="Black Printed Coffee Mug" price="$15.00" saleprice=""/>

    </div>
    
  
    <div className='flex ml-45 mb-20 self-start gap-1'>
      <button className="py-[10px] px-[15px] bg-red-400 text-white border-1 border-red-400">1</button>
      <button className="p-[10px] text-red-400 bg-white  border-1 border-red-400 ">2</button>
      <button className="p-[10px] text-red-400 bg-white  border-1 border-red-400 "> →</button>
    </div>

    </div>
    
   
    </div>
     <div className='bg-gray-700 flex h-30 items-center   text-white'>
      
      <p className='ml-30 mr-250' >
        Copyright~2022|CodeYogi
      </p>
    
      <p className='' >
        Powered By CodeYogi
      </p>

      
     
      


    </div>
    </div>
  )
}

export default App
