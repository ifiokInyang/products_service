import ProductService from "../services/product-service";
import express, { Application, NextFunction, Request, Response } from "express";

export const Product = (app: Application) => {
    const service = new ProductService()

    app.post("/product/create", async (req: Request, res: Response, next: NextFunction) =>{
        try {
            const {  
                name,
                desc,
                banner,
                type,
                unit,
                price,
                available,
                supplier } = req.body

            const data  = await service.CreateProductFunc({
                name,
                desc,
                banner,
                type,
                unit,
                price,
                available,
                supplier })

            return res.status(201).json({data})
        } catch (error) {
            next(error)
            // throw new Error()
        }
    })

    // app.get("/customer/getCustomers", async (req: Request, res: Response, next: NextFunction) =>{
    //     try {
    //         // const { email, password, phone } = req.body
    //         //JOI validation here

    //         const data  = await service.getAllUsers()

    //         return res.status(200).json({data, message: "Successfully fetched all users"})
    //     } catch (error) {
    //         next(error)
    //         // throw new Error()
    //     }
    // })
}