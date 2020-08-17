import React from  'react';
import { Link } from 'react-router-dom';
import data from '../data';

function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x=> x._id === props.match.params.id);
    return<div>
        <div className="back-to-result">
            <Link to="/">Back to details</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product:"/>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        Price: $<b>{product.price}</b>
                    </li>
                    <li>
                        {product.rating} Stars ({product.numReviews} reviews)
                    </li>
                    <li>
                        Description : 
                        <div>
                        {product.description}
                        </div>
                    </li>
                </ul>
               
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price: $<b>{product.price}</b>
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Qty: 
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </li>
                    <button className="button">
                        Add to cart
                    </button>
                </ul>

            </div>

        </div>
    </div>
}

export default ProductScreen;