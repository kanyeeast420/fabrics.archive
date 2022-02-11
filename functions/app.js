import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import serverless from "serverless-http";

const app = express();
const router = express.Router();

app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);

router.get("/", async (req, res) => {
  const ip = req.connection.remoteAddress;

  res.json({
    ok: true,
    ip: ip,
  });
});

app.use("/", router);

module.exports.handler = serverless(app);
