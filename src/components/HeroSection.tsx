import DownloadButton from './DownloadButton';

export default function HeroSection() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-20 pb-16">
      {/* Phone Mockup */}
      <div className="relative mb-12 w-[280px] sm:w-[300px] md:w-[320px]">
        {/* Phone frame */}
        <div className="relative overflow-hidden rounded-[3rem] border-[6px] border-gray-800 bg-black shadow-2xl shadow-black/60">
          {/* Notch / Dynamic Island */}
          <div className="absolute top-2 left-1/2 z-20 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-black" />

          {/* Screen content - Poker UI placeholder */}
          <div className="relative aspect-[9/19.5] w-full overflow-hidden bg-gradient-to-b from-[#0c1a3a] to-[#0a1025]">
            {/* Poker table placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 pt-8 text-[8px] text-white/60">
                <span>09:32</span>
                <div className="flex gap-1">
                  <span>●●●</span>
                </div>
              </div>

              {/* Menu bar */}
              <div className="absolute top-12 left-0 right-0 flex items-center justify-center gap-2 px-4">
                <div className="flex gap-1">
                  <div className="h-5 w-12 rounded-full bg-blue-600/60 text-center text-[6px] leading-5 text-white/80">NLH</div>
                  <div className="h-5 w-12 rounded-full bg-white/10 text-center text-[6px] leading-5 text-white/50">NLH</div>
                  <div className="h-5 w-12 rounded-full bg-white/10 text-center text-[6px] leading-5 text-white/50">PLO4</div>
                </div>
              </div>

              {/* Poker table */}
              <div className="relative mt-4 h-[45%] w-[85%] rounded-full border border-blue-500/30 bg-gradient-to-b from-[#0e2855] to-[#0a1d42]">
                {/* Table center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[7px] font-medium text-white/80">PurePoker</span>
                  <div className="mt-1 rounded-full bg-green-600/70 px-2 py-0.5 text-[5px] text-white">NLH</div>
                </div>

                {/* Player spots - simplified dots */}
                <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-white/10" />
                <div className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-white/10" />
                <div className="absolute top-1/4 -left-3 h-6 w-6 rounded-full bg-white/10" />
                <div className="absolute top-1/4 -right-3 h-6 w-6 rounded-full bg-white/10" />
                <div className="absolute bottom-1/4 -left-3 h-6 w-6 rounded-full bg-white/10" />
                <div className="absolute bottom-1/4 -right-3 h-6 w-6 rounded-full bg-white/10" />

                {/* Pot */}
                <div className="absolute top-[30%] left-1/2 -translate-x-1/2 rounded-full bg-blue-500/40 px-2 py-0.5 text-[6px] text-white">
                  3.25
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Glow effect behind phone */}
        <div className="absolute -inset-10 -z-10 rounded-full bg-blue-500/8 blur-3xl" />
      </div>

      {/* Headline */}
      <h1 className="mb-5 max-w-lg text-center font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-[3.25rem] md:leading-[1.15]">
        Play poker with
        <br />
        real money
      </h1>

      {/* Subtext */}
      <p className="mb-8 max-w-md text-center text-sm leading-relaxed text-white/50 sm:text-base">
        Real money, real players – Pure Poker is built on transparency.
        <br />
        No rake, just pure play.
      </p>

      {/* CTA */}
      <DownloadButton />
    </section>
  );
}
