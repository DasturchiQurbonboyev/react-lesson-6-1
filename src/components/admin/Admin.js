import React from 'react'
import "./Admin.css"
import Admin_top from './admin-top/Admin_top'
import Admin_bottom from './admin-bottom/Admin_bottom'

function Admin() {
    return (
        <div>
            <Admin_top />
            <Admin_bottom />
        </div>
    )
}

export default Admin