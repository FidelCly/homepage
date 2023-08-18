import React from 'react';
import Link from 'next/link';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const signup = process.env.NEXT_PUBLIC_APP_URL + '/auth/signup';
  const signin = process.env.NEXT_PUBLIC_APP_URL + '/auth/signin';
  console.info('signup', signup);
  console.info('signin', signin);
  return (
    <div className="fixed top-0 z-30 w-full transition duration-300 ease-in-out clearNav md:bg-opacity-90">
      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-widest rounded-lg focus:outline-none focus:shadow-outline"
          >
            <h1 className="text-4xl tracking-tighter text-green-400 Avenir md:text-4x1 lg:text-3xl">
              Fidecly
            </h1>
          </Link>
          <button
            className="px-3 py-1 leading-none text-white outline-none cursor-pointer md:hidden focus:outline-none "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191919"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            'md:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <nav className="flex-col flex-grow ">
            <ul className="flex flex-wrap items-center justify-end flex-grow">
              <li>
                <Link
                  href="/"
                  className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  A propos de nous
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex items-center px-4 py-2 mt-2 font-medium text-gray-600 transition duration-500 ease-in-out transform bg-transparent bg-green-400 border rounded-lg text-md md:mt-0 md:ml-4 hover:text-gray-900 hover:border-gray-900"
                  href={
                    new URL('/auth/signin', process.env.NEXT_PUBLIC_APP_URL)
                  }
                >
                  <span className="justify-center">Sign in</span>
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex items-center px-4 py-2 mt-2 font-medium transition duration-500 ease-in-out transform bg-green-400 rounded-lg text-md md:mt-0 md:ml-4 hover:bg-green-500"
                  href={
                    new URL('/auth/signup', process.env.NEXT_PUBLIC_APP_URL)
                  }
                >
                  <span className="justify-center">Sign up</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
