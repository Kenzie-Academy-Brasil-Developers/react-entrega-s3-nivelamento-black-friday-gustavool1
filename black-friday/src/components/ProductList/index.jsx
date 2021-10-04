import Product from "../Product"

const ProductList = ({ productsDiscounted, cart, setCart }) =>{
    
    return (
        <div>
            {productsDiscounted.map((item)=>(
                <Product key={item.id} item={item} cart={ cart } setCart={ setCart } isAdded/>
                
            ))}
        </div>
    )
}

export default ProductList