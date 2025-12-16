export type VisaDetail = {
    id: string;
    title: string;
    description: string;
    requirements: {
        title: string;
        items: string[];
    }[];
    process: {
        step: number;
        title: string;
        description: string;
        duration?: string;
    }[];
    documents: {
        category: string;
        items: string[];
    }[];
};

export const VISA_DETAILS: Record<string, VisaDetail> = {
    "eb1a": {
        id: "eb1a",
        title: "EB-1A Extraordinary Ability",
        description: "The EB-1A is for individuals with extraordinary ability in the sciences, arts, education, business, or athletics through sustained national or international acclaim.",
        requirements: [
            {
                title: "Evidence of Extraordinary Ability (Meet 3 of 10)",
                items: [
                    "Receipt of lesser nationally or internationally recognized prizes or awards.",
                    "Membership in associations in the field which demand outstanding achievement of their members.",
                    "Published material about you in professional or major trade publications or other major media.",
                    "Evidence that you have been asked to judge the work of others, either individually or on a panel.",
                    "Evidence of your original scientific, scholarly, artistic, athletic, or business-related contributions of major significance to the field.",
                    "Evidence of your authorship of scholarly articles in professional journals or other major media.",
                    "Evidence that your work has been displayed at artistic exhibitions or showcases.",
                    "Performance of a leading or critical role in distinguished organizations.",
                    "Evidence that you command a high salary or other significantly high remuneration in relation to others in the field.",
                    "Evidence of commercial successes in the performing arts."
                ]
            },
            {
                title: "One-Time Achievement (Alternative)",
                items: [
                    "A major, internationally recognized award (e.g., Nobel Prize, Oscar, Olympic Medal)."
                ]
            }
        ],
        process: [
            {
                step: 1,
                title: "Evaluation & Strategy",
                description: "Assess your profile against the 10 criteria. Identify weak spots and gather additional evidence (e.g., get more peer reviews, publish more papers).",
                duration: "1-3 Months"
            },
            {
                step: 2,
                title: "Preparation of Petition",
                description: "Draft the I-140 petition letter (legal brief), collect all recommendation letters, and organize exhibits with translations.",
                duration: "2-4 Months"
            },
            {
                step: 3,
                title: "Filing I-140",
                description: "Submit Form I-140 with supporting documents to USCIS. Optional: Use Premium Processing (Form I-907) for a 15-day response.",
                duration: "15 Days (Premium) or 6-12 Months (Regular)"
            },
            {
                step: 4,
                title: "Consular Processing or Adjustment of Status",
                description: "Once I-140 is approved and priority date is current, apply for the Green Card via Form I-485 (if in US) or DS-260 (if abroad).",
                duration: "6-12 Months"
            }
        ],
        documents: [
            {
                category: "Forms",
                items: ["Form I-140", "Form I-907 (Optional for Premium Processing)", "Form G-28 (if represented by attorney)"]
            },
            {
                category: "Personal Documents",
                items: ["Passport Copy", "CV / Resume", "PhD/Master's Degree Diplomas & Transcripts"]
            },
            {
                category: "Evidence of Ability",
                items: [
                    "Recommendation Letters (4-6 Independent Experts)",
                    "Google Scholar Citation Report",
                    "Copies of Awards/Prizes",
                    "Membership Certificates",
                    "Media Reports/Articles about you",
                    "Proof of Reviewer/Judge activity (Emails, Certificates)"
                ]
            }
        ]
    },
    // Mock data for other categories can be added here
    "eb2niw": {
        id: "eb2niw",
        title: "EB-2 National Interest Waiver",
        description: "EB-2 NIW allows those with advanced degrees or exceptional ability to seek a waiver of the job offer requirement because it is in the national interest of the United States.",
        requirements: [
            {
                title: "Advanced Degree or Exceptional Ability",
                items: ["Master's degree or higher", "OR Bachelor's + 5 years progressive experience", "OR Exceptional Ability (meet 3/6 criteria)"]
            },
            {
                title: "Dhanasar Three Prongs",
                items: [
                    "The proposed endeavor has both substantial merit and national importance.",
                    "You are well positioned to advance the proposed endeavor.",
                    "On balance, it would be beneficial to the United States to waive the requirements of a job offer and thus of a labor certification."
                ]
            }
        ],
        process: [
            { step: 1, title: "Define Endeavor", description: "Clearly articulate what you plan to do in the US and why it matters nationally.", duration: "1 Month" },
            { step: 2, title: "Draft Petition", description: "Write the NIW argument based on Dhanasar prongs.", duration: "2-3 Months" },
            { step: 3, title: "File I-140", description: "Submit to USCIS.", duration: "3-9 Months (Premium available now)" }
        ],
        documents: [
            { category: "Forms", items: ["Form I-140", "Form I-907 (Optional)", "ETA-750B / 9089 (partially required)"] },
            { category: "Evidence", items: ["Advanced Degree proof", "Citations/Patents", "Evidence of funding/grants", "Letters of Recommendation"] }
        ]
    },
    "eb1b": {
        id: "eb1b",
        title: "EB-1B Outstanding Professor or Researcher",
        description: "For outstanding professors and researchers with at least 3 years of experience in teaching or research, who are recognized internationally.",
        requirements: [
            {
                title: "International Recognition (Meet 2 of 6)",
                items: [
                    "Major awards or prizes.",
                    "Membership in associations requiring outstanding achievement.",
                    "Published material in professional publications writing about your work.",
                    "Participation as a judge of the work of others.",
                    "Original scientific or scholarly research contributions.",
                    "Authorship of scholarly books or articles."
                ]
            },
            {
                title: "Job Offer Requirement",
                items: ["Must have a permanent job offer from a US university or private employer (with at least 3 full-time researchers)."]
            }
        ],
        process: [
            { step: 1, title: "Employer Sponsorship", description: "Your employer initiates the process. They must be willing to sign the I-140.", duration: "1 Month" },
            { step: 2, title: "Collect Evidence", description: "Gather proof of 3 years experience and international recognition.", duration: "2-3 Months" },
            { step: 3, title: "File I-140", description: "Employer files I-140. Premium Processing available.", duration: "15 Days (Premium)" }
        ],
        documents: [
            { category: "Forms", items: ["Form I-140", "Form I-907", "G-28"] },
            { category: "Support", items: ["Job Offer Letter", "Experience Letters", "Evidence of Research Achievements"] }
        ]
    },
    "eb1c": {
        id: "eb1c",
        title: "EB-1C Multinational Manager or Executive",
        description: "For managers or executives transferring from a foreign company to a related US company.",
        requirements: [
            {
                title: "Employment Criteria",
                items: [
                    "Must have been employed outside the US for at least 1 year in the last 3 years.",
                    "Must be coming to work in a managerial or executive capacity.",
                    "US company must have been doing business for at least 1 year."
                ]
            }
        ],
        process: [
            { step: 1, title: "Verify Corporate Relationship", description: "Ensure Qualifying Relationship (Parent, Subsidiary, Affiliate) exists.", duration: "1 Month" },
            { step: 2, title: "File I-140", description: "US Employer files I-140.", duration: "6-10 Months (Premium recently added)" }
        ],
        documents: [
            { category: "Forms", items: ["Form I-140", "Form I-907"] },
            { category: "Corporate", items: ["Articles of Incorporation", "Financial Statements", "Org Charts (US and Foreign)"] },
            { category: "Employee", items: ["Pay stubs (Foreign)", "Job Duties Description"] }
        ]
    },
    "eb2": {
        id: "eb2",
        title: "EB-2 Advanced Degree Professionals",
        description: "For members of the professions holding an advanced degree or its equivalent, or those with exceptional ability.",
        requirements: [
            {
                title: "Education / Ability",
                items: [
                    "Advanced Degree (Master's or higher)",
                    "OR Bachelor's + 5 years progressive post-degree experience",
                    "OR Exceptional Ability in sciences, arts, or business."
                ]
            },
            {
                title: "Labor Certification",
                items: ["Generally requires a PERM Labor Certification (unless NIW)."]
            }
        ],
        process: [
            { step: 1, title: "PERM Labor Certification", description: "Employer must test the US labor market (Recruitment). DOL processes ETA-9089.", duration: "12-18 Months" },
            { step: 2, title: "File I-140", description: "Employer files I-140 after PERM approval.", duration: "15 Days (Premium) or 6 Months" }
        ],
        documents: [
            { category: "PERM", items: ["Prevailing Wage Determination", "Proof of Recruitment Ads"] },
            { category: "I-140", items: ["Form I-140", "Approved PERM (ETA 9089)", "Educational Evaluation"] }
        ]
    },
    "eb3": {
        id: "eb3",
        title: "EB-3 Skilled Workers & Professionals",
        description: "For professionals (Bachelor's), skilled workers (2 years experience), or other workers (less than 2 years experience).",
        requirements: [
            {
                title: "Categories",
                items: [
                    "Professionals: US Bachelor's or foreign equivalent.",
                    "Skilled Workers: At least 2 years of job experience or training.",
                    "Unskilled Workers: Less than 2 years experience (long wait times)."
                ]
            }
        ],
        process: [
            { step: 1, title: "PERM Process", description: "Mandatory Labor Certification by Dept of Labor.", duration: "12-18 Months" },
            { step: 2, title: "File I-140", description: "Employer files I-140.", duration: "6 Months" }
        ],
        documents: [
            { category: "Forms", items: ["Form I-140", "ETA 9089"] },
            { category: "Skills", items: ["Degree Certificate", "Experience Letters"] }
        ]
    },
    "eb5": {
        id: "eb5",
        title: "EB-5 Immigrant Investor Program",
        description: "For investors who make a significant investment in a new commercial enterprise that creates jobs.",
        requirements: [
            {
                title: "Investment Amount",
                items: [
                    "$800,000 in a Targeted Employment Area (TEA) or Rural Area.",
                    "$1,050,000 in standard areas."
                ]
            },
            {
                title: "Job Creation",
                items: ["Must create or preserve at least 10 full-time jobs for qualifying US workers within 2 years."]
            }
        ],
        process: [
            { step: 1, title: "Invest Funds", description: "Place capital at risk in the layout project.", duration: "1-3 Months" },
            { step: 2, title: "File I-526E", description: "Immigrant Petition by Regional Center Investor.", duration: "24-48 Months" },
            { step: 3, title: "Conditional Green Card", description: "Consular processing or Adjustment of Status.", duration: "6-12 Months" },
            { step: 4, title: "Remove Conditions (I-829)", description: "File 2 years after getting Green Card to make it permanent.", duration: "24-48 Months" }
        ],
        documents: [
            { category: "Source of Funds", items: ["Tax returns (5 years)", "Bank statements", "Proof of lawful source of funds"] },
            { category: "Project", items: ["Business Plan", "Economic Report", "Regional Center Letter"] }
        ]
    },
    // Non-Immigrant Visas
    "o1": {
        id: "o1",
        title: "O-1 Individuals with Extraordinary Ability",
        description: "For individuals who possess extraordinary ability in the sciences, arts, education, business, or athletics. Similar to EB-1A but is a temporary work visa.",
        requirements: [
            {
                title: "Extraordinary Ability (O-1A)",
                items: [
                    "Receipt of nationally recognized prizes or awards.",
                    "Membership in associations requiring outstanding achievement.",
                    "Published material in professional works.",
                    "Judging the work of others.",
                    "Original scientific, scholarly, or business contributions.",
                    "Authorship of scholarly articles.",
                    "Employment in a critical or essential capacity.",
                    "High salary."
                ]
            },
            {
                title: "O-1B (Arts)",
                items: ["Distinction in the arts (Interviews, Reviews, Red Carpets, High Pay). Standard is lower than O-1A."]
            }
        ],
        process: [
            { step: 1, title: "Find a Sponsor", description: "O-1 requires a US Employer or US Agent. You cannot self-petition.", duration: "Variable" },
            { step: 2, title: "Consultation Letter", description: "Obtain an advisory opinion from a peer group or labor union (e.g., AMPTP for film).", duration: "1-2 Weeks" },
            { step: 3, title: "File I-129", description: "Sponsor files Form I-129. Premium Processing recommended.", duration: "15 Days (Premium)" }
        ],
        documents: [
            { category: "Sponsor", items: ["Deal Memo / Contract", "Itinerary of Events (3 Years)"] },
            { category: "Evidence", items: ["Press Articles", "High Salary Proof", "Expert Support Letters"] }
        ]
    },
    "h1b": {
        id: "h1b",
        title: "H-1B Specialty Occupations",
        description: "The most common work visa for professionals. Requires a specific job offer and usually winning a lottery.",
        requirements: [
            {
                title: "Specialty Occupation",
                items: ["Job must require at least a Bachelor's degree in a specific field (e.g., Software Engineer requires CS degree)."]
            },
            {
                title: "Education",
                items: ["You must hold a relevant Bachelor's degree or higher (or foreign equivalent)."]
            }
        ],
        process: [
            { step: 1, title: "Electronic Registration", description: "Employer registers you in the H-1B Lottery (March). Cost is $10.", duration: "March 1-20" },
            { step: 2, title: "Lottery Selection", description: "USCIS selects winners. Selection rate is ~25%.", duration: "April 1" },
            { step: 3, title: "File Petition", description: "If selected, employer files I-129 within 90 days.", duration: "April - June" },
            { step: 4, title: "Start Work", description: "Earliest start date is October 1st of the same year.", duration: "October 1" }
        ],
        documents: [
            { category: "Employer", items: ["LCA (Labor Condition Application)", "Job Offer Letter"] },
            { category: "Employee", items: ["Degree Transcripts", "Passport", "Resume"] }
        ]
    },
    "l1": {
        id: "l1",
        title: "L-1 Intracompany Transferee",
        description: "For transferring employees from a foreign office to a US office. No lottery, but requires strict corporate relationship.",
        requirements: [
            {
                title: "One Year Abroad",
                items: ["Must have worked for the foreign company for at least 1 continuous year within the last 3 years."]
            },
            {
                title: "Categories",
                items: [
                    "L-1A: Managers & Executives (Max 7 years). Path to EB-1C.",
                    "L-1B: Specialized Knowledge (Max 5 years). Harder to define."
                ]
            }
        ],
        process: [
            { step: 1, title: "Prepare Petition", description: "Corporate documents linking US and Foreign entities.", duration: "1-2 Months" },
            { step: 2, title: "File I-129", description: "Employer files with USCIS or applies at Consulate (Blanket L).", duration: "15 Days (Premium)" }
        ],
        documents: [
            { category: "Corporate", items: ["Org Charts", "Tax Returns", "Lease Agreements (photos of office)"] },
            { category: "Employee", items: ["Pay stubs (1 year)", "Managerial Duty Description"] }
        ]
    },
    "f1": {
        id: "f1",
        title: "F-1 Student & OPT",
        description: "For academic students. Includes training authorization (CPT/OPT) to work for US employers.",
        requirements: [
            {
                title: "Enrollment",
                items: ["Must be enrolled full-time in a SEVP-certified school."]
            },
            {
                title: "Non-Immigrant Intent",
                items: ["Must prove you have ties to home country and intend to return (at time of application)."]
            }
        ],
        process: [
            { step: 1, title: "Apply to School", description: "Get accepted and receive Form I-20.", duration: "Variable" },
            { step: 2, title: "Visa Interview", description: "Apply for F-1 visa at US Consulate. Prove funding.", duration: "1 Day" },
            { step: 3, title: "CPT (During School)", description: "Curricular Practical Training. Internship credit.", duration: "Semester-based" },
            { step: 4, title: "OPT (After School)", description: "Optional Practical Training. 1 Year (+2 Years for STEM).", duration: "Post-Grad" }
        ],
        documents: [
            { category: "School", items: ["Form I-20", "Admission Letter"] },
            { category: "Financial", items: ["Bank Statements (Tuition + Living)", "Sponsor Letter"] }
        ]
    },
    "b1b2": {
        id: "b1b2",
        title: "B-1/B-2 Visitor Visa",
        description: "For business (B-1) or tourism (B-2). Strictly prohibits 'working' or getting paid from US sources.",
        requirements: [
            {
                title: "Purpose",
                items: ["Tourism, Medical Treatment, Business Meetings/Conferences."]
            }
        ],
        process: [
            { step: 1, title: "Form DS-160", description: "Online non-immigrant visa application.", duration: "1 Hour" },
            { step: 2, title: "Interview", description: "Consular interview. The officer assumes you are an immigrant; you must prove otherwise.", duration: "10 Minutes" }
        ],
        documents: [
            { category: "Proof of Return", items: ["Job Letter at home", "Property Deeds", "Family Ties"] },
            { category: "Trip", items: ["Itinerary", "Invitation Letter (for Business)"] }
        ]
    },
    "ir1": {
        id: "ir1",
        title: "IR-1 / CR-1 Spouse of US Citizen",
        description: "For spouses of US Citizens. Immediate Relative category means there is no numerical limit and no backlog (wait time is only processing time). CR-1 is for marriages < 2 years.",
        requirements: [{ title: "Relationship", items: ["Legally married to a US Citizen.", "Marriage must be bona fide (real)."] }],
        process: [
            { step: 1, title: "File I-130", description: "US Citizen files petition for spouse.", duration: "10-14 Months" },
            { step: 2, title: "NVC & Consular", description: "Submit financial/civil docs to NVC, then interview at Consulate.", duration: "6-10 Months" }
        ],
        documents: [{ category: "Proof", items: ["Marriage Certificate", "Photos", "Joint Assets"] }]
    },
    "ir5": {
        id: "ir5",
        title: "IR-5 Parent of US Citizen",
        description: "For parents of US Citizens (Citizen must be 21+). Immediate Relative category, no backlog.",
        requirements: [{ title: "Relationship", items: ["US Citizen child must be at least 21.", "Proof of parent-child relationship (Birth Cert)."] }],
        process: [{ step: 1, title: "File I-130", description: "US Citizen files petition for parent.", duration: "10-14 Months" }],
        documents: [{ category: "Proof", items: ["Sponsor's US Passport", "Sponsor's Birth Certificate"] }]
    },
    "f2a": {
        id: "f2a",
        title: "F-2A Spouse/Child of Permanent Resident",
        description: "For spouses and unmarried children (<21) of Green Card holders. Limited annual quota, but often 'Current'.",
        requirements: [{ title: "Relationship", items: ["Petitioner is LPR (Green Card holder).", "Beneficiary is spouse or unmarried child < 21."] }],
        process: [{ step: 1, title: "File I-130", description: "LPR files petition.", duration: "10-20 Months" }],
        documents: [{ category: "Proof", items: ["Green Card Copy", "Marriage/Birth Certs"] }]
    },
    "eb4": {
        id: "eb4",
        title: "EB-4 Special Immigrants",
        description: "Broad category including Religious Workers, Special Immigrant Juveniles (SIJ), and certain Broadcasters/Translators.",
        requirements: [{ title: "Religious Worker", items: ["Member of denomination for 2 years.", "Coming to work as minister or religious occupation."] }],
        process: [{ step: 1, title: "File I-360", description: "Petition for Amerasian, Widow(er), or Special Immigrant.", duration: "6-12 Months" }],
        documents: [{ category: "Proof", items: ["Denomination Certification", "Job Offer"] }]
    },
    "dv": {
        id: "dv",
        title: "Diversity Visa (Lottery)",
        description: "Annual lottery for nationals of countries with low immigration rates to the US.",
        requirements: [{ title: "Education/Work", items: ["High School Diploma OR 2 years of skilled work experience.", "Born in eligible country."] }],
        process: [
            { step: 1, title: "Enter Lottery", description: "Submit online entry in Oct/Nov.", duration: "1 Month" },
            { step: 2, title: "Check Status", description: "Check results in May of next year.", duration: "6 Months" }
        ],
        documents: [{ category: "Entry", items: ["Passport", "Photo"] }]
    },
    "family_f1": {
        id: "family_f1",
        title: "F-1 (Family) Unmarried Son/Daughter of USC",
        description: "For unmarried children (21+) of US Citizens.",
        requirements: [{ title: "Status", items: ["Unmarried.", "Parent is US Citizen."] }],
        process: [{ step: 1, title: "Wait for PD", description: "File I-130 and wait for priority date (7+ years).", duration: "Long Wait" }],
        documents: [{ category: "Proof", items: ["Birth Certificate"] }]
    },
    "f2b": {
        id: "f2b",
        title: "F-2B Unmarried Son/Daughter of LPR",
        description: "For unmarried children (21+) of Green Card holders.",
        requirements: [{ title: "Status", items: ["Unmarried.", "Parent is LPR."] }],
        process: [{ step: 1, title: "Wait for PD", description: "File I-130 and wait for priority date (7+ years).", duration: "Long Wait" }],
        documents: [{ category: "Proof", items: ["Birth Certificate"] }]
    },
    "family_f3": {
        id: "family_f3",
        title: "F-3 Married Child of USC",
        description: "For married children of US Citizens. Spouses and grand-children can derive status.",
        requirements: [{ title: "Status", items: ["Parent is US Citizen.", "Beneficiary is married."] }],
        process: [{ step: 1, title: "Wait for PD", description: "Wait time is very long (13+ years).", duration: "Very Long Wait" }],
        documents: [{ category: "Proof", items: ["Marriage Cert", "Birth Cert"] }]
    },
    "family_f4": {
        id: "family_f4",
        title: "F-4 Sibling of USC",
        description: "For brothers and sisters of US Citizens (Citizen must be 21+).",
        requirements: [{ title: "Relation", items: ["Sibling relationship.", "US Citizen is 21+."] }],
        process: [{ step: 1, title: "Wait for PD", description: "Wait time is extremely long (15-20+ years).", duration: "Extremely Long Wait" }],
        documents: [{ category: "Proof", items: ["Birth Certs of both siblings"] }]
    },
};
