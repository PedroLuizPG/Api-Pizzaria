"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const createUserController_1 = require("./controllers/user/createUserController");
const authUserController_1 = require("./controllers/user/authUserController");
const detailUserController_1 = require("./controllers/user/detailUserController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const createCategoryController_1 = require("./controllers/category/createCategoryController");
const listCategoryCrontroller_1 = require("./controllers/category/listCategoryCrontroller");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const listByCategoryController_1 = require("./controllers/product/listByCategoryController");
const multer_2 = __importDefault(require("./config/multer"));
const createOrderController_1 = require("./controllers/order/createOrderController");
const removeOrderController_1 = require("./controllers/order/removeOrderController");
const addItemController_1 = require("./controllers/order/addItemController");
const removeItemController_1 = require("./controllers/order/removeItemController");
const sendOrderController_1 = require("./controllers/order/sendOrderController");
const listOrdersController_1 = require("./controllers/order/listOrdersController");
const detailOrderController_1 = require("./controllers/order/detailOrderController");
const finishOrderController_1 = require("./controllers/order/finishOrderController");
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
//---ROTAS USERS---
router.post("/users", new createUserController_1.CreateUserController().handle);
router.post("/session", new authUserController_1.AuthUserController().handle);
router.get("/me", isAuthenticated_1.isAuthenticated, new detailUserController_1.DetailUserController().handle);
//---ROTAS CATEGORIES---
router.post("/category", isAuthenticated_1.isAuthenticated, new createCategoryController_1.CreateCategoryController().handle);
router.get("/category", isAuthenticated_1.isAuthenticated, new listCategoryCrontroller_1.ListCategoryController().handle);
//--ROTAS PRODUCTS--
// router.post(
//   "/product",
//   isAuthenticated,
//   upload.single("file"),
//   new CreateProductController().handle
// );
router.post("/product", isAuthenticated_1.isAuthenticated, new CreateProductController_1.CreateProductController().handle);
router.get("/category/product", isAuthenticated_1.isAuthenticated, new listByCategoryController_1.ListByCategoryController().handle);
//---ROTAS ORDERS---
router.post("/order", isAuthenticated_1.isAuthenticated, new createOrderController_1.CreateOrderController().handle);
router.delete("/order", isAuthenticated_1.isAuthenticated, new removeOrderController_1.RemoveOrderController().handle);
router.post("/order/addItem", isAuthenticated_1.isAuthenticated, new addItemController_1.AddItemController().handle);
router.delete("/order/remove", isAuthenticated_1.isAuthenticated, new removeItemController_1.RemoveItemController().handle);
router.put("/order/send", isAuthenticated_1.isAuthenticated, new sendOrderController_1.SendOrderController().handle);
router.put("/order/finish", isAuthenticated_1.isAuthenticated, new finishOrderController_1.FinishOrderController().handle);
router.get("/orders", isAuthenticated_1.isAuthenticated, new listOrdersController_1.ListOrdersController().handle);
router.get("/order/detail", isAuthenticated_1.isAuthenticated, new detailOrderController_1.DetailOrderController().handle);
