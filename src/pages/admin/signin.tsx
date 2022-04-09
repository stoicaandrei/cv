import { NextPage } from 'next';

const SignInPage: NextPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="w-96 rounded bg-white p-6 shadow-none md:shadow-lg">
        <h1 className="text-3xl font-bold leading-normal">Sign in</h1>
        <p className="text-sm leading-normal">
          Access the hidden admin interface 👻
        </p>
        <div className="flex flex-col gap-3 pt-3">
          <input
            id="email"
            type="email"
            className="rounded border border-gray-500 p-3"
            placeholder="Email"
          />
          <input
            id="password"
            type="password"
            className="rounded border border-gray-500 p-3"
            placeholder="Password"
          />
          <button className="rounded-full bg-blue-600 p-2 text-white">
            Signin
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
