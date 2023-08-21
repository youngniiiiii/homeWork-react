import '@/Components/ButtonClick.css'
import { Button, Checkbox, SubmitButton, KarlyClick } from '@/Components/Test'
import { useState } from 'react'
// import Switcher from './Switch'

function ProductPage() {
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
  //

  // // 다크 모드 상태 관리
  // const [isDarkMode, setIsDarkMode] = useState(false)
  // const handleToggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode)
  // }

  // // 리듀스 모션 상태 관리
  // const [isReducedMotion, setIsReducedMotion] = useState(false)
  // const handleToggleReducedMotion = () => {
  //   setIsReducedMotion(!isReducedMotion)
  // }

  // // 아 유 레디 상태 관리
  // const [isReady, setIsReady] = useState(true)
  // const handleToggleReady = () => {
  //   setIsReady(!isReady)
  // }

  //

  return (
    <section className={`h-screen p-5`}>
      <h2>ProductPage</h2>
      <div className="flex flex-col items-center">
        <h1>React 1주차 과제</h1>
        <div className="p-5">
          <KarlyClick isChecked={isChecked} onChange={handleCheckboxChange} /> {/* 버튼 컬리 */}
        </div>
        <Checkbox isChecked={isChecked} onChange={handleCheckboxChange} />
        <div className="p-5 flex gap-3">
          <Button text={isToggled ? '토글 OFF' : '토글 ON'} onClick={handleToggleButton} />
          <Button text={isSecondToggled ? '토글 OFF' : '토글 ON'} onClick={handleSecondToggleButton} />
        </div>
        <SubmitButton onClick={handleSubmit} />
      </div>
      <div
        style={{
          padding: 40,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
          gap: 8,
        }}
      >
        {/* <Switcher on={isDarkMode} label="다크 모드" onClick={handleToggleDarkMode} /> */}
        {/* <Switcher on={isReducedMotion} onText="on" offText="off" label="리듀스 모션" onClick={handleToggleReducedMotion} /> */}
        {/* <Switcher on={isReady} label="아 U 레디?" onClick={handleToggleReady} /> */}
      </div>
    </section>
  )
}
export default ProductPage
