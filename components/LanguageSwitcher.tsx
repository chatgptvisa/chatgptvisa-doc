'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';
import { Globe } from 'lucide-react';
import clsx from 'clsx';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();

    const toggleLanguage = () => {
        const nextLocale = locale === 'en' ? 'zh-Hans' : 'en';
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <button
            onClick={toggleLanguage}
            className={clsx(
                "flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors border text-sm font-medium",
                isPending
                    ? "opacity-50 cursor-wait"
                    : "hover:bg-slate-50 border-slate-200 text-slate-600"
            )}
            disabled={isPending}
        >
            <Globe size={16} />
            {locale === 'en' ? '中文' : 'English'}
        </button>
    );
}
