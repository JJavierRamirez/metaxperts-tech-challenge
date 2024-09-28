import { pool } from "../db.js";

export const getAllProducts = async () => {
    const [rows] = await pool.query('SELECT * FROM productos');
    return rows;
};

export const getProductById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM productos WHERE id_articulo = ?',[id]);
    return rows;
}

export const updateProductById = async (description, model, id) => {
    const [result] = await pool.query('UPDATE productos SET descripcion = IFNULL(?, descripcion), modelo = IFNULL(?, modelo) WHERE id_articulo = ?',[description, model, id]);
    return result;
}