import server from "./server";
import * as env from "dotenv";
import path from "./core/routes/path";
const dotenv = env.config({ path: __dirname + "/.env" }).parsed;

const PORT = dotenv?.PORT || 3000;

server.listen(PORT, () => {
  console.log(`[server]: Server is running at PORT:${PORT}`);
  console.log(
    `[server]: See swagger in http://localhost:${PORT}${path.swagger}`
  );
});
