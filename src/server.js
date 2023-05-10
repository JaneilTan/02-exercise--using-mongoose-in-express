const port = process.env.PORT || 5001;
const app = require("./app");

app.listen(port, () => {
  console.log(`House Tricks API server started at http://localhost:${port}`);
});
