const cart = JSON.parse(localStorage.getItem("cart")) || [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      debugger;
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        const cartItem = state.map(
          (x) => (x.id === product.id ? { ...x, qty: (x.qty ?? 0) + 1 } : x) //it evaluate the x.qty is not null or undefined and add 1 otherwise evaluate 0
        );
        localStorage.setItem("cart", JSON.stringify(cartItem));
        return cartItem;
      } else {
        const cartItem = [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
        localStorage.setItem("cart", JSON.stringify(cartItem));
        return cartItem;
      }

    case "DELITEM":
      // const CartItems = JSON.parse(localStorage.getItem('cart'));
      // console.log(CartItems)
      const delItem = state.filter((x) => x.id !== product.id);
      console.log(delItem);
      localStorage.setItem("cart", JSON.stringify(delItem));
      console.log(delItem);
      return delItem;

    case "INCREMENT_QUANTITY":
      const increamentQuantity = state.map((x) =>
        x.id === product.id ? { ...x, qty: x.qty + 1 } : x
      );

      localStorage.setItem("cart", JSON.stringify(increamentQuantity));
      return increamentQuantity;

    case "DECREMENT_QUANTITY":
      if (product.qty === 1) {
        const decreamentQuantity = state.filter((x) => x.id !== product.id);
        localStorage.setItem("cart", JSON.stringify(decreamentQuantity));
        return decreamentQuantity;
      } else {
        const decreamentQuantity = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
        localStorage.setItem("cart", JSON.stringify(decreamentQuantity));

        return decreamentQuantity;
      }

    case "RESET":
      localStorage.removeItem("cart");
      return [];

    default:
      return state;
  }
};

export default handleCart;
