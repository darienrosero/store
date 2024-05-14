import { OrderDetails } from "./OrderDetails";

export function OrderContent() {
    return (
        <div className="my-order-content">
            <OrderDetails fecha="03.25.21" cantidad ="6" precio="560.00"/>
            <OrderDetails fecha="03.25.21" cantidad ="6" precio="560.00"/>
            <OrderDetails fecha="03.25.21" cantidad ="6" precio="560.00"/>
            <OrderDetails fecha="03.25.21" cantidad ="6" precio="560.00"/>
        </div>
    )
}