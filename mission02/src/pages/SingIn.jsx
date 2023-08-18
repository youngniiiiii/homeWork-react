import logo from '@/assets/logo.png'
// import ButtonClick from '@/Component/ButtonClick'
function SignIn() {
  return (
    <section className="h-screen  p-5 flex flex-col items-center">
      <img src={logo} alt="로고" className="w-[300px] m-[50px]" />
      <h2>회원가입</h2>
      {/* <ButtonClick>클릭</ButtonClick> */}
    </section>
  )
}

export default SignIn
