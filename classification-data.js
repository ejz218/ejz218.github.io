/* ═══════════════════════════════════════════════════════════════════════════
   Lehigh University — Data Classification Framework
   SHARED DATA MODULE — single source of truth

   Loaded by BOTH lehigh-data-classification.html and
   lehigh-data-classification-wizard.html. Edit classification content HERE
   ONLY. Do not copy these structures back into either page: divergent copies
   are what previously caused the same question to return two different
   classifications.

   Owner: Information Security, Lehigh University (security@lehigh.edu)
   ═══════════════════════════════════════════════════════════════════════════ */

const PAGE_META = {
  version:    "2.4",
  reviewed:   "August 18, 2026",
  nextReview: "February 2027",
  owner:      "Information Security",
  contact:    "security@lehigh.edu",
  precedence: "This tool summarizes Lehigh's data classification standard for practical use. Where it conflicts with published University policy, the policy governs."
};

const RETENTION_POLICY_URL = "https://policy.lehigh.edu/record-management-and-retention-policy";

/* Classification sets the protection floor for data. It does not authorize a
   platform. Reused verbatim in every class so the rule cannot drift. */
const TOOL_AUTHORIZATION_NOTE = "Classification sets the minimum protection required for the data. It does not by itself authorize a tool or service. Platforms that Lehigh has not approved remain off limits at every classification level, including Class IV.";

const CLASSES = [
  {
    id: "iv",
    num: "Class IV",
    name: "Public / Unrestricted",
    short: "No harm if disclosed; no access controls required",
    color: "#1B3A24",
    accent: "#1B3A24",
    colorBg: "#afedc9",
    icon: "🌐",
    definition: "Data that is intentionally made available to the public or that would cause no harm if disclosed. No access controls are required.",
    examples: [
      "Lehigh public website content",
      "Course catalog and published research",
      "Press releases and public event information",
      "Designated FERPA directory information for students who have not filed a suppression request",
    ],
    handling: [
      "No restrictions on storage, transmission, or sharing among approved Lehigh systems",
      "May be posted publicly and emailed freely",
      "No encryption required",
      TOOL_AUTHORIZATION_NOTE,
      `Retention and disposal still follow the <a href="${RETENTION_POLICY_URL}" target="_blank" rel="noopener">Record Management and Retention Policy</a>`,
    ],
    regulations: [
      "No specific regulatory driver",
      "FERPA still governs directory information. Verify the student has no active suppression request before release; suppressed directory information is Class II",
    ],
    baa: false,
    phi: false,
  },
  {
    id: "iii",
    num: "Class III",
    name: "Institutional / Proprietary",
    short: "Internal use only; unauthorized disclosure causes operational or reputational harm",
    color: "#12354C",
    accent: "#12354C",
    colorBg: "#d1e9e8",
    icon: "🏛️",
    definition: "Data intended for use within Lehigh University that is not meant for public disclosure. No regulatory requirement protects it, but unauthorized disclosure could cause operational, reputational, or competitive harm.",
    examples: [
      "Internal memos, policies, and org charts",
      "Budget drafts and internal meeting notes",
      "Employee performance discussions",
      "IT system documentation and network architecture diagrams that do not disclose exploitable weaknesses",
      "Vendor contracts, including non-disclosure agreements",
      "Internal project plans",
      "Unpublished research data",
      "Aggregated, de-identified data about people",
      "Internal Personal Identification Number (PIDM)",
      "Personal information used to verify identity — birth dates, mother's maiden name, photographs",
    ],
    handling: [
      "Must not be shared outside Lehigh without authorization",
      "May be stored on Lehigh systems and shared internally without special controls",
      "Not required to be encrypted at rest",
      "Must not be posted publicly or sent to personal email accounts",
      TOOL_AUTHORIZATION_NOTE,
      `Retention and secure disposal follow the <a href="${RETENTION_POLICY_URL}" target="_blank" rel="noopener">Record Management and Retention Policy</a>`,
    ],
    regulations: [
      "No specific regulatory driver",
      "Contractual obligations such as vendor NDAs may elevate specific documents",
      "Institutional policy governs",
      "Security documentation that reveals exploitable weaknesses is Class I, not Class III. See Class I examples",
    ],
    baa: false,
    phi: false,
  },
  {
    id: "ii",
    num: "Class II",
    name: "Restricted Information",
    short: "Sensitive; unauthorized disclosure harms individuals or the institution",
    /* Class II no longer uses the primary identity brown (#502d0e), which is
       now reserved for Lehigh identity: headings, header, footer. Text and UI
       use Lehigh Brown 80, an official tint that clears WCAG AA everywhere it
       appears (6.46:1 on white, 5.27:1 on the First Light tint, 6.46:1 behind
       white chip text). Autumn Dusk is the severity signal, restricted to the
       decorative accent bands: at 2.19:1 on white it cannot legally carry text
       or serve as a UI boundary. */
    color: "#83541e",
    accent: "#eba033",
    colorBg: "#f5e9ad",
    icon: "🔐",
    definition: "Data that is sensitive in nature and whose unauthorized disclosure could cause harm to individuals, the institution, or both. Access should be limited to those with a legitimate need. This is where most regulatory obligations begin.",
    examples: [
      "Student education records, including suppressed directory information (FERPA)",
      "Employee personnel files",
      "Employment-related health documentation held by HR or a supervisor — FMLA, ADA accommodation, workers' compensation, fitness for duty (HIPAA employment records exception; not PHI)",
      "Legal records &amp; correspondence",
      "Human subjects research information",
      "Security audit findings and remediation status that do not disclose exploitable weaknesses",
      "Donor records and non-public institutional financial data",
      "Immigration records",
      "ITAR and EAR controlled research data that is not CUI under a federal contract clause",
      "Personal data of individuals in the EU, UK, or Switzerland (GDPR / UK GDPR)",
      "Student health and counseling records (FERPA — not HIPAA)",
    ],
    handling: [
      "Access restricted to authorized personnel on a need-to-know basis",
      "Must be stored on Lehigh-approved systems with access controls",
      "Encryption required in transit; strongly recommended at rest",
      "Must not be stored in personal cloud accounts or emailed to personal addresses",
      "Third-party sharing requires a data use agreement or appropriate contract language",
      "ITAR and EAR data may be stored only on a system covered by an approved technology control plan, with access limited to authorized US persons. Confirm the platform with Information Security and the Office of Research and Sponsored Programs before the data is created or received",
      TOOL_AUTHORIZATION_NOTE,
      `Retention and secure disposal follow the <a href="${RETENTION_POLICY_URL}" target="_blank" rel="noopener">Record Management and Retention Policy</a>`,
    ],
    consequence: "Unauthorized release of this type of data could be damaging to the University.",
    regulations: [
      "FERPA (student education records, including student health and counseling)",
      "GLBA (non-account financial data)",
      "ADA and FMLA confidentiality requirements (employment-related health documentation)",
      "GDPR and UK GDPR (data subjects in the EU, UK, or Switzerland) — contact the Data Protection Officer",
      "Pennsylvania Breach of Personal Information Notification Act (73 P.S. § 2301 et seq., as amended by Act 151 of 2022)",
      "ITAR and EAR (export-controlled research that is not CUI)",
      "Contractual obligations",
    ],
    baa: false,
    phi: false,
  },
  {
    id: "i",
    num: "Class I",
    name: "Critical Information",
    short: "Highest non-health class; directly monetizable or subject to maximum regulatory penalties",
    color: "#ac1d15",
    accent: "#ac1d15",
    colorBg: "#ffded5",
    icon: "🛡️",
    definition: "Information legally classified as breach notifiable, where Lehigh University is required to self-report to the government and/or provide notice to the individual if the information is inappropriately accessed. Unauthorized disclosure would cause serious harm to individuals or the institution, and this data is directly monetizable by attackers or subject to the most stringent regulatory penalties. Access must be tightly controlled, logged, and audited. Lehigh's highest classification for non-health data.",
    examples: [
      "Social security numbers and government-issued ID numbers (passport, driver's license)",
      "Financial account numbers and payment card data (PCI)",
      "Bank routing numbers",
      "Passwords, authentication credentials, and encryption keys",
      "Vulnerability scan results, penetration test reports, and unremediated security findings",
      "Security control configurations, detection logic, and defensive tooling detail that would enable evasion",
      "Controlled Unclassified Information (CUI) and covered defense information under DFARS 252.204-7012, CMMC, or NIST SP 800-171 contract clauses",
    ],
    handling: [
      "Access restricted to minimum required authorized personnel",
      "Must be stored on Lehigh-approved systems with strong access controls, logging, and audit trails",
      "Encryption required in transit and at rest",
      "Must not be stored in email or on unmanaged systems",
      "Spreadsheets and other loose files are permitted only when kept on an approved access-controlled system — for example, an approved LAN drive. They must not be emailed, downloaded to a local or personal device, or stored in personal cloud accounts",
      "CUI requires a NIST SP 800-171 aligned enclave. Do not place CUI on general-purpose Lehigh systems without Information Security approval",
      "Third-party sharing requires formal data sharing agreement, security review, and legal review",
      TOOL_AUTHORIZATION_NOTE,
      `Retention must follow the defined schedules in the <a href="${RETENTION_POLICY_URL}" target="_blank" rel="noopener">Record Management and Retention Policy</a>, with secure destruction at end of life`,
    ],
    consequence: "Unauthorized release of this type of data could be damaging to the University.",
    regulations: [
      "GLBA (financial account data)",
      "Pennsylvania Breach of Personal Information Notification Act (73 P.S. § 2301 et seq., as amended by Act 151 of 2022)",
      "PCI-DSS (payment card data)",
      "DFARS 252.204-7012, CMMC, and NIST SP 800-171 (CUI and covered defense information)",
      "Federal contract requirements",
    ],
    baa: false,
    phi: false,
  },
  {
    id: "phi",
    num: "Class I PHI",
    name: "Protected Health Information",
    short: "Most restrictive; HIPAA-covered health data — BAA required for all third-party vendors",
    color: "#ac1d15",
    accent: "#ac1d15",
    colorBg: "#fcd8d6",
    icon: "🏥",
    definition: "A special operational subset of Class I covering health information created, received, maintained, or transmitted by Lehigh in its capacity as a HIPAA-covered entity, covered health care component, or business associate. Two categories of health data are deliberately excluded: student health and counseling records, which are FERPA education records and Class II, and employment records held by Lehigh in its role as employer, which HIPAA excludes from the definition of PHI and which are also Class II.",
    examples: [
      "Group health plan records for faculty and staff, including claims, enrollment, and eligibility data held by or for the plan",
      "Medical information from a Lehigh covered health care component serving non-students",
      "Employee wellness program data held by or on behalf of the health plan rather than by HR",
      "Health information where Lehigh acts as a covered entity or business associate",
      "Third-party vendor health data requiring a BAA",
    ],
    handling: [
      "Most restrictive class — access limited to workforce members with specific treatment, payment, or operations need",
      "Minimum necessary standard applies to every access and disclosure",
      "Must be stored on Lehigh-approved HIPAA-compliant systems only",
      "Encryption required in transit and at rest",
      "Business Associate Agreements (BAA) required for any third-party vendor that touches this data",
      "Incident response for suspected breach must involve the HIPAA Security and Privacy Officer within 24 hours",
      TOOL_AUTHORIZATION_NOTE,
      `Retention must follow the defined schedules in the <a href="${RETENTION_POLICY_URL}" target="_blank" rel="noopener">Record Management and Retention Policy</a>, with secure destruction at end of life`,
    ],
    consequence: "Unauthorized release of this type of data could be damaging to the University.",
    regulations: [
      "HIPAA Privacy Rule",
      "HIPAA Security Rule",
      "HIPAA Breach Notification Rule",
      "42 CFR Part 2 (substance use disorder records, if applicable)",
      "Pennsylvania Mental Health Procedures Act",
      "Pennsylvania Confidentiality of HIV-Related Information Act",
    ],
    baa: true,
    phi: true,
  },
];

/* ═══════════════════════════════════════════════════════
   WIZARD DECISION TREE

   Spine: q2 → q9 (stepMax 9). Health branch: q1a → q1c (stepMax 4).
   Order is deliberate: the most restrictive and least ambiguous triggers are
   asked first so a record containing several data types resolves to its
   highest applicable class.
   ═══════════════════════════════════════════════════════ */

const W_QUESTIONS = {
  q1: {
    id: "q1", topic: "🏥 Health Data",
    text: "Does this data relate to the physical or mental health of a person?",
    shortLabel: "Health-related data?",
    stepNum: 1, stepMax: 9,
    yes: "q1a", no: "q2"
  },
  q1a: {
    id: "q1a", topic: "🏥 Health Data",
    text: "Is this person a Lehigh student receiving health or counseling services through Lehigh University?",
    shortLabel: "Lehigh student health or counseling services?",
    stepNum: 2, stepMax: 4,
    yes: { type: "result", id: "r_ii_student" },
    no: "q1b"
  },
  q1b: {
    id: "q1b", topic: "🏥 Health Data",
    text: "Is this health information held by or on behalf of Lehigh's group health plan, a Lehigh covered health care component, or a business associate relationship — rather than by HR in Lehigh's role as employer?",
    shortLabel: "Held by the health plan or a covered component?",
    stepNum: 3, stepMax: 4,
    yes: { type: "result", id: "r_phi" },
    no: "q1c"
  },
  q1c: {
    id: "q1c", topic: "🏥 Health Data",
    text: "Is this employment-related health documentation held by HR or a supervisor — for example FMLA certification, an ADA accommodation request, workers' compensation, a fitness for duty evaluation, or sick leave documentation?",
    shortLabel: "Employment record held by HR or a supervisor?",
    stepNum: 4, stepMax: 4,
    yes: { type: "result", id: "r_ii_employee_health" },
    no: { type: "result", id: "r_phi_review" }
  },
  q2: {
    id: "q2", topic: "🔑 Critical Identifiers",
    text: "Does this data include any of the following: Social Security numbers, passport or driver's license numbers, financial account or payment card numbers, bank routing numbers, authentication credentials, or encryption keys?",
    shortLabel: "SSNs, financial accounts, or credentials?",
    stepNum: 2, stepMax: 9,
    yes: { type: "result", id: "r_i" }, no: "q3"
  },
  q3: {
    id: "q3", topic: "🛡️ Security Data",
    text: "Does this data disclose exploitable security weaknesses — vulnerability scan results, penetration test findings, unremediated issues, security control configurations, or detection logic? Architecture diagrams and general system documentation that do not reveal exploitable weaknesses do not count here.",
    shortLabel: "Exploitable security weaknesses?",
    stepNum: 3, stepMax: 9,
    yes: { type: "result", id: "r_i_security" }, no: "q4"
  },
  q4: {
    id: "q4", topic: "🔬 Federal Contract Data",
    text: "Is this data Controlled Unclassified Information (CUI) or covered defense information under a federal contract clause such as DFARS 252.204-7012, CMMC, or NIST SP 800-171?",
    shortLabel: "CUI under DFARS / CMMC / 800-171?",
    stepNum: 4, stepMax: 9,
    yes: { type: "result", id: "r_i_cui" }, no: "q5"
  },
  q5: {
    id: "q5", topic: "🔬 Export Control",
    text: "Is this export-controlled technical data under ITAR or EAR that is not CUI under a federal contract clause?",
    shortLabel: "ITAR or EAR export-controlled data?",
    stepNum: 5, stepMax: 9,
    yes: { type: "result", id: "r_ii_export" }, no: "q6"
  },
  q6: {
    id: "q6", topic: "🎓 Student Records",
    text: "Is this data related to a student's education record, including enrollment, grades, attendance, financial aid, academic performance, or disciplinary records?",
    shortLabel: "Student education records (FERPA)?",
    stepNum: 6, stepMax: 9,
    yes: "q6a", no: "q7"
  },
  q6a: {
    id: "q6a", topic: "🎓 Student Records",
    text: "Is this limited to designated FERPA directory information — for example name, enrollment status, dates of attendance, degrees awarded — for students who have not filed a suppression request?",
    shortLabel: "Directory information only, no suppression?",
    stepNum: 7, stepMax: 9,
    yes: { type: "result", id: "r_iv_directory" },
    no: { type: "result", id: "r_ii_ferpa" }
  },
  q7: {
    id: "q7", topic: "🌍 GDPR",
    text: "Does this data describe an identifiable person who was in the EU, UK, or Switzerland at the time of collection — for example study abroad participants, international applicants and recruiting contacts, EU-based research subjects or collaborators, or EU alumni and donors?",
    shortLabel: "Data subject in the EU, UK, or Switzerland?",
    stepNum: 7, stepMax: 9,
    yes: { type: "result", id: "r_ii_gdpr" }, no: "q8"
  },
  q8: {
    id: "q8", topic: "⚖️ Legal & Regulatory",
    text: "Is this data subject to any other federal or state law, regulation, or contractual obligation? Examples include: employee personnel records, immigration records, legal correspondence, audit findings, donor records, non-public institutional financial data, or vendor contracts with confidentiality terms.",
    shortLabel: "Other legal, regulatory, or contractual obligation?",
    stepNum: 8, stepMax: 9,
    yes: { type: "result", id: "r_ii_other" }, no: "q9"
  },
  q9: {
    id: "q9", topic: "🏛️ Institutional Sensitivity",
    text: "Is this data intended for internal Lehigh use only, and would its unauthorized disclosure cause operational, reputational, or competitive harm to the university — even if no law or regulation requires its protection?",
    shortLabel: "Internal only; disclosure would cause institutional harm?",
    stepNum: 9, stepMax: 9,
    yes: { type: "result", id: "r_iii" },
    no: { type: "result", id: "r_iv" }
  }
};

/* Shared handling strings keep result text consistent with the CLASSES entries. */
const H_CLASS_II  = "Access restricted to authorized personnel on a need-to-know basis. Store on Lehigh-approved systems with access controls. Encryption required in transit. Do not store in personal cloud accounts or share with third parties without a data use agreement.";
const H_CLASS_I   = "Access limited to minimum necessary personnel with logging and audit trails. Encryption required in transit and at rest. Do not store in email or unmanaged systems. Third-party sharing requires formal data sharing agreement, security review, and legal review.";
const H_CLASS_PHI = "Most restrictive. Access limited to workforce members with treatment, payment, or operations need. Minimum necessary standard applies. Store only on HIPAA-compliant Lehigh-approved systems. Encryption required in transit and at rest. BAA required for all vendors. Report suspected breaches to the HIPAA Security and Privacy Officer within 24 hours.";

const W_RESULTS = {
  r_ii_student: {
    classId: "ii", classNum: "Class II", className: "Restricted Information",
    icon: "🔐", color: "#83541e", accent: "#eba033", colorBg: "#f5e9ad",
    reason: "Student health and counseling records at Lehigh are covered under FERPA, not HIPAA. These records are treated as part of the student's education record and classified as Class II Restricted. A Business Associate Agreement (BAA) is not required for these records.",
    handling: H_CLASS_II,
    phi: false
  },
  r_phi: {
    classId: "phi", classNum: "Class I PHI", className: "Protected Health Information",
    icon: "🏥", color: "#ac1d15", accent: "#ac1d15", colorBg: "#fcd8d6",
    reason: "This data is Protected Health Information under HIPAA. It is held by or on behalf of Lehigh's group health plan, a covered health care component, or a business associate relationship, so Lehigh is acting as a covered entity or business associate. A BAA is required for any vendor or third party that touches this data. This is the most restrictive classification at Lehigh.",
    handling: H_CLASS_PHI,
    phi: true
  },
  r_ii_employee_health: {
    classId: "ii", classNum: "Class II", className: "Restricted Information",
    icon: "🔐", color: "#83541e", accent: "#eba033", colorBg: "#f5e9ad",
    reason: "HIPAA excludes employment records held by a covered entity in its role as employer from the definition of PHI. FMLA certifications, ADA accommodation documentation, workers' compensation files, and fitness for duty evaluations held by HR or a supervisor are therefore not PHI. They remain highly sensitive and are Class II Restricted, with confidentiality obligations under the ADA and FMLA. Keep them separate from the general personnel file.",
    handling: H_CLASS_II + " Store separately from the general personnel file, with access limited to HR and the specific individuals administering the accommodation or leave.",
    phi: false
  },
  r_phi_review: {
    classId: "phi", classNum: "Class I PHI", className: "Protected Health Information",
    icon: "🏥", color: "#ac1d15", accent: "#ac1d15", colorBg: "#fcd8d6",
    reason: "This health data is neither a student record nor an employment record held by HR, and its relationship to Lehigh's health plan or covered health care component is unclear. Treat it as Protected Health Information until Information Security confirms otherwise. Over-protecting health data is recoverable; under-protecting it is a reportable breach. Contact security@lehigh.edu for a determination before the data moves or is shared.",
    handling: H_CLASS_PHI + " Confirm the determination with Information Security before sharing this data or placing it in a new system.",
    phi: true
  },
  r_i: {
    classId: "i", classNum: "Class I", className: "Critical Information",
    icon: "🛡️", color: "#ac1d15", accent: "#ac1d15", colorBg: "#ffded5",
    reason: "This data is directly monetizable by attackers and is breach notifiable under the Pennsylvania Breach of Personal Information Notification Act (73 P.S. § 2301 et seq., as amended by Act 151 of 2022) and applicable federal regulations including GLBA and PCI-DSS. It requires the highest level of protection for non-health data at Lehigh.",
    handling: H_CLASS_I,
    phi: false
  },
  r_i_security: {
    classId: "i", classNum: "Class I", className: "Critical Information",
    icon: "🛡️", color: "#ac1d15", accent: "#ac1d15", colorBg: "#ffded5",
    reason: "Data that discloses exploitable security weaknesses gives an attacker a direct path into Lehigh systems, so it is Class I Critical even though it contains no personal information. This covers vulnerability scan output, penetration test findings, unremediated issues, security control configurations, and detection logic. General architecture documentation that does not reveal exploitable weaknesses is Class III.",
    handling: H_CLASS_I + " Share findings only with the system owners responsible for remediation. Do not attach scan or test output to tickets or email.",
    phi: false
  },
  r_i_cui: {
    classId: "i", classNum: "Class I", className: "Critical Information",
    icon: "🛡️", color: "#ac1d15", accent: "#ac1d15", colorBg: "#ffded5",
    reason: "Controlled Unclassified Information and covered defense information carry contractual security obligations under DFARS 252.204-7012, CMMC, and NIST SP 800-171. Noncompliance is a contract breach with reporting obligations to the federal sponsor, so this data is Class I Critical. Export-controlled ITAR and EAR data that is not CUI under a contract clause is Class II.",
    handling: H_CLASS_I + " CUI requires a NIST SP 800-171 aligned enclave. Do not place it on general-purpose Lehigh systems. Engage Information Security and the Office of Research and Sponsored Programs before work begins.",
    phi: false
  },
  r_ii_export: {
    classId: "ii", classNum: "Class II", className: "Restricted Information",
    icon: "🔐", color: "#83541e", accent: "#eba033", colorBg: "#f5e9ad",
    reason: "Export-controlled technical data under the International Traffic in Arms Regulations (ITAR) or the Export Administration Regulations (EAR) is Class II Restricted when it is not CUI under a federal contract clause. Unauthorized disclosure, including access by a foreign national inside the United States, is a deemed export and can result in federal penalties and loss of research funding.",
    handling: H_CLASS_II + " Access is limited to authorized US persons named on the applicable technology control plan. Store this data only on a system covered by that plan; general-purpose Lehigh cloud storage is not covered by default. Confirm the platform with Information Security and the Office of Research and Sponsored Programs before the data is created or received.",
    phi: false
  },
  r_iv_directory: {
    classId: "iv", classNum: "Class IV", className: "Public / Unrestricted Information",
    icon: "🌐", color: "#1B3A24", accent: "#1B3A24", colorBg: "#afedc9",
    reason: "Designated FERPA directory information may be released without student consent, so it is Class IV Public. This holds only while the student has no active suppression request. Verify suppression status in Banner before every release; a suppressed record is Class II Restricted, and releasing it is a FERPA violation.",
    handling: "No special storage or encryption requirements. Before releasing or publishing, confirm no student in the set has filed a FERPA suppression request. If any have, remove them or treat the set as Class II. " + TOOL_AUTHORIZATION_NOTE,
    phi: false
  },
  r_ii_ferpa: {
    classId: "ii", classNum: "Class II", className: "Restricted Information",
    icon: "🔐", color: "#83541e", accent: "#eba033", colorBg: "#f5e9ad",
    reason: "Student education records are protected under the Family Educational Rights and Privacy Act (FERPA). Access is limited to those with a legitimate educational interest. Disclosure outside Lehigh requires written student consent or an applicable FERPA exception.",
    handling: H_CLASS_II,
    phi: false
  },
  r_ii_gdpr: {
    classId: "ii", classNum: "Class II", className: "Restricted Information",
    icon: "🔐", color: "#83541e", accent: "#eba033", colorBg: "#f5e9ad",
    reason: "Personal data of individuals located in the EU, UK, or Switzerland falls under the GDPR or UK GDPR, which sets a Class II floor regardless of how sensitive the content looks. GDPR adds obligations that classification alone does not cover: a documented lawful basis, data subject rights including access and erasure, a valid transfer mechanism for moving data to the United States, and notification to the supervisory authority within 72 hours of a qualifying breach.",
    handling: H_CLASS_II + " Contact the Data Protection Officer at security@lehigh.edu before collecting, transferring, or sharing this data so the lawful basis, retention limit, and transfer mechanism are documented.",
    phi: false
  },
  r_ii_other: {
    classId: "ii", classNum: "Class II", className: "Restricted Information",
    icon: "🔐", color: "#83541e", accent: "#eba033", colorBg: "#f5e9ad",
    reason: "This data is regulated or restricted by federal law, state law, or contractual obligation. Access should be limited to those with a legitimate need to know. External sharing requires a data use agreement or appropriate contract language.",
    handling: H_CLASS_II,
    phi: false
  },
  r_iii: {
    classId: "iii", classNum: "Class III", className: "Institutional / Proprietary Information",
    icon: "🏛️", color: "#12354C", accent: "#12354C", colorBg: "#d1e9e8",
    reason: "This data is not regulated but is sensitive to Lehigh's operations. Examples include budget drafts, org charts, internal policies, architecture documentation, and vendor contracts. It should not be shared outside Lehigh without authorization.",
    handling: "For internal use only. Store on Lehigh-approved systems. Do not post publicly or send to personal email accounts. Encryption is not required, but do not share externally without authorization. " + TOOL_AUTHORIZATION_NOTE,
    phi: false
  },
  r_iv: {
    classId: "iv", classNum: "Class IV", className: "Public / Unrestricted Information",
    icon: "🌐", color: "#1B3A24", accent: "#1B3A24", colorBg: "#afedc9",
    reason: "This data can be freely shared and disclosed. No access controls, encryption, or special handling are required. Examples include published research, the course catalog, public event information, and press releases.",
    handling: "No storage, sharing, or encryption restrictions. " + TOOL_AUTHORIZATION_NOTE,
    phi: false
  }
};

const CLASS_TO_SG_KEY = { phi: "c1phi", i: "c1", ii: "c2", iii: "c3", iv: "c4" };

const STORAGE_PLATFORMS = [
  {
    name: "Approved Access-Controlled LAN Drive*",
    status: { c1phi: "ok", c1: "ok", c2: "ok", c3: "ok", c4: "ok" },
    note: "Must be approved by Information Security or implemented by LTS in an approved configuration."
  },
  {
    name: "AWS – Secure Research Cloud (SRC)",
    status: { c1phi: "ok", c1: "ok", c2: "ok", c3: "ok", c4: "ok" }
  },
  {
    name: "AWS – Lehigh Enterprise Analytics Platform (LEAP)",
    status: { c1phi: "ok", c1: "ok", c2: "ok", c3: "ok", c4: "ok" },
    note: "Formerly the Lehigh Administrative Data Lake (LADL)."
  },
  {
    name: "Lehigh-Owned, LTS-Managed Whole-Disk-Encrypted Devices",
    status: { c1phi: "no", c1: "conditional", c2: "ok", c3: "ok", c4: "ok" },
    note: "Device must be enrolled in LTS management with whole-disk encryption verified. Class I use requires Information Security approval and is limited to the minimum data necessary."
  },
  {
    name: "REDCap",
    status: { c1phi: "conditional", c1: "conditional", c2: "ok", c3: "ok", c4: "ok" },
    note: "Must be appropriately configured by LTS for Class I or Class I PHI data. Request the configuration through LTS before collecting data."
  },
  {
    name: "DocuSign",
    status: { c1phi: "conditional", c1: "conditional", c2: "ok", c3: "ok", c4: "ok" },
    note: "Must be set up by LTS to support Class I or Class I PHI data. Request setup through LTS before sending documents."
  },
  {
    name: "Lehigh Dropbox for Business",
    status: { c1phi: "conditional", c1: "conditional", c2: "ok", c3: "ok", c4: "ok" },
    note: "Requires an LTS-managed team drive with Class I data placed in the C1 folder. Do not share files externally."
  },
  {
    name: "Lehigh File Sender",
    status: { c1phi: "no", c1: "ok", c2: "ok", c3: "ok", c4: "ok" }
  },
  {
    name: "Ceph Storage with LTS Access-Control (R Drive)",
    status: { c1phi: "no", c1: "no", c2: "ok", c3: "ok", c4: "ok" }
  },
  {
    name: "Course Site",
    status: { c1phi: "no", c1: "no", c2: "ok", c3: "ok", c4: "ok" }
  },
  {
    name: "JIRA",
    status: { c1phi: "no", c1: "no", c2: "ok", c3: "ok", c4: "ok" },
    note: "Do not attach vulnerability scan output or penetration test findings to tickets."
  },
  {
    name: "Qualtrics",
    status: { c1phi: "no", c1: "no", c2: "ok", c3: "ok", c4: "ok" }
  },
  {
    name: "Slack (Lehigh Licensed)",
    status: { c1phi: "no", c1: "no", c2: "ok", c3: "ok", c4: "ok" }
  },
  {
    name: "Zoom",
    status: { c1phi: "no", c1: "no", c2: "ok", c3: "ok", c4: "ok" }
  },
  {
    name: "Zoom – HIPAA",
    status: { c1phi: "conditional", c1: "conditional", c2: "ok", c3: "ok", c4: "ok" },
    note: "HIPAA account conversion required, requested through LTS. Disables cloud recording, breakout rooms, and AI features."
  },
  {
    name: "Lehigh Gmail",
    status: { c1phi: "no", c1: "no", c2: "conditional", c3: "ok", c4: "ok" },
    note: "Class II is permitted only between internal @lehigh.edu addresses. External disclosure of student education records requires written consent or an applicable FERPA exception and must not be sent from Gmail."
  },
  {
    name: "Lehigh Google Drive",
    status: { c1phi: "conditional", c1: "conditional", c2: "conditional", c3: "ok", c4: "ok" },
    note: "Class I and Class I PHI require Information Security approval and an LTS-configured shared drive. Export-controlled and CUI data require separate approval; see the Class II and Class I handling requirements."
  },
  {
    name: "Lehigh Microsoft OneDrive",
    status: { c1phi: "no", c1: "no", c2: "conditional", c3: "ok", c4: "ok" },
    note: "Class II permitted for Lehigh business use with sharing limited to Lehigh accounts. ITAR, EAR, and CUI data excluded. Encrypted in transit and at rest."
  },
  {
    name: "Lehigh University LAN Drive (H: I: J:)",
    status: { c1phi: "no", c1: "no", c2: "ok", c3: "ok", c4: "ok" }
  },
  {
    name: "Confluence",
    status: { c1phi: "no", c1: "no", c2: "no", c3: "ok", c4: "ok" }
  },
  {
    name: "Drupal and Lehigh Hosted Webpages",
    status: { c1phi: "no", c1: "no", c2: "no", c3: "conditional", c4: "ok" },
    note: "Class III content is permitted only on pages restricted behind Lehigh authentication. Publicly accessible pages may carry Class IV information only."
  },
  {
    name: "Web and Storage Space",
    status: { c1phi: "no", c1: "no", c2: "no", c3: "conditional", c4: "ok" },
    note: "Class III content is permitted only where access is restricted behind Lehigh authentication. Publicly accessible pages and directories may carry Class IV information only."
  },
  {
    name: "Unmanaged Devices (Lehigh or Personal)",
    status: { c1phi: "no", c1: "no", c2: "no", c3: "no", c4: "ok" }
  },
  {
    name: "Personally Owned Computers or Storage Devices",
    status: { c1phi: "no", c1: "no", c2: "no", c3: "no", c4: "ok" }
  },
  {
    name: "Personal Dropbox",
    status: { c1phi: "no", c1: "no", c2: "no", c3: "no", c4: "ok" }
  }
];

const AI_PLATFORMS = [
  {
    name: "Google Gemini AI (Lehigh Account) — Gems, NotebookLM, AI Studio",
    status: { c1phi: "no", c1: "conditional", c2: "ok", c3: "ok", c4: "ok" },
    note: "Class I requires Information Security review and approval of the specific use case before any data is entered. Do not enter export-controlled or CUI data without Information Security and ORSP approval: AI services raise retention and model-training questions beyond where data is stored."
  },
  {
    name: "Zoom AI",
    status: { c1phi: "no", c1: "no", c2: "ok", c3: "ok", c4: "ok" },
    note: "HIPAA Zoom accounts do not support AI features."
  },
  {
    name: "DataCamp",
    status: { c1phi: "no", c1: "no", c2: "conditional", c3: "ok", c4: "ok" },
    note: "Learning environment only, using instructional data sets. Not approved for Class II production data. Consult LTS for non-learning use cases."
  },
  {
    name: "LibreChat",
    status: { c1phi: "no", c1: "no", c2: "no", c3: "ok", c4: "ok" }
  },
  {
    name: "Claude (Anthropic — Lehigh-licensed)",
    status: { c1phi: "no", c1: "no", c2: "no", c3: "ok", c4: "ok" }
  },
  {
    name: "All Other AI Tools (free tier / not centrally purchased)",
    status: { c1phi: "no", c1: "no", c2: "no", c3: "no", c4: "ok" },
    note: "Includes ChatGPT/OpenAI, Perplexity, Claude free tier, etc."
  },
  {
    name: "otter.ai / read.ai and similar meeting note tools",
    status: { c1phi: "no", c1: "no", c2: "no", c3: "no", c4: "no" },
    note: "Not approved at any classification level, including Class IV. These tools join meetings as participants and retain recordings outside Lehigh control. Use Zoom's embedded meeting tools instead."
  }
];
