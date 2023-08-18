function Container({ headline, colorClassName, children }) {
  return (
    <section className={`h-screen ${colorClassName} p-5`}>
      <h2>{headline}</h2>
      {children}
    </section>
  )
}
export default Container
