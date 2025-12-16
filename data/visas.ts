export type VisaType = {
    id: string;
    code: string;
    name: string;
    description: string;
    badge?: string;
};

export const VISA_CATEGORIES = {
    "immigrant": {
        title: "Immigrant Visas (Green Card)",
        description: "Permanent Residence in the United States",
        visas: [
            { id: 'ir1', code: 'IR-1/CR-1', name: 'Spouse of US Citizen', description: 'Immediate Relative. No backlog.', badge: 'Fast' },
            { id: 'ir5', code: 'IR-5', name: 'Parent of US Citizen', description: 'Immediate Relative. No backlog.' },
            { id: 'f2a', code: 'F-2A', name: 'Spouse/Child of Green Card Holder', description: 'Second Preference. Usually current or short wait.' },
            { id: 'eb1a', code: 'EB-1A', name: 'Alien of Extraordinary Ability', description: 'Self-petition, no employer needed. Top 1% in field.', badge: 'Popular' },
            { id: 'eb2niw', code: 'EB-2 NIW', name: 'National Interest Waiver', description: 'Self-petition. Work of national importance.', badge: 'Popular' },
            { id: 'eb1b', code: 'EB-1B', name: 'Outstanding Professor/Researcher', description: 'Requires employer sponsor. Internationally recognized.' },
            { id: 'eb1c', code: 'EB-1C', name: 'Multinational Manager', description: 'Transfer executive/manager to US branch.' },
            { id: 'eb2', code: 'EB-2', name: 'Advanced Degree', description: 'Requires employer & PERM labor certification.' },
            { id: 'eb3', code: 'EB-3', name: 'Skilled/Professional', description: 'Requires employer & PERM. Bachelor degree or skilled.' },
            { id: 'eb4', code: 'EB-4', name: 'Special Immigrants', description: 'Religious workers, Afghan allies, SIJ.' },
            { id: 'eb5', code: 'EB-5', name: 'Immigrant Investor', description: 'Investment of $800k+ in US enterprise.' },
            { id: 'family_f1', code: 'F-1 (Family)', name: 'Unmarried Adult Son/Daughter of USC', description: 'First Preference. Long wait.' },
            { id: 'f2b', code: 'F-2B', name: 'Unmarried Adult Son/Daughter of LPR', description: 'Second Preference B.' },
            { id: 'family_f3', code: 'F-3 (Family)', name: 'Married Child of USC', description: 'Third Preference. Long wait.' },
            { id: 'family_f4', code: 'F-4 (Family)', name: 'Sibling of USC', description: 'Fourth Preference. Very long wait (15+ years).' },
            { id: 'dv', code: 'DV', name: 'Diversity Visa', description: 'Green Card Lottery. For eligible countries.' },
        ] as VisaType[]
    },
    "non_immigrant": {
        title: "Non-Immigrant Visas",
        description: "Temporary Work or Stay",
        visas: [
            { id: 'o1', code: 'O-1', name: 'Individuals with Extraordinary Ability', description: 'Similar to EB-1A but temporary. Valid 3 years.', badge: 'Flexible' },
            { id: 'h1b', code: 'H-1B', name: 'Specialty Occupation', description: 'Requires lottery & employer. Bachelor degree.' },
            { id: 'l1', code: 'L-1', name: 'Intracompany Transferee', description: 'Executives (L-1A) or Specialized Knowledge (L-1B).' },
            { id: 'tn', code: 'TN', name: 'NAFTA Professionals', description: 'For Canadian and Mexican citizens.' },
            { id: 'e2', code: 'E-2', name: 'Treaty Investor', description: 'Invest in a US business. Citizenship of treaty country required.' },
            { id: 'f1', code: 'F-1', name: 'Student Visa', description: 'Academic studies. Optional Pratical Training (OPT) allowed.' },
            { id: 'b1b2', code: 'B-1/B-2', name: 'Business / Tourist', description: 'Short term visitor for business or pleasure.' },
        ] as VisaType[]
    }
};
