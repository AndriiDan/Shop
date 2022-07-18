import Order from "../Order/Order";
import classes from './ShowOrders.module.css';

// показати вибрані елементи в корзині
const showOrders = (props) => {
    // загальна вартість замовлення в корзині
    let summa = 0;
    // Number.parseFloat(el.price) - перетворюємо в число, оскільки в items.price: "" (рядок)
    props.orders.forEach(el => summa += Number.parseFloat(el.price));

    return (
        <div>
            {/* перебор кожного елемента в корзині */}
            {props.orders.map(el => (
                <Order key={el.id} item={el} delOrder={props.delOrder}
                // dispatch={props.dispatch} 
                />
            ))}
            {/* new Intl.NumberFormat().format(summa) - заокруглює суму до '2-х' знаків після коми (при цінах з 2-ма знаками після коми) */}
            <p className={classes.summa}>Загальна вартість замовлення: {new Intl.NumberFormat().format(summa)} грн.</p>
        </div>
    )
};

export default showOrders;