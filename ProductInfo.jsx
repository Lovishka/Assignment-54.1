import React from 'react';
function ProductInfo(props)
{
    return (
        <div className="flex bg-white  m-5 w-250">
            <img src={props.link} className="w-2/5 m-10"/>
            <div className="m-10 ml-3">
                 <h1 className="font-semibold font-sans text-4xl">
                    {props.title}
                 </h1>
                 <h2 className="font-sans font-semibold text-2xl m-3 ml-0">
                    {props.price}
                 </h2>
                 <p className="font-sans  text-l  m-3 ml-0">
                    {props.desc}
                 </p>
                 <div gap-1>
                  <input type="number" placeholder="1" className="font-sans  w-20 border-1 m-3 py-1 ml-0"></input>
                 <button className="font-sans font-semibold text-xl m-3 ml-0 border-2 bg-red-400 text-white px-10 py-1">
                    Add To Cart
                 </button>
                 </div>
                
            </div>

        </div>
    )
}
export default ProductInfo