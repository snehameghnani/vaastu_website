export const PHONE_DISPLAY = "+91 99823 55123";
export const PHONE_RAW = "+919982355123";
export const PHONE_TEL = "tel:+919982355123";
export const WHATSAPP_URL = "https://wa.me/919982355123";
export const EMAIL = "vastuvigya@gmail.com";
export const EMAIL_MAILTO = "mailto:vastuvigya@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/vastuvigya/";
export const ADDRESS_TEXT =
  "Vastuvigya, Road No. 1, VKI Area, Jaipur – 302013";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Mojika+Midas+Touch,+Malhotra+Nagar,+VKI+Area,+Jaipur,+302013";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=Mojika%20Midas%20Touch%2C%20Malhotra%20Nagar%2C%20VKI%20Area%2C%20Jaipur%2C%20302013&output=embed";

export const waLink = (text) => `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services", dropdown: true },
  { label: "Our Plans", to: "/our-plans" },
  { label: "Contact Us", to: "/contact-us" },
];

export const SERVICES = [
  {
    slug: "vastu",
    title: "Vastu",
    icon: "vastu",
    tagline: "Harmony in every direction",
    excerpt:
      "We do Vastu without any structural changes or demolition, to enhance the energy of Earth as desired.",
    paragraphs: [
      "We do Vastu without any structural changes or demolition, to enhance the energy of Earth as desired. We work on Marma sthans, 5 elements, 16 zones strength, geopathic stress and 45 Devatas, we do provide customized Vastu as per Astro chart (Janam Kundli ) Apart from homes we also provide customized Vastu for visiting cards, sign boards, Logo, names, phone no. for both individual and commercial.",
      "Vastu is a shastra given by Lord Bramha to Rishi Vishwakarma who in the time to come passed it on to Human kind to overcome all personal, domestic or workrelated challenges to be faced in life. Vastu Shastra is a traditional Hindu system of architecture and design that seeks to harmonize the built environment with the natural world. It is believed to have been revealed to the ancient sage Rishi Vishwakarma by Lord Bramha, the creator god in Hindu mythology. The principles of Vastu Shastra are based on the five elements of nature: earth, water, fire, air, and space.",
      "It is believed that a proper balance of these elements can bring prosperity, health, and happiness to a person's life. Vastu Shastra can be applied to the design of homes, offices, temples, and other buildings to ensure their alignment with the natural forces of the environment.",
      "It is believed that adhering to the principles of Vastu Shastra can help to overcome personal, domestic, and work-related challenges, as well as attract positive energy and blessings. Vastu Shastra is not just a set of design principles, but also a way of life that promotes harmony and balance within the built environment. It is an integral part of Hindu culture and is followed by many people in India and around the world.",
    ],
  },
  {
    slug: "astrology",
    title: "Astrology",
    icon: "astrology",
    tagline: "The planets, read with care",
    excerpt:
      "Astrology is the study of positions and movements of planets and the way they affect human beings...",
    paragraphs: [
      "Astrology is the study of positions and movements of planets and the way they affect human beings and events, that's why astrology is always incorporated with Vastu.",
    ],
  },
  {
    slug: "mobile-numerology",
    title: "Mobile Numerology",
    icon: "mobile",
    tagline: "Your number, always with you",
    excerpt:
      "If our date of birth --/--/---- {maximum 8 digits} is very important and significant in...",
    paragraphs: [
      "If our date of birth --/--/---- {maximum 8 digits} is very important and significant in our life than 10 Digits of our mobile no. which is a part and parcel of our everyday life is more important for us, every Digit and combination has its own importance and impact in our life. Therefor a right combination of Mobile no. is very helpful for all aspects of life i.e health, wealth and wisdom.",
    ],
  },
  {
    slug: "name-numerology",
    title: "Name Numerology",
    icon: "name",
    tagline: "The energy a name carries",
    excerpt:
      "Numerology is the study of divine occult or mystical relationship between numbers and planets...",
    paragraphs: [
      "Numerology is the study of divine occult or mystical relationship between numbers and planets - alphabets with Names and events.",
      "When numerology is applied to any individual name it is a form of onamancy.",
      "When numerology along with astrology deals with self-discovery and predictions, it helps find concealed Meanings of the world, it also acts as a guide to life, also helps to predict your past and warns you for the future.",
      "Vastu is aided by Astrology and Numerology does help us work on Names, dates and events.",
      "That is where our expertise come in handy as we combine all the above studies to assist/guide you for the Betterment of your life.",
    ],
  },
  {
    slug: "logo-analysis",
    title: "Logo Analysis",
    icon: "logo",
    tagline: "A mark that speaks to the universe",
    excerpt:
      "A logo is the face of our work, the shape and colour of the logo is a code for the universe through...",
    paragraphs: [
      "A logo is the face of our work, the shape and colour of the logo is a code for the universe through which we pledge our wishes to the universe and the universe strives to fulfill our wish.",
      "We make this logo by choosing colors and shapes according to the planets in your horoscope.",
    ],
  },
  {
    slug: "wall-clock-analysis",
    title: "Wall Clock & Analysis",
    icon: "clock",
    tagline: "Time, placed with intention",
    excerpt:
      "Time is one of the most important aspects of everyone's life, therefor your Wristwatch and...",
    paragraphs: [
      "Time is one of the most important aspects of everyone's life, therefor your Wristwatch and Wall-clocks do hold a very important role in your life.",
      "Also, there is a very clear and strong connection between your time and your mind, therefor it is very Important to choose a right Wristwatch and Wall-clock in terms of, size, shape, color, and weight, right selection of Wrist-watch and Wallclock does help in prosperity, personal relations, health and peace of mind.",
    ],
  },
  {
    slug: "visiting-card-designing-analysis",
    title: "Visiting Card Designing & Analysis",
    icon: "card",
    tagline: "A first introduction, designed well",
    excerpt:
      "Visiting card is a very important tool of one's business, it is also ones first introduction to...",
    paragraphs: [
      "Visiting card is a very important tool of one's business, it is also ones first introduction to a visitor/client.",
      "Placement of your name, designation, mobile number, nature of work and address etc. in your visiting card is as important as Vastu of your house, therefor it is very important to allocate proper placement to all information of the visiting card as per your Astro chart { janam Kundli ]",
    ],
  },
  {
    slug: "cowrie-prediction",
    title: "Cowrie Prediction",
    icon: "cowrie",
    tagline: "Answers from the ocean's shells",
    excerpt:
      "Cowrie is a type of star shell found in the ocean. Cowrei's energy is feminine energy. In Mohan...",
    paragraphs: [
      "Cowrie is a type of star shell found in the ocean. Cowrei's energy is feminine energy. In Mohan Jo Daro era whenever someone was stuck on any question, they used to get answers with the help of cowries. And for many aspects of life, predictions were made from cowries.",
      "Today's predictions are made from these cowries in South India and the accuracy of these predictions is almost 100%.",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sapna R Sharma",
    text: "I received a result that was so accurate that it was unbelievable. I would recommend her to anyone who is focused on increase their clientele and wanna growth in their business.",
  },
  {
    name: "Rahul Gaur",
    text: "In a recent we have used services of madam with she has given amazing services not only there but the remedies she suggested was very good. We were completely amazed by the services provided by Rajeshwari madam,",
  },
  {
    name: "Rajat Upadhyaya",
    text: "The results have been very satisfactory. Reason is simple, she doesn't provide a superficial advice but she does an in-depth study about the person looking for her services before recommending anything.",
  },
];

import planA from "@/assets/legacy/plana.png";
import planB from "@/assets/legacy/planb.png";
import planC from "@/assets/legacy/planc.png";
import planD from "@/assets/legacy/pland.png";
import planE from "@/assets/legacy/plane.png";

export const PLANS = [
  { id: "a", title: "Plan A", img: planA },
  { id: "b", title: "Plan B", img: planB },
  { id: "c", title: "Plan C", img: planC },
  { id: "d", title: "Plan D", img: planD },
  { id: "e", title: "Plan E", img: planE },
];

export const MARQUEE_WORDS = [
  "Vastu Shastra",
  "Astrology",
  "Numerology",
  "Cowrie Prediction",
  "Logo Analysis",
  "Direction & Harmony",
];

export const scrollToSection = (id) => {
  const el = document.querySelector(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70 });
  else el.scrollIntoView({ behavior: "smooth" });
};
