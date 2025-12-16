'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function AboutPage() {
    const t = useTranslations('Navigation');

    return (
        <article className="max-w-4xl mx-auto py-16 px-6 sm:px-8 text-slate-800 leading-relaxed">

            {/* Hero Quote */}
            <section className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent mb-8">
                    The Pursuit of Happiness
                </h1>
                <blockquote className="text-xl md:text-2xl font-serif italic text-slate-600 border-l-4 border-blue-500 pl-6 mx-auto max-w-3xl">
                    "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness."
                    <footer className="mt-4 text-base not-italic text-slate-500 font-sans">— U.S. Declaration of Independence, 1776</footer>
                </blockquote>
            </section>

            {/* Philosophy Section */}
            <section className="mb-20 prose prose-lg prose-slate mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif">Why Immigrate?</h2>
                <p>
                    Why immigrate to America? Or rather, what changes and opportunities can immigrating to America bring?
                    Many people mention high-paying job opportunities, career development, entrepreneurial chances, children's education, a fair environment, and life security.
                    Beyond these, an important change is the ability to <strong>live life the way you want</strong>, to live the life you desire, and to pursue personal and family happiness.
                </p>
                <p>
                    <em>The Pursuit of Happyness</em>, a movie starring Will Smith, translates well to "seeking happiness".
                    Creating opportunities is more reliable than passively waiting for happiness to knock on your door.
                    Human rights include the right to leave any country, including one's own, and to return to his country. This is the logic of "Run" (润) — it is an individual's right.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 my-8 not-prose">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">You Only Live Once (YOLO)</h3>
                    <p className="text-blue-800">
                        A person is not born destined to stay in one place for generations. You have the right to freely plan your life and live it on your own terms.
                    </p>
                </div>
            </section>

            {/* Lawyers Story */}
            <section className="mb-20">
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif">A Personal Journey</h2>
                        <div className="space-y-4 text-slate-600 text-lg">
                            <p>
                                I graduated from Peking University and came to the US over 20 years ago. I obtained my **PhD in Chemistry** from the **University of Maryland**, conducted Postdoc research at the **NIH** (National Institutes of Health), and later earned my JD from **Georgetown Law**.
                            </p>
                            <p>
                                Shaping a new path wasn't easy. I transitioned from a Scientist to a Lawyer.
                                Like the protagonist in the movie, I have experienced setbacks. I once sent out many resumes with no response, wore a suit to job fairs but found no suitable positions, and waited in office corridors for hiring managers who never showed up.
                            </p>
                            <p>
                                But America offers opportunities. My college classmate, who had only $300 and a $500 car at age 37, is now a tenured professor at a prestigious North American university with significant assets.
                                We have personally experienced how immigration changed our lives and destiny, creating a better life for ourselves and our children through hard work.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/3 bg-slate-100 p-6 rounded-2xl border border-slate-200 shadow-inner">
                        <h3 className="font-bold text-slate-800 mb-4 text-center">New Weiming Law Group</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex gap-2"><span className="text-blue-500">✔</span> EB-1A & EB-1B (Extraordinary Ability)</li>
                            <li className="flex gap-2"><span className="text-blue-500">✔</span> NIW (National Interest Waiver)</li>
                            <li className="flex gap-2"><span className="text-blue-500">✔</span> EB-5 (Investor Visa)</li>
                            <li className="flex gap-2"><span className="text-blue-500">✔</span> O-1, L-1, H-1B Visas</li>
                            <li className="flex gap-2"><span className="text-blue-500">✔</span> Family Immigration</li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-slate-200 text-center">
                            <p className="font-bold text-slate-800">Contact Us</p>
                            <p className="text-blue-600">mcai@nwmlaw.com</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Red Dream Section Teaser */}
            <section className="bg-gradient-to-br from-rose-50 to-orange-50 p-8 md:p-12 rounded-3xl border border-rose-100 text-center relative overflow-hidden mb-20">
                <div className="absolute top-0 right-0 p-20 bg-rose-200 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
                <h2 className="text-3xl font-bold text-rose-900 mb-4 font-serif relative z-10">The "Red Chamber" Dream</h2>
                <p className="text-rose-800/80 max-w-2xl mx-auto mb-8 text-lg relative z-10">
                    "When the feast at Grand View Garden ends, where do we go?" <br />
                    Imagine if the characters of the classic novel <em>Dream of the Red Chamber</em> discussed their immigration options today.
                    Daiyu as an EB-1A talent? Baoyu applying for NIW?
                </p>
                <a href="/cases#red-dream" className="inline-block bg-white text-rose-700 font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-rose-50 transition-all relative z-10">
                    Read the Story
                </a>
            </section>

            {/* Perspectives / Blog Features */}
            <section className="space-y-16">
                <h2 className="text-3xl font-bold text-slate-900 text-center font-serif">Perspectives & Stories</h2>

                {/* 1. Vision */}
                <div className="bg-white border-l-4 border-indigo-500 pl-6 py-2">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">Vision: A 700 Million Strong America</h3>
                    <p className="text-slate-600 mb-4">
                        "US Constitution requires a census every ten years. From 4 million in 1790 to 330 million today, America's strength lies in its growth."
                    </p>
                    <div className="prose prose-slate text-slate-600">
                        <p>
                            Can America support 700 million people? We believe so. A populous nation drives innovation, market size, and cultural richness.
                            Immigration is the key. Just as Charles Li (Li Xiaojia) went from an oil rigger to the CEO of HKEX through opportunities in America,
                            countless others can contribute to and benefit from this "Great Experiment".
                        </p>
                    </div>
                </div>

                {/* 1.5 Article 13: Rights */}
                <div className="bg-white border-l-4 border-rose-500 pl-6 py-2">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">Article 13: The Right to Move</h3>
                    <div className="prose prose-slate text-slate-600">
                        <p>
                            The Universal Declaration of Human Rights, Article 13, states:
                            <em>"Everyone has the right to leave any country, including his own, and to return to his country."</em>
                        </p>
                        <p>
                            This is the fundamental logic of "Run" (润). A person is not born to stay in one place forever as a "resource" for others.
                            <strong>You Only Live Once.</strong> You have the natural right to plan your life freely and live where you choose.
                        </p>
                    </div>
                </div>

                {/* 2. The Nickel Parable */}
                <div className="bg-white border-l-4 border-amber-500 pl-6 py-2">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">The "Nickel" Parable: Seizing Opportunity</h3>
                    <div className="prose prose-slate text-slate-600">
                        <p>
                            Charles Li (Li Xiaojia), former CEO of HKEX, once said: "If my professor hadn't offered me a scholarship to Columbia Law School, I might be an immigration lawyer for restaurants in California today."
                        </p>
                        <p>
                            But there is dignity in all paths. As an immigration lawyer myself (with a PhD in Chemistry), I see that <strong>opportunity</strong> is the differentiator.
                            Whether you are "Nickel" (an element named 'Devil's Copper' but precious in industry) or "Silver", finding your right place—your right market and environment—is what immigration is about.
                        </p>
                    </div>
                </div>

                {/* 3. The Lucky Bell */}
                <div className="bg-white border-l-4 border-emerald-500 pl-6 py-2">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">The Lucky Bell: A Sci-Fi Lesson</h3>
                    <div className="prose prose-slate text-slate-600">
                        <p>
                            In a story by Shinichi Hoshi, a man buys a "Lucky Bell" that rings when he wins a prize. For years, it never rings.
                            He thinks it's broken and buys a new one. The new bell rings immediately! Why? Because the "Lucky Bell" <em>itself</em> was the prize he had won years ago, but he never realized it was signaling its own value.
                        </p>
                        <p>
                            <strong>The Lesson:</strong> Opportunities are often ringing right in your hand. The Green Card, the admission letter, the job offer—don't wait until you think you are "ready".
                            Apply now. Take the LSAT. File the NIW. The bell is ringing.
                        </p>
                    </div>
                </div>

                {/* 4. LSAT Journey */}
                <div className="bg-white border-l-4 border-purple-500 pl-6 py-2">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">A Lawyer's Journey: The LSAT</h3>
                    <div className="prose prose-slate text-slate-600">
                        <p>
                            "Is 30 too old for Law School?" I asked myself this after getting my PhD.
                            I bought an LSAT book for $1 at a yard sale and let it sit on my shelf.
                            When I finally opened it, I realized: <em>It wasn't that hard.</em>
                        </p>
                        <p>
                            Don't be like the man with the Lucky Bell. Don't let the book sit on the shelf.
                            I prepared in 2 months, scored well (178 in June), and changed my career.
                            <strong>Your future is whatever you make it.</strong>
                        </p>
                    </div>
                </div>

                {/* 5. Modern Identity */}
                <div className="bg-white border-l-4 border-cyan-500 pl-6 py-2">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">Modern Identity: The "Eileen Gu" Model</h3>
                    <div className="prose prose-slate text-slate-600">
                        <p>
                            "I'm American when I am in the US and I'm Chinese when I'm in China." — Eileen Gu.
                        </p>
                        <p>
                            The US allows dual nationality. Elon Musk holds citizenship in the US, Canada, and South Africa.
                            Nationality in the modern world is a legal concept, not just a bloodline.
                            Just as the second is now defined by atomic transitions rather than the earth's rotation, nationality is defined by law and choice, not just tradition.
                            We see a future where global citizens contribute to multiple societies, just like the 20 million Asian Americans who are part of the US fabric today.
                        </p>
                    </div>
                </div>

                {/* 6. Systems & Dignity */}
                <div className="bg-white border-l-4 border-slate-500 pl-6 py-2">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">Reflections on "Second Uncle": System vs. Resilience</h3>
                    <div className="prose prose-slate text-slate-600">
                        <p>
                            The viral story of "Second Uncle" (二舅) touched many with its message of resilience in the face of misfortune.
                            But we look deeper. "Second Uncle" was disabled by a medical accident—a tragedy that, in a developed legal system, would be met with insurance compensation and social support, not just personal endurance.
                        </p>
                        <p>
                            <strong>Don't just "Endure". Changes.</strong>
                            While we admire resilience, we believe in systems that protect dignity. In the US, the ADA (Americans with Disabilities Act), Medicaid, and medical malpractice laws exist so that tragedy doesn't have to be borne by the individual alone.
                            Immigration, often, is about choosing a system that values your well-being.
                        </p>
                    </div>
                </div>

                {/* 7. The Power of Reading */}
                <div className="bg-white border-l-4 border-emerald-600 pl-6 py-2">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">The Power of Reading: Why We Immigrate</h3>
                    <div className="prose prose-slate text-slate-600">
                        <p>
                            "Reading is not just for self-education; it is to converse with authors from all times."
                        </p>
                        <p>
                            Reading books like Gao Ertai's <em>Finding Home</em> (寻找家园) or George Orwell's <em>1984</em> helps us understand history and human nature.
                            Understanding <em>1984</em> has surprisingly helped many of our clients navigate "Party Membership" issues in their green card interviews—by helping them articulate the nature of involuntary participation.
                            We immigrate not just for material wealth, but for the freedom to write our own stories, unburdened by the cycles of history.
                        </p>
                    </div>
                </div>
            </section>

            {/* Closing Quote */}
            <section className="mt-24 text-center">
                <blockquote className="text-2xl md:text-3xl font-bold text-slate-800 max-w-4xl mx-auto font-serif leading-tight">
                    "Your future has not been written yet. No one’s has! Your future is whatever you make it. So make it a good one!"
                </blockquote>
                <cite className="block mt-4 text-slate-500 not-italic">— Dr. Emmett Brown, <em>Back to the Future</em></cite>
            </section>

        </article>
    );
}
