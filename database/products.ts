interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    category: ValidTypes;
    collection: 'pastel'|'dark'
}

type ValidSizes = 'S'|'M'|'L'|'XL';
type ValidTypes = 'camisas'|'pantalones'|'faldas'|'polerones'|'accesorios';

interface SeedData {
    products: SeedProduct[],
}




export const initialData: SeedData = {
    products: [
        {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                'sweater1.jpg',
            ],
            inStock: 7,
            price: 18000,
            sizes: ['S','M','L','XL'],
            slug: "sweater_pastel_pink",
            category: 'polerones',
            tags: ['sweater'],
            title: "Sweater Pastel Pink",
            collection: 'pastel'
        },
        {
            description: "TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                'camisa1.jpg',
            ],
            inStock: 5,
            price: 16000,
            sizes: ['S','M','XL'],
            slug: "camisa_pastel_pink",
            category: 'camisas',
            tags: ['camisa'],
            title: "Camisa Pastel Pink",
            collection: 'pastel'
        },
        {
            description: "TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                'falda1.jpg',
            ],
            inStock: 5,
            price: 15000,
            sizes: ['S','M','XL'],
            slug: "falda_pastel_pink",
            category: 'faldas',
            tags: ['falda'],
            title: "Falda Pastel Pink",
            collection: 'pastel'
        },
        {
            description: "TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                'falda2.jpg',
            ],
            inStock: 5,
            price: 15000,
            sizes: ['S','M','XL'],
            slug: "falda_black",
            category: 'faldas',
            tags: ['falda'],
            title: "Falda Black",
            collection: 'dark'
        },
        {
            description: "TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                'pantalon1.jpg',
            ],
            inStock: 5,
            price: 20000,
            sizes: ['S','M','XL'],
            slug: "black_pants",
            category: 'pantalones',
            tags: ['pantalon'],
            title: "Black Pants",
            collection: 'dark'
        },
        {
            description: "TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                'camisa2.jpg',
            ],
            inStock: 5,
            price: 16000,
            sizes: ['S','M','XL'],
            slug: "camisa_black",
            category: 'camisas',
            tags: ['camisa'],
            title: "Camisa Black",
            collection: 'dark'
        },
        {
            description: "TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                'chocker1.jpg',
            ],
            inStock: 5,
            price: 2500,
            sizes: ['S','M'],
            slug: "chocker_pastel_heart",
            category: 'accesorios',
            tags: ['chocker'],
            title: "Chocker Pastel Heart",
            collection: 'pastel'
        },
        {
            description: "TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                'chocker3.jpeg',
            ],
            inStock: 5,
            price: 3000,
            sizes: ['S','M'],
            slug: "chocker_pastel_moon",
            category: 'accesorios',
            tags: ['chocker'],
            title: "Chocker Pastel Moon",
            collection: 'pastel'
        },
        {
            description: "TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                'tote2.jpg',
            ],
            inStock: 5,
            price: 5000,
            sizes: ['M'],
            slug: "tote_bag_pastel_pink",
            category: 'accesorios',
            tags: ['totebag'],
            title: "Tote Bag Pastel Pink Heart",
            collection: 'pastel'
        },
        {
            description: "TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                'chocker4.jpg',
            ],
            inStock: 5,
            price: 2500,
            sizes: ['S','M'],
            slug: "chocker_dark_heart",
            category: 'accesorios',
            tags: ['chocker'],
            title: "Chocker Dark Heart",
            collection: 'dark'
        },
        {
            description: "TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                'chocker2.jpg',
            ],
            inStock: 5,
            price: 3000,
            sizes: ['S','M'],
            slug: "chocker_dark_circle",
            category: 'accesorios',
            tags: ['chocker'],
            title: "Chocker Dark Circle",
            collection: 'dark'
        },
        {
            description: "TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                'tote1.jpg',
            ],
            inStock: 5,
            price: 5000,
            sizes: ['M'],
            slug: "tote_bag_dark",
            category: 'accesorios',
            tags: ['totebag'],
            title: "Tote Bag Dark",
            collection: 'dark'
        },
    ]
}