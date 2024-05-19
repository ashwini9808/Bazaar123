import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../fireabase/FirebaseConfig';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';
import shape3 from '../../assets/shapes3.webp'

function Login() {
    const context = useContext(myContext)
    const {loading, setLoading} = context;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = async () => {
        setLoading(true)
        try {
            const result = await signInWithEmailAndPassword(auth,email,password);
            toast.success("Login successful", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              })
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/')
            setLoading(false)
            
        } catch (error) {
            console.log(error)
            setLoading(loading)
        }

    }
   
    return (
        <div className=' flex justify-center items-center m-9 bg-gradient-to-r  from-blue-400  shadow'>
            <div className="animate-bounce  top-[85rem] right-[1rem]">
          <img src={shape3} alt="img" />
        </div>
            {loading && <Loader/>}
            <div className=' bg-gray-300 px-20 py-20 rounded-xl border-gray-500 border-2 shadow-lg'>
                <div className="">
                    <h1 className='text-center text-black text-3xl mb-14 font-bold'>Login</h1>
                </div>
                <div>
                    <form >
                    <input type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-9 px-5 py-5 w-full lg:w-[30em] sm:w-full  rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                    </form>
                </div>
                <div>
                    <form >
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className=' bg-gray-600 mb-9 px-5 py-5 w-full lg:w-[30em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                        
                    />
                    </form>
                </div>
                
                <div className=' flex justify-center mb-3'>
                    <button
                    onClick={login}
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                
                <div>
                    <h2 className='text-black'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
            <div className="animate-bounce z-10 top-[85rem] right-[1rem] ">
          <img src={shape3} alt="img" />
        </div>
        </div>
    )
}

export default Login