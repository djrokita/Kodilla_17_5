const express = require("express");
const app = express();

app.use("/store", (req, res, next) => {
  console.log("Jestem pośrednikiem przy żądaniu do /store");
  next();
});

app.get("/", (req, res) => {
  console.log("Sent request GET");
  res.send("To jest tylko próbne zapytanie do serwera");
});

app.get("/store", (req, res) => {
  console.log("Sent request GET");
  res.send("To jest sklep");
});

app.use((req, res, next) =>
  res.status(404).send("Strona o podanym adresie nie istnieje :(")
);

const server = app.listen(3000, () => {
  const port = server.address().port;
  console.log("Serwer uruchomiony, nasłuchuje na localhost:", port);
});
