// * phones.js

const express = require("express");
const router = express.Router();

let phones = require("../phonesDatabase");

router.get("/", async (_req, res) => {
  try {
    res.status(200).json({
      data: phones
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  id = Number(id);
  try {
    let phone = phones.find(phone => phone.id === id);
    res.status(200).json({
      data: phone
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

module.exports = router;