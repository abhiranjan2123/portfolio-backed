const Contact = require("../model/contactModel");

const getContacts =async (req, res) => {
  try {
 const result=await Contact.find({})
  res.status(200).json({data:result})

  } catch (err) {
    res.status(400).json({ error:"errorr"});
  }
};

const createContact = async (req, res) => {
  try {
    const con=new Contact({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
      })
    con.save()
    res.status(201).json({ data: con });
  } catch (err) {
    console.log(err);
    res.status(401).json({ data: err });
  }
};

const updateContact = async(req, res) => {
  const { name, email, phone } = req.body;
  const result =await Contact.findByIdAndUpdate(req.params.id, { name, email, phone }, { new: true });

  res.json({ data:result });
};

const deleteContact = async(req, res) => {
  const result =await Contact.findByIdAndDelete(req.params.id)
  res.json({ data:"deleted successfully" });
};

const getContact = async (req, res) => {

    try{
      const result =await Contact.findById(req.params.id)

      res.status(200).json({data:result})

    }catch(err){
      res.status(400).json({error:"error"})
    }
};

module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact,
};
