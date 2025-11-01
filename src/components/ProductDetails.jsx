import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import globalContext from '../context/GlobalContext';

function ProductDetails({product}) {

    let {isDispatch, cart} = useContext(globalContext);

    function addToCart() {
        isDispatch(
            {
                type: "add",
                payload: product
            }
        )
    }

    function removeFromCart() {
        isDispatch(
            {
                type: "remove",
                payload: product.id
            }
        )
    }
    
  return (
    <div>
        <div className='flex flex-row mt-5'>
            <div className='ml-5'>
                <div className='h-72 w-72 border border-black'>
                    <img src={product.images[0]} />
                </div>
                <div className='flex flex-row'>
                    <img src={product.thumbnail} className='h-24 w-24 border border-black'/>
                    <img src={product.thumbnail} className='h-24 w-24 border border-black'/>
                    <img src={product.thumbnail} className='h-24 w-24 border border-black'/>
                </div>
            </div>
            <div className='p-10 ml-5 mr-10 border border-black h-72 w-full'>
                <h1>{product.title}</h1> <br/>
                <p>{product.description}</p>
                <br/>
                <h3>Rating: {product.rating} | Brand: {product.brand} | category : {product.category}</h3>
                <h3>${product.price} inclusive of all taxes </h3>
                <h3>{product.discountPercentage}% OFF</h3>
            </div>
        </div>
        <div>
            <div><button onClick={addToCart}>Add to Cart</button></div>
            <div><button onClick={removeFromCart}>Remove from Cart</button></div>
        </div>
        <div>
            <Link to={`/carts`}><button>Go to Cart</button></Link>
        </div>
        <div>
            {product.reviews.map((ele, idx) => {
                return (
                    <div className='m-10 p-2 w-96 border rounded-md border-black' key={idx}>
                        <h2>{ele.reviewerName} | {ele.reviewerEmail}</h2>
                        <h3>Rating : {ele.rating}</h3>
                        <h3>Reviewed on {ele.date}</h3>
                        <h3>{ele.comment}</h3>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ProductDetails