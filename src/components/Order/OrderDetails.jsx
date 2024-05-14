
export function OrderDetails({fecha,cantidad,precio}) {
    return (
        <div className="order">
            <p>
                <span>{fecha}</span>
                <span>{cantidad} articles</span>
            </p>
            <p>${precio}</p>
            <img src="./icons/flechita.svg" alt="arrow" />
        </div>
    )
}