let phones = [
    {name: 'phone', model: 'iphone 7 plus', price: 52000},
    {name: 'phone', model: 'iphone 8', price: 52000},
    {name: 'phone', model: 'iphone 8 plus', price: 52000},
    {name: 'phone', model: 'iphone 10', price: 52000},
    {name: 'phone', model: 'iphone 11', price: 52000},
    {name: 'phone', model: 'iphone 11 plus', price: 52000},
    {name: 'phone', model: 'iphone 14 pro max', price: 52000},
]


function searchPhone (phones, search){
    let matchedPhone =[];
    for(let phone of phones){
        if(phone.model.toLowerCase().includes(search.toLowerCase())){
            matchedPhone.push(phone);
        }
    }
    return matchedPhone;
}


let total = searchPhone(phones, 'iphone 7 plus')
console.log(total);