const enddpoint = `${import.meta.env.VITE_PB_API}/collections/products/records`

function Products() {
  useFetchData(endpoint)

  return (
    <section className={`h-screen  p-5`}>
      <h2>Products</h2>
    </section>
  )
}

export default Products
