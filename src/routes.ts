import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/authUserController";
import { DetailUserController } from "./controllers/user/detailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateCategoryController } from "./controllers/category/createCategoryController";
import { ListCategoryController } from "./controllers/category/listCategoryCrontroller";

import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/listByCategoryController";

import uploadConfig from "./config/multer";

import { CreateOrderController } from "./controllers/order/createOrderController";
import { RemoveOrderController } from "./controllers/order/removeOrderController";
import { AddItemController } from "./controllers/order/addItemController";
import { RemoveItemController } from "./controllers/order/removeItemController";
import { SendOrderController } from "./controllers/order/sendOrderController";
import { ListOrdersController } from "./controllers/order/listOrdersController";
import { DetailOrderController } from "./controllers/order/detailOrderController";
import { FinishOrderController } from "./controllers/order/finishOrderController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

//---ROTAS USERS---
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

//---ROTAS CATEGORIES---
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);
router.get("/category", isAuthenticated, new ListCategoryController().handle);

//--ROTAS PRODUCTS--
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);
router.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryController().handle
);

//---ROTAS ORDERS---
router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);

router.post("/order/addItem", isAuthenticated, new AddItemController().handle);
router.delete(
  "/order/remove",
  isAuthenticated,
  new RemoveItemController().handle
);
router.put("/order/send", isAuthenticated, new SendOrderController().handle);
router.put(
  "/order/finish",
  isAuthenticated,
  new FinishOrderController().handle
);

router.get("/orders", isAuthenticated, new ListOrdersController().handle);
router.get(
  "/order/detail",
  isAuthenticated,
  new DetailOrderController().handle
);

export { router };
