import { Router } from "express";
import { deleteSingleProduct, getAllProducts, getSingleProduct } from "../controllers/productController.js";
import { productIdValidation } from "../valitator/productValidator.js";
import { validate } from "../valitator/index.js";

const router = Router();


// Get All products
router.get("/", getAllProducts);

// Get Single products
router.get("/:id", productIdValidation, validate, getSingleProduct);

// Delete Single products
router.delete("/:id", productIdValidation, validate, deleteSingleProduct);

export default router;