export interface EventItem {
  id: string;
  slug: string;
  title: string;
  category: "Education" | "Animal Welfare" | "Community";
  date: string;
  time: string;
  location: string;
  summary: string;
  coverImage: string;
  gallery: string[];
  status: "Upcoming" | "Completed";
  impactBadge?: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime: string;
  attendeesCount: number;
  highlightStat: {
    label: string;
    value: string;
  };
  blogContent: {
    overview: string;
    keyPoints: string[];
    groundReport: string;
    volunteerQuotes: {
      quote: string;
      by: string;
    }[];
    impactSummary: string;
  };
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: "1",
    slug: "diwali-slum-study-stationery-distribution-drive",
    title: "Diwali Slum Study & Stationery Distribution Drive",
    category: "Education",
    date: "November 08, 2026",
    time: "3:30 PM - 6:30 PM",
    location: "Railway Colony Slum Cluster, Haldia",
    summary:
      "Distributing 150+ comprehensive education kits containing notebooks, drawing pads, geometry boxes, and solar study lamps for evening studies.",
    coverImage: "/child_learning.jpg",
    gallery: [
      "/child_learning.jpg",
      "/teacher_classroom.jpg",
      "/clock_craft.jpg",
      "/smiling_child.jpg"
    ],
    status: "Upcoming",
    impactBadge: "150+ Kits Targeted",
    author: {
      name: "Rohan Sen",
      role: "Education Coordinator, B.Tech EE",
      avatar: "RS"
    },
    readTime: "4 min read",
    attendeesCount: 45,
    highlightStat: {
      label: "Children Benefitting",
      value: "150+ Kits"
    },
    blogContent: {
      overview:
        "Every year during Diwali, while cities celebrate with lights and festivities, hundreds of young students living in informal settlements across Haldia struggle to study after sunset due to irregular electricity and an acute shortage of basic school materials. Eklavya is organizing a dedicated stationery and solar study kit distribution drive to ensure no child is left behind in darkness.",
      keyPoints: [
        "150 comprehensive study kits (notebooks, geometry tools, color pencils, and school bags)",
        "Rechargeable LED solar study lamps for students without home grid electricity",
        "Interactive storytelling, fun arithmetic puzzles, and festive sweet distribution",
        "Registration for new students into our free weekend evening tutoring batches"
      ],
      groundReport:
        "Our ground survey in October revealed that over 65% of elementary learners in the Railway Colony cluster share a single textbook with siblings and lack structured notebooks for homework. By mobilizing engineering volunteers from Haldia Institute of Technology, we are equipping each learner with their own dedicated study kit designed to last through the academic year.",
      volunteerQuotes: [
        {
          quote:
            "When you hand a young child their very first brand-new geometry box and drawing book, their eyes illuminate with pure excitement. That moment reminds us why we volunteer every weekend.",
          by: "Sneha Das - Volunteer Lead, HIT 3rd Year"
        }
      ],
      impactSummary:
        "This drive directly supports Sustainable Development Goal 4 (Quality Education) by bridging the physical supply gap for underprivileged youth in industrial Haldia."
    }
  },
  {
    id: "2",
    slug: "campus-wide-anti-rabies-vaccination-collar-drive",
    title: "Campus-Wide Anti-Rabies Vaccination & Collar Drive",
    category: "Animal Welfare",
    date: "November 16, 2026",
    time: "9:00 AM - 2:00 PM",
    location: "HIT Main Campus & Surrounding Sectors",
    summary:
      "Collaborative drive with Haldia Veterinary Hospital to inoculate 60+ stray dogs and fit reflective collars to prevent nighttime road accidents.",
    coverImage: "/stray_rescue.jpg",
    gallery: [
      "/stray_rescue.jpg",
      "/community_feeding.jpg",
      "/hero_volunteers.jpg"
    ],
    status: "Upcoming",
    impactBadge: "60+ Strays Protected",
    author: {
      name: "Priya Mukherjee",
      role: "Head of Animal Welfare Wing, B.Tech Biotech",
      avatar: "PM"
    },
    readTime: "3 min read",
    attendeesCount: 30,
    highlightStat: {
      label: "Street Dogs Inoculated",
      value: "60+ Strays"
    },
    blogContent: {
      overview:
        "Stray animal welfare and campus safety go hand-in-hand. In partnership with government veterinary officers in Haldia, Eklavya's Animal Wing is organizing a zero-stray-rabies inoculation camp covering HIT campus and the adjacent municipal roads.",
      keyPoints: [
        "Anti-rabies vaccines administered by certified veterinary medical officers",
        "High-visibility reflective collars fitted on every vaccinated dog to prevent highway collisions",
        "Digital micro-tag tracking with medical history records maintained by student leads",
        "Anti-tick spot-on treatment and deworming oral medications"
      ],
      groundReport:
        "Nighttime vehicle traffic around the industrial belt poses a severe risk to resting stray dogs. The glowing reflective collars significantly improve driver visibility up to 100 meters away, drastically cutting down accidental hit-and-run incidents.",
      volunteerQuotes: [
        {
          quote:
            "Compassion shouldn't stop at human boundaries. Our four-legged campus companions deserve medical dignity, vaccinations, and safety on our roads.",
          by: "Aniket Ghosh - Volunteer Rescue Team"
        }
      ],
      impactSummary:
        "Creating a safe, rabies-free community that benefits both local town residents and the stray animal population."
    }
  },
  {
    id: "3",
    slug: "winter-blanket-woolen-distribution-drive",
    title: "Winter Blanket & Woolen Distribution for Underprivileged",
    category: "Community",
    date: "December 12, 2026",
    time: "4:00 PM - 7:00 PM",
    location: "Durgachak & Haldia Municipality Areas",
    summary:
      "Annual student collection drive delivering clean warm blankets and sweaters to elderly and slum children ahead of peak winter cold.",
    coverImage: "/hero_volunteers.jpg",
    gallery: [
      "/hero_volunteers.jpg",
      "/school_line.jpg",
      "/community_feeding.jpg"
    ],
    status: "Upcoming",
    impactBadge: "200+ Blankets",
    author: {
      name: "Aman Sharma",
      role: "President, B.Tech CSE",
      avatar: "AS"
    },
    readTime: "3 min read",
    attendeesCount: 50,
    highlightStat: {
      label: "Warmth Kits Delivered",
      value: "200+ Families"
    },
    blogContent: {
      overview:
        "As coastal fog and winter chill set in across coastal Bengal during December, thousands of makeshift shelter dwellers and footpath families face sleepless cold nights. Eklavya's Winter Warmth Campaign mobilizes campus donations to deliver thick thermal blankets directly to vulnerable individuals.",
      keyPoints: [
        "Thick thermal fleece blankets distributed across Durgachak and Haldia port areas",
        "Woolen caps, socks, and sweaters curated for children aged 3 to 14",
        "Hot khichdi and nutrition meal pack distributed alongside winter supplies",
        "Late-evening night distribution squads targeting elderly footpath dwellers"
      ],
      groundReport:
        "Student volunteers run collection boxes across all HIT hostels and faculty quarters, inspecting and categorizing each piece of winter clothing before on-ground distribution rounds.",
      volunteerQuotes: [
        {
          quote:
            "A warm blanket isn't just fabric; to someone shivering through a winter night, it is security, dignity, and care.",
          by: "Aman Sharma - President, Eklavya"
        }
      ],
      impactSummary:
        "Zero lives lost to exposure across our mapped patrol zones in Haldia."
    }
  },
  {
    id: "4",
    slug: "independence-day-science-fun-carnival",
    title: "Independence Day Science & Fun Carnival for Kids",
    category: "Education",
    date: "August 15, 2026",
    time: "10:00 AM - 3:00 PM",
    location: "HIT Campus Ground, Haldia",
    summary:
      "Over 90 slum children visited HIT laboratories, participated in simple robotics/science experiments, art competitions, and enjoyed festive lunch.",
    coverImage: "/stem_workshop.jpg",
    gallery: [
      "/stem_workshop.jpg",
      "/laptop_learning.jpg",
      "/smiling_child.jpg",
      "/school_line.jpg"
    ],
    status: "Completed",
    impactBadge: "90+ Children Participated",
    author: {
      name: "Rohan Sen",
      role: "Education Coordinator, B.Tech EE",
      avatar: "RS"
    },
    readTime: "5 min read",
    attendeesCount: 90,
    highlightStat: {
      label: "Young Scientists Inspired",
      value: "92 Kids"
    },
    blogContent: {
      overview:
        "On August 15, the Haldia Institute of Technology campus welcomed 92 energetic young minds from nearby slum study centers for a full day of experiential science learning, robotics demonstrations, and creative expression.",
      keyPoints: [
        "Hands-on demonstration of simple electric circuits, solar fans, and magnet toys",
        "Guided computer lab session teaching basic typing and paint tools",
        "Drawing and painting contest with personalized gift hampers for all participants",
        "Grand national flag hosting followed by a nutritious festive feast"
      ],
      groundReport:
        "Many of these children had never set foot inside a modern laboratory or operated a computer mouse before. By demystifying engineering and technology through simple interactive experiments, we spark long-term academic curiosity.",
      volunteerQuotes: [
        {
          quote:
            "Watching an 8-year-old child's face light up when their hand-wired electric motor started spinning was the highlight of my entire semester.",
          by: "Aarav Roy - Student Volunteer, HIT ECE"
        }
      ],
      impactSummary:
        "100% of participating children expressed interest in joining regular weekend STEM coaching sessions."
    }
  },
  {
    id: "5",
    slug: "summer-hydration-bowl-installation-drive",
    title: "Summer Hydration Bowl Installation for Stray Animals",
    category: "Animal Welfare",
    date: "May 20, 2026",
    time: "8:00 AM - 1:00 PM",
    location: "HIT Campus & City Center Haldia",
    summary:
      "Installed 45 durable cement water bowls across campus and key town sectors to prevent dehydration and heatstroke in birds and stray dogs.",
    coverImage: "/community_feeding.jpg",
    gallery: [
      "/community_feeding.jpg",
      "/stray_rescue.jpg",
      "/hero_volunteers.jpg"
    ],
    status: "Completed",
    impactBadge: "45 Water Bowls Installed",
    author: {
      name: "Priya Mukherjee",
      role: "Head of Animal Welfare Wing",
      avatar: "PM"
    },
    readTime: "4 min read",
    attendeesCount: 25,
    highlightStat: {
      label: "Water Stations Built",
      value: "45 Stations"
    },
    blogContent: {
      overview:
        "During scorching summer months when temperatures regularly exceed 42°C in Haldia, natural water sources dry up rapidly, leaving community animals and birds vulnerable to fatal dehydration and heat exhaustion.",
      keyPoints: [
        "45 heavy-duty cement water bowls permanently placed in shaded locations",
        "Local shopkeeper and student volunteer network assigned for daily refilling",
        "Elevated bird baths mounted in campus tree groves",
        "Emergency oral rehydration salts (ORS) distributed to rescue squads"
      ],
      groundReport:
        "Each cement station is numbered and geotagged. Student volunteers mapped refilling routes so nearby shop owners and security guards can easily top up the water bowls twice every day.",
      volunteerQuotes: [
        {
          quote:
            "A small bowl of clean water saves dozens of voiceless lives every single scorching day.",
          by: "Debashis Pal - Volunteer, Animal Care Wing"
        }
      ],
      impactSummary:
        "Zero reported cases of animal heatstroke in the covered campus zones during the peak May-June heatwave."
    }
  },
  {
    id: "6",
    slug: "back-to-school-basic-literacy-induction-camp",
    title: "Back-to-School Basic Literacy Induction Camp",
    category: "Education",
    date: "April 10, 2026",
    time: "4:00 PM - 6:30 PM",
    location: "Brajolalchak Community Hall",
    summary:
      "Conducted foundational reading assessments and enrolled 28 first-generation learners into weekend coaching batches.",
    coverImage: "/teacher_classroom.jpg",
    gallery: [
      "/teacher_classroom.jpg",
      "/child_learning.jpg",
      "/clock_craft.jpg",
      "/broken_classroom.jpg"
    ],
    status: "Completed",
    impactBadge: "28 First-Gen Learners",
    author: {
      name: "Rohan Sen",
      role: "Education Coordinator",
      avatar: "RS"
    },
    readTime: "3 min read",
    attendeesCount: 35,
    highlightStat: {
      label: "New Learners Enrolled",
      value: "28 Students"
    },
    blogContent: {
      overview:
        "First-generation learners face unique hurdles in elementary literacy. Our literacy camp evaluated basic phonics, number recognition, and handwriting, allowing student teachers to craft personalized learning milestones.",
      keyPoints: [
        "One-on-one baseline reading and numeracy diagnostic tests",
        "Distribution of illustrated storybooks and alphabetic practice workbooks",
        "Parent orientation on the importance of uninterrupted daily study hours",
        "Batch formation with 1:4 mentor-to-student coaching ratio"
      ],
      groundReport:
        "By engaging with parents directly, we broke misconceptions surrounding formal schooling and guaranteed consistent weekend attendance.",
      volunteerQuotes: [
        {
          quote:
            "When parents from daily-wage backgrounds come to thank us with tears of hope in their eyes, it solidifies our mission forever.",
          by: "Sneha Das - Finance & Outreach"
        }
      ],
      impactSummary:
        "28 students successfully transitioned into ongoing weekend study sessions with a 94% retention rate."
    }
  }
];

export function getEventBySlug(slug: string): EventItem | undefined {
  return EVENTS_DATA.find((e) => e.slug === slug || e.id === slug);
}
