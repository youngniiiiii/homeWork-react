import PropTypes from 'prop-types'

export function ButtonClick({ isChecked, onChange }) {
  // console.log(isChecked)
  return (
    <>
      <span>체크박스</span>
      <button type="button" className={isChecked ? 'checked' : 'unChecked'} onClick={onChange}></button>
    </>
  )
}

export function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export function Checkbox({ isChecked, onChange }) {
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      체크박스
    </label>
  )
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
}

// export default ButtonClick
export function SubmitButton({ onClick }) {
  return (
    <button type="submit" onClick={onClick}>
      제출
    </button>
  )
}

SubmitButton.propTypes = {
  onClick: PropTypes.func,
}
