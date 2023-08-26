import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function LoginID() {
  const { register, watch, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login-pw");
  };

  return (
    <div className="h-screen">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center mb-4">
          <span className="text-3xl font-bold tracking-tightsm:text-4xl">
            PROJECT HOUSE
          </span>
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email Address
          </label>
          <input
            id="email"
            type="text"
            {...register("email")}
            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          />
          <div className="flex justify-between pt-2">
            <Link
              to={`/join-id`}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              계정 만들기
            </Link>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={!watch("email")}
            >
              다음
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginID;
