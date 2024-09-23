import express, {Express, Request, Response} from "express"

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hola World and TypeScript at Allianz!");
});


app.get("/home", (req: Request, res: Response) => {
  res.send("home API!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});