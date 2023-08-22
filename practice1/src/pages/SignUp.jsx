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
    <section className="h-screen p-5 flex flex-col items-center my-28">
      <h2 className="text-center m-10 text-[30px]"> 🏝 SignUp </h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4 ">
        <div className="flex items-center">
          <label htmlFor={userid} className="w-[110px] h-6">
            아이디
          </label>
          <input type="text" name="userid" placeholder="아이디를 입력해 주세요" id={userid} value={formState.userid} onChange={handleInput} className="pl-5 border border-slate-300 ml-2 w-[333px] h-[50px] rounded-md" />
        </div>

        <div className="flex items-center">
          <label htmlFor={inpuPass} className="w-[110px] h-6">
            패스워드
          </label>
          <input type="password" placeholder="비밀번호를 입력해 주세요 (8자 이상)" name="password" id={inpuPass} value={formState.password} onChange={handleInput} className="pl-5 border border-slate-300 ml-2 w-[333px] h-[50px] rounded-md" />
        </div>
        <div className="flex items-center">
          <label htmlFor={inputPassConfirm} className="w-[110px] h-6">
            패스워드 확인
          </label>
          <input type="password" placeholder="비밀번호를 한번 더 입력해 주세요" name="passwordConfirm" id={inputPassConfirm} value={formState.passwordConfirm} onChange={handleInput} className="pl-5 border border-slate-300 ml-2 w-[333px] h-[50px] rounded-md" />
        </div>
        <div className="flex items-center">
          <label htmlFor={inputName} className="w-[110px] h-6">
            이름
          </label>
          <input type="text" placeholder="이름을 입력해 주세요" name="name" id={inputName} value={formState.name} onChange={handleInput} className="pl-5 border border-slate-300 ml-2 w-[333px] h-[50px] rounded-md" />
        </div>
        <div className="flex items-center">
          <label htmlFor={inputEmail} className="w-[110px] h-6">
            이메일
          </label>
          <input type="email" placeholder="이메일을 입력해 주세요" name="email" id={inputEmail} value={formState.email} onChange={handleInput} className=" pl-5 border border-slate-300 ml-2 w-[333px] h-[50px] rounded-md" />
        </div>
        <div className="flex gap-2 justify-center items-center mt-10">
          <button type="submit" className="disabled:cursor-not-allowed w-[145px] h-[45px] bg-black text-white rounded-md">
            가입
          </button>

          <button type="reset" className=" w-[145px] h-[45px] bg-black text-white rounded-md">
            취소
          </button>
          <Link to="/signin">
            <button className="  w-[145px] h-[45px] bg-black text-white rounded-md ">로그인</button>
          </Link>
        </div>
      </form>
    </section>
  )
}

export default SignUp
