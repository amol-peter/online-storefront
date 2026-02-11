import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res)=> {
  res.send("Welcome to our Online Storefront API");
})





app.listen(PORT, () => {
  console.log(`The Server is running on port http://localhost:${PORT}`);
});
