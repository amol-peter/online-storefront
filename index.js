import express from 'express';
import products from './products.json' with { type: 'json' };

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

app.get("/products", (req,res) => {
  // console.log(products);
  res.json(products);
  
})

app.get("/products/:id", (req, res)=> {
  const productId = parseInt(req.params.id)

  const product = products.find(product => product.id === productId)

  if(!product){
    res.status(404).json({msg: "Product not found"})
  }

  res.json(product);
})





app.listen(PORT, () => {
  console.log(`The Server is running on port http://localhost:${PORT}`);
});
