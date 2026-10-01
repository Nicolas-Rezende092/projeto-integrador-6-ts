import express from "express";
import produtoRoutes from "./routes/produto.routes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/produtos", produtoRoutes);

app.listen(PORT, () => {
  console.log(`API de produtos executando em http://localhost:${PORT}`);
});
