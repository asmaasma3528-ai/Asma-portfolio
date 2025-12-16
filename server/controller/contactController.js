import Contact from "../models/contactModels.js";
import ApplicationError from "../errHandler/error.js";

  export const createContacts = async(req, res, next) => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        throw new ApplicationError("Please fill out all the fields...", 400);
      }

      const newContact = new Contact({name, email, message});

      await newContact.save();
      
      res.status(201).json({success:true, data:newContact});

    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Something went wrong in the server",
      });
      next(err);
    }
  }

  export const getContacts = async(req, res, next) => {
  try{

   const fetchContacts = await Contact.find().sort({createdAt:-1});

   res.status(200).json({message:true, data:fetchContacts})

  }catch(err){
    res.status(500).json({success:false, message:"Something went wrong in the server"});
    next(err);
  }
  }

