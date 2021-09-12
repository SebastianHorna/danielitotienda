import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClothesService {

    constructor() {
        console.log('Service ready to use');
    }
    
    private categories : Categories[]=[
        {
            idCategory : 'PMLN',
            name       : 'Polo Manga Larga Niño'
        },
        {
            idCategory : 'PMCN',
            name       : 'Polo Manga Corta Niño'
        },
        {
            idCategory : 'SDN',
            name       : 'Short Drill Niño'
        }
    ];

    private sizes : Sizes[]=[
        {
            idSize : 'S01',
            name   : 0
        },
        {
            idSize : 'S02',
            name   : 2
        },
        {
            idSize : 'S03',
            name   : 4
        },
        {
            idSize : 'S04',
            name   : 6
        },
        {
            idSize : 'S05',
            name   : 8
        },
        {
            idSize : 'S06',
            name   : 10
        },
        {
            idSize : 'S07',
            name   : 12
        }
    ];

    private brands : Brands[] = [
        {
            idBrand : 'Ot',
            name    : 'Otto'
        },
        {
            idBrand : 'OtK',
            name    : 'OttoKids'
        },
        {
            idBrand : 'Alx',
            name    : 'Alex'
        }
    ];

    private clothes : Clothes[]=[
        {
            idProduct: 'P01',
            stock : 20,
            idCategory: 'PMLN',
            idSize: 'S01',
            idBrand: 'Ot'
        },
        {
            idProduct: 'P02',
            stock : 20,
            idCategory: 'PMLN',
            idSize: 'S02',
            idBrand: 'Ot'
        },
        {
            idProduct: 'P03',
            stock : 20,
            idCategory: 'PMLN',
            idSize: 'S03',
            idBrand: 'Ot'
        },
        {
            idProduct: 'P04',
            stock : 20,
            idCategory: 'PMLN',
            idSize: 'S04',
            idBrand: 'Ot'
        },
        {
            idProduct: 'P05',
            stock : 20,
            idCategory: 'PMLN',
            idSize: 'S05',
            idBrand: 'Ot'
        },
        {
            idProduct: 'P06',
            stock : 20,
            idCategory: 'PMCN',
            idSize: 'S01',
            idBrand: 'OtK'
        },
        {
            idProduct: 'P07',
            stock : 20,
            idCategory: 'PMCN',
            idSize: 'S02',
            idBrand: 'OtK'
        },
        {
            idProduct: 'P08',
            stock : 20,
            idCategory: 'PMCN',
            idSize: 'S03',
            idBrand: 'OtK'
        },
        {
            idProduct: 'P09',
            stock : 20,
            idCategory: 'PMCN',
            idSize: 'S04',
            idBrand: 'OtK'
        },
        {
            idProduct: 'P10',
            stock : 20,
            idCategory: 'SDN',
            idSize: 'S01',
            idBrand: 'Alx'
        },
        {
            idProduct: 'P11',
            stock : 20,
            idCategory: 'SDN',
            idSize: 'S02',
            idBrand: 'Alx'
        },
        {
            idProduct: 'P12',
            stock : 20,
            idCategory: 'SDN',
            idSize: 'S03',
            idBrand: 'Alx'
        },
        {
            idProduct: 'P13',
            stock : 20,
            idCategory: 'SDN',
            idSize: 'S04',
            idBrand: 'Alx'
        },
    ]
    
    getClothes(){
        return this.clothes;
    }
    
    getCategories(){
        return this.categories;
    }

    getBrands(){
        return this.brands;
    }

    getSizes(){
        return this.sizes;
    }

    getClothesByCategory( categoryId:string ){
        let clothesSelect = [];
        for (let index = 0; index < this.clothes.length; index++) {
            if (this.clothes[index].idCategory == categoryId) {
                clothesSelect.push(this.clothes[index]);
            }
        }
        return clothesSelect;
    }

}

export interface Clothes{
    idProduct  : string;
    stock      : number;
    idCategory : string;
    idSize     : string;
    idBrand    : string;
}

export interface Categories{
    idCategory : string;
    name       : string;
}

export interface Brands{
    idBrand : string;
    name    : string;   
}

export interface Sizes{
    idSize : string;
    name   : number;
}