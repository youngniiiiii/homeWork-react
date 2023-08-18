function ButtonClick({ label, size }) {
  // console.log(props)
  return (
    <button type="submit" className={`bg-[#103059] text-white rounded-md ${size}`}>
      {label}
    </button>
  )
}

export default ButtonClick
