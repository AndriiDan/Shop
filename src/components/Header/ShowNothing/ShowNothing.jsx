import classes from './ShowNothing.module.css';

// якщо корзина пуста
const ShowNothing = () => {
    return (
        <div className={classes.empty}>
            <h2>Товарів не вибрано</h2>
        </div>
    )
};

export default ShowNothing;