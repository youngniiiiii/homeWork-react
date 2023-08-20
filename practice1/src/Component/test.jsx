import PropTypes from 'prop-types'

export function KarlyClick({ isChecked, onChange }) {
  // console.log(isChecked)
  return (
    <>
      <span>전체선택 </span>
      <button type="button" className={isChecked ? 'checked' : 'unChecked'} onClick={onChange}></button>
    </>
  )
}

KarlyClick.propTypes = {
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
}

export function Button({ text, onClick }) {
  return (
    <button className="bg-blue-950 text-white rounded-md p-2" onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export function Checkbox({ isChecked, onChange }) {
  return (
    <label htmlFor="checkbox">
      <input className="m-3" id="checkbox" type="checkbox" checked={isChecked} onChange={onChange} />
      체크박스
    </label>
  )
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
}

// export default KarlyClick
export function SubmitButton({ onClick }) {
  return (
    <button className="bg-blue-950 text-white rounded-md p-2 w-[150px]" type="submit" onClick={onClick}>
      제출
    </button>
  )
}

SubmitButton.propTypes = {
  onClick: PropTypes.func,
}
