export default function Footer() {
  return (
    <footer className="bg-zinc-50 rounded-lg m-4 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center ">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Adriel Alves™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500  sm:mt-0">
          <li>
            <a
              href="https://github.com/adriel45dev"
              className="mr-4 hover:underline md:mr-6 md:ml-6"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/adrielalves45/"
              className="mr-4 hover:underline md:mr-6"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/adriel.45/"
              className="mr-4 hover:underline md:mr-6"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
