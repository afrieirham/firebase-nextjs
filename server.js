const functions = require("firebase-functions");
const { default: next } = require("next");

const app = next({
  dev: false,
  conf: { distDir: ".next" },
});
const handle = app.getRequestHandler();

exports.server = functions
  .region("asia-southeast1")
  .https.onRequest((request, response) => {
    return app.prepare().then(() => handle(request, response));
  });
