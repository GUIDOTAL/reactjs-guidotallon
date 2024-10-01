const products = [
    {
        id: 1,
        title: 'Remera Simple',
        price: '30000',
        category: 'Remeras',
        description: 'talles: XL, L, M, S, XS',
        image:
        'https://acdn.mitiendanube.com/stores/002/535/145/products/tecla_productpage_classicnegra_01_hero_desktop-ee80d79518f953bd5a17161744404898-640-0.webp',
    },
    {
        id: 2,
        title: 'Short Clasico',
        price: '20000',
        category: 'Pantalones',
        description: 'talles: 38, 40, 42, 44, 50, 52',
        image:
        'https://d28hi93gr697ol.cloudfront.net/f18e731e-a707-312a/img/Producto/3e43270b-7879-f85c-eade-e3489ea6930f/WhatsApp-Image-2022-10-05-at-4-01-02-PM-6346ba7d38257.jpg',
    },
    {
        id: 3,
        title: 'Campera Rompevientos',
        price: '60000',
        category: 'Camperas',
        description: 'Colores: rojo, azul y verde',
        image:
        'https://http2.mlstatic.com/D_NQ_NP_966348-MLA69967204329_062023-O.webp',
    },
    {
        id: 4,
        title: 'Campera Abrigada',
        price: '70000',
        category: 'Camperas',
        description: 'Colores: rojo, azul y verde',
        image:
        'https://http2.mlstatic.com/D_NQ_NP_731201-MLA70580986610_072023-O.webp',
    },
    {
        id: 5,
        title: 'Remera Manchester United',
        price: '45000',
        category: 'Remeras',
        description: 'Colores: rojo, blanco',
        image:
        'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8703cd18/products/AD_H13881/AD_H13881-1.JPG',
    },
    {
        id: 6,
        title: 'Calzas Sport',
        price: '25000',
        category: 'Pantalones',
        description: 'Colores: rojo, azul y verde',
        image:
        'https://acdn.mitiendanube.com/stores/001/086/288/products/portada-ant_2054-31ebb8886a80034e0716984244688170-1024-1024.jpg',
    },
    {
        id: 7,
        title: 'Camperon Deportivo',
        price: '100000',
        category: 'Camperas',
        description: 'Colores: rojo, azul y verde',
        image:
        'https://acdn.mitiendanube.com/stores/001/165/935/products/campera-joma-urban-winter-jacket-j201800463501-037bbe2c7fbf5de50416154177639969-640-0.jpg',
    },
    {
        id: 8,
        title: 'Camiseta Banfield',
        price: '45000',
        category: 'Remeras',
        description: 'Colores: verde y blanca',
        image:
        'https://acdn.mitiendanube.com/stores/001/312/744/products/frgtrhytujkioo-35efc5d46eb479869516963729885900-640-0.jpg',
    },

];
    
export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
    resolve(products);
    }, 2000);
});
    
export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};

    
export const getProductsByCategory = (categoryid) => {
    return products.filter((product) => product.category === categoryid);
    
};
    