import logo from '@/assets/logo2.png'
import pb from '@/api/pocketbase'
import { useId } from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function SignIn() {
  const navigate = useNavigate()
  const inputId = useId()
  const inputPw = useId()
  const inputCheck = useId()
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })

  const handleSignIn = async (e) => {
    e.preventDefault()

    const { email, password } = formState

    // PocketBase SDK 인증(로그인) 요청
    const authData = await pb.collection('users').authWithPassword(email, password)

    console.log(authData)

    navigate('/')
  }
  const handleInput = (e) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  return (
    <section className="h-screen p-5 flex flex-col items-center my-28">
      <h2 className="sr-only">로그인</h2>
      <img src={logo} alt="로고" className="w-[150px] mt-[30px]" />
      <form onSubmit={handleSignIn} className="flex flex-col mt-16 mb-10">
        <label htmlFor={inputId}></label>
        <input type="email" name="email" id={inputId} placeholder="아이디" value={formState.email} onChange={handleInput} className="px-4 mb-8 w-[280px] h-[44px] rounded-md" />

        <label htmlFor={inputPw}></label>
        <input type="password" id={inputPw} name="password" value={formState.password} onChange={handleInput} placeholder="비밀번호" className="px-4 h-[44px] rounded-md" />

        <label htmlFor={inputCheck} className="text-sm mt-5 inline-block text-[#828282]">
          <input type="checkbox" name="save" id={inputCheck} className="mr-2 " />
          아이디 저장
        </label>
        <button type="submit" className="disabled:cursor-not-allowed w-[280px] h-[44px] mt-10 bg-black text-white rounded-md">
          로그인
        </button>
      </form>

      <form className="flex text-sm mt-5">
        <button type="button">
          아이디 찾기 <span>ㅣ</span>
        </button>
        <button type="button">
          비밀번호 찾기 <span>ㅣ</span>
        </button>
        <Link to="/signup">회원가입</Link>
      </form>
    </section>
  )
}

export default SignIn
