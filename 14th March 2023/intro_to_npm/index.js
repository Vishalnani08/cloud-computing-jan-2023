const express = require("express");
const app = express();

app.use(express.json());

const sumOfAllProductsInCart = () => {
  // Hardcoding for testing purpose
  return 2000;
};

/* Assume you're building a ecommerce app */
/* Just image that the user has added few items to his cart and you're supposed to
calculate the final price of all products in his cart and show him a QR code 
so that he can make the payment */
const finalPrice = sumOfAllProductsInCart();

/* Require the package */
const qr = require("qr-image");

app.get("/qrCode/:name?", function (req, res) {
  const { name = 'Prathap Chandra' } = req.params;
  const message = `Hey ${name}!!! The final price is ${finalPrice}. Happy Shopping!!!`;
  const code = qr.image(message, { type: "png" });
  res.setHeader("Content-type", "image/png"); //sent qr image to client side
  code.pipe(res);
});

app.listen(9200, () => {
  console.log("App running on port 9200");
});
