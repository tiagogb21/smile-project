import * as express from "express";
import route from "./routes";

const cors = require("cors");

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(cors());

    this.config();

    this.app.get("/", (req, res) => res.json({ ok: true }));

    this.app.use(route);
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Methods",
        "GET,POST,DELETE,OPTIONS,PUT,PATCH"
      );
      res.header("Access-Control-Allow-Headers", "*");
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use(route);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
