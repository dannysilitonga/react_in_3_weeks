import { useEffect, useState } from 'react';
import { getMenuItems, toCurrency } from './utilities';
export const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getMenuItems()
      .then(mi => setMenuItems(mi))
  }, []);
  console.log({ menuItems });
  const menuItem = menuItems?.[1] || {};
  return (
    <>
      <h1>Menu</h1>
      <section id="itemsWrapper">
        {menuItems.map(menuItem => <section key={menuItem.id}>
          <div>
            <img src={menuItem.imageUrl} alt={menuItem.name} style={{ height: 200 }} />
          </div>
          <div className="menuDetails">
            <h2>{menuItem.name}</h2>
            <p>{menuItem.description}</p>
            <p>{toCurrency(menuItem.price)}</p>
            <div>
              <button onClick={() => addToCart(menuItem)}>Add</button>
            </div>
          </div>
        </section>
        )}
      </section>
    </>
  )
  function addToCart(menuItem) {
    console.log(`Adding ${menuItem?.name} to the cart`);
  }
}