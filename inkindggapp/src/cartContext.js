import { createContext, useState } from "react";
import { productsArray, getOrganizationData } from "./ProductStore";

export const CartContext = createContext({
    items: [],
    getProductQuanitity: () => { },
    addProductToCart: () => { },
    removeProductFromCart: () => { },
    emptyCart: () => { }
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    // Function for total products in cart
    function getProductQuanitity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0
        }
    }

    //function for adding single product to cart
    function addProductToCart() {
        const quantity = getProductQuanitity(id);

        if (quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                )
            )
        }
    }

    function removeProductFromCart() {
        const quantity = getProductQuanitity(id);

        if (quantity == 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity - 1 }
                            : product
                ))
        }
    }

    function emptyCart(id) {
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id != id
                })
        )
    }

    function getTotalCost() {

    }

    const contextValue = {
        items: cartProducts,
        getProductQuanitity,
        addProductToCart,
        removeProductFromCart,
        emptyCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}