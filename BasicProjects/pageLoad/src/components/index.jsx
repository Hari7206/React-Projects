import { useState, useEffect } from "react";
import "./styles.css";

export default function LoadMore() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchdata() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
      );

      const result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length) {
        setProduct((prevData) => [...prevData, ...result.products]);
      }

      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchdata();
  }, [count]);

  useEffect(() => {
    if (product && product.length >= 100) {
      setDisableButton(true);
    }
  }, [product]);

  return (
    <div className="Main-container">
      {loading && <div className="loading">Tham Ja! Net Slow Hai 😅</div>}

      <div className="product-container">
        {product && product.length
          ? product.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <div>
                  <span>{item.title}</span> <span>₹{item.price}</span>
                </div>
              </div>
            ))
          : null}
      </div>

      <div className="button-container">
        {!disableButton ? (
          <button onClick={() => setCount(count + 1)} disabled={loading}>
            {loading ? "Loading..." : "Load more products"}
          </button>
        ) : (
          <p style={{
            color: "black"
          }}>You have reached 100 products 🚫</p>
        )}
      </div>
    </div>
  );
}
