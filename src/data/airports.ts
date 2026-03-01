export interface Airport {
  code: string;
  icao: string;
  name: string;
  city: string;
  lat: number;
  lon: number;
}

export const airports: Airport[] = [
  // ─── United States — Major Airports ───────────────────────────────────
  { code: "ATL", icao: "KATL", name: "Hartsfield-Jackson International", city: "Atlanta, GA", lat: 33.6407, lon: -84.4277 },
  { code: "AUS", icao: "KAUS", name: "Austin-Bergstrom International", city: "Austin, TX", lat: 30.1975, lon: -97.6664 },
  { code: "BDL", icao: "KBDL", name: "Bradley International", city: "Hartford, CT", lat: 41.9389, lon: -72.6832 },
  { code: "BHM", icao: "KBHM", name: "Birmingham-Shuttlesworth International", city: "Birmingham, AL", lat: 33.5629, lon: -86.7535 },
  { code: "BNA", icao: "KBNA", name: "Nashville International", city: "Nashville, TN", lat: 36.1245, lon: -86.6782 },
  { code: "BOI", icao: "KBOI", name: "Boise Airport", city: "Boise, ID", lat: 43.5644, lon: -116.2228 },
  { code: "BOS", icao: "KBOS", name: "Boston Logan International", city: "Boston, MA", lat: 42.3656, lon: -71.0096 },
  { code: "BUF", icao: "KBUF", name: "Buffalo Niagara International", city: "Buffalo, NY", lat: 42.9405, lon: -78.7322 },
  { code: "BUR", icao: "KBUR", name: "Hollywood Burbank Airport", city: "Burbank, CA", lat: 34.2005, lon: -118.3586 },
  { code: "BWI", icao: "KBWI", name: "Baltimore/Washington International", city: "Baltimore, MD", lat: 39.1754, lon: -76.6684 },
  { code: "CHS", icao: "KCHS", name: "Charleston International", city: "Charleston, SC", lat: 32.8986, lon: -80.0405 },
  { code: "CLE", icao: "KCLE", name: "Cleveland Hopkins International", city: "Cleveland, OH", lat: 41.4117, lon: -81.8498 },
  { code: "CLT", icao: "KCLT", name: "Charlotte Douglas International", city: "Charlotte, NC", lat: 35.2140, lon: -80.9431 },
  { code: "CMH", icao: "KCMH", name: "John Glenn Columbus International", city: "Columbus, OH", lat: 39.9980, lon: -82.8919 },
  { code: "CVG", icao: "KCVG", name: "Cincinnati/Northern Kentucky International", city: "Cincinnati, OH", lat: 39.0489, lon: -84.6678 },
  { code: "DAL", icao: "KDAL", name: "Dallas Love Field", city: "Dallas, TX", lat: 32.8471, lon: -96.8518 },
  { code: "DCA", icao: "KDCA", name: "Ronald Reagan Washington National", city: "Washington, DC", lat: 38.8521, lon: -77.0377 },
  { code: "DEN", icao: "KDEN", name: "Denver International", city: "Denver, CO", lat: 39.8561, lon: -104.6737 },
  { code: "DFW", icao: "KDFW", name: "Dallas/Fort Worth International", city: "Dallas, TX", lat: 32.8998, lon: -97.0403 },
  { code: "DTW", icao: "KDTW", name: "Detroit Metropolitan Wayne County", city: "Detroit, MI", lat: 42.2124, lon: -83.3534 },
  { code: "ELP", icao: "KELP", name: "El Paso International", city: "El Paso, TX", lat: 31.8072, lon: -106.3778 },
  { code: "EWR", icao: "KEWR", name: "Newark Liberty International", city: "Newark, NJ", lat: 40.6925, lon: -74.1687 },
  { code: "FLL", icao: "KFLL", name: "Fort Lauderdale-Hollywood International", city: "Fort Lauderdale, FL", lat: 26.0726, lon: -80.1527 },
  { code: "HNL", icao: "PHNL", name: "Daniel K. Inouye International", city: "Honolulu, HI", lat: 21.3187, lon: -157.9224 },
  { code: "HOU", icao: "KHOU", name: "William P. Hobby", city: "Houston, TX", lat: 29.6454, lon: -95.2789 },
  { code: "IAD", icao: "KIAD", name: "Washington Dulles International", city: "Washington, DC", lat: 38.9531, lon: -77.4565 },
  { code: "IAH", icao: "KIAH", name: "George Bush Intercontinental", city: "Houston, TX", lat: 29.9844, lon: -95.3414 },
  { code: "IND", icao: "KIND", name: "Indianapolis International", city: "Indianapolis, IN", lat: 39.7173, lon: -86.2944 },
  { code: "JAX", icao: "KJAX", name: "Jacksonville International", city: "Jacksonville, FL", lat: 30.4941, lon: -81.6879 },
  { code: "JFK", icao: "KJFK", name: "John F. Kennedy International", city: "New York, NY", lat: 40.6413, lon: -73.7781 },
  { code: "LAS", icao: "KLAS", name: "Harry Reid International", city: "Las Vegas, NV", lat: 36.0840, lon: -115.1537 },
  { code: "LAX", icao: "KLAX", name: "Los Angeles International", city: "Los Angeles, CA", lat: 33.9425, lon: -118.4081 },
  { code: "LGA", icao: "KLGA", name: "LaGuardia Airport", city: "New York, NY", lat: 40.7772, lon: -73.8726 },
  { code: "MCI", icao: "KMCI", name: "Kansas City International", city: "Kansas City, MO", lat: 39.2976, lon: -94.7139 },
  { code: "MCO", icao: "KMCO", name: "Orlando International", city: "Orlando, FL", lat: 28.4294, lon: -81.3090 },
  { code: "MDW", icao: "KMDW", name: "Chicago Midway International", city: "Chicago, IL", lat: 41.7868, lon: -87.7522 },
  { code: "MEM", icao: "KMEM", name: "Memphis International", city: "Memphis, TN", lat: 35.0424, lon: -89.9767 },
  { code: "MIA", icao: "KMIA", name: "Miami International", city: "Miami, FL", lat: 25.7959, lon: -80.2870 },
  { code: "MKE", icao: "KMKE", name: "Milwaukee Mitchell International", city: "Milwaukee, WI", lat: 42.9472, lon: -87.8966 },
  { code: "MSP", icao: "KMSP", name: "Minneapolis-St. Paul International", city: "Minneapolis, MN", lat: 44.8848, lon: -93.2223 },
  { code: "MSY", icao: "KMSY", name: "Louis Armstrong New Orleans International", city: "New Orleans, LA", lat: 29.9934, lon: -90.2580 },
  { code: "OAK", icao: "KOAK", name: "Oakland International", city: "Oakland, CA", lat: 37.7213, lon: -122.2208 },
  { code: "OKC", icao: "KOKC", name: "Will Rogers World Airport", city: "Oklahoma City, OK", lat: 35.3931, lon: -97.6007 },
  { code: "OMA", icao: "KOMA", name: "Eppley Airfield", city: "Omaha, NE", lat: 41.3032, lon: -95.8941 },
  { code: "ONT", icao: "KONT", name: "Ontario International", city: "Ontario, CA", lat: 34.0560, lon: -117.6012 },
  { code: "ORD", icao: "KORD", name: "O'Hare International", city: "Chicago, IL", lat: 41.9742, lon: -87.9073 },
  { code: "PBI", icao: "KPBI", name: "Palm Beach International", city: "West Palm Beach, FL", lat: 26.6832, lon: -80.0956 },
  { code: "PDX", icao: "KPDX", name: "Portland International", city: "Portland, OR", lat: 45.5898, lon: -122.5951 },
  { code: "PHL", icao: "KPHL", name: "Philadelphia International", city: "Philadelphia, PA", lat: 39.8721, lon: -75.2411 },
  { code: "PHX", icao: "KPHX", name: "Phoenix Sky Harbor International", city: "Phoenix, AZ", lat: 33.4373, lon: -112.0078 },
  { code: "PIT", icao: "KPIT", name: "Pittsburgh International", city: "Pittsburgh, PA", lat: 40.4915, lon: -80.2329 },
  { code: "PVD", icao: "KPVD", name: "T.F. Green International", city: "Providence, RI", lat: 41.7326, lon: -71.4204 },
  { code: "RDU", icao: "KRDU", name: "Raleigh-Durham International", city: "Raleigh, NC", lat: 35.8801, lon: -78.7880 },
  { code: "RIC", icao: "KRIC", name: "Richmond International", city: "Richmond, VA", lat: 37.5052, lon: -77.3197 },
  { code: "RSW", icao: "KRSW", name: "Southwest Florida International", city: "Fort Myers, FL", lat: 26.5362, lon: -81.7552 },
  { code: "SAN", icao: "KSAN", name: "San Diego International", city: "San Diego, CA", lat: 32.7338, lon: -117.1933 },
  { code: "SAT", icao: "KSAT", name: "San Antonio International", city: "San Antonio, TX", lat: 29.5337, lon: -98.4698 },
  { code: "SAV", icao: "KSAV", name: "Savannah/Hilton Head International", city: "Savannah, GA", lat: 32.1276, lon: -81.2021 },
  { code: "SDF", icao: "KSDF", name: "Louisville Muhammad Ali International", city: "Louisville, KY", lat: 38.1744, lon: -85.7360 },
  { code: "SEA", icao: "KSEA", name: "Seattle-Tacoma International", city: "Seattle, WA", lat: 47.4502, lon: -122.3088 },
  { code: "SFO", icao: "KSFO", name: "San Francisco International", city: "San Francisco, CA", lat: 37.6213, lon: -122.3790 },
  { code: "SJC", icao: "KSJC", name: "San Jose International", city: "San Jose, CA", lat: 37.3626, lon: -121.9291 },
  { code: "SLC", icao: "KSLC", name: "Salt Lake City International", city: "Salt Lake City, UT", lat: 40.7884, lon: -111.9778 },
  { code: "SMF", icao: "KSMF", name: "Sacramento International", city: "Sacramento, CA", lat: 38.6954, lon: -121.5908 },
  { code: "SNA", icao: "KSNA", name: "John Wayne Airport", city: "Orange County, CA", lat: 33.6757, lon: -117.8682 },
  { code: "STL", icao: "KSTL", name: "St. Louis Lambert International", city: "St. Louis, MO", lat: 38.7487, lon: -90.3700 },
  { code: "TPA", icao: "KTPA", name: "Tampa International", city: "Tampa, FL", lat: 27.9755, lon: -82.5332 },
  { code: "TUL", icao: "KTUL", name: "Tulsa International", city: "Tulsa, OK", lat: 36.1984, lon: -95.8881 },
  { code: "TUS", icao: "KTUS", name: "Tucson International", city: "Tucson, AZ", lat: 32.1161, lon: -110.9410 },

  // ─── United States — Private/Executive/Regional ───────────────────────
  { code: "TEB", icao: "KTEB", name: "Teterboro Airport", city: "Teterboro, NJ", lat: 40.8501, lon: -74.0608 },
  { code: "VNY", icao: "KVNY", name: "Van Nuys Airport", city: "Van Nuys, CA", lat: 34.2098, lon: -118.4898 },
  { code: "OPF", icao: "KOPF", name: "Miami-Opa Locka Executive", city: "Miami, FL", lat: 25.9070, lon: -80.2784 },
  { code: "HPN", icao: "KHPN", name: "Westchester County Airport", city: "White Plains, NY", lat: 41.0670, lon: -73.7076 },
  { code: "ASE", icao: "KASE", name: "Aspen/Pitkin County", city: "Aspen, CO", lat: 39.2232, lon: -106.8688 },
  { code: "MVY", icao: "KMVY", name: "Martha's Vineyard Airport", city: "Martha's Vineyard, MA", lat: 41.3934, lon: -70.6143 },
  { code: "ACK", icao: "KACK", name: "Nantucket Memorial Airport", city: "Nantucket, MA", lat: 41.2531, lon: -70.0602 },
  { code: "SBA", icao: "KSBA", name: "Santa Barbara Airport", city: "Santa Barbara, CA", lat: 34.4262, lon: -119.8405 },
  { code: "APA", icao: "KAPA", name: "Centennial Airport", city: "Denver, CO", lat: 39.5701, lon: -104.8493 },
  { code: "SDL", icao: "KSDL", name: "Scottsdale Airport", city: "Scottsdale, AZ", lat: 33.6229, lon: -111.9105 },
  { code: "ANC", icao: "PANC", name: "Ted Stevens International", city: "Anchorage, AK", lat: 61.1743, lon: -149.9982 },
  { code: "FAI", icao: "PAFA", name: "Fairbanks International", city: "Fairbanks, AK", lat: 64.8151, lon: -147.8561 },
  { code: "OGG", icao: "PHOG", name: "Kahului Airport", city: "Maui, HI", lat: 20.8986, lon: -156.4305 },
  { code: "KOA", icao: "PHKO", name: "Ellison Onizuka Kona International", city: "Kona, HI", lat: 19.7388, lon: -156.0456 },
  { code: "PSP", icao: "KPSP", name: "Palm Springs International", city: "Palm Springs, CA", lat: 33.8297, lon: -116.5067 },
  { code: "EYW", icao: "KEYW", name: "Key West International", city: "Key West, FL", lat: 24.5561, lon: -81.7596 },
  { code: "HDN", icao: "KHDN", name: "Yampa Valley Regional Airport", city: "Steamboat Springs, CO", lat: 40.4812, lon: -107.2177 },
  { code: "EGE", icao: "KEGE", name: "Eagle County Regional Airport", city: "Vail, CO", lat: 39.6426, lon: -106.9159 },
  { code: "JAC", icao: "KJAC", name: "Jackson Hole Airport", city: "Jackson Hole, WY", lat: 43.6073, lon: -110.7377 },
  { code: "SUN", icao: "KSUN", name: "Friedman Memorial Airport", city: "Sun Valley, ID", lat: 43.5044, lon: -114.2956 },
  { code: "HYA", icao: "KHYA", name: "Barnstable Municipal Airport", city: "Hyannis, MA", lat: 41.6693, lon: -70.2804 },
  { code: "PWK", icao: "KPWK", name: "Chicago Executive Airport", city: "Chicago, IL", lat: 42.1142, lon: -87.9015 },
  { code: "FXE", icao: "KFXE", name: "Fort Lauderdale Executive", city: "Fort Lauderdale, FL", lat: 26.1973, lon: -80.1707 },
  { code: "PDK", icao: "KPDK", name: "DeKalb-Peachtree Airport", city: "Atlanta, GA", lat: 33.8756, lon: -84.3020 },
  { code: "ADS", icao: "KADS", name: "Addison Airport", city: "Dallas, TX", lat: 32.9686, lon: -96.8364 },
  { code: "SGR", icao: "KSGR", name: "Sugar Land Regional Airport", city: "Houston, TX", lat: 29.6223, lon: -95.6565 },
  { code: "BFI", icao: "KBFI", name: "Boeing Field/King County International", city: "Seattle, WA", lat: 47.5300, lon: -122.3019 },
  { code: "RNO", icao: "KRNO", name: "Reno-Tahoe International", city: "Reno, NV", lat: 39.4991, lon: -119.7681 },
  { code: "ABQ", icao: "KABQ", name: "Albuquerque International Sunport", city: "Albuquerque, NM", lat: 35.0402, lon: -106.6094 },

  // ─── United States Territories ─────────────────────────────────────────
  { code: "SJU", icao: "TJSJ", name: "Luis Munoz Marin International", city: "San Juan, PR", lat: 18.4394, lon: -66.0018 },
  { code: "STT", icao: "TIST", name: "Cyril E. King Airport", city: "St. Thomas, USVI", lat: 18.3373, lon: -64.9734 },
  { code: "STX", icao: "TISX", name: "Henry E. Rohlsen Airport", city: "St. Croix, USVI", lat: 17.7019, lon: -64.7986 },

  // ─── Canada ────────────────────────────────────────────────────────────
  { code: "YYZ", icao: "CYYZ", name: "Toronto Pearson International", city: "Toronto, Canada", lat: 43.6777, lon: -79.6248 },
  { code: "YVR", icao: "CYVR", name: "Vancouver International", city: "Vancouver, Canada", lat: 49.1967, lon: -123.1815 },
  { code: "YUL", icao: "CYUL", name: "Montreal-Trudeau International", city: "Montreal, Canada", lat: 45.4706, lon: -73.7408 },
  { code: "YYC", icao: "CYYC", name: "Calgary International", city: "Calgary, Canada", lat: 51.1215, lon: -114.0076 },
  { code: "YOW", icao: "CYOW", name: "Ottawa Macdonald-Cartier International", city: "Ottawa, Canada", lat: 45.3225, lon: -75.6692 },
  { code: "YEG", icao: "CYEG", name: "Edmonton International", city: "Edmonton, Canada", lat: 53.3097, lon: -113.5800 },
  { code: "YHZ", icao: "CYHZ", name: "Halifax Stanfield International", city: "Halifax, Canada", lat: 44.8808, lon: -63.5086 },
  { code: "YWG", icao: "CYWG", name: "Winnipeg James Armstrong Richardson International", city: "Winnipeg, Canada", lat: 49.9100, lon: -97.2399 },

  // ─── Mexico ────────────────────────────────────────────────────────────
  { code: "MEX", icao: "MMMX", name: "Mexico City International", city: "Mexico City, Mexico", lat: 19.4363, lon: -99.0721 },
  { code: "CUN", icao: "MMUN", name: "Cancun International", city: "Cancun, Mexico", lat: 21.0365, lon: -86.8771 },
  { code: "SJD", icao: "MMSD", name: "Los Cabos International", city: "San Jose del Cabo, Mexico", lat: 23.1518, lon: -109.7215 },
  { code: "PVR", icao: "MMPR", name: "Licenciado Gustavo Diaz Ordaz International", city: "Puerto Vallarta, Mexico", lat: 20.6801, lon: -105.2544 },
  { code: "GDL", icao: "MMGL", name: "Miguel Hidalgo y Costilla International", city: "Guadalajara, Mexico", lat: 20.5218, lon: -103.3113 },
  { code: "MTY", icao: "MMMY", name: "General Mariano Escobedo International", city: "Monterrey, Mexico", lat: 25.7785, lon: -100.1069 },

  // ─── Caribbean ─────────────────────────────────────────────────────────
  { code: "NAS", icao: "MYNN", name: "Lynden Pindling International", city: "Nassau, Bahamas", lat: 25.0390, lon: -77.4662 },
  { code: "MBJ", icao: "MKJS", name: "Sangster International", city: "Montego Bay, Jamaica", lat: 18.5037, lon: -77.9134 },
  { code: "KIN", icao: "MKJP", name: "Norman Manley International", city: "Kingston, Jamaica", lat: 17.9357, lon: -76.7875 },
  { code: "PUJ", icao: "MDPC", name: "Punta Cana International", city: "Punta Cana, DR", lat: 18.5674, lon: -68.3634 },
  { code: "SDQ", icao: "MDSD", name: "Las Americas International", city: "Santo Domingo, DR", lat: 18.4297, lon: -69.6689 },
  { code: "SXM", icao: "TNCM", name: "Princess Juliana International", city: "St. Maarten", lat: 18.0410, lon: -63.1089 },
  { code: "AUA", icao: "TNCA", name: "Queen Beatrix International", city: "Aruba", lat: 12.5014, lon: -70.0152 },
  { code: "POS", icao: "TTPP", name: "Piarco International", city: "Port of Spain, Trinidad", lat: 10.5953, lon: -61.3372 },
  { code: "BGI", icao: "TBPB", name: "Grantley Adams International", city: "Bridgetown, Barbados", lat: 13.0746, lon: -59.4925 },
  { code: "GCM", icao: "MWCR", name: "Owen Roberts International", city: "Grand Cayman", lat: 19.2928, lon: -81.3577 },
  { code: "HAV", icao: "MUHA", name: "Jose Marti International", city: "Havana, Cuba", lat: 22.9892, lon: -82.4091 },
  { code: "BDA", icao: "TXKF", name: "L.F. Wade International", city: "Bermuda", lat: 32.3640, lon: -64.6787 },
  { code: "TAB", icao: "TTCP", name: "A.N.R. Robinson International", city: "Tobago", lat: 11.1497, lon: -60.8322 },
  { code: "TCA", icao: "MBGT", name: "JAGS McCartney International", city: "Grand Turk, TCI", lat: 21.4445, lon: -71.1423 },

  // ─── Central America ───────────────────────────────────────────────────
  { code: "PTY", icao: "MPTO", name: "Tocumen International", city: "Panama City, Panama", lat: 9.0714, lon: -79.3835 },
  { code: "SJO", icao: "MROC", name: "Juan Santamaria International", city: "San Jose, Costa Rica", lat: 9.9939, lon: -84.2088 },
  { code: "BZE", icao: "MZBZ", name: "Philip S.W. Goldson International", city: "Belize City, Belize", lat: 17.5391, lon: -88.3082 },
  { code: "GUA", icao: "MGGT", name: "La Aurora International", city: "Guatemala City, Guatemala", lat: 14.5833, lon: -90.5275 },

  // ─── South America ─────────────────────────────────────────────────────
  { code: "GRU", icao: "SBGR", name: "Guarulhos International", city: "Sao Paulo, Brazil", lat: -23.4356, lon: -46.4731 },
  { code: "GIG", icao: "SBGL", name: "Galeao International", city: "Rio de Janeiro, Brazil", lat: -22.8100, lon: -43.2506 },
  { code: "EZE", icao: "SAEZ", name: "Ministro Pistarini International", city: "Buenos Aires, Argentina", lat: -34.8222, lon: -58.5358 },
  { code: "SCL", icao: "SCEL", name: "Comodoro Arturo Merino Benitez", city: "Santiago, Chile", lat: -33.3930, lon: -70.7858 },
  { code: "BOG", icao: "SKBO", name: "El Dorado International", city: "Bogota, Colombia", lat: 4.7016, lon: -74.1469 },
  { code: "LIM", icao: "SPJC", name: "Jorge Chavez International", city: "Lima, Peru", lat: -12.0219, lon: -77.1143 },
  { code: "UIO", icao: "SEQM", name: "Mariscal Sucre International", city: "Quito, Ecuador", lat: -0.1292, lon: -78.3575 },
  { code: "CCS", icao: "SVMI", name: "Simon Bolivar International", city: "Caracas, Venezuela", lat: 10.6012, lon: -66.9913 },
  { code: "MVD", icao: "SUMU", name: "Carrasco International", city: "Montevideo, Uruguay", lat: -34.8384, lon: -56.0308 },
  { code: "CTG", icao: "SKCG", name: "Rafael Nunez International", city: "Cartagena, Colombia", lat: 10.4424, lon: -75.5130 },

  // ─── United Kingdom & Ireland ──────────────────────────────────────────
  { code: "LHR", icao: "EGLL", name: "London Heathrow", city: "London, UK", lat: 51.4700, lon: -0.4543 },
  { code: "LGW", icao: "EGKK", name: "London Gatwick", city: "London, UK", lat: 51.1537, lon: -0.1821 },
  { code: "LTN", icao: "EGGW", name: "London Luton", city: "London, UK", lat: 51.8747, lon: -0.3684 },
  { code: "STN", icao: "EGSS", name: "London Stansted", city: "London, UK", lat: 51.8860, lon: 0.2389 },
  { code: "LCY", icao: "EGLC", name: "London City Airport", city: "London, UK", lat: 51.5053, lon: 0.0553 },
  { code: "BQH", icao: "EGKB", name: "Biggin Hill Airport", city: "London, UK", lat: 51.3308, lon: 0.0325 },
  { code: "FAB", icao: "EGLF", name: "Farnborough Airport", city: "London, UK", lat: 51.2758, lon: -0.7764 },
  { code: "MAN", icao: "EGCC", name: "Manchester Airport", city: "Manchester, UK", lat: 53.3537, lon: -2.2750 },
  { code: "EDI", icao: "EGPH", name: "Edinburgh Airport", city: "Edinburgh, UK", lat: 55.9500, lon: -3.3725 },
  { code: "DUB", icao: "EIDW", name: "Dublin Airport", city: "Dublin, Ireland", lat: 53.4264, lon: -6.2499 },

  // ─── Western Europe ────────────────────────────────────────────────────
  { code: "CDG", icao: "LFPG", name: "Charles de Gaulle", city: "Paris, France", lat: 49.0097, lon: 2.5479 },
  { code: "LBG", icao: "LFPB", name: "Paris Le Bourget", city: "Paris, France", lat: 48.9694, lon: 2.4414 },
  { code: "ORY", icao: "LFPO", name: "Paris Orly", city: "Paris, France", lat: 48.7233, lon: 2.3794 },
  { code: "NCE", icao: "LFMN", name: "Nice Cote d'Azur", city: "Nice, France", lat: 43.6584, lon: 7.2159 },
  { code: "FRA", icao: "EDDF", name: "Frankfurt Airport", city: "Frankfurt, Germany", lat: 50.0379, lon: 8.5622 },
  { code: "MUC", icao: "EDDM", name: "Munich Airport", city: "Munich, Germany", lat: 48.3537, lon: 11.7750 },
  { code: "TXL", icao: "EDDT", name: "Berlin Brandenburg", city: "Berlin, Germany", lat: 52.3667, lon: 13.5033 },
  { code: "AMS", icao: "EHAM", name: "Amsterdam Schiphol", city: "Amsterdam, Netherlands", lat: 52.3105, lon: 4.7683 },
  { code: "BRU", icao: "EBBR", name: "Brussels Airport", city: "Brussels, Belgium", lat: 50.9014, lon: 4.4844 },
  { code: "ZRH", icao: "LSZH", name: "Zurich Airport", city: "Zurich, Switzerland", lat: 47.4647, lon: 8.5492 },
  { code: "GVA", icao: "LSGG", name: "Geneva Airport", city: "Geneva, Switzerland", lat: 46.2381, lon: 6.1089 },
  { code: "VIE", icao: "LOWW", name: "Vienna International", city: "Vienna, Austria", lat: 48.1103, lon: 16.5697 },
  { code: "CPH", icao: "EKCH", name: "Copenhagen Airport", city: "Copenhagen, Denmark", lat: 55.6180, lon: 12.6561 },
  { code: "OSL", icao: "ENGM", name: "Oslo Gardermoen", city: "Oslo, Norway", lat: 60.1939, lon: 11.1004 },
  { code: "ARN", icao: "ESSA", name: "Stockholm Arlanda", city: "Stockholm, Sweden", lat: 59.6519, lon: 17.9186 },
  { code: "HEL", icao: "EFHK", name: "Helsinki-Vantaa", city: "Helsinki, Finland", lat: 60.3172, lon: 24.9633 },
  { code: "LIS", icao: "LPPT", name: "Lisbon Portela", city: "Lisbon, Portugal", lat: 38.7813, lon: -9.1359 },

  // ─── Southern Europe ───────────────────────────────────────────────────
  { code: "FCO", icao: "LIRF", name: "Leonardo da Vinci International", city: "Rome, Italy", lat: 41.8003, lon: 12.2389 },
  { code: "MXP", icao: "LIMC", name: "Milan Malpensa", city: "Milan, Italy", lat: 45.6306, lon: 8.7281 },
  { code: "LIN", icao: "LIML", name: "Milan Linate", city: "Milan, Italy", lat: 45.4456, lon: 9.2778 },
  { code: "BCN", icao: "LEBL", name: "Barcelona El Prat", city: "Barcelona, Spain", lat: 41.2971, lon: 2.0785 },
  { code: "MAD", icao: "LEMD", name: "Adolfo Suarez Madrid-Barajas", city: "Madrid, Spain", lat: 40.4983, lon: -3.5676 },
  { code: "AGP", icao: "LEMG", name: "Malaga-Costa del Sol", city: "Malaga, Spain", lat: 36.6749, lon: -4.4991 },
  { code: "IBZ", icao: "LEIB", name: "Ibiza Airport", city: "Ibiza, Spain", lat: 38.8729, lon: 1.3731 },
  { code: "PMI", icao: "LEPA", name: "Palma de Mallorca Airport", city: "Mallorca, Spain", lat: 39.5517, lon: 2.7388 },
  { code: "ATH", icao: "LGAV", name: "Athens International", city: "Athens, Greece", lat: 37.9364, lon: 23.9445 },
  { code: "JTR", icao: "LGSR", name: "Santorini Airport", city: "Santorini, Greece", lat: 36.3992, lon: 25.4793 },
  { code: "MKN", icao: "LGMK", name: "Mykonos Airport", city: "Mykonos, Greece", lat: 37.4351, lon: 25.3481 },

  // ─── Eastern Europe ────────────────────────────────────────────────────
  { code: "IST", icao: "LTFM", name: "Istanbul Airport", city: "Istanbul, Turkey", lat: 41.2753, lon: 28.7519 },
  { code: "WAW", icao: "EPWA", name: "Warsaw Chopin Airport", city: "Warsaw, Poland", lat: 52.1657, lon: 20.9671 },
  { code: "PRG", icao: "LKPR", name: "Vaclav Havel Airport Prague", city: "Prague, Czech Republic", lat: 50.1008, lon: 14.2600 },
  { code: "BUD", icao: "LHBP", name: "Budapest Ferenc Liszt International", city: "Budapest, Hungary", lat: 47.4369, lon: 19.2556 },
  { code: "SVO", icao: "UUEE", name: "Sheremetyevo International", city: "Moscow, Russia", lat: 55.9726, lon: 37.4146 },

  // ─── Middle East ───────────────────────────────────────────────────────
  { code: "DXB", icao: "OMDB", name: "Dubai International", city: "Dubai, UAE", lat: 25.2532, lon: 55.3657 },
  { code: "DWC", icao: "OMDW", name: "Al Maktoum International", city: "Dubai, UAE", lat: 24.8960, lon: 55.1614 },
  { code: "AUH", icao: "OMAA", name: "Abu Dhabi International", city: "Abu Dhabi, UAE", lat: 24.4330, lon: 54.6511 },
  { code: "DOH", icao: "OTHH", name: "Hamad International", city: "Doha, Qatar", lat: 25.2731, lon: 51.6081 },
  { code: "RUH", icao: "OERK", name: "King Khalid International", city: "Riyadh, Saudi Arabia", lat: 24.9578, lon: 46.6989 },
  { code: "JED", icao: "OEJN", name: "King Abdulaziz International", city: "Jeddah, Saudi Arabia", lat: 21.6796, lon: 39.1565 },
  { code: "BAH", icao: "OBBI", name: "Bahrain International", city: "Bahrain", lat: 26.2708, lon: 50.6336 },
  { code: "TLV", icao: "LLBG", name: "Ben Gurion International", city: "Tel Aviv, Israel", lat: 32.0114, lon: 34.8867 },
  { code: "AMM", icao: "OJAI", name: "Queen Alia International", city: "Amman, Jordan", lat: 31.7226, lon: 35.9932 },

  // ─── Africa ────────────────────────────────────────────────────────────
  { code: "JNB", icao: "FAOR", name: "O.R. Tambo International", city: "Johannesburg, South Africa", lat: -26.1392, lon: 28.2460 },
  { code: "CPT", icao: "FACT", name: "Cape Town International", city: "Cape Town, South Africa", lat: -33.9649, lon: 18.6017 },
  { code: "CAI", icao: "HECA", name: "Cairo International", city: "Cairo, Egypt", lat: 30.1219, lon: 31.4056 },
  { code: "CMN", icao: "GMMN", name: "Mohammed V International", city: "Casablanca, Morocco", lat: 33.3675, lon: -7.5900 },
  { code: "NBO", icao: "HKJK", name: "Jomo Kenyatta International", city: "Nairobi, Kenya", lat: -1.3192, lon: 36.9278 },
  { code: "LOS", icao: "DNMM", name: "Murtala Muhammed International", city: "Lagos, Nigeria", lat: 6.5774, lon: 3.3213 },
  { code: "ADD", icao: "HAAB", name: "Bole International", city: "Addis Ababa, Ethiopia", lat: 8.9779, lon: 38.7993 },
  { code: "DSS", icao: "GOBD", name: "Blaise Diagne International", city: "Dakar, Senegal", lat: 14.6700, lon: -17.0733 },

  // ─── Asia — East ───────────────────────────────────────────────────────
  { code: "NRT", icao: "RJAA", name: "Narita International", city: "Tokyo, Japan", lat: 35.7720, lon: 140.3929 },
  { code: "HND", icao: "RJTT", name: "Haneda Airport", city: "Tokyo, Japan", lat: 35.5494, lon: 139.7798 },
  { code: "KIX", icao: "RJBB", name: "Kansai International", city: "Osaka, Japan", lat: 34.4347, lon: 135.2441 },
  { code: "ICN", icao: "RKSI", name: "Incheon International", city: "Seoul, South Korea", lat: 37.4602, lon: 126.4407 },
  { code: "PEK", icao: "ZBAA", name: "Beijing Capital International", city: "Beijing, China", lat: 40.0799, lon: 116.6031 },
  { code: "PVG", icao: "ZSPD", name: "Shanghai Pudong International", city: "Shanghai, China", lat: 31.1443, lon: 121.8083 },
  { code: "HKG", icao: "VHHH", name: "Hong Kong International", city: "Hong Kong", lat: 22.3080, lon: 113.9185 },
  { code: "TPE", icao: "RCTP", name: "Taiwan Taoyuan International", city: "Taipei, Taiwan", lat: 25.0777, lon: 121.2330 },

  // ─── Asia — Southeast ──────────────────────────────────────────────────
  { code: "SIN", icao: "WSSS", name: "Changi Airport", city: "Singapore", lat: 1.3644, lon: 103.9915 },
  { code: "BKK", icao: "VTBS", name: "Suvarnabhumi Airport", city: "Bangkok, Thailand", lat: 13.6900, lon: 100.7501 },
  { code: "KUL", icao: "WMKK", name: "Kuala Lumpur International", city: "Kuala Lumpur, Malaysia", lat: 2.7456, lon: 101.7099 },
  { code: "CGK", icao: "WIII", name: "Soekarno-Hatta International", city: "Jakarta, Indonesia", lat: -6.1256, lon: 106.6559 },
  { code: "DPS", icao: "WADD", name: "Ngurah Rai International", city: "Bali, Indonesia", lat: -8.7482, lon: 115.1672 },
  { code: "MNL", icao: "RPLL", name: "Ninoy Aquino International", city: "Manila, Philippines", lat: 14.5086, lon: 121.0198 },
  { code: "SGN", icao: "VVTS", name: "Tan Son Nhat International", city: "Ho Chi Minh City, Vietnam", lat: 10.8188, lon: 106.6520 },

  // ─── Asia — South ──────────────────────────────────────────────────────
  { code: "DEL", icao: "VIDP", name: "Indira Gandhi International", city: "New Delhi, India", lat: 28.5562, lon: 77.1000 },
  { code: "BOM", icao: "VABB", name: "Chhatrapati Shivaji Maharaj International", city: "Mumbai, India", lat: 19.0896, lon: 72.8656 },
  { code: "BLR", icao: "VOBL", name: "Kempegowda International", city: "Bangalore, India", lat: 13.1986, lon: 77.7066 },
  { code: "CMB", icao: "VCBI", name: "Bandaranaike International", city: "Colombo, Sri Lanka", lat: 7.1808, lon: 79.8843 },
  { code: "MLE", icao: "VRMM", name: "Velana International", city: "Male, Maldives", lat: 4.1918, lon: 73.5290 },

  // ─── Oceania ───────────────────────────────────────────────────────────
  { code: "SYD", icao: "YSSY", name: "Sydney Kingsford Smith", city: "Sydney, Australia", lat: -33.9461, lon: 151.1772 },
  { code: "MEL", icao: "YMML", name: "Melbourne Tullamarine", city: "Melbourne, Australia", lat: -37.6690, lon: 144.8410 },
  { code: "BNE", icao: "YBBN", name: "Brisbane Airport", city: "Brisbane, Australia", lat: -27.3842, lon: 153.1175 },
  { code: "AKL", icao: "NZAA", name: "Auckland Airport", city: "Auckland, New Zealand", lat: -37.0082, lon: 174.7850 },
  { code: "PPT", icao: "NTAA", name: "Tahiti Faaa International", city: "Papeete, French Polynesia", lat: -17.5569, lon: -149.6114 },
  { code: "NAN", icao: "NFFN", name: "Nadi International", city: "Nadi, Fiji", lat: -17.7554, lon: 177.4431 },

  // ─── Iceland / Greenland / Atlantic ────────────────────────────────────
  { code: "KEF", icao: "BIKF", name: "Keflavik International", city: "Reykjavik, Iceland", lat: 63.9850, lon: -22.6056 },
  { code: "SFJ", icao: "BGSF", name: "Kangerlussuaq Airport", city: "Kangerlussuaq, Greenland", lat: 67.0122, lon: -50.7116 },
  { code: "TER", icao: "LPLA", name: "Lajes Field", city: "Azores, Portugal", lat: 38.7618, lon: -27.0908 },
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
