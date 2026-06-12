import {
  Award,
  BriefcaseBusiness,
  CalendarCheck,
  ChefHat,
  ClipboardList,
  Clock3,
  Flower2,
  GlassWater,
  HeartHandshake,
  Mail,
  MapPin,
  PartyPopper,
  Phone,
  Salad,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  UtensilsCrossed,
  Wine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  detail: string;
};

export type Package = {
  name: string;
  price: string;
  eyebrow: string;
  description: string;
  guestRange: string;
  features: string[];
  highlighted?: boolean;
};

export type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type GalleryItem = {
  title: string;
  occasion: string;
  image: string;
  notes: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  initials: string;
  location: string;
};

export type ContactHighlight = {
  label: string;
  icon: LucideIcon;
};

export const brand = {
  name: "Savory Table Catering",
  tagline: "Premium catering, polished planning, and event-ready food service.",
  phone: "+1 212 555 0148",
  email: "events@savorytable.co",
  address: "214 Hudson Street, New York, NY 10013",
  studioNote:
    "Consultation studio serving New York, Brooklyn, Chicago, London, and Manchester.",
  instagram: "@savorytablecatering",
  hours: "Mon-Fri 9:00 AM-6:00 PM, Sat by appointment",
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "420+", label: "events catered" },
  { value: "30-500", label: "guest capacity" },
  { value: "4.9/5", label: "client rating" },
];

export const contactHighlights: ContactHighlight[] = [
  { label: "Wedding and event catering", icon: Flower2 },
  { label: "Corporate meal service", icon: BriefcaseBusiness },
  { label: "Setup, staffing, and cleanup", icon: ShieldCheck },
  { label: "New York, Chicago, London", icon: MapPin },
];

export const heroSlides = [
  {
    title: "Black-tie plated dinner",
    label: "Wedding service",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1300&q=88",
  },
  {
    title: "Executive lunch reception",
    label: "Corporate events",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1300&q=88",
  },
  {
    title: "Cocktail hour grazing table",
    label: "Social celebrations",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1300&q=88",
  },
  {
    title: "Private chef dinner party",
    label: "Private dining",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1300&q=88",
  },
  {
    title: "Garden buffet service",
    label: "Celebration buffet",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1300&q=88",
  },
];

export const services: Service[] = [
  {
    title: "Wedding Catering",
    description:
      "Polished plated dinners, family-style feasts, late-night bites, and elegant service for ceremonies and receptions.",
    detail: "Menus, rentals, service flow",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=86",
    icon: HeartHandshake,
  },
  {
    title: "Corporate Events",
    description:
      "Breakfast briefings, boardroom lunches, launch parties, and team celebrations with professional timing.",
    detail: "Office delivery or hosted service",
    image:
      "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=900&q=86",
    icon: BriefcaseBusiness,
  },
  {
    title: "Private Dinners",
    description:
      "Chef-led dinner party experiences with composed courses, wine-friendly pairings, and quiet service.",
    detail: "Intimate homes and private venues",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=86",
    icon: ChefHat,
  },
  {
    title: "Birthday Parties",
    description:
      "Premium celebration menus for milestone birthdays, garden parties, rooftop dinners, and hosted lunches.",
    detail: "Buffet, passed bites, dessert tables",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=86",
    icon: PartyPopper,
  },
  {
    title: "Buffet Setup",
    description:
      "Styled buffet stations with warmers, servingware, signage, dietary markers, and a clean guest flow.",
    detail: "Drop-off or staffed presentation",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=86",
    icon: Salad,
  },
  {
    title: "Cocktail Receptions",
    description:
      "Passed canapes, grazing tables, champagne-friendly small plates, and bar-adjacent service planning.",
    detail: "Canapes, boards, mini desserts",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=86",
    icon: GlassWater,
  },
];

export const packages: Package[] = [
  {
    name: "Gathering Table",
    price: "$1,200",
    eyebrow: "Small events",
    guestRange: "20-45 guests",
    description:
      "A refined starter package for intimate celebrations, office lunches, and private dinners.",
    features: [
      "Seasonal starter and main selection",
      "Styled buffet or family-style service",
      "Dietary preference coordination",
      "Delivery and basic setup included",
    ],
  },
  {
    name: "Signature Reception",
    price: "$2,500",
    eyebrow: "Most requested",
    guestRange: "45-110 guests",
    description:
      "A full event package for weddings, milestone parties, and corporate receptions needing polish.",
    features: [
      "Canapes plus two-course menu",
      "Event captain and service team",
      "Menu tasting credit after booking",
      "Setup timeline and venue coordination",
    ],
    highlighted: true,
  },
  {
    name: "Grand Celebration",
    price: "$4,800",
    eyebrow: "Premium service",
    guestRange: "110-250 guests",
    description:
      "A high-touch catering experience for large weddings, brand events, and formal celebrations.",
    features: [
      "Custom multi-course menu planning",
      "Passed bites, buffet, or plated service",
      "Staffing, rentals guidance, and cleanup",
      "Senior producer for event-day flow",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Inquiry",
    description:
      "Share your date, location, guest count, service style, and any dietary requirements.",
    icon: Send,
  },
  {
    title: "Consultation",
    description:
      "We clarify the event flow, venue details, budget range, and catering priorities.",
    icon: CalendarCheck,
  },
  {
    title: "Menu planning",
    description:
      "A tailored menu proposal is prepared with service notes, timing, and transparent pricing.",
    icon: ClipboardList,
  },
  {
    title: "Confirmation",
    description:
      "Approve the quote, guest count, deposit schedule, staffing plan, and final menu.",
    icon: ShieldCheck,
  },
  {
    title: "Delivery and setup",
    description:
      "Our team coordinates arrival, presentation, warmers, stations, signage, and service prep.",
    icon: Truck,
  },
  {
    title: "Event service",
    description:
      "Food service, replenishment, guest support, and cleanup are handled with calm precision.",
    icon: UtensilsCrossed,
  },
];

export const features: Feature[] = [
  {
    title: "Event-first planning",
    description:
      "Menus are designed around venue access, guest flow, service timing, and the atmosphere you want to create.",
    icon: CalendarCheck,
  },
  {
    title: "Premium presentation",
    description:
      "Every station, platter, and passed bite is composed to feel intentional in photos and effortless in person.",
    icon: Sparkles,
  },
  {
    title: "Reliable operations",
    description:
      "Clear quotes, staffing notes, delivery windows, dietary markers, and event-day communication keep the work calm.",
    icon: Award,
  },
  {
    title: "Flexible service styles",
    description:
      "Choose drop-off, staffed buffet, grazing table, plated dinner, cocktail service, or a custom hybrid format.",
    icon: Wine,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Garden wedding supper",
    occasion: "Weddings",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=88",
    notes: "Plated dinner, champagne hour, and late-night dessert table.",
  },
  {
    title: "Boardroom lunch spread",
    occasion: "Corporate",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=88",
    notes: "Warm mains, salad boards, boxed desserts, and discreet setup.",
  },
  {
    title: "Private chef evening",
    occasion: "Private dining",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=88",
    notes: "Four-course menu with chef plating and table-side service.",
  },
  {
    title: "Cocktail canape service",
    occasion: "Receptions",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=88",
    notes: "Passed bites, grazing table, and bar-friendly small plates.",
  },
  {
    title: "Milestone birthday buffet",
    occasion: "Celebrations",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=88",
    notes: "Styled buffet with warm service and a sweets station.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The menu felt bespoke without making the planning process complicated. Guests kept asking who catered the reception.",
    name: "Amelia Hart",
    title: "Wedding client",
    initials: "AH",
    location: "Brooklyn, NY",
  },
  {
    quote:
      "Their team handled our investor lunch with the kind of timing and presentation you usually only see at private venues.",
    name: "Marcus Lee",
    title: "Operations Director",
    initials: "ML",
    location: "Chicago, IL",
  },
  {
    quote:
      "The tasting, proposal, setup, and service were calm from start to finish. It made hosting at home feel genuinely luxurious.",
    name: "Priya Shah",
    title: "Private dinner host",
    initials: "PS",
    location: "London, UK",
  },
];

export const footerLinks = [
  { label: "Wedding catering", href: "#services" },
  { label: "Corporate events", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Event gallery", href: "#gallery" },
];

export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export const contactCards = [
  { label: brand.phone, icon: Phone },
  { label: brand.email, icon: Mail },
  { label: brand.studioNote, icon: MapPin },
  { label: "Typical quote turnaround: 1-2 business days", icon: Clock3 },
  { label: "Tastings available for confirmed full-service events", icon: Star },
];
