import { Request, Response } from "express";
import { AuthUserServices } from "../../services/user/authUserService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authUserServices = new AuthUserServices();

    try {
      const auth = await authUserServices.execute({ email, password });
      res.json(auth);
      return;
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  }
}

export { AuthUserController };
