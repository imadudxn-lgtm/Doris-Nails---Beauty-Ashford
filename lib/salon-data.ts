export const SALON = {
  name: "Doris Nails - Beauty Ashford",
  phoneDisplay: "07742 846868",
  phoneHref: "tel:07742846868",
  address: "8 New Parade, Ashford TW15 2UF",
  instagram: "https://www.instagram.com/doris_nails.beauty_ashford/?hl=en",
  facebook: "https://www.facebook.com/p/DorisNails-Beauty-Ashford-100090763884834/",
  mapsEmbed:
    "https://www.google.com/maps?q=5+Church+Rd,+Ashford+TW15+2UG&output=embed",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=5+Church+Rd+Ashford+TW15+2UG",
} as const

export const HOURS = [
  { day: "Monday – Friday", time: "10:00 AM – 7:00 PM" },
  { day: "Saturday", time: "10:00 AM – 6:00 PM" },
  { day: "Sunday", time: "Closed" },
] as const

export type Service = {
  name: string
  duration: string
  price: string
}

export type ServiceCategory = {
  id: string
  label: string
  blurb: string
  services: Service[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "extensions",
    label: "Nail Extensions & Gel",
    blurb: "Long-lasting sets, sculpted and shaped exactly how you like them.",
    services: [
      { name: "Acrylic Nails", duration: "45 mins", price: "£45" },
      { name: "Dip Powder Nails", duration: "40 mins", price: "£40" },
      { name: "Nail Extensions", duration: "50 mins", price: "£45" },
    ],
  },
  {
    id: "mani-pedi",
    label: "Manicures & Pedicures",
    blurb: "Classic care to keep hands and feet soft, neat and polished.",
    services: [
      { name: "Manicure", duration: "30 mins", price: "£25" },
      { name: "Pedicure", duration: "45 mins", price: "£35" },
      { name: "Manicure and Pedicure", duration: "75 mins", price: "£55" },
    ],
  },
  {
    id: "specialist",
    label: "Specialist Care",
    blurb: "Detailed treatments and bespoke nail art for something special.",
    services: [
      { name: "Nail Art", duration: "per nail", price: "From £3" },
    ],
  },
]

export const GALLERY = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic1-PAKrYIUV4vxznKCYGDeRQsZB4bt77c.jpg",
    alt: "Long coffin nails with classic pink and white French tips and crystal accents",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic2-yyhjRJwhvfwgFzAwucgPnJvZzqtTIV.jpg",
    alt: "Blush pink ombre nails with glitter and 3D white flower nail art",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic3-lSG1jCN3FZmCHAWWFEUBId8IFF6575.jpg",
    alt: "Coffin nails with elegant black and white swirl line art",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic4-Mal2H2hygv1BW5mNkSOMBZ3M5QBLLA.jpg",
    alt: "Pink nails with neon green swirls and glitter detailing",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic5-K1WrQ0lK5eHKZ6ukrcAnxh61JuxawK.jpg",
    alt: "Nude to white ombre nails with colourful butterfly nail art",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic6-by9OzWTS4fHKbvt8I4Hg2wyakvMpnw.jpg",
    alt: "White French tips with 3D floral nail art and crystals",
  },
]

export const REVIEWS = [
  {
    name: "Lily-Anne Carter-Hillyer",
    text: "Have visited Doris nails several times for acrylic manicures and gel/shellac pedicure. They always do a lovely job, they listen to exactly what you want and always do great. A nice, welcoming environment too with offerings of drinks and snacks:) couldn’t fault them!",
  },
  {
    name: "Emily Grace",
    text: "Always so happy with my nails at Doris! Relaxing and clean salon, and lovely staff 🩷 Been going for over a year now, and always happy with my acrylics and gel pedicures!",
  },
  {
    name: "Chelsie Pettit",
    text: "Doris and her team are amazing. The designs are always 10/10. I would never go anywhere else now.",
  },
  {
    name: "Lana",
    text: "Best pedicure I’ve ever had I normally hate getting my feet done but this was the first place I actually enjoyed it the staff are lovely and did so well with my acrylic toenails would 100% recommend and I will be coming back!",
  },
  {
    name: "Vikki Ovenell",
    text: "Always a pleasure to have my nails done at Doris. From walking in to walking out it’s a relaxing, enjoyable visit every time. The work and art they do is also next level. Wouldn’t go anywhere else. Thank you x",
  },
]

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Find Us", href: "#find-us" },
]
