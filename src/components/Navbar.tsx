import Link from 'next/link';
import DownloadButton from './DownloadButton';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10">
      <div className="flex items-center gap-8">
        {/* PurePoker Logo */}
        <Link href="/" className="flex items-center gap-2 text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            {/* Spade icon */}
            <path
              d="M12 2C12 2 5 9 5 13.5C5 16.5 7.5 18 9.5 18C10.5 18 11.5 17.5 12 16.5C12.5 17.5 13.5 18 14.5 18C16.5 18 19 16.5 19 13.5C19 9 12 2 12 2Z"
              fill="currentColor"
            />
            <path
              d="M10 18C10 18 9 22 12 22C15 22 14 18 14 18"
              fill="currentColor"
            />
          </svg>
          <span className="text-lg font-semibold tracking-tight">PurePoker</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden items-center gap-6 sm:flex">
          <a
            href="#about"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            About
          </a>
          <a
            href="#careers"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            Careers
          </a>
        </div>
      </div>

      {/* Download CTA */}
      <DownloadButton />
    </nav>
  );
}
