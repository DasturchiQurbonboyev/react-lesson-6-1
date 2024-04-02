import { React, memo, useEffect, useState } from 'react'
import "./Products.css"
import { IoCartOutline } from "react-icons/io5";
import axios from 'axios';
import yulduz from "../images/hero/div.product-rate.png"
import { Link } from 'react-router-dom';
import { API_URL } from '../../static';



function Products() {

    const [data, setData] = useState([])
    const [count, setCount] = useState(4)
    const [loading, setLoading] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null);
    const [categorys, setCategorys] = useState([])
    const [categorieValue, setCategorieValue] = useState("")

    useEffect(() => {
        axios
            .get(`${API_URL}/categories`)
            .then(res => setCategorys(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(true))
    }, [])


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let url = categorieValue === "" ?
        `${API_URL}?limit=${count}` :
        `${API_URL}/category/${categorieValue}?limit=${count}`

    useEffect(() => {
        setLoading(true)
        axios
            .get(url)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(true))
    }, [count, categorieValue])

    let products = data?.map(el => (
        <div className="products__card">
            <Link to={`/product/${el.id}`}>
                <img className='card__img' src={el.image} alt="" />
            </Link>
            <p className='card__category'>{el.category}</p>
            <h5 className='card__title'>{el.title}</h5>
            <div className='card__reyting'>
                <img src={yulduz} alt="" />
                <p>({el.rating.rate})</p>
            </div>
            <div className='card__by'>
                <p>By</p>
                <label htmlFor="">Stouffer</label>
            </div>
            <div className='card__add'>
                <div>
                    <span>${el.price}</span>
                    <p>${el.price - 1}</p>
                </div>
                <button ><IoCartOutline /> Add</button>
            </div>
        </div>))
    let categorieItems = categorys?.map((el, inx) => <li key={inx} onClick={() => setCategorieValue(el)}>{el}</li>)

    console.log(categorieItems);
    return (
        <div className='products__heros container '>


            {loading ? <h1 style={{ position: "fixed", width: "100vw", height: "100vh", zIndex: "2000" }}>loading.....</h1> : <></>}
            <div className='products__heros__title'>
                <h2>Popular Products</h2>
                <ul>
                    {categorieItems}
                </ul>
            </div>
            <div className="products">
                {products}
            </div>
            <button style={{ display: "block", width: "180px", marginTop: "30px", marginBottom: "50px", marginLeft: "auto", marginRight: "auto" }} onClick={() => setCount(p => p + 4)} className='see__more'>See more</button>
        </div>
    )
}

export default memo(Products)