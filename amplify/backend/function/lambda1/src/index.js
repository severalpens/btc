
var cryptoLib = require("crypto");


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const bufToStr = (b) => "0x" + b.toString("hex");
  const sha256 = (x) => cryptoLib.createHash("sha256").update(x).digest();
  const random32 = () => cryptoLib.randomBytes(32);

  function newSecretHashPair() {
    const secret = random32();
    const hash = sha256(secret);
    return {
      secret: bufToStr(secret),
      hash: bufToStr(hash),
    };
  };

  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*"
    },
    // body: JSON.stringify('Hello from Lambda!'),
    body: JSON.stringify(newSecretHashPair()),
  };
};
