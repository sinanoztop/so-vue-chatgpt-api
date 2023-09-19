const express = require("express");

const fix_router = express.Router();

const { ai } = require("../helpers/ai");

const fix_text = async (input) => {
  try {
    const completion = await ai.createChatCompletion({
      model: process.env.GPT_MODEL,
      messages: [
        {
          role: "user",
          content: input,
        },
      ],
    });

    return {
      result: "success",
      message: completion.data.choices[0].message.content,
    };
  } catch (error) {
    return { result: "error" };
  }
};

fix_router.post("/fix", async (req, res) => {
  let _input = req.body.text;
  let _type = req.body.type;
  let _question = "";
  if (_type == "fix") {
    _question = `İmla hatalarını düzeltir misin? ${_input}`;
  } else if (_type == "recipes") {
    _question = `${_input}. yemeğinin tarifini verir misin?`;
  } else if (_type == "food") {
    _question = `${_input}. malzemeleri ile hangi yemekleri yapabilirim?`;
  } else if (_type == "book") {
    _question = `${_input}. kategorisinde bulunan en iyi 10 kitap benim için bulabilir misin?`;
  } else if (_type == "series") {
    _question = `${_input}. kategorisinde bulunan en iyi 10 diziyi benim için bulabilir misin?`;
  } else if (_type == "movies") {
    _question = `${_input}. kategorisinde bulunan en iyi 10 filmi benim için bulabilir misin?`;
  } else if (_type == "questions") {
    _question = `${_input}. hakkında röportaj yapacağım. Bana 6 tane soru oluşturabilir misin?`;
  } else if (_type == "creative-ideas") {
    _question = `${_input}. hakkında yaratıcı fikirlere ihtiyacım var. Bana bu konu hakkında yaratıcı fikirler verebilir misin?`;
  }
  let _res = await fix_text(_question);
  res.send(_res);
});

module.exports = {
  fix_router,
};
