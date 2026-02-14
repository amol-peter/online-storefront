import products from '../products.json' with { type: 'json' };

export const getAllProducts = (req, res) => {
  // console.log(products);
  res.json(products);
}


export const getProductById = (req, res) => {
    const productId = parseInt(req.params.id)

    const product = products.find(product => product.id === productId)
    if (!product) {
        return res.status(404).json({msg: "Product not found"});
    }
    res.json(product);
}
