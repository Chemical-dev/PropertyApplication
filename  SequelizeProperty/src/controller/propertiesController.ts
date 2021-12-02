import { Properties } from "../models/properties";
import { v4 as uuidv4 } from 'uuid';
import express, { Request, Response } from "express"







// export async function Create (req:Request, res:Response) {
//     // First try to find the record
//     const id  = uuidv4();
//     try{
//     const { status, type, state, city, address, price, Created_on, image_url } = req.body;
    
//    const foundItem = await Properties.findOne({state});
//    if (!foundItem) {
   
//         // Item not found, create a new one
//         const item = await Properties.create({id, status, type, state, city, address, price, Created_on, image_url })
//         return  res.json(item.rows[0]);
//     }
// } catch(err) {

//     console.log(err);
//     }
// };

export async function Create(req: Request, res: Response){
    console.log("i am here");
    const id = uuidv4()
    const { status, type, state, city, address, price, Created_on, image_url} = req.body;
    const result = await Properties.findAll({where: {id: id}},(err:Error, result:Properties)=>{
        if (result.rows[0]) {
            return res.status(400).json({success: false, error: "Properties already exists"})
        };
    })
  
    
    const property = await Properties.create(
        { status, type, state, city, address, price, Created_on, image_url})
      

        return res.status(200).json(property);
}


export async function viewProperties(req: Request, res: Response){
    try {
        const properties = await Properties.findAll();
        return res.json({properties})

    } catch (err) {
        console.error(err);
    }
};


export async function viewPropertyById(req: Request, res: Response){
    try {
        const {id} = req.params;
        const result = await Properties.findOne({where: {id: id}},(err:Error, result:Properties)=>{
            
                return res.status(200).json(result);
        
        })

    } catch (err) {
        console.error(err);
    }
};





 export async function updateproperty(req: Request, res: Response){
    try {
        const { id } = req.params;
        const {status, type, state, city, address, price, Created_on, image_url }:any = req.body;
        const foundItem = await Properties.findOne({where: {id: id}});
        if (foundItem) {
         
         // Found an item, update it
         const item = await foundItem.set({status:status, type:type, state:state, city:city, address:address, price:price, Created_on:Created_on, image_url:image_url });
         return {item, created: true};}

    } catch (err) {
        console.error(err);
    }
}

 
export async function deleteproperty(req: Request, res: Response){
    
    if (!req.params) {
        return {msg: 'No Id specified..', payload: 1};
    }

    try {
        return !!await Properties.destroy({
            where: {
                id: req.params
            }
        });
    } catch (e) {
        return false;
    }
    
};


export async function markproperty(req: Request, res: Response){
    try {
        const { id } = req.params;
        const property = await Properties.findOne({where: {id: id}})
        res.json("Property sold!");

    } catch (err) {
        console.error(err);
    }
}


export async function viewpropertytype(req: Request, res: Response){
    console.log("i made it here")
       try {
       
           const { type } = req.params;
           const property = await Properties.findAll({where: {type: type}})
           res.json(property.rows);
       
       } catch (err) {
           console.error(err);
       }
   };
