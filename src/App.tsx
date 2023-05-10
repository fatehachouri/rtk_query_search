import React from "react";
import "./App.css";
import {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} from "./store/productsApi";
import { useState } from "react";

function App() {
  // const { data, isLoading, error, isError } = useGetAllProductsQuery();
  const [input, setInput] = useState<string>("");

  const {
    data: singleProduct,
    error,
    isError,
    isLoading,
  } = useGetSingleProductQuery(input);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) {
    // check the type of error before rendering it
    const errorMessage =
      error instanceof Error ? error.message : "An error occurred";
    return <p>{errorMessage}</p>;
  }

  return (
    <div className="App">
      <div>Search Product:</div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <h1 style={{color:'blue', fontWeight:'bold',margin:10, textAlign:'center'}} >Results:</h1>
      <div >
        <ul>
          {singleProduct &&
            singleProduct.products.map((item) => {
              return (
                <li style={{display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column', marginBottom:10}}>
                  <h1 style={{color:'black', fontWeight:'bold',margin:10}}>{item.title}</h1>
                  
                  <img src={item.images[0]} alt="" width={200} style={{margin:10}}/>
                  <p style={{color:'green', fontWeight:'bold'}}>{item.price}$</p>
                  <hr />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
