let initialState = {
    products: [],
    count : 0
}
export default (state = initialState, action) => {
    let {type, payload} = action; 
    switch (type){
        case 'ADD-TO-CART' :
        return {
             products:[...state.products,payload],
             count : state.count + 1
            }
        case 'REMOVE':
          let newState = {...state};
          let products = newState.products.filter(product =>{
              if(payload !== product ){
                  return product;
              }                    
        })
        return {
            products:products,
            count : state.count - 1
        }

        default:
         return state;
    }

}

export const add = (name) => {
    return {
        type: 'ADD-TO-CART',
        payload: name
    }
}

export const remove = (name) => {
    return {
        type: 'REMOVE',
        payload: name
    }
} 