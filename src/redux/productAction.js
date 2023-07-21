// For Add item to Cart
export const addCart = (product) => {
  debugger;
  // let previousItems = JSON.parse(localStorage.getItem('cartStore')) || [];   // Get the previous items from local storage
  // previousItems.push(product);     // Push the new product into the array
  // localStorage.setItem('cartStore', JSON.stringify(previousItems)); // Update the local storage with the updated array
  return {
    type: "ADDITEM",
    payload: product, // Corrected spelling of payload
  };
};

// For Delete item from Cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product, // Corrected spelling of payload
  };
};

// For Increment quantity of item in Cart
export const incrementQuantity = (product) => {
  return {
    type: "INCREMENT_QUANTITY",
    payload: product,
  };
};

// For Decrement quantity of item in Cart
export const decrementQuantity = (product) => {
  return {
    type: "DECREMENT_QUANTITY",
    payload: product,
  };
};
