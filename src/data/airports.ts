export interface Airport {
  code: string;
  icao: string;
  name: string;
  city: string;
  lat: number;
  lon: number;
}

export const airports: Airport[] = [
  { code: "LAX", icao: "KLAX", name: "Los Angeles International", city: "Los Angeles, CA", lat: 33.9425, lon: -118.4081 },
  { code: "JFK", icao: "KJFK", name: "John F. Kennedy International", city: "New York, NY", lat: 40.6413, lon: -73.7781 },
  { code: "TEB", icao: "KTEB", name: "Teterboro Airport", city: "Teterboro, NJ", lat: 40.8501, lon: -74.0608 },
  { code: "SFO", icao: "KSFO", name: "San Francisco International", city: "San Francisco, CA", lat: 37.6213, lon: -122.3790 },
  { code: "MIA", icao: "KMIA", name: "Miami International", city: "Miami, FL", lat: 25.7959, lon: -80.2870 },
  { code: "ORD", icao: "KORD", name: "O'Hare International", city: "Chicago, IL", lat: 41.9742, lon: -87.9073 },
  { code: "DFW", icao: "KDFW", name: "Dallas/Fort Worth International", city: "Dallas, TX", lat: 32.8998, lon: -97.0403 },
  { code: "ATL", icao: "KATL", name: "Hartsfield-Jackson International", city: "Atlanta, GA", lat: 33.6407, lon: -84.4277 },
  { code: "DEN", icao: "KDEN", name: "Denver International", city: "Denver, CO", lat: 39.8561, lon: -104.6737 },
  { code: "SEA", icao: "KSEA", name: "Seattle-Tacoma International", city: "Seattle, WA", lat: 47.4502, lon: -122.3088 },
  { code: "BOS", icao: "KBOS", name: "Boston Logan International", city: "Boston, MA", lat: 42.3656, lon: -71.0096 },
  { code: "IAD", icao: "KIAD", name: "Washington Dulles International", city: "Washington, DC", lat: 38.9531, lon: -77.4565 },
  { code: "LAS", icao: "KLAS", name: "Harry Reid International", city: "Las Vegas, NV", lat: 36.0840, lon: -115.1537 },
  { code: "PHX", icao: "KPHX", name: "Phoenix Sky Harbor International", city: "Phoenix, AZ", lat: 33.4373, lon: -112.0078 },
  { code: "HOU", icao: "KHOU", name: "William P. Hobby", city: "Houston, TX", lat: 29.6454, lon: -95.2789 },
  { code: "MSP", icao: "KMSP", name: "Minneapolis-St. Paul International", city: "Minneapolis, MN", lat: 44.8848, lon: -93.2223 },
  { code: "SDM", icao: "KSAN", name: "San Diego International", city: "San Diego, CA", lat: 32.7338, lon: -117.1933 },
  { code: "VNY", icao: "KVNY", name: "Van Nuys Airport", city: "Van Nuys, CA", lat: 34.2098, lon: -118.4898 },
  { code: "ASE", icao: "KASE", name: "Aspen/Pitkin County", city: "Aspen, CO", lat: 39.2232, lon: -106.8688 },
  { code: "MVY", icao: "KMVY", name: "Martha's Vineyard", city: "Martha's Vineyard, MA", lat: 41.3934, lon: -70.6143 },
  { code: "SJU", icao: "TJSJ", name: "Luis Munoz Marin International", city: "San Juan, PR", lat: 18.4394, lon: -66.0018 },
  { code: "NAS", icao: "MYNN", name: "Lynden Pindling International", city: "Nassau, Bahamas", lat: 25.0390, lon: -77.4662 },
  { code: "CUN", icao: "MMUN", name: "Cancun International", city: "Cancun, Mexico", lat: 21.0365, lon: -86.8771 },
  { code: "GRU", icao: "SBGR", name: "Guarulhos International", city: "Sao Paulo, Brazil", lat: -23.4356, lon: -46.4731 },
  { code: "LHR", icao: "EGLL", name: "London Heathrow", city: "London, UK", lat: 51.4700, lon: -0.4543 },
  { code: "LTN", icao: "EGGW", name: "London Luton", city: "London, UK", lat: 51.8747, lon: -0.3684 },
  { code: "CDG", icao: "LFPG", name: "Charles de Gaulle", city: "Paris, France", lat: 49.0097, lon: 2.5479 },
  { code: "FCO", icao: "LIRF", name: "Leonardo da Vinci International", city: "Rome, Italy", lat: 41.8003, lon: 12.2389 },
  { code: "BCN", icao: "LEBL", name: "Barcelona El Prat", city: "Barcelona, Spain", lat: 41.2971, lon: 2.0785 },
  { code: "ZRH", icao: "LSZH", name: "Zurich Airport", city: "Zurich, Switzerland", lat: 47.4647, lon: 8.5492 },
  { code: "DXB", icao: "OMDB", name: "Dubai International", city: "Dubai, UAE", lat: 25.2532, lon: 55.3657 },
  { code: "NRT", icao: "RJAA", name: "Narita International", city: "Tokyo, Japan", lat: 35.7720, lon: 140.3929 },
  { code: "HND", icao: "RJTT", name: "Haneda Airport", city: "Tokyo, Japan", lat: 35.5494, lon: 139.7798 },
  { code: "HNL", icao: "PHNL", name: "Daniel K. Inouye International", city: "Honolulu, HI", lat: 21.3187, lon: -157.9224 },
  { code: "ANC", icao: "PANC", name: "Ted Stevens International", city: "Anchorage, AK", lat: 61.1743, lon: -149.9982 },
  { code: "YYZ", icao: "CYYZ", name: "Toronto Pearson International", city: "Toronto, Canada", lat: 43.6777, lon: -79.6248 },
  { code: "YVR", icao: "CYVR", name: "Vancouver International", city: "Vancouver, Canada", lat: 49.1967, lon: -123.1815 },
  { code: "MEX", icao: "MMMX", name: "Mexico City International", city: "Mexico City, Mexico", lat: 19.4363, lon: -99.0721 },
  { code: "GIG", icao: "SBGL", name: "Galeao International", city: "Rio de Janeiro, Brazil", lat: -22.8100, lon: -43.2506 },
  { code: "EZE", icao: "SAEZ", name: "Ministro Pistarini International", city: "Buenos Aires, Argentina", lat: -34.8222, lon: -58.5358 },
  { code: "SCL", icao: "SCEL", name: "Comodoro Arturo Merino Benitez", city: "Santiago, Chile", lat: -33.3930, lon: -70.7858 },
  { code: "ICN", icao: "RKSI", name: "Incheon International", city: "Seoul, South Korea", lat: 37.4602, lon: 126.4407 },
  { code: "SIN", icao: "WSSS", name: "Changi Airport", city: "Singapore", lat: 1.3644, lon: 103.9915 },
  { code: "SXM", icao: "TNCM", name: "Princess Juliana International", city: "St. Maarten", lat: 18.0410, lon: -63.1089 },
  { code: "PBI", icao: "KPBI", name: "Palm Beach International", city: "West Palm Beach, FL", lat: 26.6832, lon: -80.0956 },
  { code: "OPF", icao: "KOPF", name: "Miami-Opa Locka Executive", city: "Miami, FL", lat: 25.9070, lon: -80.2784 },
  { code: "SDQ", icao: "MDSD", name: "Las Americas International", city: "Santo Domingo, DR", lat: 18.4297, lon: -69.6689 },
  { code: "MBJ", icao: "MKJS", name: "Sangster International", city: "Montego Bay, Jamaica", lat: 18.5037, lon: -77.9134 },
];

export function searchAirports(query: string): Airport[] {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return airports
    .filter(
      (a) =>
        a.code.toLowerCase().includes(q) ||
        a.icao.toLowerCase().includes(q) ||
        a.name.toLowerCase().includes(q) ||
        a.city.toLowerCase().includes(q)
    )
    .slice(0, 8);
}

export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3440.065; // Earth radius in nautical miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
