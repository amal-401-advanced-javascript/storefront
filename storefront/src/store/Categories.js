let initialState = {
    categories: [
      { name: 'ELECTRONICS', displayName: 'ELECTRONICS' , description:'electronics'},
      { name: 'FOOD', displayName: 'FOOD',description:'food' },
    ],
    activeCategory: ''
};


export default (state = initialState, action) => {
    let {type, payload} = action; 
    switch (type){

        case 'ACTIVATE' : 
        let activeCategory;
        let categories = state.categories.map(category=> {
            if (category.name === payload) {
                activeCategory = category.name;
            }
            return category;
        });


        return {categories, activeCategory}
        default:
         return state;
    }

}

export const activate = (name) => {
    return {
        type: 'ACTIVATE',
        payload: name
    }
}