import { ListaLeft } from "./ListaLeft";

export function NavbarLeft() {
    return (
        <div class="navbar-left">
            <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo" />
            <ul>
                <ListaLeft nombre="ALL" />
                <ListaLeft nombre="Clothes" />
                <ListaLeft nombre="Electronics" />
                <ListaLeft nombre="Furnitures" />
                <ListaLeft nombre="Toys" />
                <ListaLeft nombre="Others" />
            </ul>
        </div>
    )
}