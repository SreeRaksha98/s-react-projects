import React, { useState } from "react";
import "./index.css"
/**
 * item - {} entire object such as id, name & price - of each iteration
 * kart - empty [] initially / 
 * kartItem - mayBe object {}  id, name, price & quantity(custom data)
 * @returns 
 */

const AddToKart = () => {
    const products = [
        { id: 1, name: "Apple", price: 150 },
        { id: 2, name: "Banana", price: 25 },
        { id: 3, name: "Orange", price: 50 },
        { id: 4, name: "Lemon", price: 10 },
        { id: 5, name: "Grapes", price: 75 },
        { id: 6, name: "Mango", price: 200 }
    ]

    const [kart, setKart] = useState([])
    const [counter, setCounter] = useState()

    const handleAddToKart = (item, event) => {
        item.quantity = 1
        let isItemExist = false
        const tempKart = [...kart]
        tempKart.forEach((kartItem) => {
            if (item.id === kartItem.id) {
                kartItem.quantity = kartItem.quantity + 1
                isItemExist = true
            }
        })
        if (isItemExist) {
            setKart([...tempKart])
        }
        else {
            setKart([...kart, item])
        }
    }

    console.log(kart)


    return (
        <div className="main-container-shoppingkart">
            <div className="input-container h-1/2">
                <h1 className="text-3xl text-center p-6">Shopping Kart</h1>
                <h2 className="text-xl text-center p-6">Items</h2>
                <ul className="grid grid-cols-1 gap-4 p-5 md:grid-cols-3 ">
                    {
                        products.map((item) => (
                            <li key={item.id} className="list-addToKart">
                                <div>
                                    <p>{item.name}: </p>
                                    <div className="mb-4">{item.price}/- per Kg</div>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-2 rounded" value={item.name} onClick={(event) => { handleAddToKart(item, event) }}>Add To Kart</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="display-container-shoppingkart m-4">
                {kart.length ? 'Cart Items' : ''}
                {kart.length ? (
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="col" className="px-6 py-3 text-center">Item</th>
                                    <th scope="col" className="px-6 py-3 text-center">Quantity</th>
                                    <th scope="col" className="px-6 py-3 text-center">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {kart.map((product) =>
                                    <tr>
                                        <td className="px-6 py-3 text-center">{product.name} </td>
                                        <td className="px-6 py-3 text-center">{product.quantity} </td>
                                        <td className="px-6 py-3 text-center">{product.price * product.quantity}</td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                ) : ''}
            </div>
        </div>
    )
}

export default AddToKart