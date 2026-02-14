import express from 'express';


const app = express();
const PORT = 3000;

app.use(express.json());


// const products = [
// {
//   "id": 1,
//   "name": "test  ",
//   "category": "testcategory",
// }
// ];

app.get("/", (req, res)=> {

  res.send("Welcome to our Online Storefront API");

})




app.listen(PORT, () => {
  console.log(`The Server is running on port http://localhost:${PORT}`);
});
