const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://thiagocontato1232:tNBa2wr7XO6EODbm@cluster0.ob27bb5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    const database = client.db("Teste");
    const colletion = database.collection("Pecas");

    await InsertOne(colletion);

    await colletion
      .find({})
      .toArray()
      .then((respo) => {})
      .catch((erro) => {
        console.log(erro);
      });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run();

client.connect();
// Send a ping to confirm a successful connection
client.db("admin").command({ ping: 1 });
const Data = new Date();
const database = client.db("AutomationMange");
let List = ["PecasGrandes", "PecasMedias", "PecasPequenas"];

List.forEach((element) => {
for (let index = 0; index < 100; index++) {
  const colletion = database.collection("PecasMedias");
  colletion.insertOne({
    data: `${
      Data.getDate().toString().length === 1
        ? `0${Data.getDate()}`
        : Data.getDate()
    }/${
      Data.getMonth().toString().length === 1
        ? `0${Data.getMonth() + 1}`
        : Data.getMonth() + 1
    }/${Data.getFullYear()}`,
  });

}
console.log("Add");
});
console.log("Sucesso");
