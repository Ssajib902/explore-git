// const user = {id: 1, name: 'Gorib', job: 'actor'};
// console.log(user);

// const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet vuter goli',
        city: 'ranveer',
        country: 'Bangladesh'
    },
    products: ['laptop', 'mic', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    inNew: false
};

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopOBJ = JSON.parse(shopJSON);
console.log(shopOBJ);