import InputForm from "./InputForm";
const LoginPage = () => {
  return (
    <>
      <div className="animate__animated animate__fadeInDown flex h-screen items-center justify-center text-white">
        <div className=" w-[500px] rounded-3xl bg-gray-800 p-10 shadow-lg">
          <div className="space-y-2 text-center ">
            <h1 className="text-4xl font-normal">Welcome Back</h1>
            <div>
              <p>Glad to see you again 👋</p>
              <p>Login to your account below</p>
            </div>
          </div>
          <form className="mt-5 flex flex-col gap-5">
            <div className="grow">
              <InputForm
                title="Email"
                placeholder="Enter your email"
                type="text"
                // value={email}
                // onChange={setEmail}
              />
            </div>
            <div className="grow">
              <InputForm
                title="Password"
                placeholder="Enter your password"
                type="password"
                // value={password}
                // onChange={setPassword}
              />
            </div>
            <button className="cursor-pointer rounded-lg border-2 border-[#3e3e3e] bg-indigo-500 px-6 py-3 text-base text-white transition hover:border-[#fff]">
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p>
              Dont have an account? <span>Sign up for Free</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
