const { Router } = require("express");
const { findProduct, searchProduct } = require("../controllers/items");

const router = Router();

router.get("/api/items", searchProduct);

router.get("/api/items/:id", findProduct);

module.exports = router;
