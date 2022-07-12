export interface IProduct {

        id: number,
        attributes: {
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            description: string;
            images: {
                data: [
                    id: number,
                    attributes: {
                        name: string,
                        url: string
                    }
                ]
            };
            inStock: number;
            price: number;
            sizes: ISize[];
            slug: string;
            tags: string[];
            title: string;
            category: IType;
            collection: ICollection;
        }
        
    
    
}

type ISize = 'S'|'M'|'L'|'XL';
type IType = 'camisas'|'pantalones'|'faldas'|'polerones'|'accesorios';
type ICollection = 'pastel'|'dark'
