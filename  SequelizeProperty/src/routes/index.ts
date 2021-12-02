import { NextFunction, Request, Response } from "express";
// import { createUser, logout, loginUser } from "../controllers/usercontroller";
// import { addproperty} from "../controllers/propertyController";
    //import { register, login} from "../controllers/userController";
   
    import { register } from "../controller/userController";
    import { Create , viewProperties, viewPropertyById, updateproperty,
         deleteproperty, markproperty, viewpropertytype} from "../controller/propertiesController";
    


var express = require('express');
var router = express.Router();


router.post('/register', register)
router.post('/create', Create)
router.get('/viewallproperties', viewProperties)
router.get('/viewPropertyById/:id', viewPropertyById)
router.put('/updatePropertyById/:id', updateproperty)
router.delete('/deletePropertyById/:id', deleteproperty)
 router.get("/markaproperty/:property_id", markproperty)
router.get("view/:type",  viewpropertytype)
router.post("/login")




export default router