const express = require("express");

const image_router = express.Router();

const { ai } = require("../helpers/ai");

const find_image = async (input) => {
  try {
    const response = await ai.createImage({
      prompt: input,
      n: 3,
      size: "1024x1024",
    });

    return {
      result: "success",
      message: response.data,
    };
  } catch (error) {
    return { result: "error" };
  }
};

image_router.post("/search", async (req, res) => {
  let _input = req.body.text;
  let _question = `${_input}`;
  let _res = await find_image(_question);
  res.send(_res);
});

module.exports = {
  image_router,
};
