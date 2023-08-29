const catagory = require("../model/catagory");

exports.createCatagory = async (req, res) => {
  try {
    const { name } = req.body;
    const Catagory = await catagory.create({name});
    console.log(Catagory)
    res.status(201).json({
        success:true,
        Catagory
    })
  } catch (error) {
    res.status(201).json({
        success:false,
        error:error.message
    })
  }
};
