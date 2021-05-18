import CartItem from '../CartItem/CartItem';
import { Wrapper, StyledButton } from './Cart.styles';
import { CartItemType } from '../App';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
    closeCart: () => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart, closeCart }) => {
    const calculateTotal = (items: CartItemType[]) =>
        items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

    return (
        <Wrapper>
            <StyledButton onClick={closeCart}/>
            <h2>Your shopping cart</h2>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => (
                <CartItem 
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2 className="total-sum">Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
};

export default Cart;
