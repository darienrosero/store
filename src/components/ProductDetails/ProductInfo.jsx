import { Parrafo } from "./Parrafo";

export function ProductInfo() {
    return (
        <div class="product-info">
            <Parrafo detalle="$35,00"/>
            <Parrafo detalle="Bike"/>
            <Parrafo detalle="With its practical position, this bike also fulfills a decorative function, add your hall or workspace."/>
            <button class="primary-button add-to-cart-button">
                <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
                Add to cart
            </button>
        </div>
    )
}