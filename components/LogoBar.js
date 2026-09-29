export default function LogoBar() {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
          
          <div className="flex items-center space-x-2 text-slate-700 font-extrabold text-lg sm:text-xl tracking-tight">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
            <span>Logoipsum</span>
          </div>

          <div className="flex items-center space-x-2 text-slate-700 font-extrabold text-lg sm:text-xl tracking-tight">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span>Logoipsum</span>
          </div>

          <div className="flex items-center space-x-2 text-slate-700 font-extrabold text-lg sm:text-xl tracking-tight">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <span>Logoipsum</span>
          </div>

          <div className="flex items-center space-x-2 text-slate-700 font-extrabold text-lg sm:text-xl tracking-tight">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span>Logoipsum</span>
          </div>

          <div className="flex items-center space-x-2 text-slate-700 font-extrabold text-lg sm:text-xl tracking-tight">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="8"/>
            </svg>
            <span>Logoipsum</span>
          </div>

        </div>
      </div>
    </section>
  );
}
