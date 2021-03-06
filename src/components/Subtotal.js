import React from 'react'
import '../Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../redux/StateProvider';
import { getBasketTotal } from '../redux/reducer';
import { useHistory } from 'react-router';

function Subtotal() {
  const history = useHistory();
  const [{basket}, dispatch] = useStateValue();

  console.log(getBasketTotal(basket))
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length}): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
