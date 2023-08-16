import { ButtonClick } from '@/Component/ButtonClick'
import '@/Component/ButtonClick.css'
import { Button, Checkbox, SubmitButton } from './Component/ButtonClick'
import { useState } from 'react'

function App() {
  //[상태,set상태]
  const [isChecked, setIsChecked] = useState(false)
  const [isToggled, setIsToggled] = useState(false)
  const [isSecondToggled, setIsSecondToggled] = useState(false)

  //이벤트 핸들링
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const handleToggleButton = () => {
    setIsToggled(!isToggled)
  }
  const handleSecondToggleButton = () => {
    setIsSecondToggled(!isSecondToggled)
  }
  const handleSubmit = () => {
    alert(`Checkbox: ${isChecked}, Toggle: ${isToggled}`)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>React 1주차 과제</h1>
      <div style={{ padding: '20px' }}>
        <ButtonClick isChecked={isChecked} onChange={handleCheckboxChange} /> {/* 버튼 컬리 */}
      </div>
      <Checkbox isChecked={isChecked} onChange={handleCheckboxChange} />
      <div style={{ padding: '20px' }}>
        <Button text={isToggled ? '토글 OFF' : '토글 ON'} onClick={handleToggleButton} />
        <Button text={isSecondToggled ? '토글 OFF' : '토글 ON'} onClick={handleSecondToggleButton} />
      </div>
      <SubmitButton onClick={handleSubmit} />
    </div>
  )
}

export default App
