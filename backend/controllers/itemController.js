const Item = require('../models/Item');

exports.reportItem = async (req,res) => {
    try{
        const { itemName,category,date,location,description,contact} =req.body;
        const newItem = new Item({
            itemName,
            category,
            date,
            location,
            description,
            image:req.file?`/uploads/${req.file.filename}`:null,
            contact,
            
        });
        await newItem.save();
        res.status(201).json({message:'Item reported successfully'});
    } catch(err){
        res.status(500).json({error:"Failed to report "}); 
    }
};
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error:"Failed to fetch items"});
    }
};
