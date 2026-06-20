export const SALON = {
  name: "Amy's Nails",
  phoneDisplay: "01784 259308",
  phoneHref: "tel:01784259308",
  address: "5 Church Rd, Ashford TW15 2UG",
  instagram: "https://www.instagram.com/amysnails.ashford/?hl=en-gb",
  facebook: "https://www.facebook.com/p/Amys-Nails-100057611852793/?locale=en_GB",
  mapsEmbed:
    "https://www.google.com/maps?q=5+Church+Rd,+Ashford+TW15+2UG&output=embed",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=5+Church+Rd+Ashford+TW15+2UG",
} as const

export const HOURS = [
  { day: "Monday – Saturday", time: "9:30 AM – 7:00 PM" },
  { day: "Sunday", time: "10:00 AM – 4:30 PM" },
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
      { name: "Gel Nail Extensions", duration: "50 mins", price: "£50" },
      { name: "Gel Nails", duration: "35 mins", price: "£35" },
      { name: "Nail Extensions", duration: "50 mins", price: "£45" },
    ],
  },
  {
    id: "mani-pedi",
    label: "Manicures & Pedicures",
    blurb: "Classic care to keep hands and feet soft, neat and polished.",
    services: [
      { name: "Classic Manicure", duration: "30 mins", price: "£25" },
      { name: "Classic Pedicure", duration: "45 mins", price: "£35" },
      { name: "Gel Pedicure", duration: "45 mins", price: "£32" },
      { name: "Manicure & Pedicure Combo", duration: "75 mins", price: "£55" },
      { name: "Nail Polish Change", duration: "15 mins", price: "£15" },
    ],
  },
  {
    id: "specialist",
    label: "Specialist Care",
    blurb: "Detailed treatments and bespoke nail art for something special.",
    services: [
      { name: "Russian Manicure", duration: "60 mins", price: "£50" },
      { name: "Men's Manicure", duration: "30 mins", price: "£25" },
      { name: "Men's Pedicure", duration: "40 mins", price: "£35" },
      { name: "Custom Nail Art", duration: "per nail", price: "From £3" },
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
    name: "Christina L.",
    text: "Great place to experience. Professional, attentive, clean and friendly. I love my nails so much!",
  },
  {
    name: "Jell",
    text: "Had a great experience here. Had a Gel Pedicure for £32, which is very reasonable. They took great care, leaving my feet feeling soft with very neat colour.",
  },
  {
    name: "Victoria G.",
    text: "The lady that did my nails was very precise and did exactly what I asked. Very good service! I requested colourful French tips and they were perfect.",
  },
  {
    name: "Ash M.",
    text: "I tried Amy's and was very pleased with the service! I accidentally damaged a nail later and they kindly fixed it for free. Amazing customer care.",
  },
]

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Find Us", href: "#find-us" },
]
