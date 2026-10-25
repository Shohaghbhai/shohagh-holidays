export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  tagline: string;
  duration: string;
  price: number;
  regularPrice?: number;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  category: 'hills' | 'beach' | 'haor' | 'forest';
  coverImage: string;
  gallery?: string[];
  departurePoint: string;
  nextDepartures: string[];
  features: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    meals: string;
    stay: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  travelTips?: string[];
}

export interface BusService {
  id: string;
  operator: string;
  route: string;
  busType: string;
  departureTimes: string[];
  priceBDT: number;
  boardingPoints: string[];
  droppingPoints: string[];
  amenities: string[];
  isAvailable: boolean;
}

export interface ShipClass {
  className: string;
  priceBDT: number;
  features: string;
}

export interface ShipService {
  id: string;
  shipName: string;
  route: string;
  departurePort: string;
  arrivalPort: string;
  departureTime: string;
  returnTime: string;
  status: 'Operating Daily' | 'Seasonal (Nov - March)' | 'Pre-Booking Open';
  classes: ShipClass[];
  description: string;
  image: string;
}

export interface TravelTip {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  readTime: string;
  date: string;
  category: string;
  coverImage: string;
  author: string;
}
