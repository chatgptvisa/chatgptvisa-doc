import { Link } from '@/i18n/routing';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="font-bold text-xl text-slate-900">VisaMate</span>
            <p className="mt-4 text-slate-500 text-sm">
              Your intelligent guide to US Immigration.
            </p>
            <div className="mt-4 text-slate-500 text-sm">
              VisaMate Inc.<br />
              1060 Lincoln Avenue<br />
              San Jose, CA 95125
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/legal/privacy" className="text-base text-slate-500 hover:text-slate-900">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="text-base text-slate-500 hover:text-slate-900">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-base text-slate-400 text-center">
            &copy; {new Date().getFullYear()} VisaMate Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
