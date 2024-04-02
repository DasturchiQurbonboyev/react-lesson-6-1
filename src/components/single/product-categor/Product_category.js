import React from 'react'
import "./Product_category.css"

function Product_category() {
    return (
        <div className='Product__category'>
            <div className='product__category'>
                <h5>Product Category</h5>
                <hr />
                <div className='product__category__input'>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Juice & Drinks</label>
                    </div>
                    <label>[20]</label>
                </div>
                <div className='product__category__input'>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Dairy & Milk</label>
                    </div>
                    <label htmlFor="">[54]</label>
                </div>
                <div className='product__category__input'>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Snack & Spice</label>
                    </div>
                    <label htmlFor="">[64]</label>
                </div>
            </div>
            <div className='filter__by__price'>
                <h5>Filter By Price</h5>
                <hr />

                <div class="slidecontainer">
                    <input type="range" min="1" max="100" class="slider" id="myRange" />
                </div>
                <div className='filter__price'>
                    <p>Price :</p>
                    <label htmlFor="">$20 - $250</label>
                </div>
                <button className=''>Filter</button>
            </div>

            <div className='product__category__color'>
                <h5>product Category</h5>
                <hr />
                <div className='category__color'>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Blue</label>
                    </div>
                    <span className='blue'></span>
                </div>
                <div className='category__color'>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Yellow</label>
                    </div>
                    <span className='yellow'></span>
                </div>
                <div className='category__color'>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Red</label>
                    </div>
                    <span className='red'></span>
                </div>
                <div className='category__color'>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Green</label>
                    </div>
                    <span className='green'></span>
                </div>
            </div>
            <div className='weight'>
                <h5>Weight</h5>
                <hr />

                <div className='weight__chekbox'>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">2kg Pack</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">20kg Pack</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">30kg Pack</label>
                    </div>
                </div>
            </div>
            <div className="products__tages">
                <h5>Products Tages</h5>
                <hr />
                <div>
                    <button>Vegetables</button>
                    <button>juice</button>
                    <button>Food</button>
                    <button>Dry Fruits</button>
                    <button>Vegetables</button>
                    <button>juice</button>
                </div>
            </div>
        </div>
    )
}

export default Product_category