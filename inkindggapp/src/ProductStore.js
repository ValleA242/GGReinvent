
//sample data for amazon items

const productArray = [
    {
        id: '1',
        img: "image here",
        itemName: 'T-Shirt Pack',
        price: 25
    },

    {
        id: '2',
        img: "image here",
        itemName: 'Gas Card',
        price: 50
    },

    {
        id: '3',
        img: "image here",
        itemName: 'Diapers',
        price: 15
    }
]

function getProductData(id) {
    let productData = productArray.find(product => product.id === id)

    if (productData === undefined) {
        return undefined;
    }
}

export { productArray, getProductData };