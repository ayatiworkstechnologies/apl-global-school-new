const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.aplglobalschool.com"
).replace(/\/$/, "");

export const siteConfig = {
  name: "APL Global School",
  url: siteUrl,
  title: "APL Global School | International School in Chennai",
  description:
    "APL Global School in Chennai offers Cambridge, NIOS, inclusive learning, co-curricular programmes, admissions, events, and learner-centred education.",
  keywords: [
    "APL Global School",
    "international school Chennai",
    "Cambridge school Chennai",
    "NIOS school Chennai",
    "inclusive education Chennai",
    "APL admissions",
  ],
};

export const seoRoutes = [
  {
    path: "/",
    title: "APL Global School | International School in Chennai",
    description:
      "Explore APL Global School, Chennai, with Cambridge and NIOS pathways, inclusive education, creative programmes, events, admissions, and learner-centred school life.",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/apl-framework",
    title: "APL Framework | APL Global School",
    description:
      "Learn about the educational framework that guides APL Global School's learner-centred, inclusive, and globally aligned approach.",
    priority: 0.8,
  },
  {
    path: "/apl-promoters",
    title: "Our Promoters | APL Global School",
    description:
      "Meet the promoters behind APL Global School and their vision for progressive, inclusive, and future-ready education in Chennai.",
    priority: 0.7,
  },
  {
    path: "/apl-management",
    title: "Our Management | APL Global School",
    description:
      "Meet the leadership and management team guiding APL Global School's academic vision, operations, and learner support.",
    priority: 0.7,
  },
  {
    path: "/apl-faculty",
    title: "Our Faculty | APL Global School",
    description:
      "Discover APL Global School's faculty and mentors who support learners through strong academics, care, and personalised guidance.",
    priority: 0.7,
  },
  {
    path: "/apl-campus",
    title: "Our Campus | APL Global School",
    description:
      "Explore APL Global School's Chennai campus, learning spaces, facilities, and environment designed for holistic school life.",
    priority: 0.7,
  },
  {
    path: "/apl-associates",
    title: "Our Associates | APL Global School",
    description:
      "View the academic, institutional, and programme associates that support APL Global School's learning ecosystem.",
    priority: 0.6,
  },
  {
    path: "/apl-awards",
    title: "APL Awards | APL Global School",
    description:
      "See recognitions, achievements, and awards earned by APL Global School, its learners, and its community.",
    priority: 0.7,
  },
  {
    path: "/apl-educational",
    title: "Educational Philosophy | APL Global School",
    description:
      "Understand APL Global School's educational philosophy, inclusive practices, and commitment to meaningful learning.",
    priority: 0.7,
  },
  {
    path: "/apl-curriculum",
    title: "Curriculum | Cambridge and NIOS | APL Global School",
    description:
      "Explore APL Global School's curriculum pathways, including Cambridge programmes, NIOS, academic counselling, and learner support.",
    priority: 0.85,
  },
  {
    path: "/apl-programmes",
    title: "Programmes | APL Global School",
    description:
      "Discover APL Global School's programmes across kindergarten, primary, secondary, senior school, NIOS, and enrichment pathways.",
    priority: 0.85,
  },
  {
    path: "/apl-pedagogy",
    title: "Pedagogy | APL Global School",
    description:
      "Learn how APL Global School approaches teaching, assessment, personal learning, and holistic learner development.",
    priority: 0.8,
  },
  {
    path: "/essential-support",
    title: "Essential Support | APL Global School",
    description:
      "Explore essential support systems at APL Global School for inclusive education, counselling, learner needs, and wellbeing.",
    priority: 0.75,
  },
  {
    path: "/beyond-classrooms",
    title: "Beyond Classrooms | APL Global School",
    description:
      "Discover learning beyond classrooms at APL Global School through experiential programmes, activities, and real-world engagement.",
    priority: 0.7,
  },
  {
    path: "/expressions-clubs",
    title: "Expressions Clubs | APL Global School",
    description:
      "Explore student clubs and creative expression opportunities that help APL learners build confidence, interests, and skills.",
    priority: 0.7,
  },
  {
    path: "/apl-events",
    title: "APL Events | APL Global School",
    description:
      "View events, celebrations, student showcases, and community experiences at APL Global School.",
    priority: 0.75,
    changeFrequency: "weekly",
  },
  {
    path: "/youth-awards",
    title: "Youth Awards | APL Global School",
    description:
      "Explore youth awards and learner achievements that celebrate talent, leadership, and excellence at APL Global School.",
    priority: 0.7,
  },
  {
    path: "/apl-fees-and-streams",
    title: "Fees and Admission Process | APL Global School",
    description:
      "Find admission process details, fee information, streams, and application guidance for APL Global School Chennai.",
    priority: 0.9,
  },
  {
    path: "/day-at-school",
    title: "A Day at School | APL Global School",
    description:
      "Experience a day at APL Global School and see how academics, creativity, wellbeing, and school life come together.",
    priority: 0.75,
  },
  {
    path: "/vatsa",
    title: "Vatsa | APL Global School",
    description:
      "Learn about Vatsa at APL Global School and the early years approach that supports young learners with care and curiosity.",
    priority: 0.75,
  },
  {
    path: "/gallery",
    title: "Gallery | APL Global School",
    description:
      "Browse the APL Global School gallery featuring events, campus moments, performances, activities, and learner experiences.",
    priority: 0.75,
    changeFrequency: "weekly",
  },
  {
    path: "/photo-gallery",
    title: "Photo Gallery | APL Global School",
    description:
      "View photos from APL Global School events, student activities, celebrations, achievements, and campus life.",
    priority: 0.7,
    changeFrequency: "weekly",
  },
  {
    path: "/testimonials",
    title: "Testimonials | APL Global School",
    description:
      "Read testimonials from the APL Global School community, including families, learners, and alumni experiences.",
    priority: 0.7,
  },
  {
    path: "/teacher",
    title: "Teacher Mentor Centre | APL Global School",
    description:
      "Learn about APL Global School's Teacher Mentor Centre and professional development programmes for educators.",
    priority: 0.7,
  },
  {
    path: "/cidtl",
    title: "CIDTL Programme | APL Global School",
    description:
      "Explore the CIDTL teacher training programme at APL Global School for educators seeking Cambridge-aligned professional growth.",
    priority: 0.75,
  },
  {
    path: "/careers",
    title: "Careers | APL Global School",
    description:
      "Explore career opportunities at APL Global School for academic, non-academic, mentoring, and institutional roles.",
    priority: 0.75,
  },
  {
    path: "/contact-us",
    title: "Contact Us | APL Global School",
    description:
      "Contact APL Global School in Chennai for admissions, enquiries, school information, visits, and general support.",
    priority: 0.85,
  },
  {
    path: "/faq",
    title: "FAQ | APL Global School",
    description:
      "Find answers to frequently asked questions about APL Global School admissions, curriculum, programmes, and school life.",
    priority: 0.65,
  },
];

export function getRouteSeo(path) {
  return seoRoutes.find((route) => route.path === path) || seoRoutes[0];
}

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}

export function createMetadata(path = "/") {
  const route = getRouteSeo(path);
  const url = absoluteUrl(route.path);

  return {
    title: route.title,
    description: route.description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: route.title,
      description: route.description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/logo.png`,
          width: 512,
          height: 512,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: [`${siteConfig.url}/logo.png`],
    },
  };
}
