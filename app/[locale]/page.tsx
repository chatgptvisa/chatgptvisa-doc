'use client';

import { useTranslations } from 'next-intl';
import VisaPlanner from '@/components/planner/VisaPlanner';
import VisaSelector from '@/components/selector/VisaSelector';
import { useState } from 'react';
import { VISA_CATEGORIES, VisaType } from '@/data/visas';
import { Star, FileText, Globe, BookOpen, Link as LinkIcon, Compass } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('HomePage');
  // Default to EB-1A
  const [selectedVisa, setSelectedVisa] = useState<VisaType>(VISA_CATEGORIES.immigrant.visas[0]);

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* 1. HERO SECTION */}
      <section className="bg-blue-600 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {t('title') || "US Visa Information Hub"}
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          {t('subtitle') || "A one-stop resource for all your US immigration and visa information needs."}
        </p>

        <a href="https://github.com/chatgptvisa/chatgptvisa-doc" target="_blank" className="inline-flex items-center bg-white text-slate-800 px-4 py-2 rounded shadow-sm hover:bg-slate-100 transition-colors font-medium text-sm">
          <Star size={16} className="mr-2" /> Star on GitHub
        </a>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section className="max-w-4xl mx-auto px-4 -mt-10 mb-20 z-10 relative">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border-t-4 border-blue-500">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif">Life, Liberty and the Pursuit of Happiness</h2>
          <blockquote className="text-xl text-slate-600 italic mb-8">
            "We hold these truths to be self-evident, that all men are created equal... that among these are <span className="text-blue-600 font-bold">Life, Liberty and the pursuit of Happiness</span>."
          </blockquote>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Immigrating to a new country is more than just a change of address. It's about exercising your right to choose your life, to build a future that aligns with your values, and to pursue happiness for you and your family.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/about" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
              <BookOpen size={18} /> Read Our Manifesto
            </a>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES GRID */}
      <section className="max-w-7xl mx-auto px-4 mb-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-none md:bg-transparent">
          {/* Card 1 */}
          <div className="bg-white p-8 md:rounded-lg md:shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-emerald-500"><Compass size={24} /></div>
              <h3 className="text-xl font-bold text-slate-900">US Immigration Guides</h3>
            </div>
            <p className="text-slate-600">Detailed guides and resources to navigate the US immigration process.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 md:rounded-lg md:shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-amber-800"><BookOpen size={24} /></div>
              <h3 className="text-xl font-bold text-slate-900">Visa Categories Explained</h3>
            </div>
            <p className="text-slate-600">Comprehensive explanations of various US visa categories, eligibility, and application procedures.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 md:rounded-lg md:shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-blue-500"><FileText size={24} /></div>
              <h3 className="text-xl font-bold text-slate-900">Visa Application Tips</h3>
            </div>
            <p className="text-slate-600">Practical tips and best practices for a successful US visa application.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 md:rounded-lg md:shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-slate-400"><LinkIcon size={24} /></div>
              <h3 className="text-xl font-bold text-slate-900">Useful Links & Resources</h3>
            </div>
            <p className="text-slate-600">A curated list of official links and helpful resources for prospective US immigrants.</p>
          </div>
        </div>
      </section>

      {/* 3. VISA SELECTOR & PLANNER */}
      <main className="w-full max-w-7xl mx-auto px-4 text-center pb-20">

        <div className="py-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Find Your Visa Path</h2>
          <p className="text-slate-500 mb-8">Select a category below to access tailored planning tools.</p>
          <VisaSelector selectedVisaId={selectedVisa.id} onSelect={setSelectedVisa} />
        </div>

        <section id="planner" className="text-left w-full scroll-mt-20">
          {selectedVisa.id === 'eb1a' ? (
            <VisaPlanner />
          ) : (
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-12 text-center min-h-[300px] flex flex-col items-center justify-center">
              <div className="text-4xl mb-4">🚧</div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                {selectedVisa.code} Planner Coming Soon
              </h2>
              <p className="text-slate-500 max-w-md">
                We are currently building the intelligent planner for <strong>{selectedVisa.name}</strong>.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
