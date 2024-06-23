const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact,
} = require("../controller/contactController");

// @route is /api/contact/getcontacts
// public api
router.get("/getcontacts", getContacts);

// @route is /api/contact/createcontact
// public api
router.post("/createcontact", createContact);

// @route is /api/contact/updatecontact/id
// public api
router.put("/updatecontact/:id", updateContact);

// @route is /api/contact/deletecontact/id
// public api
router.delete("/deletecontact/:id", deleteContact);

// @route is api/contact/getcontact/id
//public api
router.get("/getcontact/:id", getContact);

module.exports = router;
