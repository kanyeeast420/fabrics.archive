const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const serverless = require("serverless-http");

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
