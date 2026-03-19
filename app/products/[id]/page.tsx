async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  const data = await res.json()
  return data
}

export default async function ProductDetails({ params }: any) {

  const { id } = await params
  const product = await getProduct(id)

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundImage: `
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('/backgroundimage.jpg')
  `,
      padding: "20px"
    }}>
    

      <div style={{
        background: "#f0d7e2",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 5px 20px rgba(215, 95, 95, 0.1)",
        maxWidth: "600px",
        width: "100%"
      }}>

        <h1 style={{
          color: "black",
          fontSize: "35px",
          marginBottom: "20px",
          textAlign: "center"
        }}>
          {product.title}
        </h1>

        <div style={{ textAlign: "center" }}>
          <img
            src={product.thumbnail}
            style={{
              width: "250px",
              borderRadius: "10px"
            }}
          />
        </div>

        <p style={{
          marginTop: "20px",
          color: "#050505",
          lineHeight: "1.6"
        }}>
          {product.description}
        </p>

        <div style={{
          marginTop: "20px",
          padding: "15px",
          background: "#000000",
          borderRadius: "8px"
        }}>

          <p style={{ margin: "6px 0" }}>
            <b>Price:</b> ${product.price}
          </p>

          <p style={{ margin: "6px 0" }}>
            <b>Brand:</b> {product.brand}
          </p>

          <p style={{ margin: "6px 0" }}>
            <b>Category:</b> {product.category}
          </p>

        </div>

      </div>

    </div>
  )
}