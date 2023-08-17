import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="pb-4">
      <div className="max-w-6xl px-4 mx-auto divide-y divide-gray-200 xl:max-w-6xl sm:px-6 md:px-8">
        <ul className="grid text-sm font-medium Footer_nav__2rFid sm:pb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <li className="row-span-2 space-y-5">
            <h2 className="text-sm font-bold tracking-wide text-gray-900 uppercase">
              Company
            </h2>
            <ul className="space-y-4 text-md">
              <li>
                <Link
                  className="text-2xl transition-colors duration-200 hover:text-gray-900"
                  href="/"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  className="text-2xl transition-colors duration-200 hover:text-gray-900"
                  href="/"
                >
                  Merch
                </Link>
              </li>{' '}
              <li>
                <Link
                  className="text-2xl transition-colors duration-200 hover:text-gray-900"
                  href="/"
                >
                  Brand
                </Link>
              </li>{' '}
              <li>
                <Link
                  className="text-2xl transition-colors duration-200 hover:text-gray-900"
                  href="/"
                >
                  Meetups
                </Link>
              </li>
            </ul>
          </li>
          <li className="row-span-2 space-y-5">
            <h2 className="text-sm font-bold tracking-wide text-gray-900 uppercase">
              Newsroom
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-2xl transition-colors duration-200 hover:text-gray-900"
                  href="/"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  className="text-2xl transition-colors duration-200 hover:text-gray-900"
                  href="/"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  className="text-2xl transition-colors duration-200 hover:text-gray-900"
                  href="/"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </li>
          <li className="row-span-2 space-y-5">
            <h2 className="text-sm font-bold tracking-wide text-gray-900 uppercase">
              Products
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-2xl transition-colors duration-200 hover:text-gray-900"
                  href="/"
                >
                  Hosting
                </Link>
              </li>
              <li>
                <Link
                  className="text-2xl transition-colors duration-200 hover:text-gray-900"
                  href="/"
                >
                  Domains
                </Link>
              </li>
              <li>
                <Link
                  className="text-2xl transition-colors duration-200 hover:text-gray-900"
                  href="/"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  className="text-2xl transition-colors duration-200 hover:text-gray-900"
                  href="/"
                >
                  SSL
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-sm font-bold tracking-wide text-gray-900 uppercase">
              Connect
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-2xl transition-colors duration-200 hover:text-gray-900"
                  href="/"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  className="text-2xl transition-colors duration-200 hover:text-gray-900"
                  href="/"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  className="text-2xl font-semibold transition-colors duration-200 hover:text-gray-900"
                  href="/"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 bg-top border-t border-black lg:flex-row">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link
                href="/"
                className="font-semibold text-black transition-colors duration-300 text-md hover:text-deep-purple-accent-400"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-semibold text-black transition-colors duration-300 text-md hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-semibold text-black transition-colors duration-300 text-md hover:text-deep-purple-accent-400"
              >
                Ad Choices
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-semibold text-black transition-colors duration-300 text-md hover:text-deep-purple-accent-400"
              >
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-semibold text-black transition-colors duration-300 text-md hover:text-deep-purple-accent-400"
              >
                Partners
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <Link
              href="/"
              className="font-semibold tracking-tight text-black transition-colors duration-300 text-md hover:text-deep-purple-accent-400"
            >
              © 2021 Company Inc.
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
