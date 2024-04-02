import { React, memo } from 'react'
import "./Admin_bottom.css"

function Admin_bottom() {
    return (
        <div className='container admin__bottom'>
            <div className='admin__bottom__card'>
                <h5>Product Packing</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className='admin__bottom__card'>
                <h5>24X7 Support</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className='admin__bottom__card'>
                <h5>Delivery in 5 Days</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className='admin__bottom__card'>
                <h5>Payment Secure</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
        </div>
    )
}

export default memo
    (Admin_bottom)