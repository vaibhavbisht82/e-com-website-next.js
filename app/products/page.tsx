"use client"

import { useState, useEffect } from "react"
import ProductCard from "../../components/ProductCard"

export default function ProductsPage() {

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)

  const limit = 15  

  useEffect(() => {
    const skip = (page - 1) * limit

    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))

  }, [page])

  return (
    <div style={styles.container}>

      <h1 style={styles.heading}>🛍️ Products</h1>

      <div style={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div style={styles.pagination}>

        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          style={styles.pageBtn}
        >
          ⬅ Previous
        </button>

        <span style={styles.pageText}>Page {page}</span>

        <button
          onClick={() => setPage(page + 1)}
          style={styles.pageBtn}
        >
          Next ➡
        </button>

      </div>

    </div>
  )
}

const styles = {

  container: {
    padding: "40px",
    background: "#f5f7fb",
    minHeight: "100vh"
  },

  heading: {
    textAlign: "center",
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "20px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px"
  },

  pagination: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  },

  pageBtn: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "white",
    cursor: "pointer"
  },

  pageText: {
    fontSize: "16px",
    fontWeight: "600"
  }
}