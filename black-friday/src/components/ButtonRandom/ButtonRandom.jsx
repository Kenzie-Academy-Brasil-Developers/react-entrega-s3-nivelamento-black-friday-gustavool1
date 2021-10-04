import './style.css'
const ButtonRandom = ({ useProduct,  setProductsDiscounted }) =>{
    const handleClick = () =>{
        const RandomNumber = Math.floor(Math.random()*6)+1
        const productFiltered = useProduct.filter((product)=>product.id === RandomNumber)
        const discount = Math.floor(Math.random() * (90 - 40) + 40)
        const discountPrice = (productFiltered[0].price * discount) / 100 
        productFiltered[0]['discountInPrice'] = discountPrice
        productFiltered[0]["discount"] = discount 
        setProductsDiscounted(productFiltered)
       
    }   
    return(
        <div>
            <button onClick={handleClick}>Gerar promoção</button>
        </div>
    )
}
export default ButtonRandom 