function ButtonClick({ buttonClick }) {
  console.log(buttonClick)
  return (
    <>
      <button type="button" className={buttonClick === 'deSelect' ? 'checked' : 'unChecked'} />
    </>
  )
}

export default ButtonClick
