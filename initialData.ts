import { TourPackage, BusService, ShipService, TravelTip } from './types';

export const INITIAL_PACKAGES: TourPackage[] = [
  {
    id: 'sajek-valley-cloud-safari',
    title: 'Sajek Valley - Kingdom of Clouds Eco Tour',
    destination: 'Sajek Valley, Rangamati',
    tagline: 'Experience waking up floating above a sea of white clouds from wooden cottages',
    duration: '3 Days / 2 Nights',
    price: 6800,
    regularPrice: 7999,
    rating: 4.9,
    reviewCount: 342,
    featured: true,
    category: 'hills',
    coverImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1628172901377-50a7c41348be?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    ],
    departurePoint: 'Dhaka (Sayedabad / Arambagh Bus Terminal)',
    nextDepartures: ['Every Thursday 9:00 PM', 'Every Tuesday 9:30 PM'],
    features: [
      'AC Highway Bus (Both ways)',
      'Scenic 4x4 Chander Gari Mountain Safari',
      'Valley-facing Wooden Eco Resort / Cottage',
      'All Traditional Meals with Bamboo Chicken BBQ',
      'Experienced Local Shohagh Holidays Guide'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dhaka to Khagrachari & Ascent to Sajek Valley',
        description: 'Overnight bus journey from Dhaka. Morning arrival in Khagrachari, breakfast at System Restaurant. Army escort jeep journey to Sajek through lush hill tracts. Check-in to hilltop cottage, sunset at Helipad with live acoustic vibe.',
        meals: 'Breakfast, Lunch, Dinner (Traditional Mountain Fare)',
        stay: 'Premium Hilltop Eco Cottage (Ruilui Para)'
      },
      {
        day: 2,
        title: 'Konglak Peak Sunrise & Ruilui Village Expedition',
        description: 'Early morning trek up to Konglak Peak (highest peak in Sajek) above the misty cloud ocean. Afternoon tour of Lushei tribal village, stone garden, and night special Bamboo Chicken BBQ party under starry hill skies.',
        meals: 'Breakfast, Lunch, Traditional Bamboo BBQ Dinner',
        stay: 'Premium Hilltop Eco Cottage (Ruilui Para)'
      },
      {
        day: 3,
        title: 'Alutila Mysterious Cave & Tareng Khagrachari',
        description: 'Morning cloud viewing, descent to Khagrachari. Explore mystical Alutila Cave with flaming torch, suspension bridge, and Tareng viewpoint. Return night bus to Dhaka.',
        meals: 'Breakfast, Lunch, Evening Snacks',
        stay: 'Overnight Journey to Dhaka'
      }
    ],
    inclusions: [
      'Dhaka - Khagrachari - Dhaka Non-AC/AC Bus Tickets',
      '2 Nights accommodation in prime valley-facing cottage',
      'All meals: 3 Breakfasts, 3 Lunches, 2 Dinners (including 1 BBQ)',
      'Dedicated 4x4 Open Hood Chander Gari for 3 days',
      'Entry fees for Alutila Cave, Tareng, and Sajek Valley',
      'Experienced 24/7 dedicated Tour Manager'
    ],
    exclusions: [
      'Personal snacks, mineral water extra bottles, and soft drinks',
      'Medicines or personal emergency expenses',
      'Any extra vehicle ride or shopping at tribal bazaar'
    ],
    travelTips: [
      'Carry NID card / Passport photocopy (mandatory for Army check-posts)',
      'Only Robi, Teletalk, and Airtel mobile networks work well in Sajek',
      'Carry light jacket or shawl for cool evening breeze on the ridges'
    ]
  },
  {
    id: 'saint-martin-coral-island',
    title: 'Saint Martin Island Coral Paradise Tour',
    destination: "Saint Martin's Island & Chera Dwip",
    tagline: 'Crystal clear azure waters, coral walks, and fresh deep-sea lobster BBQ under swaying palms',
    duration: '3 Days / 2 Nights',
    price: 8500,
    regularPrice: 9800,
    rating: 4.8,
    reviewCount: 289,
    featured: true,
    category: 'beach',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80'
    ],
    departurePoint: 'Dhaka (Fakirapool / Kolabagan / Arambagh)',
    nextDepartures: ['Every Thursday 8:00 PM', 'Special Weekend Batches'],
    features: [
      'Direct AC Highway Bus (Dhaka - Teknaf / Cox)',
      'Ship Cruise Ticket (Both ways included)',
      'Beachfront Eco Resort with Coconut Grove',
      'Trolling Boat Safari to Chera Dwip',
      'Coral Beach Walk & Fresh Seafood BBQ'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Teknaf Ship Cruise & Arrival at Saint Martin',
        description: 'Morning arrival at Teknaf Damdamia Ghat. Board sea cruise ship accompanied by sea gulls through Naf River estuary into Bay of Bengal. Check in at beach resort, evening sunset stroll along West Beach.',
        meals: 'Breakfast, Fresh Sea-fish Lunch, Dinner with Koral/Rupchanda',
        stay: 'Beachfront Wooden Eco Cottage (West Beach)'
      },
      {
        day: 2,
        title: 'Chera Dwip Expedition & Night Coral BBQ',
        description: 'Morning private trawler ride to the southernmost point Chera Dwip. Walk on dead corals, observe marine biodiversity. Evening beach campfire and grilled Coral fish BBQ.',
        meals: 'Breakfast, Coconut Water & Lunch, Island BBQ Dinner',
        stay: 'Beachfront Wooden Eco Cottage'
      },
      {
        day: 3,
        title: 'Sunrise at East Beach, Cycle Ride & Return Voyage',
        description: 'Watch golden sunrise, rent beach bicycles or shop dry fish and organic island pickles. Afternoon 3 PM ship departure back to Teknaf, boarding Dhaka return bus.',
        meals: 'Breakfast, Lunch, Evening ship snacks',
        stay: 'Overnight Journey to Dhaka'
      }
    ],
    inclusions: [
      'Dhaka - Teknaf - Dhaka AC Sleeper/Hino 1J Bus',
      'Round-trip Cruise Ship ticket (Main Deck / Open Deck)',
      '2 Nights beachfront resort accommodation',
      'All delicious local meals with fresh deep sea fish',
      'Trawler boat cruise to Chera Dwip',
      'Government eco-tax and entry clearance permits'
    ],
    exclusions: [
      'Beach quad bikes or parasailing rentals',
      'Dry fish shopping and extra green coconuts',
      'Anything not explicitly mentioned in inclusions'
    ],
    travelTips: [
      'Do not touch or collect living corals - preserve the fragile ecosystem',
      'Electricity runs on solar/generators in Saint Martin from evening to midnight',
      'Wear sunscreen and beach-friendly water shoes'
    ]
  },
  {
    id: 'sundarbans-wildlife-cruise',
    title: 'Sundarbans Mangrove Safari & Royal Bengal Cruise',
    destination: 'Sundarbans National Forest, Khulna / Mongla',
    tagline: 'Deep mangrove creek safaris, deer sanctuary, watchtowers, and Royal Bengal tiger tracking',
    duration: '3 Days / 3 Nights',
    price: 13500,
    regularPrice: 15500,
    rating: 4.9,
    reviewCount: 215,
    featured: true,
    category: 'forest',
    coverImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    ],
    departurePoint: 'Dhaka or Mongla Tourist Ghat',
    nextDepartures: ['1st & 3rd Friday of Every Month'],
    features: [
      'VIP Tourist Vessel with Private Cabin & AC',
      'Certified Armed Forest Department Guards',
      'Silent Wooden Boat Canal Safaris',
      'Kotka Wildlife Sanctuary & Jamtola Sea Beach',
      'Full Board 5-Course Meals with Bhekti & Crab'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mongla Departure, Harbaria Eco Park & Cruise Deep South',
        description: 'Board luxury ship at Mongla Ghat with welcome drinks. Enter Sundarbans through Pashur river. Afternoon guided walk along wooden walkway of Harbaria tiger breeding zone. Anchor near Kotka.',
        meals: 'Welcome Drink, 5-Course Lunch, Evening Pitha, Rich Dinner',
        stay: 'AC Cabin inside Tourist Vessel on River'
      },
      {
        day: 2,
        title: 'Silent Country Boat Canal Cruise, Kotka & Jamtola Beach',
        description: 'Pre-dawn silent hand-rowed country boat journey through narrow mangrove creeks for bird watching and wildlife sightings. Trek through tiger trail to pristine Jamtola beach. Evening BBQ party on upper deck.',
        meals: 'Early tea, Rich Breakfast, Crab & Fish Lunch, BBQ Dinner on Deck',
        stay: 'AC Cabin inside Tourist Vessel'
      },
      {
        day: 3,
        title: 'Karamjal Crocodile Breeding Center & Return to Mongla',
        description: 'Morning cruise to Karamjal wildlife center. Observe saltwater crocodiles, endangered Batagur baska river turtles, and spotted deer. Disembark at Mongla by 5:00 PM for Dhaka return.',
        meals: 'Breakfast, Traditional Bengali Feast Lunch, Snacks',
        stay: 'Return to Dhaka'
      }
    ],
    inclusions: [
      'Full accommodation in twin/couple attached AC cabin on tourist vessel',
      'All meals, continuous mineral water, tea/coffee bar',
      'Armed forest guard protection and experienced wildlife naturalist guide',
      'Forest department foreign/local tourist entry permissions & vessel fees',
      'Country silent boat canal exploration trips'
    ],
    exclusions: [
      'Travel from Dhaka to Mongla (available as add-on AC bus)',
      'Forest camera fee for high-end professional cinema setups'
    ],
    travelTips: [
      'Maintain strict silence during early morning creek safaris',
      'Wear earthy, muted clothing (khaki, olive green, beige) - avoid bright neon colors',
      'Do not throw plastic or waste into river waters'
    ]
  },
  {
    id: 'tanguar-haor-luxury-houseboat',
    title: 'Tanguar Haor Premium Houseboat Expedition',
    destination: 'Tanguar Haor, Sunamganj & Meghalaya Border',
    tagline: 'Glide along emerald freshwater haor waters, limestone lakes, and Shimul Bagan on luxury bajra',
    duration: '2 Days / 2 Nights',
    price: 6500,
    regularPrice: 7500,
    rating: 4.9,
    reviewCount: 310,
    featured: true,
    category: 'haor',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'
    ],
    departurePoint: 'Dhaka (Sayedabad / Mohakhali) to Sunamganj',
    nextDepartures: ['Every Thursday Night', 'Custom Private Charter Daily'],
    features: [
      'Premium Wood-Carved Houseboat with Attached Washroom',
      'Jadukata River & Blue Water Niladri Lake (Tekerghat)',
      'Magnificent Shimul Bagan & Barek Tilla Viewpoint',
      'Unlimited Duck Meat (Haor Hash) & Fresh Boal/Kachki Fish',
      'Rooftop Lounge Deck for Stargazing & Acoustic Folk'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Sunamganj Boarding, Watchtower & Sanctuary Waters',
        description: 'Morning arrival at Sunamganj Saheb Bari Ghat. Step onto traditional luxury houseboat. Cruise through crystal clear Tanguar Haor where aquatic flora can be seen meters below. Visit central watchtower and take refreshing freshwater swim with lifejackets.',
        meals: 'Traditional Haor Breakfast, Duck Curry & Fish Lunch, Evening Snacks, Dinner',
        stay: 'Attached Washroom Cabin in Floating Luxury Houseboat'
      },
      {
        day: 2,
        title: 'Niladri Lake, Tekerghat Limestone & Jadukata River',
        description: 'Wake up to misty Meghalaya hills across border. Visit mesmerizing turquoise Niladri Lake, Barek Tilla hilltop, and crystal clean waters of Jadukata River. Evening cruise back to Sunamganj town for Dhaka bus.',
        meals: 'Deshi Paratha & Omelet, Special Haor Fish Thali, Evening Tea',
        stay: 'Night bus back to Dhaka'
      }
    ],
    inclusions: [
      '2 Full days stay and cruise on fully furnished premium houseboat',
      'All traditional meals including Haor Duck, fresh river fishes, and sweet curd',
      'Life jackets for all guests and safety gear',
      'Local speedboat transfer to Tekerghat and Jadukata River',
      'All port clearances and dedicated crew hospitality'
    ],
    exclusions: [
      'Dhaka - Sunamganj bus tickets (can be booked via our bus desk)',
      'Bike rentals at Tekerghat',
      'Personal medicine & personal shopping'
    ],
    travelTips: [
      'Life jacket is compulsory while swimming in the haor',
      'Carry power banks as charging ports run on solar/generator batteries',
      'Best season is Monsoon (July - October) for water, Winter for migratory birds'
    ]
  },
  {
    id: 'coxs-bazar-marine-drive-luxury',
    title: 'Cox’s Bazar Beachfront & Marine Drive Tour',
    destination: "Cox's Bazar & Inani Beach",
    tagline: 'World’s longest unbroken natural sea beach, breathtaking Marine Drive, and 4-star resort stay',
    duration: '3 Days / 2 Nights',
    price: 7200,
    regularPrice: 8500,
    rating: 4.7,
    reviewCount: 420,
    featured: false,
    category: 'beach',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    departurePoint: 'Dhaka (Arambagh / Fakirapool)',
    nextDepartures: ['Daily Departures Available', 'Custom Family Packages'],
    features: [
      'Scania Multi-Axle AC Bus (Dhaka - Cox’s Bazar)',
      '4-Star Rated Beachside Hotel with Swimming Pool',
      'Open Hood Jeep Tour along Marine Drive',
      'Inani Coral Beach & Himchari Hill Waterfall',
      'Sunset Beach BBQ at Laboni Point'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival, Hotel Check-in & Kolatoli Beach Sunset',
        description: 'Morning arrival at Cox’s Bazar bus terminal. Private pickup to beachside hotel. Refresh and relax by hotel pool. Evening beach stroll at Kolatoli, sea fish fry tasting, and sunset gazing.',
        meals: 'Breakfast, Seafood Lunch, Dinner',
        stay: '4-Star Beachside Resort (Kolatoli / Marine Drive)'
      },
      {
        day: 2,
        title: 'Marine Drive Roadtrip, Inani Coral Beach & Himchari',
        description: 'Hop onto open hood green safari jeep along the longest sea road in the world. Visit Himchari national park hill viewpoint and waterfall, walk on golden sand and corals at Inani Beach. Sunset seafood BBQ.',
        meals: 'Buffet Breakfast, Inani Beach Lunch, Special Sea-Fish BBQ Dinner',
        stay: '4-Star Beachside Resort'
      },
      {
        day: 3,
        title: 'Burmese Market Shopping & Return Voyage',
        description: 'Morning beach time, swimming. Check out and explore famous Burmese Market for souvenirs, tribal handlooms, and dry fish market. Afternoon / Night AC coach departure for Dhaka.',
        meals: 'Buffet Breakfast, Traditional Mezban / Fish Lunch',
        stay: 'Overnight Highway Journey'
      }
    ],
    inclusions: [
      'Dhaka - Cox’s Bazar - Dhaka AC Bus tickets',
      '2 Nights twin-share room in 4-star luxury hotel',
      'Daily buffet breakfast and selected special meals',
      'Reserved open hood jeep for Marine drive tour',
      'Entry tickets for Himchari Park and Inani'
    ],
    exclusions: [
      'Parasailing, speed boat, or beach bike rides',
      'Lunch and dinner not specified in package'
    ],
    travelTips: [
      'Swim only within designated safe flag zones on the beach',
      'Negotiate before renting beach quad bikes or sun-loungers',
      'Sunblock and shades are highly recommended'
    ]
  },
  {
    id: 'sylhet-ratargul-sreemangal-tea',
    title: 'Sylhet & Sreemangal - Rain Forest & Tea Estate',
    destination: 'Sylhet, Ratargul Swamp & Sreemangal',
    tagline: 'Row through the Amazon of Bangladesh, Jaflong stone river, and rolling green tea gardens',
    duration: '3 Days / 2 Nights',
    price: 6900,
    regularPrice: 8200,
    rating: 4.8,
    reviewCount: 185,
    featured: false,
    category: 'forest',
    coverImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    ],
    departurePoint: 'Dhaka (Mohakhali / Sayedabad)',
    nextDepartures: ['Every Thursday 10:00 PM'],
    features: [
      'Reserved AC Hiace Microbus / AC Highway Coach',
      'Ratargul Freshwater Swamp Forest Silent Boat',
      'Jaflong Zero Point & Piyain River Stone Views',
      'Lawachara National Rainforest & 7-Layer Tea',
      'Stay at Sreemangal Tea Garden Eco Resort'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Sylhet Arrival, Ratargul Swamp Forest & Hazrat Shah Jalal Shrine',
        description: 'Arrive in Sylhet early morning. Explore Ratargul freshwater swamp forest by wooden dinghy boat through submerged trees and creepers. Afternoon visit to revered Shah Jalal Dargah Sharif and local khasi betel leaf plantations.',
        meals: 'Panch Bhai Breakfast, Lunch with Shatkora Beef, Dinner',
        stay: 'Standard 3-Star City Hotel (Sylhet)'
      },
      {
        day: 2,
        title: 'Jaflong Zero Point, Lalakhal Blue River & Transfer to Sreemangal',
        description: 'Visit Jaflong stone beds near Meghalaya waterfalls. Afternoon boat cruise on emerald crystal waters of Lalakhal. Drive to Sreemangal through scenic rubber and tea gardens.',
        meals: 'Breakfast, Jaflong Fish Thali, Sreemangal Dinner',
        stay: 'Tea Garden Eco Cottage (Sreemangal)'
      },
      {
        day: 3,
        title: 'Lawachara Rainforest, Manipuri Village & 7-Layer Tea',
        description: 'Early morning jungle trek inside Lawachara National Park in search of rare Hoolock Gibbons. Visit authentic Manipuri handicraft weaver village and taste Nilkantha 7-Layer Tea before returning to Dhaka.',
        meals: 'Resort Breakfast, Traditional Lunch, Evening Snacks',
        stay: 'Evening Return to Dhaka'
      }
    ],
    inclusions: [
      'Dhaka - Sylhet / Sreemangal round-trip transportation',
      'Dedicated AC vehicle for all internal spot sightseeing',
      '2 Nights resort/hotel accommodation',
      'All meals featuring famous Sylheti Shatkora beef & local fish',
      'Boat rentals for Ratargul and Lalakhal',
      'Forest guide and entrance fees'
    ],
    exclusions: [
      'Personal handicrafts shopping at Manipuri village',
      'Tips to boatmen and drivers'
    ],
    travelTips: [
      'Carry umbrellas and rain gear as Sylhet receives high rainfall',
      'Do not feed wild animals in Lawachara national park'
    ]
  },
  {
    id: 'bandarban-nilgiri-chimbuk-peak',
    title: 'Bandarban - Nilgiri, Nilachal & Golden Temple',
    destination: 'Bandarban Hill District',
    tagline: 'Touch the highest mountain peaks, deep clouds at Nilgiri, and tribal waterfalls',
    duration: '3 Days / 2 Nights',
    price: 7400,
    regularPrice: 8700,
    rating: 4.9,
    reviewCount: 230,
    featured: false,
    category: 'hills',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    ],
    departurePoint: 'Dhaka (Arambagh / Sayedabad)',
    nextDepartures: ['Every Thursday 9:30 PM'],
    features: [
      'AC Highway Bus (Dhaka - Bandarban)',
      'Reserved 4x4 Chander Gari Mountain Cruiser',
      'Army Operated Nilgiri Hilltop Viewpoint',
      'Nilachal (Heaven on Earth) Sunset View',
      'Shoilo Propat & Golden Buddha Dhatu Jadi'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Bandarban Town, Buddha Dhatu Jadi & Nilachal Sunset',
        description: 'Morning arrival in Bandarban. Check in to hillside resort. Afternoon visit to majestic Golden Buddhist Temple (Buddha Dhatu Jadi). Sunset at Nilachal with 360-degree panoramic view of hill folds.',
        meals: 'Breakfast, Traditional Lunch, Hillside Dinner',
        stay: 'Hill View Eco Resort (Bandarban)'
      },
      {
        day: 2,
        title: 'Nilgiri Cloud Station, Chimbuk Hill & Shoilo Propat',
        description: 'Ascend by Chander Gari through winding serpentine hill roads to Nilgiri (2200 ft above sea level). Marvel at clouds rolling beneath your feet. On way back, visit historic Chimbuk Hill and freshwater rocky waterfall Shoilo Propat.',
        meals: 'Breakfast, Nilgiri Army Canteen Lunch, Tribal BBQ Dinner',
        stay: 'Hill View Eco Resort'
      },
      {
        day: 3,
        title: 'Boga Lake or Meghla Tourist Zone & Return',
        description: 'Morning trip to Meghla tourist complex with hanging bridge, cable car and lake paddle boating. Shopping for authentic hill tribal shawls and pure wild forest honey. Board return AC bus to Dhaka.',
        meals: 'Breakfast, Lunch, Evening Snacks',
        stay: 'Return to Dhaka'
      }
    ],
    inclusions: [
      'Dhaka - Bandarban - Dhaka AC Bus tickets',
      '2 Nights accommodation in hill resort',
      'Full time reserved 4x4 Chander Gari with skilled hill driver',
      'All meals: Breakfasts, lunches, dinners',
      'Entry tickets and Army administration passes'
    ],
    exclusions: [
      'Shopping for local fruits, honey, or handicrafts',
      'Personal boating or cable car tickets'
    ],
    travelTips: [
      'Bandarban hill roads are steep; follow guide safety instructions inside Chander Gari',
      'Respect local tribal cultures and customs'
    ]
  }
];

export const INITIAL_BUS_SERVICES: BusService[] = [
  {
    id: 'bus-1',
    operator: 'Green Line Paribahan',
    route: 'Dhaka ⇄ Cox’s Bazar',
    busType: 'Scania Multi-Axle Double Decker (AC Sleeper / Business)',
    departureTimes: ['08:00 AM', '09:30 PM', '10:30 PM', '11:15 PM'],
    priceBDT: 2200,
    boardingPoints: ['Sayedabad', 'Arambagh', 'Rajarbagh', 'Kakrail'],
    droppingPoints: ['Jhawtola', 'Kolatoli Beach Circle', 'Hotel Sea Palace'],
    amenities: ['Reclining Sleeper Seats', 'Individual USB Charging', 'Mineral Water', 'Blanket', 'Onboard Wifi'],
    isAvailable: true
  },
  {
    id: 'bus-2',
    operator: 'Saintmartin Travels',
    route: 'Dhaka ⇄ Teknaf (Saint Martin Ship Ghat)',
    busType: 'Hyundai Universe Express Super Luxury AC',
    departureTimes: ['07:30 PM', '08:30 PM', '09:00 PM'],
    priceBDT: 2300,
    boardingPoints: ['Sayedabad', 'Arambagh', 'Abdullahpur'],
    droppingPoints: ['Teknaf Damdamia Ship Ghat', 'Teknaf Bus Stand'],
    amenities: ['Direct Ship Ghat Drop', 'Blanket', 'Mineral Water & Snacks', 'Reading Light'],
    isAvailable: true
  },
  {
    id: 'bus-3',
    operator: 'Shohagh Elite Paribahan',
    route: 'Dhaka ⇄ Khagrachari (For Sajek Valley)',
    busType: 'Scania Comfort Class AC',
    departureTimes: ['08:00 PM', '09:30 PM', '10:00 PM'],
    priceBDT: 1500,
    boardingPoints: ['Gabtoli', 'Sayedabad', 'Arambagh', 'Kalabagan'],
    droppingPoints: ['Khagrachari Shapla Chottor', 'Dighinala (Sajek Escort)'],
    amenities: ['High-Suspension Air Ride', 'Curtains', 'Drinking Water', 'Experienced Hill Drivers'],
    isAvailable: true
  },
  {
    id: 'bus-4',
    operator: 'Desh Travels Hyundai',
    route: 'Dhaka ⇄ Sylhet & Sreemangal',
    busType: 'Hyundai Universe Multi-Axle AC',
    departureTimes: ['07:30 AM', '11:00 AM', '04:00 PM', '11:30 PM'],
    priceBDT: 1200,
    boardingPoints: ['Sayedabad', 'Kakrail', 'Airport Road'],
    droppingPoints: ['Sreemangal Stand', 'Sylhet Kadamtoli Bus Terminal'],
    amenities: ['Recliner Seats', 'Wifi', 'Water Bottle', 'Comfortable Suspension'],
    isAvailable: true
  },
  {
    id: 'bus-5',
    operator: 'Mamun Enterprise',
    route: 'Dhaka ⇄ Sunamganj (For Tanguar Haor)',
    busType: 'Hino 1J RM2 AC Luxury Coach',
    departureTimes: ['09:00 PM', '10:15 PM', '11:00 PM'],
    priceBDT: 1100,
    boardingPoints: ['Mohakhali', 'Sayedabad'],
    droppingPoints: ['Sunamganj Old Bus Stand', 'Saheb Bari Boat Ghat'],
    amenities: ['Direct Haor Boat Ghat Drop', 'Push Back Seats', 'Drinking Water'],
    isAvailable: true
  }
];

export const INITIAL_SHIPS: ShipService[] = [
  {
    id: 'ship-1',
    shipName: 'MV Bay One Luxury Cruise',
    route: 'Cox’s Bazar (Patuartek) ⇄ Saint Martin',
    departurePort: 'Cox’s Bazar Naval Ghat / Patuartek',
    arrivalPort: 'Saint Martin Jetty',
    departureTime: '09:00 AM (Daily)',
    returnTime: '03:30 PM (Saint Martin to Cox)',
    status: 'Operating Daily',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    description: 'Bangladesh’s first international standard ocean cruise liner featuring 7 decks, swimming pool, cinema, fine dining restaurant, and sea-view cabins.',
    classes: [
      { className: 'Open Sky Deck Economy', priceBDT: 2500, features: 'Open upper deck ocean view seating & snack bar' },
      { className: 'Business Ocean Lounge', priceBDT: 3800, features: 'Air-conditioned luxury sofa seating with complimentary meal' },
      { className: 'VIP Ocean View Royal Cabin', priceBDT: 6500, features: 'Private attached couple cabin, panoramic windows, butler' }
    ]
  },
  {
    id: 'ship-2',
    shipName: 'Keari Sindbad',
    route: 'Teknaf ⇄ Saint Martin',
    departurePort: 'Teknaf Damdamia Ghat',
    arrivalPort: 'Saint Martin Main Pier',
    departureTime: '09:30 AM (Daily)',
    returnTime: '03:00 PM (Return)',
    status: 'Operating Daily',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    description: 'The most popular and dependable sea cruise vessel serving Saint Martin for over 18 years with exceptional safety records and sea gull views.',
    classes: [
      { className: 'Main Deck (AC)', priceBDT: 1400, features: 'Enclosed air conditioned seating on main deck' },
      { className: 'Bridge Deck (Open Air)', priceBDT: 1600, features: 'Panoramic open air view, best for photography & birds' },
      { className: 'Keari Royal Lounge', priceBDT: 2200, features: 'VIP front view lounge with refreshments' }
    ]
  },
  {
    id: 'ship-3',
    shipName: 'MV Baro Awlia',
    route: 'Teknaf ⇄ Saint Martin',
    departurePort: 'Damdamia Port, Teknaf',
    arrivalPort: 'Saint Martin Jetty',
    departureTime: '09:45 AM (Daily)',
    returnTime: '03:15 PM (Return)',
    status: 'Operating Daily',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    description: 'High capacity modern sea vessel equipped with advanced marine navigation, comfortable double-deck seating, and medical crew onboard.',
    classes: [
      { className: 'Economic Chair Class', priceBDT: 1300, features: 'Comfortable cushioned airline seats' },
      { className: 'Executive AC Deck', priceBDT: 1700, features: 'Chilled AC hall with snack trolley' },
      { className: 'VIP Captain Deck', priceBDT: 2400, features: 'Top bridge luxury view with welcome snacks' }
    ]
  }
];

export const INITIAL_TIPS: TravelTip[] = [
  {
    id: 'tip-1',
    slug: 'sajek-valley-cloud-season-guide',
    title: 'Sajek Valley Travel Guide 2025: When and How to Catch the Ocean of Clouds',
    excerpt: 'A comprehensive guide on Sajek cloud formations, army escort timings from Khagrachari, Chander Gari hiring tips, and the best wooden cottages for sunrise views.',
    coverImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80',
    readTime: '6 min read',
    date: 'Oct 20, 2025',
    category: 'Hill Tracts',
    author: 'Shohagh Holidays Team',
    content: [
      'Sajek Valley in Rangamati is known as the "Kingdom of Clouds" for good reason. At an elevation of over 1,800 feet above sea level, clouds drift into your balcony every morning during the late monsoon and early winter season (September to January).',
      'The journey starts from Khagrachari. Remember that all civilian vehicles can only proceed under Bangladesh Army escort, which leaves Dighinala twice a day: once around 10:30 AM and again at 3:30 PM. Missing the escort means you cannot enter Sajek that half of the day!',
      'Make sure you book your hilltop cottage in advance in Ruilui Para or Konglak Para. Konglak Peak is the highest point—climbing it before 6:00 AM gives you an uninterrupted 360-degree panorama of Meghalaya mountains and cloud blankets.',
      'Network Tip: Only Robi and Teletalk have strong signals in the valley; other SIMs will often show no service. Carry cash, as ATMs are not available atop the hills.'
    ]
  },
  {
    id: 'tip-2',
    slug: 'saint-martin-permit-rules-ship-booking',
    title: 'Saint Martin Island: Latest Travel Regulations & Ship Ticket Booking Rules',
    excerpt: 'Essential updates on Saint Martin eco-tax regulations, luggage guidelines, Teknaf vs Cox’s Bazar ship ports, and staying safely on the coral island.',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read',
    date: 'Oct 14, 2025',
    category: 'Island & Sea',
    author: 'Travel Desk Expert',
    content: [
      'Saint Martin is the only coral island in Bangladesh. Because it is an ecologically sensitive marine area, the Department of Environment and administration have introduced travel caps during peak seasons.',
      'Ships operate primarily from November through late March. You can choose to depart from Teknaf Damdamia Ghat (shorter sea crossing, roughly 2.5 hours) or cruise from Cox’s Bazar (approx 5 hours on MV Bay One with full sea voyage experience).',
      'Never collect live corals or seashells. Bringing back dead corals is prohibited by law and damages the coastline. Always bring comfortable beach sandals as walking on dead coral outcrops can be sharp.',
      'Electricity on Saint Martin relies on generator and solar power, which usually shuts down between midnight and 6 AM in many local resorts. Choose eco-resorts with uninterrupted battery backups if that is important for your comfort.'
    ]
  },
  {
    id: 'tip-3',
    slug: 'tanguar-haor-luxury-houseboat-booking-tips',
    title: 'How to Choose the Right Luxury Houseboat for Tanguar Haor & Sunamganj',
    excerpt: 'From attached washrooms and traditional Haor duck delicacies to navigating Tekerghat and Jadukata River, here is what to look for when booking a houseboat.',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read',
    date: 'Sep 28, 2025',
    category: 'Haor Wetlands',
    author: 'Captain Zahid Hossain',
    content: [
      'Tanguar Haor is a Ramsar site of international ecological importance. Floating along its emerald freshwater expanse aboard a handcrafted wooden luxury boat (bajra) is arguably one of Bangladesh’s most enchanting travel experiences.',
      'When selecting a boat, verify: (1) Does it have attached commodes with running water? (2) Does it carry certified life jackets for every passenger? (3) Does the boat crew prepare authentic local meals such as Haor duck bhuna, fresh river fish, and rural desserts?',
      'Key destinations you will visit include the Central Haor Watchtower for swimming, Tekerghat limestone quarry (Niladri Lake), Shimul Bagan (huge silk cotton forest), and the crystal clear gravel bed of Jadukata River along the Meghalaya border.',
      'Monsoon season (July to September) offers the fullest, boundless water views, while winter brings hundreds of thousands of migratory birds from Siberia.'
    ]
  },
  {
    id: 'tip-4',
    slug: 'sundarbans-wildlife-safety-and-packing',
    title: 'Sundarbans Tour: Comprehensive Packing List, Safety & Animal Etiquette',
    excerpt: 'What to pack, how to behave during silent canal safaris, armed guard security, and how to increase your chances of spotting Royal Bengal Tigers.',
    coverImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80',
    readTime: '7 min read',
    date: 'Sep 12, 2025',
    category: 'Wildlife Safari',
    author: 'Sundarbans Forest Guide',
    content: [
      'The Sundarbans is the largest contiguous mangrove forest on Earth and home to the majestic Royal Bengal Tiger. Because it is a true wild habitat, safety is paramount.',
      'Every official tourist vessel is accompanied by two armed forest department guards whenever travelers disembark for jungle walks in sanctuaries like Kotka, Kochikhali, or Harbaria.',
      'What to wear: Earth tones like green, brown, khaki, or dull grey. Bright red, neon, or orange colors startle wild animals and make birds fly away before you can spot them.',
      'Pack insect repellent, binoculars for bird and deer watching, sturdy walking shoes that can handle mud, and power banks. Respect the quietness of the forest: loud music or shouting is strictly forbidden inside the reserve.'
    ]
  }
];
