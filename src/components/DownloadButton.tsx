interface DownloadButtonProps {
  className?: string;
}

export default function DownloadButton({ className = '' }: DownloadButtonProps) {
  return (
    <a
      href="#"
      className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 ${className}`}
    >
      {/* Apple brand logo */}
      <svg
        width="14"
        height="17"
        viewBox="0 0 14 17"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.3 13.22c-.3.69-.65 1.32-1.06 1.9-.56.8-1.01 1.35-1.37 1.65-.55.5-1.13.76-1.76.77-.45 0-1-.13-1.63-.39-.64-.26-1.22-.39-1.76-.39-.56 0-1.16.13-1.8.39-.65.26-1.17.4-1.57.41-.6.03-1.2-.24-1.78-.79-.39-.33-.87-.9-1.46-1.71C.38 14.05.05 12.9.05 11.8c0-1.24.27-2.31.81-3.2.43-.72 1-1.28 1.7-1.7.7-.42 1.46-.63 2.28-.65.48 0 1.1.15 1.88.44.76.3 1.25.44 1.47.44.16 0 .7-.17 1.62-.51.87-.32 1.6-.45 2.2-.4 1.62.13 2.84.77 3.65 1.94-1.45.88-2.17 2.11-2.16 3.7.01 1.23.46 2.26 1.35 3.07.4.38.85.67 1.35.88-.11.31-.22.61-.35.9zM10.2.34c0 .97-.35 1.87-1.06 2.7-.85 1-1.88 1.57-3 1.48a3.02 3.02 0 0 1-.02-.37c0-.93.4-1.92 1.12-2.73.36-.41.81-.75 1.37-1.02.55-.27 1.08-.42 1.57-.46.02.13.02.27.02.4z" />
      </svg>
      <span>Download</span>
    </a>
  );
}
