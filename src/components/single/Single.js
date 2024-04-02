import { React, memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import yulduzcha from "./../images/single/Icon.png"
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import axios from 'axios';
import { API_URL } from '../../static';
import ReactSlider from "react-slider";
import "./Single.css"
import Product_category from './product-categor/Product_category';

function Single() {
    const [product, setProduct] = useState(null)
    const { id } = useParams();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get(`${API_URL}/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])


    if (loading) {
        return <h2>Loading.....</h2>
    }


    return (
        <div style={{ paddingBottom: "100px" }} className='container single__product'>
            <Product_category />
            <div className='single__product__reigth'>
                <div className='single__product__reight__top'>
                    <div className=''>
                        <div>
                            <img src={product?.image} width={400} alt="" />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <img src={product?.image} width={60} alt="" />
                            <img src={product?.image} width={60} alt="" />
                            <img src={product?.image} width={60} alt="" />
                            <img src={product?.image} width={60} alt="" />
                        </div>
                    </div>
                    <div className='seeds'>
                        <div className='seeds__title'>
                            <h4>{product?.title}</h4>
                            <p>{product?.description}</p>
                        </div>
                        <div className='seeds__reyting'>
                            <img src={yulduzcha} alt="" />
                            <img src={yulduzcha} alt="" />
                            <img src={yulduzcha} alt="" />
                            <img src={yulduzcha} alt="" />
                            <img src={yulduzcha} alt="" />
                            <label htmlFor="">( {product?.rating.rate} Review )</label>
                        </div>
                        <div className='seeds__brand'>
                            <div className='seeds__brand__left'>
                                <p>Brand</p>
                                <p>Flavour</p>
                                <p>Diet Type</p>
                                <p>Weight</p>
                                <p>Speciality</p>
                                <p>Info</p>
                                <p>Items</p>
                            </div>
                            <div className='seeds__brand__reight'>
                                <p>: {product?.category}</p>
                                <p>: Super Saver Pack</p>
                                <p>: Vegetarian</p>
                                <p>: 200 Grams</p>
                                <p>: Gluten Free, Sugar Free</p>
                                <p>: Egg Free, Allergen-Free</p>
                                <p>: {product?.rating.count}</p>
                            </div>
                        </div>
                        <div className='seeds__price'>
                            <h5>${product?.price}</h5>
                            <p>${product?.price - 1}</p>
                        </div>
                        <div className='seeds__size'>
                            <div className='seeds__size__top'>
                                <p>Size/Weight :</p>
                                <button>50kg</button>
                                <button>80kg</button>
                                <button>120kg</button>
                                <button>200kg</button>
                            </div>
                            <div className='seeds__size__bottom'>
                                <button className='btn__size'>1</button>
                                <div className='seeds__size__plass'>
                                    <button>+</button>
                                    <button>-</button>
                                </div>
                                <button className='btn__size btn__style'>Add to cart</button>
                                <button className='btn__size'><FaRegHeart /></button>
                                <button className='btn__size'><MdOutlineRemoveRedEye /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single__product__reight__bottom">
                    <div className='single__product__reight__bottom__title'>
                        <h5>Description</h5>
                        <h5>Information</h5>
                        <h5>Review</h5>
                    </div>
                    <p className='single__product__reight__bottom__desc1'>{product?.description}</p>
                    <div className='single__product__reight__bottom__title_2'>
                        <h4>Packaging & Delivery</h4>
                    </div>
                    <p className='single__product__reight__bottom__desc1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero perferendis dolor! Quis vel consequuntur repellat
                        distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos
                        consectetur quae vero in perferendis provident quis.</p>
                </div>
            </div>
        </div>
    )
}

export default memo(Single)