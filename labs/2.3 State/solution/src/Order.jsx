import { useEffect, useState } from 'react';
import { getOrder, getMenuItems } from './utilities';
import { useParams } from 'react-router-dom';

export function Order() {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getOrder(orderId)
      .then(o => setOrder(o)); // <-- Add this line
    getMenuItems()
      .then(mi => setMenuItems(mi)); // <-- And this line
  }, [orderId]);
  console.log({ order, menuItems })
  return (
    <>
      <h2>Order {orderId}</h2>
      <p>Customer: CUSTOMER_ID_HERE</p>
      <p>Number of guests: NUMBER_OF_GUESTS_HERE</p>
      <p>Credit card: CREDIT_CARD_NUMBER_HERE, expiry: EXPIRY_MONTH_HERE/EXPIRY_YEAR_HERE</p>
      <p>Location: LOCATION_HERE</p>
      <p>Order time: ORDER_DATE_TIME_HERE</p>
      <table>
        <tbody>
          <tr>
            <td>MENUITEM_NAME_HERE</td>
            <td>PRICE_HERE</td>
            <td>(for PERSON_NAME_HERE)</td>
          </tr>
          <tr><td>Tax</td><td>ORDER_TAX_HERE</td></tr>
          <tr><td>Tip</td><td>TIP_HERE</td></tr>
          <tr><td>Total</td><td>ORDER_TOTAL_HERE</td></tr>
        </tbody>
      </table>
    </>
  )
}