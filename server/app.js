const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(express.json());

app.use(cors());

const { fix_router } = require("./controller/fix");
const { image_router } = require("./controller/image");

app.use("/ai/text", fix_router);
app.use("/ai/image", image_router);

app.use((req, res, next) => {
  res.status(404).json({ result: "invalid_request" });
  res.status(500).json({ result: "error" });
});

app.listen(process.env.APP_PORT || 3001, () => {});
