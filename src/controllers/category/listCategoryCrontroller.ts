import { Request, Response } from "express";

import { ListCategoryService } from "../../services/category/listCategoryService";

class ListCategoryController {
  async handle(req: Request, res: Response) {
    const listCategoryService = new ListCategoryService();
    const listCategory = await listCategoryService.execute();

     res.json(listCategory);
  }
}

export { ListCategoryController };
