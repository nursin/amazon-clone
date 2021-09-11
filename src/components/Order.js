import React from 'react';
import '../Order.css';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import moment from 'moment'; // handy for timestamps



function Order({ order }) {
  if (order) {
    return (
      <div className='order'>
        {console.log('order: ', order.data)}
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
        <p className="order__id">
          <small>{order.id}</small>
        </p>
        {order.data.basket?.map(item => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))}
        <CurrencyFormat
          renderText={(value) => (
            <h3 className='order__total'>Order Total: {value}</h3>
          )}
          decimalScale={2}
          value={order.data.amount / 100} // Part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Order
