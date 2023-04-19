const products = [
    {
        id: "1",
        name: "Iphone 12",
        price: 1000,
        category: "celular",
        img: "https://asset2.ee.co.uk/medias/iphone-12-5g-64gb-purple-desktop-detail-1-Format-976?context=bWFzdGVyfHJvb3R8NDgwOTE4fGltYWdlL3BuZ3xzeXMtbWFzdGVyL3Jvb3QvaDBlL2hhMS85NjQ2MDQ1MDAzODA2L2lwaG9uZS0xMi01Zy02NGdiLXB1cnBsZS1kZXNrdG9wLWRldGFpbC0xX0Zvcm1hdC05NzZ8ZWU4OGMxZTUwYzFkMTE5YmY2MDBjMGE4ZjlhNmFlMTFhNzkxM2Y2YzgyMzJmNzA1ZDExY2RiNjE1MzZjYjU0NA",
        stock: "25",
        description: "Descripcion de Iphone 12"
    },
    {
        id: "2",
        name: "Samsung S21",
        price: 800,
        category: "celular",
        img: "https://images.samsung.com/is/image/samsung/p6pim/latin/galaxy-s21/gallery/latin-galaxy-s21-5g-g991-sm-g991bzvktpa-368316811?$650_519_PNG$",
        stock: "25",
        description: "Descripcion de Samsung S21"
    },
    {
        id: "3",
        name: "Ipad 8va generacion",
        price: 1200,
        category: "tablet",
        img: "https://www.izalo.com.ar/img/14/ipad2020herospacewifiselect_1.jpg",
        stock: "25",
        description: "Descripcion de Ipad 8va generacion"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    } )
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    } )
}