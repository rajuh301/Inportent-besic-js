const products = [
    {id: 1, name: 'phone one plus', price:20000},
    {id: 2, name: 'phone redmi', price:20000},
    {id: 3, name: 'phone samsung', price:20000},
    {id: 4, name: 'phone vivo', price:20000},
    {id: 5, name: 'phone i phone', price:20000},
    {id: 6, name: 'laptop lenovo', price:20000},
    {id: 7, name: 'desktop i5', price:20000},
    {id: 8, name: 'phone itel', price:20000},
    {id: 9, name: 'phone walton', price:20000},
] 

function matcheproducts (products, search){
    const matched =[];
    
    for(let product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
         matched.push(product);
        }
    }
    return matched;
}

let total =matcheproducts(products, 'laptop')
console.log(total)