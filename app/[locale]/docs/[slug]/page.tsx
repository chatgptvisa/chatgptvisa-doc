import { getMDXContent } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { VISA_DETAILS } from '@/data/visa_details';
import VisaDetailView from '@/components/visa/VisaDetailView';

export default async function Page({
    params
}: {
    params: Promise<{ locale: string; slug: string }>
}) {
    const { locale, slug } = await params;

    // 1. Check if we have rich detailed data for this slug
    if (VISA_DETAILS[slug]) {
        return <VisaDetailView detail={VISA_DETAILS[slug]} />;
    }

    // 2. Fallback to MDX content
    try {
        const result = await getMDXContent(locale, slug);
        if (!result) notFound();
        return (
            <article className="prose prose-slate max-w-4xl mx-auto py-10 px-6">
                {result.content}
            </article>
        );
    } catch (error) {
        notFound();
    }
}
