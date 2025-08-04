import { Request, Response } from "express";
import { CreateUserServices } from "../../services/user/createUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const createUserService = new CreateUserServices();

    try {
      const user = await createUserService.execute({ name, email, password });
      res.json(user);
      return
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export { CreateUserController };
