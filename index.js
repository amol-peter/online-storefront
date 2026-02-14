import express from 'express';
import router from './routes/productRoute.js';


const app = express();
const PORT = 3000;

app.use(express.json());


app.get("/", (req, res)=> {

  res.send("Welcome to our Online Storefront API");

})

app.use("/api/products",router);




app.listen(PORT, () => {
  console.log(`The Server is running on port http://localhost:${PORT}`);
});
