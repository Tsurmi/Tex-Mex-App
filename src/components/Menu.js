import React from "react";
import DATA from './DATA';
import 'bootstrap/dist/css/bootstrap.css';


    const Menu = (props) => {
      const menuItems = DATA.items.map(function(item, index){
        return (
          <div className="menuContainer"key={index}>
            <div className='menuCard'>
              <p  className='menuCategory'> { item.category } </p>
              <p className='menuName'> { item.name } </p>
              <p  className='menuPrice'> { item.price } </p>
              <p  className='menuSpiceLevel'> Spice Level: { item.spiceLevel }</p>
              <img src={item.img} />
            </div>
          </div>
        )
      })
        return(
          <div>
            {menuItems}
          </div>
        )
      }
  export default Menu;
