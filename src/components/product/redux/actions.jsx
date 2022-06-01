export const ADD_TO_CART = '[PRODUCT] ADD-TO-CART';
export const REMOVE_FROM_CART = '[PRODUCT] REMOVE_FROM_CART';
export const PLUS_TO_QUANTITY = '[PRODUCT] PLUS_TO-QUANTITY';
export const MINUS_TO_QUANTITY = '[PRODUCT] MINUS_TO_QUANTITY';



export function addToCart (product){
    return {type : ADD_TO_CART , payload : product} ;
}
export function removeFromCart (product){
    return {type : REMOVE_FROM_CART , payload : product} ;
}

export function plusToQuantity (product){
    return {type : PLUS_TO_QUANTITY , payload : product} ;
}
export function minusToQuantity (product){
    return {type : MINUS_TO_QUANTITY , payload : product} ;
}