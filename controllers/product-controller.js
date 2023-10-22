const ctrlWrapper = require('../helpers/ctrlWrapper.js');
const { Product } = require('../models/Product.js');
const { ProductList } = require('../models/ProductList.js');

const getProduct = async (req, res) => {
  const { _id: owner } = req.user;
  const product = await Product.find({owner});
  res.status(200).json({
    status: "OK",
    code: 200,
    data: product,
    });
};

const getProductList = async (req, res) => {
  const productList = await ProductList.find();
  res.status(200).json({
    status: "OK",
    code: 200,
    data: productList,
    });
};

module.exports = { 
    getProduct: ctrlWrapper(getProduct), 
    getProductList: ctrlWrapper(getProductList), 
};