import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import React, { useState } from "react";
import Product from "./components/Product.js";
import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem.js";


function App() {
	const products = [
		{
			price: 99999,
			name: "Iphone",
			quantity: 0,
		},
		{
			price: 9999,
			name: "Redmi",
			quantity: 0,
		},
		{
			price: 9999,
			name: "Realme",
			quantity: 0,
		},
	];

	let [productList, setProductList] = useState(products);
	let [totalAmount, setTotalAmount] = useState(0);

	const incQuantity = (index) => {
		let newProductList = [...productList];
		let newTotalAmount = totalAmount;
		newProductList[index].quantity++;
		newTotalAmount += newProductList[index].price;
		setProductList(newProductList);
		setTotalAmount(newTotalAmount);
	};
	const decQuantity = (index) => {
		let newProductList = [...productList];
		let newTotalAmount = totalAmount;
		if (newProductList[index].quantity > 0) {
			newProductList[index].quantity--;
			newTotalAmount -= newProductList[index].price;
		}
		setProductList(newProductList);
		setTotalAmount(newTotalAmount);
	};
	const resetData = () => {
		let newProductList = [...productList];
		newProductList.map((products) => {
			products.quantity = 0;
		});
		setProductList(newProductList);
		setTotalAmount(0);
	};
	const removeItem = (index) => {
		let newProductList = [...productList];
    let newTotalAmount=totalAmount;
    newTotalAmount-=newProductList[index].quantity*newProductList[index].price;
		newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
	};
  const addItem=(name,price,quantity) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0
    });
    setProductList(newProductList);
  }
	return (
		<>
			<Navbar />
			<main className="container mt-5">
        <AddItem addItem={addItem}/>
				<ProductList
					productList={productList}
					incQuantity={incQuantity}
					decQuantity={decQuantity}
          removeItem={removeItem}
				/>
			</main>
			<Footer
				totalAmount={totalAmount}
				resetData={resetData}
			/>
		</>
	);
}

export default App;
