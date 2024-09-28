import { getAllProducts, getProductById, updateProductById } from "../models/products.model.js";

export const getProducts = async(req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Something went wrong', error})
    }
};

export const getProduct = async(req, res) => {
    try{
        const {id} = req.params;
        const rows = await getProductById(id);
        if(rows.length === 0) return res.status(404).json({ message: 'Product not found'});
        res.json(rows[0]);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Something went wrong', error})
    }
};

export const updateProduct = async(req, res) => {
    const {id} = req.params;
    const {description, model} = req.body;

    if(!(id && (description || model))) return res.status(400).json({message: 'Bad request'})
    
    try{
        const result = await updateProductById(description, model, id);
        if(result.affectedRows === 0) return res.status(404).json({ message: 'Product not found'});
        const rows = await getProductById(id);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({message: 'Something went wrong', error})
    }
};
