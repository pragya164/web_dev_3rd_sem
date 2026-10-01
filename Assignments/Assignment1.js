const express = require("express");
const app = express();

app.use(express.json());

let products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 50000,
        quantity: 10
    },
    {
        id: 2,
        name: "Phone",
        category: "Electronics",
        price: 20000,
        quantity: 15
    },
    {
        id: 3,
        name: "Shoes",
        category: "Fashion",
        price: 2000,
        quantity: 20
    }
];

// GET ALL PRODUCTS
app.get("/products", (req, res) => {
    res.json(products);
});

// GET PRODUCT BY ID
app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

// ADD PRODUCT
app.post("/products", (req, res) => {
    const newProduct = req.body;

    products.push(newProduct);

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });
});

// UPDATE PRODUCT
app.put("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products[index] = {
        ...products[index],
        ...req.body
    };

    res.json({
        message: "Product updated successfully",
        product: products[index]
    });
});

// DELETE PRODUCT
app.delete("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const deletedProduct = products.splice(index, 1);

    res.json({
        message: "Product deleted successfully",
        product: deletedProduct[0]
    });
});

// FILTER BY CATEGORY
app.get("/products/category/:category", (req, res) => {

    const category = req.params.category;

    const filteredProducts = products.filter(
        p => p.category.toLowerCase() === category.toLowerCase()
    );

    if (filteredProducts.length === 0) {
        return res.status(404).json({
            message: "Category not found"
        });
    }

    res.json(filteredProducts);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});