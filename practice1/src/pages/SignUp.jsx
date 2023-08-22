import pb from '@/api/pocketbase'
import { useState } from 'react'
import { useId } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate()
  const inputName = useId()
  const userid = useId()
  const inputEmail = useId()
  const inpuPass = useId()
  const inputPassConfirm = useId()
  const [formState, setFormState] = useState({
    name: '',
    userid: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const handleRegister = async (e) => {
    e.preventDefault()

    const { password, passwordConfirm } = formState

    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해보세요.')
      return
    }

    // PocketBase SDK 인증 요청
    await pb.collection('users').create({
      ...formState,
      emailVisibility: true,
    })

    navigate('/')
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    console.log(e.target)
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  return (
    <section className={`h-screen  p-5`}>
      <h2>SignUp</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor={inputName}>이름</label>
          <input type="text" name="name" id={inputName} value={formState.name} onChange={handleInput} className="border border-slate-300 ml-2" />
        </div>
        <div>
          <label htmlFor={userid}>계정 이름</label>
          <input type="text" name="userid" id={userid} value={formState.userid} onChange={handleInput} className="border border-slate-300 ml-2" />
        </div>
        <div>
          <label htmlFor={inputEmail}>이메일</label>
          <input type="email" name="email" id={inputEmail} value={formState.email} onChange={handleInput} className="border border-slate-300 ml-2" />
        </div>
        <div>
          <label htmlFor={inpuPass}>패스워드</label>
          <input type="password" name="password" id={inpuPass} value={formState.password} onChange={handleInput} className="border border-slate-300 ml-2" />
        </div>
        <div>
          <label htmlFor={inputPassConfirm}>패스워드 확인</label>
          <input type="password" name="passwordConfirm" id={inputPassConfirm} value={formState.passwordConfirm} onChange={handleInput} className="border border-slate-300 ml-2" />
        </div>
        <div className="flex gap-2">
          <button type="submit" className="disabled:cursor-not-allowed">
            가입
          </button>
          <button type="reset">취소</button>
        </div>
      </form>
      <Link to="/signin">로그인</Link>
    </section>
  )
}

export default SignUp
