const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/api/orderStatuses", (req, res, next) => {
  setTimeout(() => {
    next();
  }, 1500);
});

server.get("/myOrders", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/orders.html"));
});

server.use("/api", router);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
