import { ProductModel, ProductsAttributes } from "../models";


export class ProductRepository{
    async CreateProduct({
        name,
        desc,
        banner,
        type,
        unit,
        price,
        available,
        supplier}:ProductsAttributes){
        try {
            const product = await ProductModel.create({
                name,
                desc,
                banner,
                type,
                unit,
                price,
                available,
                supplier            })
            return product;
        } catch (error) {
            console.log(error)
        }
    }

    async FindProduct(_id: string){
        const existingProduct = await ProductModel.findOne({_id})
        return existingProduct;
    }
    async FindAllProducts(){
        const products = await ProductModel.find({})
        return products;
    }
}