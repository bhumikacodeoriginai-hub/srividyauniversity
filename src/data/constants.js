// src/data/constants.js

export const universityInfo = {
    name: "Srividya International University for Vedic Science",
    shortName: "Srividya University",
    website: "srividyauniversity.com",
    email: "srividyauniversity.gmail.com",

    centers: {
        international: {
            name: "Srividya Vishwa Samshodhana Pratishthanam (R.)",
            address: "2498, Northumbria Dr, Sanford, FL 32771, USA"
        },
        indian: {
            address: "No. 12, 1st Floor, 2nd Main, Dattatreya Nagara, Hoskerehalli, BSK III stage, Bengaluru 560085"
        }
    },

    accreditation: {
        location: "Florida, USA",
        approvedBy: "Commission for Independent Education – Religious Institutions, Florida Department of Education",
        focus: "Higher learning, research, and instruction in Vedic-Sanskrit studies and traditional Shastras"
    },

    stats: {
        yearsOfExcellence: "10+",
        doctoralGraduates: "25+",
        convocations: "3"
    }
};

export const visionMission = {
    vision: "To foster global spiritual well-being through advanced Vedic knowledge, cultivating deep proficiency and faith in traditional systems including Tantra, Agama, Jyothisha, Music, and Yoga. Srividya International University aims to inspire an enduring commitment to the Vedic worldview—a framework that imparts profound meaning and purpose to human existence, while offering an ethical pathway toward personal fulfilment and self-realization.",

    mission: [
        "Contemporary Vedic Education: To deliver comprehensive instruction in Vedic Science, effectively adapting ancient wisdom to modern contextual frameworks.",
        "Advanced Traditional Studies: To provide specialized higher education in Veda, Tantra, Agama, Jyothisha, Yoga, Music, Dance, Ayurveda, and allied traditional disciplines.",
        "Degree Conferral: To offer globally recognized academic programs, awarding Diploma, Associate's, Bachelor's, Master's, and Doctoral degrees in traditional shastras.",
        "Global Outreach & Engagement: To organize international courses, workshops, symposiums, lectures, and demonstrations, making Vedic traditions accessible to a global audience."
    ]
};

export const governance = {
    president: {
        name: "Dr. Ashok Ramakrishnan",
        title: "President",
        description: "Sri Ashok Ramakrishnan, a resident of Sanford, Florida is the Founder President. He is an Engineer, an enthusiastic NRI, very keen in promoting Vedic Studies & has formed the University with innovative ideas."
    },
    viceChancellor: {
        name: "Dr. J. Sreenivasa Murthy",
        title: "Vice Chancellor",
        description: "The first Vice-Chancellor of the University is Dr. J. Sreenivasa Murthy, an Eminent Scholar of Sanskrit, retired Principal & HOD, Sanskrit, M.E.S College, Bangalore. He is an Educationist associated with Advisory and Evaluation committee of many Universities and Colleges. Under his able guidance the University has launched its activities."
    },
    vicePresident: {
        name: "Dr. S.R. Narasimha Murthy",
        title: "Vice President"
    },
    syndicateMember: {
        name: "Dr. M.V. Archana",
        title: "Syndicate Member",
        description: "An accomplished musician with over 40 years of distinguished experience in the industry. A former visiting faculty member in the Music Department at Bangalore University, they currently serve as a Syndicate Member and Dean of the Music Department at SVSP, where she also oversee the examination section."
    }
};

export const academicCouncil = {
    chairman: "Dr. Srinivas Murty",
    coordinator: "Dr. S.R. Narasimha Murthy",
    members: {
        agama: "Vid. Ganapathi Mahabaleshwara Shastry, Bangalore",
        music: ["Dr. N. Raghu", "Dr. M.V. Archana"],
        danceYogic: "Dr. Jayashree Ravi Hegde"
    }
};

export const disciplines = [
    "Veda",
    "Agama",
    "Jyothisha",
    "Music",
    "Dance",
    "Yogic Science"
];

export const artDisciplines = {
    dance: [
        "Bharatanatyam",
        "Kathak",
        "Kuchipudi",
        "Mohini Attam",
        "Odissi",
        "Kathakali",
        "Manipuri",
        "Sattriya",
        "Yakshagana"
    ],
    music: [
        "Karnataka Sangeetha",
        "Hindustani Sangeetha"
    ],
    talavadya: [
        "Mridanga",
        "Tabla",
        "Flute",
        "Violin",
        "Veena",
        "Jalatarang",
        "Santoor",
        "Saksophone",
        "Gatam",
        "Khanjeera",
        "Morsing",
        "Tavile (Dolak)",
        "Konnakol",
        "Nattuvanga"
    ]
};

export const courses = [
    {
        id: "diploma",
        name: "Diploma",
        duration: "Three levels",
        eligibility: {
            age: "10 years and no upper limit",
            description: "For Indian Students: Diploma-Level 1 and 2, Level-3 (International certification)"
        }
    },
    {
        id: "ba",
        name: "Bachelor of Arts (BA)",
        duration: "3 years",
        eligibility: {
            age: "Completed 18 years by the time of application",
            education: "10th pass /PUC (of any discipline)/ any diploma or courses equivalent to PUC (18 years of age) plus minimum 2 years training in the related art form."
        }
    },
    {
        id: "ma",
        name: "Master of Arts (MA)",
        duration: "2 years",
        eligibility: {
            age: "Completed 21 years at the time of application",
            education: "Any art related degree OR Any degree plus minimum 5 years of serious training in the related art field (certificates or letter from Guru should to be submitted.)"
        }
    },
    {
        id: "dlit",
        name: "DLit",
        duration: "2 years",
        eligibility: {
            age: "Minimum 40 years",
            experience: "10 years of experience in related art field",
            exam: "Candidates have to undergo written exam and Viva Voce"
        }
    },
    {
        id: "integrated",
        name: "Integrated Masters and PhD",
        duration: "4 years",
        eligibility: {
            age: "Completed 21 years at the time of application",
            education: "Any art related degree OR Any degree plus minimum 8 years of serious training in the related art field (certificates or letter from Guru should to be submitted)."
        }
    },
    {
        id: "phd",
        name: "PhD",
        duration: "2+ years",
        eligibility: {
            age: "Completed 23 years at the time application",
            experience: "10 years of experience in related art field",
            exam: "Candidates have to undergo written exam and Viva Voce"
        }
    }
];

export const guides = {
    music: ["Dr. Meena Ganapathy", "Dr. Vatsala Patil", "Dr. N. Raghu"],
    dance: ["Dr. Jayashree Ravi Hegde", "Dr. Santoshi Simha"],
    yogicScience: ["Dr. Jayashree Ravi Hegde"],
    jyotishya: ["Dr. S.R. Narasimha Murthy"]
};

export const faculty = {
    vedaAgama: ["Vid. Ganapathi Mahabaleshwara Shastry, Bangalore"],
    music: ["Dr. M.V. Archana", "Dr. G. Sowmya"],
    percussion: ["Vid. B.S Prashant"],
    jyotishya: ["Dr. S.R. Narasimha Murthy"]
};

export const events = {
    recent: ["3rd Convocation - December 2023", "Vedic Symposium - November 2023"],
    upcoming: ["Music Festival - January 2024", "Yoga Workshop - February 2024"]
};

export const affiliates = {
    trust: "Sru Purandara Dasa Mahavidyala Seva Trust",
    studyCenters: [
        "Vatsala Patil",
        "Sri Shankara Veda Pathashala",
        "Srividya Shaktipaath"
    ],
    mahayogashram: {
        name: "Mahayogashram ®",
        address: "2912, A Ward, Wangi Bol, Mahadwar Road, Kolhapur 416012"
    }
};

export const contacts = {
    indianCentre: "Bangalore",
    globalHead: {
        name: "S.R. Narasimha Murthy",
        phone: "98867 14586"
    },
    admissions: {
        name: "Dr. Sowmya",
        phone: "98453 06034"
    },
    music: {
        name: "Dr. M.V. Archana",
        phone: "98860 77508"
    },
    danceYogic: {
        name: "Dr. Jayashree Ravi Hegde",
        phone: "9740440658"
    },
    officeTimings: "Monday-Friday: 10.00a.m -5.00 p.m. (IST)",
    holidays: "Saturday and Sunday Holidays"
};