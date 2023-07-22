const cartModel = require("../model/cart");
exports.createCart = async (req, res) => {
  try {
    const cart = await cartModel.create({});
    req.user.cart = cart._id;
    await req.user.save();
    res.status(201).json({
      success: true,
      cart,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.addProductInCart = async (req, res) => {
  try {
    // id of adding product
    const productId = req.params.id;
    // console.log(req.user.cart);

    // find the cart from the cart collection
    const cart = await cartModel.findOne({ _id: req.user.cart._id });

    // find the product present in cart 
    const cartProtuct=cart.products.find((product)=>product._id==productId);

    // console.log(cartProtuct)
    if(cartProtuct)
    {
        cartProtuct.quantity+=1;
    }
    else{
        cart.products.push(productId);
    }
    
    await cart.save();

    const Cart=await cartModel.find({}).populate("products");
    res.status(200).json({
      success: true,
      Cart
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteProductFromCart = async (req, res) => {
  try {
    // id of adding product
    const productId = req.params.id;

    // find the cart from the cart collection
    const cart = await cartModel.findOne({ _id: req.user.cart._id });

    // find the index of the product from cart's products array  
    const productIndex = cart.products.findIndex((product)=>product._id==productId);

    // console.log(productIndex)
    if(productIndex===-1)
    {
        return res.status(404).json({
            success:false,
            message:"product not found"
        })
    }
    cart.products.splice(productIndex, 1);
    await cart.save();
    const Cart=await cartModel.find({}).populate({path:'products',select:'_id'});
    res.status(200).json({
      success: true,
      Cart
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


exports.cartsDetails=async(req,res)=>{
  try {
    const cart=await cartModel.findOne({_id:req.user.cart._id}).populate({path:"products",populate:{path:"productId"}});
    console.log(cart)
    res.status(200).json({
      success:true,
      cart
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
