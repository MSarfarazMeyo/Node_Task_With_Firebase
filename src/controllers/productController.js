const { db } = require("../config/firebaseConfig");

const { collection, addDoc, getDocs } = require("firebase/firestore");

const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const docRef = await addDoc(collection(db, "products"), {
      name: name,
      price: price,
      description: description,
    });

    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const getAllProduct = async (req, res) => {
  products = [];
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });

  res.status(201).json({ products });
};

module.exports = {
  createProduct,
  getAllProduct,
};
