import { Request, Response } from "express";
import { ProductRepository } from "../database";
import { IProductsAttributes } from "./product-service.dto";
import { FormatData } from "../utils"


//business logic

class ProductService{
    repository
    constructor(){
        this.repository = new ProductRepository()
    }

    async CreateProductFunc(productInput: IProductsAttributes){
        const {  
            name,
            desc,
            banner,
            type,
            unit,
            price,
            available,
            supplier } = productInput
        try {

            const product = await this.repository.CreateProduct( 
                {name,
                desc,
                banner,
                type,
                unit,
                price,
                available,
                supplier})
            
            return FormatData({product});
        } catch (error) {
            console.log(error)
            throw new Error(`${error}`)
        }
    }
    // async getAllProducts(){
    //     try {
    //         const products = await this.repository.FindAllproducts();
    //         return FormatData({products})
    //     } catch (error) {
            
    //     }
    // }
}

export default ProductService;