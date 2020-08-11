//object property shorthand

const name = "ankita";
const userAge  = 19
const user = {
   // name:  name,       in place of this
    name,
    age: userAge,    //here we cant do because its value comes from the userage
    location: 'palampur'
}
console.log(user);

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock =0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order')
transaction('order', product)