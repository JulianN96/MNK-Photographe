const { faTurkishLiraSign } = require("@fortawesome/free-solid-svg-icons")
const Product = require("../models/product")

exports.createProduct = (req,res,next) =>{
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  })
  product.save().then(
  () => {
    res.status(201).json({
      message: "Product POST Successful"
    })
  }).catch(
    (error) => {
      res.status(400).json({
        error: error
      })
    }
  )
}

exports.getOneProduct = (req, res, next) =>{
  Product.findOne({
    _id: req.params.id
  }).then(
    (product) => {
      res.status(200).json(product)
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      })
    }
    )
}


exports.modifyProduct = (res,req,next) => {
  const productUpdate = new Product({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  })
  Product.updateOne({_id: req.params.id}, productUpdate).then(
    () => {
      res.status(201).json({
        message: "Product Updated Successfully"
      })
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      })
    }
  )
}

exports.deleteProduct = (req, res, next) => {
  Product.deleteOne({_id: req.params.id}).then(
    ()=> {
      res.status(200).json({
        message: "Product Deleted!"
      })
    }
  ).catch(
    (error)=> {
      res.status(400).json({
        error: error
      })
    }
  )
}

exports.getAllProducts = (req,res,next) => {
  Product.find().then(
    (things)=>{
      res.status(200).json(things)
    }
  ).catch(
    (error) =>{
      res.status(400).json({
        error: error
      })
    }
  )
}