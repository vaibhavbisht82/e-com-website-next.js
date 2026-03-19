"use client"

import Link from "next/link"
import Button from "./Button"

export default function ProductCard({ product }) {
  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
    >

      <img
        src={product.thumbnail}
        alt={product.title}
        style={styles.image}
      />

      <h3 style={styles.title}>{product.title}</h3>

      <p style={styles.price}>₹ {product.price}</p>

      <Link href={`/products/${product.id}`}>
        <Button text="View Details" />
      </Link>

    </div>
  )
}

const styles = {
  card: {
    background: "white",
    borderRadius: "12px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: "0.3s",
    cursor: "pointer"
  },

  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "10px"
  },

  title: {
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#333"
  },

  price: {
    margin: "8px 0",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2563eb"
  }
}