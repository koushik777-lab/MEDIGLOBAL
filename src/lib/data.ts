export const treatments = [
  {
    id: "cardiology",
    title: "Cardiology & Heart Surgery",
    description: "Advanced cardiac care including bypass surgery, valve replacements, and complex interventions.",
    icon: "Heart",
    conditions: ["Coronary Artery Disease", "Heart Valve Disease", "Arrhythmia", "Heart Failure"],
    procedures: [
      { name: "CABG (Bypass Surgery)", cost_india: "5,000 - 7,000", cost_us: "100,000+" },
      { name: "Heart Valve Replacement", cost_india: "6,500 - 9,000", cost_us: "150,000+" },
      { name: "Angioplasty", cost_india: "3,500 - 5,000", cost_us: "50,000+" }
    ],
    success_rate: "99%",
    recovery: "2-4 Weeks"
  },
  {
    id: "orthopedic",
    title: "Orthopedic Surgery",
    description: "Joint replacements, spine surgery, and sports medicine by world-renowned surgeons.",
    icon: "Activity",
    conditions: ["Osteoarthritis", "Spine Disorders", "Sports Injuries", "Fractures"],
    procedures: [
      { name: "Knee Replacement (Single)", cost_india: "4,000 - 6,000", cost_us: "45,000+" },
      { name: "Hip Replacement", cost_india: "5,500 - 7,500", cost_us: "50,000+" },
      { name: "Spine Surgery", cost_india: "5,000 - 9,000", cost_us: "60,000+" }
    ],
    success_rate: "98.5%",
    recovery: "4-8 Weeks"
  },
  // Add more as needed
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    speciality: "Senior Cardiologist",
    qualification: "MBBS, MD, DM (Cardiology), FACC (USA)",
    experience: "25+ Years",
    hospital: "Apollo Hospitals, Delhi",
    image: "/doctors/doc1.jpg"
  },
  {
    id: 2,
    name: "Dr. Sarah Sharma",
    speciality: "Orthopedic Surgeon",
    qualification: "MBBS, MS (Ortho), FRCS (UK)",
    experience: "18+ Years",
    hospital: "Fortis Healthcare, Mumbai",
    image: "/doctors/doc2.jpg"
  }
];
