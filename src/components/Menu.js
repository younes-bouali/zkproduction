import React from 'react'
import { menuItems } from '../data'

const Menu = () => {

    return (
        <div className='menu'>
            {menuItems.map(item=><a href={item.link}><div className='menuItem'>{item.name}</div></a>)}
        </div>
    )
}

export default Menu