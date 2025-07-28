import React from 'react'

function Product(props)
{
    return (
        <div className="text-left p-[5px] w-80 shrink">
            <img className="w-80" src={props.link}/>
            <h3 className="text-gray-400 text-xl">
                {props.category}
            </h3>
            <h1 className="font-bold text-2xl">
                {props.title}
            </h1>
            <p className="text-red-500 ">
                ☆☆☆☆☆
            </p>
            <div className='flex gap-1 '>
                
            <p className="font-bold text-xl">  
                {props.price}
            </p>
            </div>

        </div>
    )
}
export default Product