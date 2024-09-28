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

// export const createProduct = async(req, res) => {
//     try{
//         const {name, salary} = req.body;
//         const [rows] = await pool.query('INSERT INTO product (name, salary) VALUES (?, ?)',[name, salary])
//         res.send({
//             id: rows.insertId,
//             name, 
//             salary
//         });
//     } catch (error) {
//         return res.status(500).json({message: 'Something went wrong'})
//     }
// };

// export const deleteProduct = async(req, res) => {
//     try{
//         const {id} = req.params;
//         const [result] = await pool.query('DELETE FROM product WHERE id = ?',[id]);
//         if(result.affectedRows === 0) return res.status(404).json({ message: 'Product not found'});
//         res.sendStatus(204);
//     } catch (error) {
//         return res.status(500).json({message: 'Something went wrong'})
//     }
// };