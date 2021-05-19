import CartItem from '../CartItem/CartItem';
import PaymentIcon from '@material-ui/icons/Payment';
import { Wrapper, CloseButton, CheckoutButton } from './Cart.styles';
import { CartItemType } from '../App';
import { useState } from 'react';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
    closeCart: () => void;
    handleCheckout: () => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart, closeCart, handleCheckout }) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const calculateTotal = (items: CartItemType[]) =>
        items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

    return (
        <Wrapper>
            <CloseButton onClick={closeCart}/>
            <h2>Your shopping cart</h2>
            {cartItems.length === 0 ? <p>No items in cart. </p> : null}
            {cartItems.map(item => (
                <CartItem 
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2 className="total-sum">Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
            <CheckoutButton disabled={isDisabled} onClick={() => calculateTotal(cartItems) <= 0 ? setIsDisabled(true) : handleCheckout()}>
                Checkout
                <PaymentIcon />
            </CheckoutButton>
        </Wrapper>
    )
};

export default Cart;
