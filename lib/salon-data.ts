export const SALON = {
  name: "Doris Nails - Beauty Ashford",
  phoneDisplay: "07742 846868",
  phoneHref: "tel:07742846868",
  address: "8 New Parade, Ashford TW15 2UF",
  instagram: "https://www.instagram.com/doris_nails.beauty_ashford/?hl=en",
  facebook: "https://www.facebook.com/p/DorisNails-Beauty-Ashford-100090763884834/",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.273765103443!2d-0.43577312338164024!3d51.45312331435213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487673ca60fa1f97%3A0xe5a1b327b9c9f00!2s8%20New%20Parade%2C%20Ashford%20TW15%202UF!5e0!3m2!1sen!2suk!4v1719050000000!5m2!1sen!2suk",
  mapsLink: "https://maps.app.goo.gl/w64S432N5A6UAnv4A",
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
    src: "https://images.unsplash.com/photo-1604654894610-df490651e56c?w=600&auto=format&fit=crop&q=80",
    alt: "Elegant red professional manicure styling",
  },
  {
    src: "https://images.unsplash.com/photo-1632345031435-8797b2d58045?w=600&auto=format&fit=crop&q=80",
    alt: "Nail artist applying detailed polish graphics",
  },
  {
    src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&auto=format&fit=crop&q=80",
    alt: "Soft pink gel extensions close up look",
  },
  {
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&auto=format&fit=crop&q=80",
    alt: "Luxury pedicures treatment station relaxing setting",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80",
    alt: "Luxury salon interior design setup options",
  },
  {
    src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80",
    alt: "Modern colorful abstract clean art designs",
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
