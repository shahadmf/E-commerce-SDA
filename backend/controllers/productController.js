let products = [
  {
    id: "1",
    name: "Product 1",
    price: 100,
    description: "This is product 1",
  },
  {
    id: "2",
    name: "Product 2",
    price: 200,
    description: "This is product 2",
  },
  {
    id: "3",
    name: "Product 3",
    price: 300,
    description: "This is product 3",
  },
  {
    id: "4",
    name: "Product 4",
    price: 400,
    description: "This is product 4",
  },
  {
    id: "5",
    name: "Product 5",
    price: 500,
    description: "This is product 5",
  },
  {
    id: "6",
    name: "Product 6",
    price: 600,
    description: "This is product 6",
  },
  {
    id: "7",
    name: "Product 7",
    price: 700,
    description: "This is product 7",
  },
  {
    id: "8",
    name: "Product 8",
    price: 800,
    description: "This is product 8",
  },
  {
    id: "9",
    name: "Product 9",
    price: 900,
    description: "This is product 9",
  },
  {
    id: "10",
    name: "Product 10",
    price: 1000,
    description: "This is product 10",
  },
];

// Get All products
export const getAllProducts = (req, res) => {
  try {
    res.status(200).json({
      message: "Here are all the products :)",
      payload: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Get Single product
export const getSingleProduct = (req, res, next) => {
  try {
    const id = req.params.id;
    const product = products.find((product) => product.id === id);
    if (!product) {
      const error = new Error(`Product with id ${id} is not found!`);
      error.status = 404;
      throw error;
    }
    res.status(200).json({
      message: "Here is the product :)",
      payload: product,
    });
  } catch (error) {
    next(error);
  }
};

// Delete Single product
export const deleteSingleProduct = (req, res, next) => {
  try {
    const id = req.params.id;
    const product = products.find((product) => product.id === id);
    if (!product) {
      const error = new Error(`Product with id ${id} is not found!`);
      error.status = 404;
      throw error;
      }
    products = products.filter((product) => product.id !== id);
    res.status(204).json({
      message: "Peoduct deeleted successfully!",
    });
  } catch (error) {
    next(error);
  }
};
