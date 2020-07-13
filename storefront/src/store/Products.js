let initialState = {
    products: [
      { name: 'Laptop', category: 'ELECTRONICS', price: 699.00, inStock: 5 ,description:'is a small, portable personal computer (PC) with a "clamshell" form factor, typically having a thin LCD or LED computer screen mounted on the inside of the upper lid of the clamshell and an alphanumeric keyboard on the inside of the lower lid.'},
      { name: 'Television (TV)', category: 'ELECTRONICS', price: 99.00, inStock: 15 ,description:'is a telecommunication medium used for transmitting moving images in monochrome (black and white), or in color, and in two or three dimensions and sound.'},
      { name: 'Fruits', category: 'FOOD', price: .99, inStock: 500 ,description:'is the seed-bearing structure in flowering plants (also known as angiosperms) formed from the ovary after flowering.'},
      { name: 'Vegetables', category: 'FOOD', price: 1.99, inStock: 12 ,description:'are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds. '},
      { name: 'Bread', category: 'FOOD', price: 2.39, inStock: 90,description:'is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history it has been a prominent food in large parts of the world; it is one of the oldest man-made foods, having been of significant importance since the dawn of agriculture; and plays an essential role in religious rituals and secular culture.' },
    ]
  };

 export default (state=initialState,action)=>{
     let {type, payload} = action;

     switch (type){
        case 'ACTIVATE' : 
        let products = state.products.filter(product => product.category === payload);
        return {products}
        default:
         return state;
    }
 }
