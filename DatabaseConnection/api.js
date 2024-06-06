const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const uri =
  "mongodb+srv://thiagocontato1232:wECqChmisOkQlbSZ@cluster0.ob27bb5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
app.use(cors());

// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "https://automationmange.vercel.app/Main/index.html");

//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );

//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );

//   res.setHeader("Access-Control-Allow-Credentials", true);

//   next();
// });

app.get("/chart-data-pequena", async (req, res) => {
  await client.connect();

  await client.db("admin").command({ ping: 1 });

  const database = client.db("AutomationMange");

  const collection = await database
    .collection("PecasPequenas")
    .find({})
    .toArray();

  try {
    res.status(200).send(collection);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/chart-data-media", async (req, res) => {
  await client.connect();

  await client.db("admin").command({ ping: 1 });

  const database = client.db("AutomationMange");

  const collection = await database
    .collection("PecasMedias")
    .find({})
    .toArray();

  try {
    res.status(200).send(collection);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/chart-data-grande", async (req, res) => {
  await client.connect();

  await client.db("admin").command({ ping: 1 });

  const database = client.db("AutomationMange");

  const collection = await database
    .collection("PecasGrandes")
    .find({})
    .toArray();

  try {
    res.status(200).send(collection);
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

async function Delete() {
  await client.connect();

  await client.db("admin").command({ ping: 1 });

  const database = client.db("Teste");
  await database
    .collection("Pecas")
    .deleteMany({})
    .then(() => {
      console.log("Sucesso");
    })
    .catch((err) => console.log(err));
}
// Delete()
