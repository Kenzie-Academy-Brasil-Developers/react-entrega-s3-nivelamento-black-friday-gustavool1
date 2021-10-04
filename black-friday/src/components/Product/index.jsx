import './style.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Product = ({ item, cart, setCart, isAdded}) =>{
    const handleClick = () =>{
        toast.configure()
        const cartFiltered = cart.filter((product)=> product.id === item.id)
        if(cart.length === 0){
            setCart([...cart, item])
            toast.success("Item adicionado com sucesso ao carrinho")

        }else{
            if(cartFiltered.length === 0){
                setCart([...cart, item])
                toast.success("Item adicionado com sucesso ao carrinho")
            }else{
                toast.error("Impossível adicionar items duplicados ao carrinho")
            }
        }
    }
    return(
        <div className='random-product'>
            <p>{item.name}</p>
            <p>Preço Original:<strong>R$ {item.price}</strong></p>
            <p>Desconto:<strong>{item.discount}%</strong></p>
            <p>Valor com desconto:<strong>R${item.discountInPrice.toFixed(2)}</strong></p>
            {isAdded && (
                <button onClick={ handleClick }>Adicionar ao carrinho</button>
            )}
        </div>
    )
}
export default Product