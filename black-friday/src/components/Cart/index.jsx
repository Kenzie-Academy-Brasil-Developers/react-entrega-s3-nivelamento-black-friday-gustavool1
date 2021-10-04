import Product from '../Product'
import './style.css'
const Cart = ( { cart } ) => {
    return(
        <div className='cart-container'>
            <h3>Carrinho</h3>
            <p className='total'>Total: R${cart.reduce((prev, cur)=> prev + cur.discountInPrice, 0).toFixed(2) }</p>
            {cart && cart.map((elemento)=>(
                <Product item={elemento}/>
            ))}
        </div>
    )
}
export default Cart