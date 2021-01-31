/*
 * Copyright (c) 2021.
 * Joey Stoetzel, github.com/Joeyrstz
 * This project is part of my portfolio and was developed for educational and presentation purposes.
 * The use of the project for internal, external or profit-oriented purposes is prohibited without my consent.
 */

const imagesPath = process.env.PUBLIC_URL + '/assets/images/';
const hatsPath = imagesPath + 'shop/hats/';
const jacketsPath = imagesPath + 'shop/jackets/';
const sneakersPath = imagesPath + 'shop/sneakers/';
const womenPath = imagesPath + 'shop/women/';
const menPath = imagesPath + 'shop/men/';

const ShopData = [
    {
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
            {
                id: 1,
                name: 'Brown Brim',
                imageUrl: `${hatsPath}brown-brim.png`,
                price: 25
            },
            {
                id: 2,
                name: 'Blue Beanie',
                imageUrl: `${hatsPath}blue-beanie.png`,
                price: 18
            },
            {
                id: 3,
                name: 'Brown Cowboy',
                imageUrl: `${hatsPath}brown-cowboy.png`,
                price: 35
            },
            {
                id: 4,
                name: 'Grey Brim',
                imageUrl: `${hatsPath}grey-brim.png`,
                price: 25
            },
            {
                id: 5,
                name: 'Green Beanie',
                imageUrl: `${hatsPath}green-beanie.png`,
                price: 18
            },
            {
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: `${hatsPath}palm-tree-cap.png`,
                price: 14
            },
            {
                id: 7,
                name: 'Red Beanie',
                imageUrl: `${hatsPath}red-beanie.png`,
                price: 18
            },
            {
                id: 8,
                name: 'Wolf Cap',
                imageUrl: `${hatsPath}wolf-cap.png`,
                price: 14
            },
            {
                id: 9,
                name: 'Blue Snapback',
                imageUrl: `${hatsPath}blue-snapback.png`,
                price: 16
            }
        ]
    },
    {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
            {
                id: 1,
                name: 'Adidas NMD',
                imageUrl: `${sneakersPath}adidas-nmd.png`,
                price: 220
            },
            {
                id: 2,
                name: 'Adidas Yeezy',
                imageUrl: `${sneakersPath}yeezy.png`,
                price: 280
            },
            {
                id: 3,
                name: 'Black Converse',
                imageUrl: `${sneakersPath}black-converse.png`,
                price: 110
            },
            {
                id: 4,
                name: 'Nike White AirForce',
                imageUrl: `${sneakersPath}white-nike-high-tops.png`,
                price: 160
            },
            {
                id: 5,
                name: 'Nike Red High Tops',
                imageUrl: `${sneakersPath}nikes-red.png`,
                price: 160
            },
            {
                id: 6,
                name: 'Nike Brown High Tops',
                imageUrl: `${sneakersPath}nike-brown.png`,
                price: 160
            },
            {
                id: 7,
                name: 'Air Jordan Limited',
                imageUrl: `${sneakersPath}nike-funky.png`,
                price: 190
            },
            {
                id: 8,
                name: 'Timberlands',
                imageUrl: `${sneakersPath}timberlands.png`,
                price: 200
            }
        ]
    },
    {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
            {
                id: 1,
                name: 'Black Jean Shearling',
                imageUrl: `${jacketsPath}black-shearling.png`,
                price: 125
            },
            {
                id: 2,
                name: 'Blue Jean Jacket',
                imageUrl: `${jacketsPath}blue-jean-jacket.png`,
                price: 90
            },
            {
                id: 3,
                name: 'Grey Jean Jacket',
                imageUrl: `${jacketsPath}grey-jean-jacket.png`,
                price: 90
            },
            {
                id: 4,
                name: 'Brown Shearling',
                imageUrl: `${jacketsPath}brown-shearling.png`,
                price: 165
            },
            {
                id: 5,
                name: 'Tan Trench',
                imageUrl: `${jacketsPath}brown-trench.png`,
                price: 185
            }
        ]
    },
    {
        id: 4,
        title: 'Women',
        routeName: 'women',
        items: [
            {
                id: 1,
                name: 'Blue Tanktop',
                imageUrl: `${womenPath}blue-tank.png`,
                price: 25
            },
            {
                id: 2,
                name: 'Floral Blouse',
                imageUrl: `${womenPath}floral-blouse.png`,
            },
            {
                id: 3,
                name: 'Floral Dress',
                imageUrl: `${womenPath}floral-skirt.png`,
                price: 80
            },
            {
                id: 4,
                name: 'Red Dots Dress',
                imageUrl: `${womenPath}red-polka-dot-dress.png`,
                price: 80
            },
            {
                id: 5,
                name: 'Striped Sweater',
                imageUrl: `${womenPath}striped-sweater.png`,
                price: 45
            },
            {
                id: 6,
                name: 'Yellow Track Suit',
                imageUrl: `${womenPath}yellow-track-suit.png`,
                price: 135
            },
            {
                id: 7,
                name: 'White Blouse',
                imageUrl: `${womenPath}white-vest.png`,
                price: 20
            }
        ]
    },
    {
        id: 5,
        title: 'Men',
        routeName: 'men',
        items: [
            {
                id: 1,
                name: 'Camo Down Vest',
                imageUrl: `${menPath}camo-vest.png`,
                price: 325
            },
            {
                id: 2,
                name: 'Floral T-shirt',
                imageUrl: `${menPath}floral-shirt.png`,
                price: 20
            },
            {
                id: 3,
                name: 'Black & White Longsleeve',
                imageUrl: `${menPath}long-sleeve.png`,
                price: 25
            },
            {
                id: 4,
                name: 'Pink T-shirt',
                imageUrl: `${menPath}pink-shirt.png`,
                price: 25
            },
            {
                id: 5,
                name: 'Jean Long Sleeve',
                imageUrl: `${menPath}roll-up-jean-shirt.png`,
                price: 40
            },
            {
                id: 6,
                name: 'Burgundy T-shirt',
                imageUrl: `${menPath}polka-dot-shirt.png`,
                price: 25
            }
        ]
    }
]
export default ShopData;