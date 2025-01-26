const jwt = require("jsonwebtoken");

const createJsonWebToken = (payload, secretKey, expiresIn = "7d") => {
  console.log(payload);

  if (typeof payload != "object" || !payload) {
    throw new Error("Payload should be a non-empty object");
  }
  if (typeof secretKey != "string" || secretKey == "") {
    throw new Error("Secret key should be a non-empty string");
  }

  try {
    const token = jwt.sign(payload, secretKey, { expiresIn });
    return token;
  } catch (error) {
    console.log("Failed to create jwt token : ", error);
    throw error;
  }
};

module.exports = { createJsonWebToken };
