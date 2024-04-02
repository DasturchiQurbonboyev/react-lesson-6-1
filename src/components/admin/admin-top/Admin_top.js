import { React, memo } from 'react'
import "./Admin_top.css"
import img from "../../images/admin/Section.png"


function Admin_top() {
    return (
        <div className='container admin__top'>
            <div className='admin__top__left'>
                <h1>Admin</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
                    necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
                    rerum quod. Tempora magni autem a voluptatibus neque.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum
                    accusamus magni consequuntur architecto, ipsum deleniti expedita doloribus
                    suscipit voluptatum eius perferendis amet!.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet
                    architecto est exercitationem optio ea maiores corporis beatae, dolores doloribus
                    libero nesciunt qui illum? Voluptates deserunt adipisci voluptatem magni sunt sed
                    blanditiis quod aspernatur! Iusto?
                </p>
                <div className='admin__top__left__box'>
                    <div className='admin__top__left__box__card'>
                        <h2>0.1 <span>k</span></h2>
                        <p>Vendors</p>
                    </div>
                    <div className='admin__top__left__box__card'>
                        <h2>23 <span>k</span></h2>
                        <p>Customers</p>
                    </div>
                    <div className='admin__top__left__box__card'>
                        <h2>2 <span>k</span></h2>
                        <p>Products</p>
                    </div>
                </div>
            </div>
            <div className='admin__top__reight'>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default memo(Admin_top)