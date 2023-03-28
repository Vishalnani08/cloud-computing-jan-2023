const googleTranslator = require("translate-google");

const messageToTranslate = {
  message: "RRR won an Oscar",
};

const translationOptions = {
  from: "en",
  to: "te",
};

googleTranslator(messageToTranslate, translationOptions)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

setTimeout(() => {
    console.log('File execution exit avakunda oka 6 seconds kavalni delay chesinamu. Meeru e message chuste dani ardam e message 6 seconds teskundi execute avadaniki');
}, 6000);

