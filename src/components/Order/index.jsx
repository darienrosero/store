import { OrderContent } from "./OrderContent";

export function Order() {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My orders</h1>
                <OrderContent/>
            </div>
        </div>
    )
}