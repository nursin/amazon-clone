import React from 'react'
import '../Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../redux/StateProvider';

function Subtotal() {

  const [state, dispatch] = useStateValue();

  const calculateSubtotal = (basketArray) => {
    let sum = 0;
    for(let i = 0; i < basketArray.length; i++) {
      sum += basketArray[i].price
    }
    return sum;
  }
  console.log(calculateSubtotal(state.basket))
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({state.basket.length}): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={calculateSubtotal(state.basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
