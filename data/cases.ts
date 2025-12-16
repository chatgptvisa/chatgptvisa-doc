export type CaseStudy = {
    id: string;
    title: string;
    category: 'EB-1A' | 'NIW' | 'O-1' | 'Family' | 'Strategy' | 'Employment' | 'Denied' | 'Other';
    summary: string;
    outcome: 'Approved' | 'RFE Approved' | 'Strategy' | 'Guide' | 'Denied (Lesson)';
    date: string;
    content: string; // HTML or Markdown content
};

export const REAL_CASES: CaseStudy[] = [
    {
        id: "philosophy-involution",
        title: "Philosophy: Escaping Involution (内卷)",
        category: "Other",
        summary: "Why immigration is not just about a Green Card, but about escaping the 996 grind, age discrimination, and finding a life with more resources per capita.",
        outcome: "Strategy",
        date: "2024-08-01",
        content: `
            <h3>The Reality of Involution</h3>
            <p>China is a resource-rich country, but when divided by a large population, the "per capita" resource is limited. Millions of fresh graduates flood the market every year, leading to:</p>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>996 Work Culture:</strong> Excessive competition for limited positions.</li>
                <li><strong>Age Discrimination:</strong> The "Age 35 Crisis" where experienced professionals are pushed out.</li>
                <li><strong>High Cost of Living:</strong> Housing prices in Tier 1 cities rival New York, but incomes do not.</li>
                <li><strong>Education Anxiety:</strong> The burden on the next generation to compete from kindergarten.</li>
            </ul>

            <h3 class="mt-6">Immigration as a Solution</h3>
            <p class="mt-2">Immigration doesn't solve all problems, but it can significantly alleviate "Involution".</p>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>Lower Pressure:</strong> Professional jobs in the US generally offer higher pay with standard 40-hour work weeks.</li>
                <li><strong>Resource Abundance:</strong> Housing, cars, and daily living costs (relative to income) are lower.</li>
                <li><strong>Fairer Play:</strong> While competition exists, the market is more regulated and less "bottom-line" driven.</li>
            </ul>
        `
    },
    {
        id: "strategy-eb3-arts-sports",
        title: "Strategy: The Hidden Path (EB-3 for Arts/Sports)",
        category: "Strategy",
        summary: "How Coaches, Musicians, and Artists can use EB-3 'Skilled Worker' instead of waiting 10 years for 'Unskilled'.",
        outcome: "Strategy",
        date: "2024-05-15",
        content: `
            <h3>The Misconception</h3>
            <p>Many assume Arts/Sports pros must do EB-1A/NIW (hard) or EB-3 Unskilled (10-year wait). There is a middle path: <strong>EB-3 Skilled Worker</strong>.</p>
            
            <h3>Why It Works</h3>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>2-Year Wait:</strong> Current排期 (Priority Date) for EB-3 Skilled is often just ~2-3 years, much faster than Unskilled (10+ years).</li>
                <li><strong>No Degree Needed:</strong> You don't need a Bachelor's. You need <strong>2 years of training or experience</strong>.</li>
                <li><strong>Who Qualifies?</strong> Tennis coaches, Piano teachers, Martial Arts instructors, Specialty Chefs (not line cooks).</li>
            </ul>

            <h3 class="mt-6">How to Prove It</h3>
            <p class="mt-2">If you have a customized skill (e.g., teaching Piano), you need:</p>
            <ol class="list-decimal pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>Certificates:</strong> Coaching License, Grade 8 Piano, etc.</li>
                <li><strong>2 Years Experience:</strong> Can be verified by previous employer letters or tax records.</li>
                <li><strong>US Employer:</strong> Crucial. You need a job offer from a US school, club, or training center. Fortunately, demand for coaches is high.</li>
            </ol>
        `
    },
    {
        id: "analysis-hardship-waiver",
        title: "Analysis: Hardship Waivers (I-601 & J-1)",
        category: "Family",
        summary: "Deep dive into 'Extreme Hardship' vs 'Exceptional Hardship' with real examples.",
        outcome: "Approved",
        date: "2024-04-10",
        content: `
            <h3>The Standard: Extreme Hardship (I-601)</h3>
            <p>For I-601 (Illegal Presence/Fraud), you must prove your US Citizen spouse/parent would suffer <strong>Extreme Hardship</strong> if you leave. "Missing each other" is not enough.</p>
            
            <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 mt-4">
                <h4 class="font-bold text-slate-800">Real Case: The "Back Pain" Argument</h4>
                <ul class="list-disc pl-5 space-y-2 mt-2 text-sm text-slate-600">
                    <li><strong>Scenario:</strong> Husband (USC) has chronic back pain. Wife (Applicant) had prior fraud.</li>
                    <li><strong>Argument:</strong> Husband needs Wife to drive, cook, and dress him due to physical limitations.</li>
                    <li><strong>Evidence:</strong> Medical records, MRI scans, and psychological evaluation showing severe depression risk if separated.</li>
                    <li><strong>Result:</strong> Approved. Physical dependency + Emotional distress = Extreme Hardship.</li>
                </ul>
            </div>

            <h3 class="mt-6">J-1 Waiver (Exceptional Hardship)</h3>
            <p class="mt-2">For J-1, if you can't get a "No Objection" letter, you can use "Exceptional Hardship".</p>
            <ul class="list-disc pl-5 space-y-2 mt-2 text-slate-700">
                <li><strong>Higher Standard:</strong> You must prove hardship if they go with you TO China, AND if they stay in US without you.</li>
                <li><strong>Winning Factor:</strong> A child's severe asthma (worsened by air quality abroad) is a classic winning argument.</li>
            </ul>
        `
    },
    {
        id: "guide-perm-comprehensive",
        title: "Guide: PERM & I-140 Deep Dive",
        category: "Employment",
        summary: "Navigating Successor-in-Interest, Ability to Pay, and Audit Red Flags.",
        outcome: "Guide",
        date: "2024-03-20",
        content: `
            <h3>Successor-in-Interest</h3>
            <p>If your sponsoring company is bought (M&A) during the Green Card process, you don't necessarily lose your place.</p>
            <p class="mt-2"><strong>Rule:</strong> The new company must assume all immigration liabilities and the job must remain virtually the same. We handle the <em>Amended I-140</em> to bridge this.</p>
            
            <h3 class="mt-6">Ability to Pay (ATP)</h3>
            <p class="mt-2">Small companies (<100 employees) must prove they can pay your salary from the day PERM was filed. We use:</p>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>Net Income:</strong> Must exceed the offering wage on Tax Return.</li>
                <li><strong>Net Assets:</strong> If income is low, can use liquid assets (Cash/Stocks).</li>
                <li><strong>Current Pay:</strong> If you are already on H-1B getting that salary, ATP is automatically met.</li>
            </ul>

            <h3 class="mt-6">Audit Red Flags</h3>
            <p class="mt-2">Avoid these to prevent PERM Audits:</p>
            <ul class="list-disc pl-5 space-y-2 mt-2 text-slate-700">
                <li>Foreign Language Requirement (unless strict business necessity).</li>
                <li>Job requirements that exactly match your resume (Tailoring).</li>
                <li>Employer address is a residential home.</li>
            </ul>
        `
    },
    {
        id: "case-party-denial-cuban",
        title: "Cautionary Tale: Party Membership Denial",
        category: "Denied",
        summary: "Why a 'Template' defense failed for a Cuban Engineer, and how to avoid it.",
        outcome: "Denied (Lesson)",
        date: "2024-02-15",
        content: `
            <h3>The Case</h3>
            <p>A Cuban engineer applied for a Green Card. She admitted Party membership but claimed it was "Non-meaningful" and "Involuntary" (to keep her job).</p>
            
            <h3>Why It Was Denied</h3>
            <p>She claimed "Involuntary" but prior records showed she was an active, enthusiastic member who joined to get "better projects" (Career Advancement), not just "daily survival" (Food/Housing).</p>
            <p class="bg-red-50 text-red-800 p-2 rounded mt-2"><strong>The Fatal Mistake:</strong> She flipped her story. First she said she was a member to help her kids; later she said she quit years ago. Credibility was lost.</p>
            
            <h3 class="mt-6">The Lesson for Chinese Applicants</h3>
            <p><strong>Don't use a Template.</strong> USCIS knows the difference between "Joining to be a Manager" (Career) and "Joining to get a Ration Card" (Survival).</p>
            <p class="mt-2">We build a <strong>Total Package</strong> defense that aligns with your actual history, providing consistent evidence that your membership falls under the legal exceptions (Involuntary, Non-meaningful, or Terminated > 5 years ago).</p>
        `
    },
    {
        id: "strategy-niw-safetynet",
        title: "Strategy: The Safety Net (NIW as Backup)",
        category: "Strategy",
        summary: "Why you should almost always file an NIW (National Interest Waiver) alongside your EB-1A application.",
        outcome: "Strategy",
        date: "2024-06-01",
        content: `
            <h3>The Double Filing Strategy</h3>
            <p><strong>EB-1A is ambitious</strong>. Even strong cases can be denied by a tough officer. <strong>NIW is your safety net</strong>.</p>
            
            <h3>Why File Both?</h3>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>Lock Your Place in Line:</strong> If your EB-1A is denied after 1 year, you lose that year. If you have an NIW filed, you keep your "Priority Date" from day one.</li>
                <li><strong>Peace of Mind:</strong> EB-1A approval rates fluctuate. NIW approval rates are generally higher and more stable.</li>
                <li><strong>H-1B Extension:</strong> Having an approved NIW I-140 allows you to extend H-1B beyond the 6-year limit indefinitely while waiting for the Green Card date.</li>
            </ul>
            
            <p class="mt-4"><strong>Analogy:</strong> Think of NIW as your "Bond" portfolio and EB-1A as your "Tech Stock" bet. You want the high returns of EB-1A (Fast Green Card), but you need the security of NIW (Guaranteed Path).</p>
        `
    },
    {
        id: "guide-reentry-permit",
        title: "Guide: Living Abroad (The Re-entry Permit)",
        category: "Strategy",
        summary: "How to accept a job in China/Europe while keeping your US Green Card valid. The 'Touch Base' myth vs. Legal Reality.",
        outcome: "Guide",
        date: "2024-06-10",
        content: `
            <h3>The "6-Month Rule" Myth</h3>
            <p>Many think coming back to the US once every 6 months ("Touching Base") is enough. <strong>It is not.</strong> CBP officers look at <em>intent</em>. If you live abroad, you are abandoning residence.</p>
            
            <h3>The Solution: I-131 Re-entry Permit</h3>
            <p>If you need to leave for > 1 year (e.g., caring for parents, external job rotation), you <strong>MUST</strong> file for a Re-entry Permit.</p>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>Validity:</strong> Allows you to stay away for up to 2 years without abandoning status.</li>
                <li><strong>Critical Rule:</strong> You must be <strong>physically present in the US</strong> when you file and when you do biometrics. Do not mail it and leave the next day.</li>
                <li><strong>Recurring Use:</strong> You can apply for a second one. We have clients who have worked in China for 5-6 years while keeping their Green Card valid using this method.</li>
            </ul>
        `
    },
    {
        id: "guide-expedite-mandamus",
        title: "Guide: When They Ignore You (Expedite & Mandamus)",
        category: "Strategy",
        summary: "What to do when your case is stuck in 'Black Hole' processing for 18+ months. The power of suing the government.",
        outcome: "Strategy",
        date: "2024-06-20",
        content: `
            <h3>Option 1: Expedite Request</h3>
            <p>Free, but hard to win. You must prove:</p>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>Severe Financial Loss:</strong> E.g., losing a job offer or company failure.</li>
                <li><strong>Humanitarian Reasons:</strong> E.g., need to travel for urgent medical treatment or funeral.</li>
                <li><strong>US Govt Interest:</strong> E.g., NIH waiting for your research.</li>
            </ul>
            
            <h3 class="mt-6">Option 2: Writ of Mandamus (WOM)</h3>
            <p class="mt-2"><strong>The Nuclear Option.</strong> If your case has been pending for an unreasonable time (usually > 18 months), we sue USCIS in Federal Court.</p>
            <ul class="list-disc pl-5 space-y-2 mt-2 text-slate-700">
                <li><strong>How it Works:</strong> We ask a judge to order USCIS to make a decision.</li>
                <li><strong>The Result:</strong> Usually, the US Attorney calls us within 60 days to say "We're adjudicating it now."</li>
                <li><strong>Risk:</strong> It forces a decision. If your case is weak, it forces a denial. Use only for strong but stalled cases.</li>
            </ul>
        `
    },
    {
        id: "guide-consulate-check",
        title: "Real Experience: Guangzhou Interview & Coding Check",
        category: "Strategy",
        summary: "A researcher's detailed experience with the Guangzhou Consulate interview, administrative processing (Check), and final approval.",
        outcome: "Approved",
        date: "2022-06-02",
        content: `
            <h3>The Background</h3>
            <p>The applicant is a researcher in AI and Software Engineering in Southern China. After EB-1A approval, they faced the immigrant visa interview at the Guangzhou Consulate.</p>
            
            <h3>The Interview Process</h3>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>Arrival:</strong> Arrived at 7:00 AM for a 7:50 AM appointment. Security check, passport check, and NVC letter check.</li>
                <li><strong>The Interview:</strong> The officer asked about the employer (size, name) and <strong>detailed work content</strong>.</li>
                <li><strong>The "Check":</strong> When the applicant mentioned AI and Software Engineering, the officer handed them a form to fill out for a detailed CV (Administrative Processing).</li>
                <li><strong>Outcome:</strong> The interview ended with "No more questions". The visa was issued 3 months later (Background Check cleared).</li>
            </ul>
            
            <h3 class="mt-6">Entry at LAX</h3>
            <p class="mt-2">Entry was smooth. The CBP officer reviewed the sealed medical package and passport, then stamped the immigrant visa (creating the temporary I-551 Greencard). Green card arrived in mail within a month.</p>
        `
    },
    {
        id: "guide-ead-expedite",
        title: "Guide: Expediting EAD (Healthcare Worker)",
        category: "Strategy",
        summary: "How a healthcare worker successfully expedited their EAD using 'Ask Emma' and Congressional assistance.",
        outcome: "Guide",
        date: "2022-06-15",
        content: `
            <h3>The Strategy</h3>
            <p>EAD processing is slow. This applicant used a two-step approach to get approved in < 3 months.</p>
            
            <h3>Step 1: Ask Emma (USCIS)</h3>
            <p class="mt-2">Use the online chat "Ask Emma" to request an expedited review. <strong>Tip:</strong> Type your reason in Notepad first so you can paste it immediately. Reasons must be strong (e.g., Severe Financial Loss, Humanitarian).</p>
            <p class="bg-blue-50 text-blue-800 p-2 rounded mt-2"><strong>Result:</strong> Got a confirmation number but no movement after 1 week.</p>
            
            <h3>Step 2: Contact Senator/Congressman</h3>
            <p class="mt-2">Found the local Congressman's website and submitted a "Help with a Federal Agency" request.</p>
            <ul class="list-disc pl-5 space-y-2 mt-2 text-slate-700">
                <li><strong>Argument:</strong> "I am a healthcare worker doing cancer research. My J-1 is expiring. If I stop, critical research stops."</li>
                <li><strong>Evidence:</strong> Offer letter, Expiring Visa, Employer Support Letter.</li>
                <li><strong>Outcome:</strong> Approved 1 week after Senator's inquiry. Card received 10 days later.</li>
            </ul>
        `
    },
    {
        id: "guide-expired-visa-reapply",
        title: "Guide: Re-applying for Expired Immigrant Visa",
        category: "Family",
        summary: "What to do if your Immigrant Visa expires (e.g., due to COVID/Flight cancellations) before you can travel.",
        outcome: "Guide",
        date: "2022-05-01",
        content: `
            <h3>The Problem</h3>
            <p>Immigrant visas are valid for 6 months from the <strong>Medical Exam date</strong>. If flights are cancelled and it expires, you cannot fly.</p>
            
            <h3>The Solution: Re-application</h3>
            <ol class="list-decimal pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>Contact Consulate:</strong> Email Guangzhou Consulate explaining the "Uncontrollable Circumstances" (Force Majeure).</li>
                <li><strong>Mail Documents:</strong> Send Passport, Expired Visa, Explanation Letter, and I-130 approval copy (if needed).</li>
                <li><strong>New Process:</strong> Wait for a response (took ~1 month). The Consulate will ask for a <strong>New Medical Exam</strong> and potentially a new I-864 (Financial Support) if old ones are stale.</li>
                <li><strong>New Interview:</strong> A simplified interview. The officer mainly checks that the situation has resolved.</li>
            </ol>
        `
    },
    {
        id: "guide-usa-entry",
        title: "Guide: First Entry & Customs (Money, Meds, Luggage)",
        category: "Strategy",
        summary: "Essential guide for new immigrants entering the US: Cash rules, Medicine restrictions, and Dealing with CBP.",
        outcome: "Guide",
        date: "2022-04-20",
        content: `
            <h3>Cash & Currency</h3>
            <p><strong>Limit:</strong> You can bring >$10,000, BUT you <strong>MUST DECLARE IT</strong> on the FinCEN form. If you don't, it can be confiscated.</p>
            <p class="mt-2"><strong>Bank Proof:</strong> If bringing large cash, carry a bank withdrawal receipt to prove it's legal.</p>
            
            <h3>Medicines</h3>
            <p>Avoid carrying: Ma-huang (Ephedrine), Morphine-based drugs, or unlabeled Chinese herbal powders. Bring prescriptions for any antibiotics or chronic meds.</p>
            
            <h3>The "Yellow Envelope"</h3>
            <p class="bg-yellow-50 text-yellow-800 p-2 rounded mt-2"><strong>DO NOT OPEN IT!</strong> The sealed packet from the Consulate is for the CBP officer only. If you open it, your visa is invalid.</p>
            
            <h3>CBP Interrogation</h3>
            <p class="mt-2">Be prepared for questions about your job and cash. Answer simply. "I am a researcher." "I have $8,000." Do not volunteer extra info.</p>
        `
    },
    {
        id: "case-niw-student",
        title: "Success: NIW Approved Before PhD Graduation",
        category: "NIW",
        summary: "How a PhD student with only a Bachelor's degree and 3 papers got approved for NIW before graduation.",
        outcome: "Approved",
        date: "2022-01-10",
        content: `
            <h3>The Challenge</h3>
            <p>The applicant had not yet graduated (No PhD, No Master's). Had only 3 papers (low citations) and was taking a risk.</p>
            
            <h3>The Strategy</h3>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>Future Benefit:</strong> Emphasized that the research (new material structure) had applications in environmental protection (Government Interest).</li>
                <li><strong>"Near Future" Evidence:</strong> Used letters from National Lab scientists to prove the work was already influencing the field, even if citations hadn't caught up.</li>
                <li><strong>Timing:</strong> Filed 8 months before graduation. By the time it was approved (4 months later), they were ready to file I-485 post-graduation.</li>
            </ul>
            
            <h3>Impact on OPT/H-1B</h3>
            <p class="mt-2">Important: Filing NIW (I-140) generally <strong>does not</strong> affect STEM OPT or H-1B execution, as these are "Dual Intent" capable (or tolerated). This allowed the student to skip the H-1B lottery entirely.</p>
        `
    },
    {
        id: "guide-cp-vs-485",
        title: "Guide: Consular Processing (CP) Detailed Workflow",
        category: "Strategy",
        summary: "NVC fees ($345 vs $325), switching between I-485 and CP (I-824), and Medical Exam locations.",
        outcome: "Guide",
        date: "2022-03-01",
        content: `
            <h3>CP vs I-485: Switching Paths</h3>
            <p>You can choose CP (Consular Processing) or I-485 (Adjustment of Status) when filing I-140.</p>
            <ul class="list-disc pl-5 space-y-2 mt-2 text-slate-700">
                <li><strong>CP to I-485:</strong> Easy. If you are in the US, just file I-485.</li>
                <li><strong>I-485 to CP:</strong> Harder. Requires filing <strong>Form I-824</strong> to transfer the approved petition to NVC.</li>
            </ul>

            <h3 class="mt-6">The NVC Stage</h3>
            <p class="mt-2">Once at NVC, you pay fees via US Bank Account (No Credit Cards).</p>
            <ul class="list-disc pl-5 space-y-2 mt-2 text-slate-700">
                <li><strong>Employment Fees:</strong> ~$345 per person.</li>
                <li><strong>Family Fees:</strong> ~$325 per person + $120 for Affidavit of Support (I-864).</li>
            </ul>

            <h3 class="mt-6">Medical & Interview</h3>
            <p class="mt-2"><strong>Medical Exam:</strong> Must be done at designated centers in Beijing, Shanghai, Guangzhou, or Fujian (International Travel Health Centers).</p>
            <p class="mt-2"><strong>Police Cert:</strong> Required for any country where you lived > 6 months. China police certs need notarized translation.</p>
        `
    },
    {
        id: "strategy-dual-intent-visa",
        title: "Strategy: Getting F-1/B-2 After Filing I-140",
        category: "Strategy",
        summary: "Can you get a non-immigrant visa (Student/Tourist) if you already filed for a Green Card? Yes, with the right strategy.",
        outcome: "Strategy",
        date: "2022-08-01",
        content: `
            <h3>The Fear</h3>
            <p>Many believe filing an I-140 or I-130 marks you with "Immigrant Intent," making it impossible to get F-1 or B-2 visas.</p>
            
            <h3>The Reality</h3>
            <p>It is harder, but fully possible. we have successfully helped many clients do this.</p>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>Disclosure:</strong> Always answer "Yes" to "Has anyone filed an immigrant petition for you?" on DS-160. Lying is a permanent ban.</li>
                <li><strong>The Argument:</strong> "I have a long-term desire to immigrate (hence the I-140), but for <em>this specific trip</em>, my intent is temporary (Study/Visit)."</li>
                <li><strong>Visualizing:</strong> Show strong ties to China for the <em>current</em> period (Assets, Job, Family duties). Show that your Green Card wait is still years away, so you have no reason to illegally stay <em>now</em>.</li>
            </ul>
        `
    },
    {
        id: "interview-eb1a-experience",
        title: "Real Experience: EB-1A Interview Questions",
        category: "EB-1A",
        summary: "Exact questions asked during an EB-1A IT Manager's interview in Guangzhou (Jan 2022).",
        outcome: "Approved",
        date: "2022-01-20",
        content: `
            <h3>The Q&A Session</h3>
            <p>The officer was friendly and spoke Chinese. Key questions asked:</p>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>"What is your detailed job?"</strong> Applicant explained their role in developing major apps, mentioning specific widely-used projects.</li>
                <li><strong>"Is your EB-1A based on technical skills or management?"</strong> "Both." Explained original technical contributions and team leadership.</li>
                <li><strong>"Media Reports?"</strong> Presented a prepared "Media Index" with highlighted articles. Officer liked the organization.</li>
                <li><strong>"Future Plans in US?"</strong> "I plan to work in Silicon Valley in a similar role. The US market demand for this tech is high."</li>
            </ul>
            <p class="bg-green-50 text-green-800 p-2 rounded mt-2"><strong>Strategy:</strong> Bringing a "Media Index" summary sheet helped the officer quickly verify evidence without digging through piles of paper.</p>
        `
    },
    {
        id: "tips-visa-interview-culture",
        title: "Guide: Smart Answers for F-1/B-2 Interviews",
        category: "Strategy",
        summary: "How to answer 'Why this school?' or 'Why now?' with cultural intelligence, avoiding robotic answers.",
        outcome: "Strategy",
        date: "2022-07-01",
        content: `
            <h3>Humanizing Your Answers</h3>
            <p>Don't be a robot. Use cultural references.</p>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>Q: Why this school?</strong> <br><em>Bad:</em> "It is ranked #5." <br><em>Good:</em> "I admire the 'Blue Devil' spirit of Duke and its unique basketball culture," or "I want to experience the Liberal Arts tradition."</li>
                <li><strong>Q: Why Biomedical Science?</strong> <br><em>Smart:</em> "A rose by any other name would smell as sweet. It's similar to Molecular Biology but focuses more on clinical application." (Shows cultural fluency).</li>
                <li><strong>Q: Post-graduation plans?</strong> <br><em>Balanced:</em> "The world is different now. I want to master my field first. I will decide based on where I can contribute most effectively, rather than just saying 'I will definitely go home immediately'."</li>
            </ul>
        `
    },
    {
        id: "guide-b2-extension-success",
        title: "Guide: Success in 3rd B-2 Extension",
        category: "Strategy",
        summary: "How to successfully extend B-2 visitor status multiple times (up to 3 times) during force majeure situations.",
        outcome: "Guide",
        date: "2021-09-15",
        content: `
            <h3>The Challenge</h3>
            <p>Due to COVID, parents were stuck. We filed 1st, 2nd, and even 3rd extensions.</p>
            
            <h3>Key Success Factors</h3>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>Timeliness:</strong> File the NEXT extension BEFORE the current one expires, even if the current one is still "Pending".</li>
                <li><strong>Evidence:</strong>
                    <ul class="list-circle pl-5 mt-1 text-sm text-slate-600">
                        <li>Proof of Ties to China: Property deeds (Translate!), Utility bills, Pension records.</li>
                        <li>Force Majeure: Cancelled flight tickets, travel restrictions.</li>
                        <li>Financial Support: Affidavit of Support from children in US + Bank statements.</li>
                    </ul>
                </li>
            </ul>
            <p class="mt-2"><strong>Missed Biometrics?</strong> If denied because you missed the appointment (didn't see email), file a <strong>Motion to Reopen</strong> immediately. We saved a case this way.</p>
        `
    },
    {
        id: "case-us-highschool-timeline",
        title: "Timeline: From Shanghai to US High School in 1 Month",
        category: "Other",
        summary: "A real timeline of a Shanghai student applying to US private high schools and getting F-1 visa in just 30 days.",
        outcome: "Approved",
        date: "2022-07-25",
        content: `
            <h3>The Rapid Timeline (Summer 2022)</h3>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>June 20:</strong> Decision made to leave Shanghai for US High School.</li>
                <li><strong>June 24:</strong> We shortlisted 3 schools in one state (1 Top tier, 2 Safety).</li>
                <li><strong>July 1:</strong> Applications submitted (Essays, Transcripts, Recommendations).</li>
                <li><strong>July 7-13:</strong> Interviews conducted via Zoom.</li>
                <li><strong>July 13:</strong> <strong>Received Acceptance</strong> from Top Tier School A.</li>
                <li><strong>July 18:</strong> Received I-20 Form.</li>
                <li><strong>July 25:</strong> F-1 Visa Interview. <strong>Approved.</strong></li>
            </ul>
            <p class="mt-2"><strong>Key:</strong> Speed and direct communication with school admissions officers were crucial.</p>
        `
    },
    {
        id: "guide-h1b-comprehensive",
        title: "Guide: H-1B Survival (RFEs & Lotteries)",
        category: "Employment",
        summary: "Handling strict H-1B RFEs (Accountant, Engineer, Marketing). Fees ($460+$500+), Lottery mechanics, and proving 'Specialty Occupation'.",
        outcome: "Guide",
        date: "2024-05-10",
        content: `
            <h3>The H-1B Lottery & Fees</h3>
            <p>Registration usually happens in March. <strong>Fees:</strong> I-129 ($460) + Fraud Fee ($500) + ACWIA ($750/$1500) + Premium ($2500). Lottery is for the NEXT fiscal year (starts Oct 1).</p>

            <h3>Winning Tactic: The 'Specialty Occupation' RFE</h3>
            <p>USCIS often argues "Accountant" or "Marketing" doesn't require a degree. We win by:</p>
            <ul class="list-disc pl-5 space-y-2 mt-2 text-slate-700">
                <li><strong>Detailed Duty Mapping:</strong> We map <em>every single daily task</em> to specific college courses (e.g., 'Cost Accounting 101' -> 'Budget Reconcilliation').</li>
                <li><strong>Expert Opinion Letters:</strong> Getting a University Professor to sign a letter stating "Industry Standard for this job is a Bachelor's".</li>
            </ul>
        `
    },
    {
        id: "guide-u-visa-victims",
        title: "Guide: U Visa for Crime Victims",
        category: "Family",
        summary: "A lifeline for victims of domestic violence, fraud, or trafficking. 4-year visa + Path to Green Card.",
        outcome: "Guide",
        date: "2024-02-20",
        content: `
            <h3>Who Qualifies?</h3>
            <p>Victims of crimes in the US who <strong>suffered substantial abuse</strong> and <strong>helped police</strong>. Crimes include: Domestic Violence, Trafficking, Blackmail, Sexual Assault, and more.</p>
            
            <h3>The 'Indirect Victim'</h3>
            <p class="mt-2">Even if you weren't the direct target, you can apply if:</p>
            <ul class="list-disc pl-5 space-y-2 mt-2 text-slate-700">
                <li>Your child (under 21) was the victim (e.g., attempted kidnapping).</li>
                <li>You suffered "Secondary Trauma" and helped police investigate.</li>
            </ul>
            <p class="mt-2"><strong>Benefit:</strong> Comes with a Work Permit (EAD) while pending. eventually leads to a Green Card.</p>
        `
    },
    {
        id: "guide-h1b-grace-period",
        title: "Guide: H-1B 60-Day Grace Period",
        category: "Employment",
        summary: "Laid off? You have 60 days. Strategies for finding a new job, filing I-485, or changing status.",
        outcome: "Guide",
        date: "2024-06-01",
        content: `
            <h3>The Rule</h3>
            <p>If laid off, you have <strong>up to 60 days</strong> or until your I-94 expires (whichever is shorter) to stay valid. You can't work, but you are "in status".</p>
            
            <h3>The I-94 Trap</h3>
            <p class="bg-red-50 text-red-800 p-2 rounded mt-2"><strong>Warning:</strong> If your passport expires soon, your I-94 might expire BEFORE the 60 days. Always check your I-94 online!</p>
            
            <h3>Strategy</h3>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>New Job:</strong> If a new employer files H-1B Day 59, you are safe. You can start working immediately upon receipt (H-1B Portability).</li>
                <li><strong>Change Status:</strong> File I-539 to change to B-2 (Tourist) to buy more time.</li>
                <li><strong>Invest:</strong> If married to a citizen or have an I-485 ready, file immediately.</li>
            </ul>
        `
    },
    {
        id: "legal-overstay-vs-unlawful",
        title: "Analysis: Overstay vs. Unlawful Presence",
        category: "Strategy",
        summary: "Crucial legal distinction. Why a pending B-2 extension protects you from the 3-year/10-year bar even if your I-94 expires.",
        outcome: "Guide",
        date: "2024-04-15",
        content: `
            <h3>The Concept</h3>
            <p><strong>Overstay:</strong> Staying past I-94 date. Bad, but fixable.<br><strong>Unlawful Presence (ULP):</strong> Accruing time that counts toward the 3-year/10-year ban.</p>
            
            <h3>The "Tolling" Protection</h3>
            <p>If you file a <strong>TIMELY</strong>, <strong>NON-FRIVOLOUS</strong> extension (e.g., B-2) <em>before</em> your I-94 expires, you enter a "authorized period of stay".</p>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>Result:</strong> Even if I-94 expires while waiting, you do NOT accrue Unlawful Presence.</li>
                <li><strong>If Denied:</strong> ULP starts the day of denial. You must leave immediately.</li>
            </ul>
            <p class="mt-2"><strong>Strategy:</strong> If your extension is pending for months, you are safe. If you get RFE'd, reply fast.</p>
        `
    },
    {
        id: "guide-j1-waiver-strategies",
        title: "Guide: J-1 Waiver (Exceptional Hardship)",
        category: "Family",
        summary: "Overcoming the 'Two-Year Home Residency' requirement. Case studies of Indian and Chinese waivers.",
        outcome: "Guide",
        date: "2024-01-20",
        content: `
            <h3>The Challenge</h3>
            <p>J-1 holders often must return home for 2 years. "No Objection" letters are standard, but sometimes impossible (e.g., funding issues).</p>
            
            <h3>Alternative: Exceptional Hardship</h3>
            <p>You must prove hardship to your US Citizen/Green Card relatives if they go with you AND if they stay behind.</p>
            <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 mt-4">
                <h4 class="font-bold text-slate-800">Winning Cases</h4>
                <ul class="list-disc pl-5 space-y-2 mt-2 text-sm text-slate-600">
                    <li><strong>Medical:</strong> US Citizen child has severe asthma/allergies that would be life-threatening in the home country's pollution level.</li>
                    <li><strong>Psychological:</strong> US Citizen spouse has documented history of depression; separation or relocation would trigger a relapse.</li>
                    <li><strong>Social (Caste/Persecution):</strong> Inter-caste marriage or religious persecution fears for the child in the home country.</li>
                </ul>
            </div>
        `
    },
    {
        id: "guide-change-to-f1-usa",
        title: "Guide: Changing to F-1 Status in USA",
        category: "Strategy",
        summary: "How to switch from B-2/H-4 to F-1 without leaving the US. Perfect for parents wanting to study or accompany kids.",
        outcome: "Guide",
        date: "2022-08-01",
        content: `
            <h3>Why Do It In-Country?</h3>
            <p>Avoids the risk of visa denial at a consulate. Allows you to stay in the US while the I-539 is pending (which can take months).</p>
            
            <h3>The Process</h3>
            <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                <li><strong>Apply to School:</strong> Get acceptance and I-20.</li>
                <li><strong>File I-539:</strong> Pay fee, submit financial proof ($$$ for tuition/living), and write a statement explaining <em>why</em> you want to study now.</li>
                <li><strong>Bridge the Gap:</strong> Your current status (B-2) must be valid within 30 days of the I-539 filing. You may need to "Bridge" multiple B-2 extensions if processing is slow.</li>
            </ul>
            <p class="mt-2"><strong>Update:</strong> Premium Processing is now available for F-1 change of status (15-30 days decision), making this much safer and faster!</p>
        `
    },
    {
        id: "eb1a-appeal-success",
        title: "10 Real EB-1A Cases Approved After Appeal",
        category: "EB-1A",
        summary: "An analysis of 10 difficult EB-1A cases that were initially rejected but approved after filing a Motion to Reopen or Appeal.",
        outcome: "Approved",
        date: "2024-03-15",
        content: `
            <h3>Case Highlights</h3>
            <p>We analyzed 10 cases where the initial I-140 was denied due to "insufficient evidence" for the ease of criteria.</p>
            <ul class="list-disc pl-5 space-y-2 mt-4">
                <li><strong>Case 1:</strong> Medical Researcher. Denied on "contribution". Appealed with 5 new expert letters. Approved.</li>
                <li><strong>Case 2:</strong> Artist. Denied on "commercial success". Provided clearer box office records. Approved.</li>
                <li><strong>Case 3:</strong> Software Engineer. Denied on "original contribution". Showed GitHub adoption stats. Approved.</li>
            </ul>
            <p class="mt-4"><strong>Key Takeaway:</strong> A denial is not the end. A well-structured Motion to Reopen showing legal error or clearer evidence can succeed.</p>
        `
    },
    {
        id: "niw-no-phd",
        title: "NIW Approval for Non-PhD Candidate Changing Careers",
        category: "NIW",
        summary: "How a Master's degree holder successfully applied for NIW while switching from Engineering to Data Science.",
        outcome: "Approved",
        date: "2024-02-10",
        content: `
            <h3>Background</h3>
            <p>The applicant had a Master's in Mechanical Engineering but was working as a Data Scientist. They did not have a PhD and had 0 citations.</p>
            <h3>Strategy</h3>
            <p>We focused on the "Exceptional Ability" criteria instead of just "Advanced Degree". We argued that their unique blend of engineering domain knowledge and modern AI skills was critical for US industrial modernization.</p>
            <h3>Outcome</h3>
            <p>Case approved in 4 months without RFE. Proves that citations are not the only metric for NIW.</p>
        `
    },
    {
        id: "eb1a-bio-rfe",
        title: "Biology Postdoc EB-1A: Overcoming RFE",
        category: "EB-1A",
        summary: "Handling a tough Request for Evidence (RFE) regarding 'Judge of Others' and 'Original Contributions'.",
        outcome: "RFE Approved",
        date: "2023-12-05",
        content: `
            <h3>The RFE</h3>
            <p>USCIS challenged the "Judge of Others" criterion because the reviews were done for a lower-tier journal.</p>
            <h3>Response</h3>
            <p>We provided evidence that the journal, while niche, was essential to the specific field of Immunotherapy. We also included a letter from the journal editor confirming the applicant's selection was based on expertise.</p>
        `
    },
    {
        id: "eb1a-chef-cuisine",
        title: "Success: The Culinary Artist (Chef)",
        category: "EB-1A",
        summary: "A Chef with international gold medals proves EB-1A isn't just for scientists.",
        outcome: "Approved",
        date: "2024-07-10",
        content: `
            <h3>The Profile</h3>
            <p>A Chef from China. <strong>Evidence:</strong> Won gold medals in international cooking competitions; media reports on his innovative cuisine; served as a judge for cooking contests in Malaysia and China; worked as Head Chef at 5-star hotels.</p>
            
            <h3>Key Takeaway</h3>
            <p><strong>Cultural Art is "Extraordinary":</strong> EB-1A covers the Arts/Business. We framed his cuisine as "Gastronomic Art" and used the high salary and judging roles to seal the deal.</p>
        `
    },
    {
        id: "red-dream",
        title: "The 'Red Chamber' Immigration Plan",
        category: "Other",
        summary: "A creative reimagining: If characters from 'Dream of the Red Chamber' immigrated to the US today, what visas would they use?",
        outcome: "Strategy",
        date: "2024-04-01",
        content: `
            <h3>The Gathering at Grand View Garden</h3>
            <p>After the raid on Grand View Garden, the characters gathered to discuss their future. "You only live once," said Baoyu.</p>
            
            <h3>Visas for Everyone</h3>
            <ul class="list-disc pl-5 space-y-2 mt-4">
                <li><strong>Lin Daiyu (EB-1A):</strong> Ideally suited for "Extraordinary Ability" in the Arts. As a poet with "sustained national acclaim" (at least within the Garden), she meets criteria for:
                    <ul class="list-circle pl-5 mt-1 text-sm text-slate-600">
                        <li>Original artistic contributions (Burial of Flowers poem)</li>
                        <li>Judge of others' work (Begonia Poetry Club)</li>
                        <li>Leading role in distinguished organizations (The Poetry Club)</li>
                    </ul>
                </li>
                <li><strong>Xue Baochai (EB-2 NIW):</strong> A scholar with deep knowledge of medicine, management, and philosophy. Her role in managing the household demonstrates "Exceptional Ability" in business administration.</li>
                <li><strong>Xue Pan (L-1A / EB-1C):</strong> As an executive of the Imperial Merchant family business, he can set up a US subsidiary and transfer as a Multinational Manager.</li>
                <li><strong>Fangguan (O-1B):</strong> As a talented performer/actress, she qualifies for the O-1B visa for individuals with extraordinary ability in the arts.</li>
            </ul>
        `
    },
];
