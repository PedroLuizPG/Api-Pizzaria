import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";

import { router } from "./routes";
import fileUpload from "express-fileupload";

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload({
  limits:{fileSize: 50 * 1024 * 1024} //#no max arquivos de 50mb
}))
app.use(router);

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp'))
)

const errorHandler = (err, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    res.status(400).json({ error: err.message });
    return;
  }
  res.status(500).json({ status: "Error", message: "Internal server error" });
  return;
};

app.use(errorHandler);
app.listen(process.env.PORT, () => console.log("Servidor ON!!!"));
