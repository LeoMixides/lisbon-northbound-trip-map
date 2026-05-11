const categories = {
  all: { label: "All", color: "#263238" },
  stay: { label: "Sleep", color: "#2b745e" },
  eat: { label: "Eat", color: "#d75637" },
  night: { label: "Nightlife", color: "#82529a" },
  activity: { label: "Do", color: "#1a7d94" },
};

const sectionLabels = [
  ["stay", "Accommodation"],
  ["eat", "Food"],
  ["night", "Bars and clubs"],
  ["activity", "Activities"],
];

const baseCountries = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Portugal" },
      geometry: {
        type: "Polygon",
        coordinates: [[[-9.034818, 41.880571], [-8.671946, 42.134689], [-8.263857, 42.280469], [-8.013175, 41.790886], [-7.422513, 41.792075], [-7.251309, 41.918346], [-6.668606, 41.883387], [-6.389088, 41.381815], [-6.851127, 41.111083], [-6.86402, 40.330872], [-7.026413, 40.184524], [-7.066592, 39.711892], [-7.498632, 39.629571], [-7.098037, 39.030073], [-7.374092, 38.373059], [-7.029281, 38.075764], [-7.166508, 37.803894], [-7.537105, 37.428904], [-7.453726, 37.097788], [-7.855613, 36.838269], [-8.382816, 36.97888], [-8.898857, 36.868809], [-8.746101, 37.651346], [-8.839998, 38.266243], [-9.287464, 38.358486], [-9.526571, 38.737429], [-9.446989, 39.392066], [-9.048305, 39.755093], [-8.977353, 40.159306], [-8.768684, 40.760639], [-8.790853, 41.184334], [-8.990789, 41.543459], [-9.034818, 41.880571]]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Spain" },
      geometry: {
        type: "Polygon",
        coordinates: [[[-7.453726, 37.097788], [-7.537105, 37.428904], [-7.166508, 37.803894], [-7.029281, 38.075764], [-7.374092, 38.373059], [-7.098037, 39.030073], [-7.498632, 39.629571], [-7.066592, 39.711892], [-7.026413, 40.184524], [-6.86402, 40.330872], [-6.851127, 41.111083], [-6.389088, 41.381815], [-6.668606, 41.883387], [-7.251309, 41.918346], [-7.422513, 41.792075], [-8.013175, 41.790886], [-8.263857, 42.280469], [-8.671946, 42.134689], [-9.034818, 41.880571], [-8.984433, 42.592775], [-9.392884, 43.026625], [-7.97819, 43.748338], [-6.754492, 43.567909], [-5.411886, 43.57424], [-4.347843, 43.403449], [-3.517532, 43.455901], [-1.901351, 43.422802], [-1.502771, 43.034014], [0.338047, 42.579546], [0.701591, 42.795734], [1.826793, 42.343385], [2.985999, 42.473015], [3.039484, 41.89212], [2.091842, 41.226089], [0.810525, 41.014732], [0.721331, 40.678318], [0.106692, 40.123934], [-0.278711, 39.309978], [0.111291, 38.738514], [-0.467124, 38.292366], [-0.683389, 37.642354], [-1.438382, 37.443064], [-2.146453, 36.674144], [-3.415781, 36.6589], [-4.368901, 36.677839], [-4.995219, 36.324708], [-5.37716, 35.94685], [-5.866432, 36.029817], [-6.236694, 36.367677], [-6.520191, 36.942913], [-7.453726, 37.097788]]],
      },
    },
    {
      type: "Feature",
      properties: { name: "France" },
      geometry: {
        type: "Polygon",
        coordinates: [[[6.18632, 49.463803], [6.65823, 49.201958], [8.099279, 49.017784], [7.593676, 48.333019], [7.466759, 47.620582], [7.192202, 47.449766], [6.736571, 47.541801], [6.768714, 47.287708], [6.037389, 46.725779], [6.022609, 46.27299], [6.5001, 46.429673], [6.843593, 45.991147], [6.802355, 45.70858], [7.096652, 45.333099], [6.749955, 45.028518], [7.007562, 44.254767], [7.549596, 44.127901], [7.435185, 43.693845], [6.529245, 43.128892], [4.556963, 43.399651], [3.100411, 43.075201], [2.985999, 42.473015], [1.826793, 42.343385], [0.701591, 42.795734], [0.338047, 42.579546], [-1.502771, 43.034014], [-1.901351, 43.422802], [-1.384225, 44.02261], [-1.193798, 46.014918], [-2.225724, 47.064363], [-2.963276, 47.570327], [-4.491555, 47.954954], [-4.59235, 48.68416], [-3.295814, 48.901692], [-1.616511, 48.644421], [-1.933494, 49.776342], [-0.989469, 49.347376], [1.338761, 50.127173], [1.639001, 50.946606], [2.513573, 51.148506], [2.658422, 50.796848], [3.123252, 50.780363], [3.588184, 50.378992], [4.286023, 49.907497], [4.799222, 49.985373], [5.674052, 49.529484], [5.897759, 49.442667], [6.18632, 49.463803]]],
      },
    },
  ],
};

const cities = {
  lisbon: city(
    "Lisbon",
    "Portugal",
    38.7223,
    -9.1393,
    12,
    "Start with big-city food, viewpoints, hostel dinners, Bairro Alto, Cais do Sodre, and one beach or Sintra day.",
    "Baixa/Chiado for walkability; Cais do Sodre if nightlife and the Cascais train matter most.",
    "Book a social hostel with group dinners. Avoid tiny boutique hostels for a ten-person group and confirm group rules direct.",
    [
      p("home-lisbon", "Home Lisbon Hostel", "stay", 38.7105, -9.1371, "Central Baixa hostel with dinners and easy first-night logistics."),
      p("yes-lisbon", "Yes! Lisbon Hostel", "stay", 38.7099, -9.1396, "Social budget hostel close to Praca do Comercio."),
      p("independente", "The Independente", "stay", 38.715, -9.1445, "Cooler Bairro Alto / Principe Real base near bars."),
      p("ramiro", "Cervejaria Ramiro", "eat", 38.7209, -9.1357, "Seafood institution for one blowout shared meal."),
      p("o-trevo", "O Trevo", "eat", 38.7109, -9.1414, "Classic cheap bifana stop in Chiado."),
      p("ze-mouraria", "Ze da Mouraria", "eat", 38.7164, -9.1346, "Huge Portuguese plates and strong group value."),
      p("timeout-market", "Time Out Market", "eat", 38.7075, -9.1458, "Easy food hall when ten people want different food."),
      p("bairro-alto", "Bairro Alto", "night", 38.7134, -9.1442, "Dense cheap-bar zone for the first crawl."),
      p("pink-street", "Pink Street / Cais do Sodre", "night", 38.7072, -9.143, "Late-night bar strip close to the river."),
      p("musicbox", "Musicbox Lisboa", "night", 38.7071, -9.1436, "Live music and club nights in Cais do Sodre."),
      p("lux", "Lux Fragil", "night", 38.7131, -9.123, "Lisbon's heavyweight club; pricier but memorable."),
      p("sintra", "Sintra day trip", "activity", 38.7876, -9.3906, "Palaces, hills and cooler air; go early in August."),
      p("caparica", "Costa da Caparica", "activity", 38.6445, -9.2365, "Easy beach escape south of Lisbon."),
      p("alfama", "Alfama viewpoints", "activity", 38.7127, -9.1294, "Low-cost wander through viewpoints and old lanes."),
    ],
  ),
  ericeira: city(
    "Ericeira",
    "Portugal",
    38.9637,
    -9.4156,
    13,
    "Whitewashed surf town, clifftop beaches, boards, seafood, sunset beers and a slower rhythm after Lisbon.",
    "Town centre for food and bars; Ribeira d'Ilhas side if surfing is the whole point.",
    "Prioritise surf hostels with kitchens and lesson packages. Two nights is enough unless the group wants a full surf camp.",
    [
      p("surfers-den", "Surfer's Den Ericeira", "stay", 38.9631, -9.4138, "Social surf hostel close to the centre."),
      p("wot-ericeira", "WOT Ericeira Surf", "stay", 38.9587, -9.4168, "Larger surf-hostel setup with group-friendly dorms."),
      p("laneez", "Laneez Ericeira Surf House", "stay", 38.9599, -9.4167, "Sea-view surf-house feel, often pricier."),
      p("tik-tapas", "Tik Tapas", "eat", 38.9626, -9.4162, "Reliable Portuguese dinner spot; book ahead for ten."),
      p("sunset-bamboo", "Sunset Bamboo", "eat", 38.963, -9.4147, "Easy brunch/cafe reset meal."),
      p("mar-latas", "Mar das Latas", "eat", 38.9651, -9.4166, "Wine and seafood-leaning dinner."),
      p("boardriders", "Boardriders Ericeira", "night", 38.9736, -9.4185, "Surf-shop and bar crowd for beers."),
      p("tubo", "Tubo Ericeira Bar", "night", 38.9625, -9.4167, "Central late drinks in town."),
      p("discoteca-oureco", "Oureco", "night", 38.9617, -9.4163, "Late-night local club option when the town is busy."),
      p("pescadores", "Praia dos Pescadores", "activity", 38.963, -9.4175, "Town beach for an arrival swim."),
      p("ribeira", "Ribeira d'Ilhas", "activity", 38.9875, -9.4185, "Famous surf beach and lesson base."),
      p("foz-lizandro", "Foz do Lizandro", "activity", 38.9428, -9.4167, "Wide beach and beach bars for a group afternoon."),
    ],
  ),
  peniche: city(
    "Peniche / Baleal",
    "Portugal",
    39.3699,
    -9.3378,
    12,
    "Best-value surf base on the route. Baleal gives the beach life; Peniche town gives cheaper meals and buses.",
    "Baleal/Ferrel for beach and surf; Peniche centre if transport and cheaper food are more important.",
    "If several people want lessons, book a surf hostel/package rather than piecing it together on arrival.",
    [
      p("baleal-surf-camp", "Baleal Surf Camp", "stay", 39.3722, -9.3377, "Classic Baleal surf base with lesson packages."),
      p("captains-log", "Captain's Log House", "stay", 39.371, -9.3362, "Simple surf-house option near the beach."),
      p("ferrel-surf-house", "Ferrel Surf House", "stay", 39.3635, -9.3184, "Ferrel village base with cheaper feel."),
      p("ganhao", "Taberna do Ganhao", "eat", 39.365, -9.3192, "Strong Ferrel dinner option near Baleal."),
      p("tasca-joel", "Tasca do Joel", "eat", 39.3548, -9.382, "Peniche seafood classic; book for a group."),
      p("surfers-lodge", "Surfers Lodge Restaurant", "eat", 39.3715, -9.337, "Practical group dinner near Baleal."),
      p("bar-bruno", "Bar do Bruno", "night", 39.3714, -9.3385, "Beach-bar staple for sunset and casual drinks."),
      p("danau", "Danau Beach Bar", "night", 39.3718, -9.3378, "Baleal beach drinks after surf."),
      p("xakra", "Xakra Beach Bar", "night", 39.3527, -9.3558, "Beach-bar option toward Supertubos."),
      p("baleal-beach", "Baleal Beach", "activity", 39.3728, -9.3379, "Main swim and surf base."),
      p("supertubos", "Supertubos", "activity", 39.3391, -9.3619, "Famous surf beach; better to watch unless conditions are gentle."),
      p("berlengas", "Berlengas boat trip", "activity", 39.4147, -9.5086, "Island reserve boat day; weather-dependent, book early."),
    ],
  ),
  nazare: city(
    "Nazare",
    "Portugal",
    39.6012,
    -9.0701,
    14,
    "Compact cliff-and-beach stop: big-wave viewpoint, Praia do Norte, seafood, sunset, then move on.",
    "Lower town for beach and food; Sitio for the view and a quieter night.",
    "Small hostel market. For ten people, compare dorms against two basic apartments.",
    [
      p("nazare-hostel", "Nazare Hostel", "stay", 39.6024, -9.0717, "Central dorm option."),
      p("hi-nazare", "HI Nazare", "stay", 39.604, -9.0696, "Budget youth-hostel style fallback."),
      p("lab-hostel", "Lab Hostel Nazare", "stay", 39.6012, -9.0707, "Simple central budget option when available."),
      p("tasquinha", "A Tasquinha", "eat", 39.6014, -9.0712, "Reliable Portuguese seafood spot."),
      p("rosa-ventos", "Rosa dos Ventos", "eat", 39.6016, -9.0714, "Local seafood classic; arrive early."),
      p("taberna-adelia", "Taberna d'Adelia", "eat", 39.599, -9.0713, "Traditional Nazare meal near the front."),
      p("irish-pub-nazare", "Irish Bar Nazare", "night", 39.5994, -9.0732, "Simple late drinks."),
      p("beach-bars-nazare", "Nazare beachfront bars", "night", 39.6004, -9.0733, "Promenade drinks rather than a big club night."),
      p("farol", "Farol da Nazare", "activity", 39.6045, -9.083, "Big-wave lighthouse viewpoint."),
      p("praia-norte", "Praia do Norte", "activity", 39.6062, -9.0807, "Wild Atlantic beach; scenery over swimming."),
      p("sitio", "Sitio / funicular", "activity", 39.604, -9.076, "Cliff-top view over town, best around sunset."),
    ],
  ),
  coimbra: city(
    "Coimbra",
    "Portugal",
    40.2075,
    -8.4265,
    14,
    "The inland exception: historic university, steep lanes, student bars, fado and a different mood from the surf towns.",
    "Alta / Se Velha for atmosphere; Baixa for station access and easier luggage walks.",
    "One night only, so stay central. Do not lose the evening commuting from the edge of town.",
    [
      p("serenata", "Serenata Hostel", "stay", 40.2086, -8.4264, "Best historic-centre fit."),
      p("hi-coimbra", "HI Coimbra", "stay", 40.2137, -8.4136, "Budget youth-hostel fallback."),
      p("ctw-coimbra", "Change The World Hostels Coimbra", "stay", 40.2071, -8.431, "Station-side practical base."),
      p("ze-manel", "Ze Manel dos Ossos", "eat", 40.2075, -8.4305, "Tiny, famous, hearty Portuguese food; queue early."),
      p("tapas-costas", "Tapas nas Costas", "eat", 40.2087, -8.4286, "Central group dinner, more practical for ten."),
      p("praxis", "Praxis", "eat", 40.203, -8.4287, "Beer-hall energy and student-group food."),
      p("quebra-galho", "Quebra-Galho", "night", 40.2085, -8.4269, "Old-town drinks."),
      p("whats-up-doc", "What's Up Doc Bar", "night", 40.2113, -8.4213, "Student-bar zone."),
      p("nb-club", "NB Club Coimbra", "night", 40.2107, -8.421, "Late-night club option; check the night before."),
      p("university", "University of Coimbra", "activity", 40.2075, -8.4257, "The main historic site."),
      p("joanina", "Biblioteca Joanina", "activity", 40.2071, -8.4261, "Baroque library; worth it if budget allows."),
    ],
  ),
  porto: city(
    "Porto",
    "Portugal",
    41.1496,
    -8.6109,
    13,
    "Northern-city payoff: Ribeira, bridges, port cellars, Foz beach, francesinhas and Galerias de Paris nights.",
    "Sao Bento/Aliados for first-timers; Cedofeita if you want cheaper food and bars just outside the core.",
    "Choose a central social hostel. Porto is the best place to recover laundry and admin before Spain.",
    [
      p("passenger", "The Passenger Hostel", "stay", 41.1457, -8.6106, "Inside Sao Bento station; perfect transport location."),
      p("gallery-hostel", "Gallery Hostel Porto", "stay", 41.1517, -8.6174, "Cedofeita/gallery district base."),
      p("onefam-ribeira", "Onefam Ribeira", "stay", 41.1423, -8.6133, "Social backpacker option near the river."),
      p("casa-guedes", "Casa Guedes", "eat", 41.1477, -8.6046, "Pork sandwich institution."),
      p("gazela", "Gazela", "eat", 41.146, -8.6072, "Cachorrinhos; great pre-night snack."),
      p("santiago", "Cafe Santiago", "eat", 41.1477, -8.6055, "Francesinha classic."),
      p("brasao", "Brasao Aliados", "eat", 41.1495, -8.6104, "Bookable francesinha/group meal."),
      p("aduela", "Aduela", "night", 41.1488, -8.6159, "Outdoor drinks near Cedofeita."),
      p("base", "Base Porto", "night", 41.1467, -8.6146, "Garden drinks near Clerigos."),
      p("galerias", "Galerias de Paris", "night", 41.1476, -8.6149, "Backpacker/student nightlife street."),
      p("plano-b", "Plano B", "night", 41.1477, -8.6148, "Central club/live-night option."),
      p("gare", "Gare Porto", "night", 41.1453, -8.6077, "Underground electronic club."),
      p("ribeira", "Ribeira", "activity", 41.1407, -8.6137, "Riverfront classic and bridge walk."),
      p("gaia-cellars", "Gaia port cellars", "activity", 41.1368, -8.6149, "Book one tasting rather than drifting."),
      p("foz", "Foz do Douro", "activity", 41.1511, -8.6784, "Beach and seafront afternoon."),
    ],
  ),
  vigo: city(
    "Vigo / Cies Islands",
    "Spain",
    42.2406,
    -8.7207,
    12,
    "A Galicia coast pivot: cheap seafood, indie nightlife in Churruca, and a ferry day to the Cies Islands if permits line up.",
    "Casco Vello for old-town food; Churruca for bars; stay near the centre or station to keep logistics simple.",
    "Hostel supply is thinner than Porto. For ten people, compare hostels with central budget hotels early.",
    [
      p("kaps-vigo", "Kaps Hostel Vigo", "stay", 42.232, -8.712, "Budget hostel option outside the old core."),
      p("hostel-celta", "Hostel Celta", "stay", 42.237, -8.716, "Simple central budget fallback."),
      p("casco-vello-base", "Casco Vello budget stay", "stay", 42.2402, -8.7242, "Best area if the group wants food and bars walkable."),
      p("o-porton", "O Porton", "eat", 42.2407, -8.7247, "Seafood and Galician plates near the old town."),
      p("taberna-a-pedra", "Taberna A Pedra", "eat", 42.2403, -8.724, "Old-town tapas/seafood area."),
      p("maruja-limon", "Maruja Limon", "eat", 42.2402, -8.721, "Nicer meal option if the group wants one splurge."),
      p("churruca", "Churruca nightlife area", "night", 42.235, -8.719, "Official indie/rock nightlife district."),
      p("la-iguana", "La Iguana Club", "night", 42.236, -8.72, "Live music and club nights in the Churruca orbit."),
      p("arenal-vigo", "Arenal bars", "night", 42.2393, -8.715, "More mainstream pub and club area."),
      p("cies-islands", "Cies Islands ferry day", "activity", 42.222, -8.902, "National park island day; permit and ferry needed in summer."),
      p("samil", "Samil Beach", "activity", 42.214, -8.77, "Big city beach for an easy afternoon."),
      p("monte-castro", "Monte O Castro", "activity", 42.233, -8.724, "Cheap viewpoint walk over the estuary."),
    ],
  ),
  santiago: city(
    "Santiago de Compostela",
    "Spain",
    42.8782,
    -8.5448,
    14,
    "Pilgrim city with serious atmosphere, university energy, Galician food and a compact old town.",
    "Old Town / Rua do Franco for food and walking; stay just outside the core if prices spike.",
    "Albergues and hostels can fill with Camino traffic in August. Book a ten-bed block early.",
    [
      p("seminario-menor", "Albergue Seminario Menor", "stay", 42.877, -8.535, "Large budget albergue with capacity."),
      p("last-stamp", "The Last Stamp", "stay", 42.88, -8.543, "Central hostel near the cathedral."),
      p("loop-inn", "Loop INN Hostel Santiago", "stay", 42.883, -8.541, "Practical budget hostel north of the old town."),
      p("abastos-20", "Abastos 2.0", "eat", 42.879, -8.542, "Market-driven Galician food."),
      p("gato-negro", "O Gato Negro", "eat", 42.879, -8.545, "Classic small tapas bar."),
      p("casa-marcelo", "Casa Marcelo", "eat", 42.88, -8.546, "Splurge pick for the food-obsessed subset."),
      p("franco", "Rua do Franco", "night", 42.879, -8.545, "Tapas, wine and late drinks street near the cathedral."),
      p("momo", "Pub Momo", "night", 42.877, -8.548, "Garden-bar feel and late drinks."),
      p("modus", "Modus Vivendi", "night", 42.879, -8.544, "Old-town bar in a stone cellar."),
      p("cathedral", "Cathedral of Santiago", "activity", 42.8806, -8.5444, "The obvious but essential stop."),
      p("alameda", "Alameda Park", "activity", 42.876, -8.549, "Best cheap viewpoint over the old town."),
      p("mercado-abastos", "Mercado de Abastos", "activity", 42.879, -8.542, "Morning food market and lunch area."),
    ],
  ),
  bilbao: city(
    "Bilbao",
    "Spain",
    43.263,
    -2.935,
    13,
    "A strong northern finish: Guggenheim, old-town pintxos, proper bars and easier onward flights than San Sebastian.",
    "Casco Viejo for pintxos and nightlife; Abando/Ensanche for transport and a cleaner city base.",
    "Bilbao has better group-bed supply than San Sebastian in festival week, so it is a good pressure-release finish.",
    [
      p("latroupe", "Latroupe La Granja", "stay", 43.2605, -2.928, "Modern hostel/budget hotel near Abando."),
      p("quartier", "Quartier Bilbao Hostel", "stay", 43.2565, -2.925, "Casco Viejo hostel close to pintxos."),
      p("poshtel", "Poshtel Bilbao", "stay", 43.2666, -2.927, "Guggenheim-side hostel option."),
      p("ribera-market", "Mercado de la Ribera", "eat", 43.256, -2.925, "Food market and easy group eating."),
      p("gure-toki", "Gure Toki", "eat", 43.259, -2.923, "Plaza Nueva pintxos anchor."),
      p("cafe-iruna", "Cafe Iruna", "eat", 43.262, -2.931, "Classic Bilbao cafe and skewers."),
      p("el-globo", "El Globo", "eat", 43.263, -2.932, "Reliable pintxos in the Ensanche."),
      p("casco-viejo-bilbao", "Casco Viejo bar crawl", "night", 43.257, -2.923, "Officially strong pintxos and bar-hopping area."),
      p("kafe-antzokia", "Kafe Antzokia", "night", 43.261, -2.928, "Live music and late-night venue."),
      p("fever", "Fever Bilbao", "night", 43.284, -2.963, "Big-club option if the group wants a proper late one."),
      p("muelle", "Muelle", "night", 43.266, -2.927, "Electronic and alternative club/bar programming."),
      p("guggenheim", "Guggenheim Bilbao", "activity", 43.2687, -2.934, "City-defining museum and river walk."),
      p("artxanda", "Artxanda funicular", "activity", 43.268, -2.929, "Cheap viewpoint over the city."),
      p("san-mames", "San Mames stadium", "activity", 43.264, -2.949, "Football-stadium stop if fixtures or tours line up."),
    ],
  ),
  biarritz: city(
    "Biarritz",
    "France",
    43.4832,
    -1.5586,
    13,
    "French Basque surf-and-nightlife detour with beaches, Les Halles, sunset drinks and a short hop to San Sebastian.",
    "Les Halles for food and bars; Cote des Basques if surfing is the point; Anglet for cheaper surf-hostel beds.",
    "Biarritz is not the budget route. Use it if the group wants the surf detour and can handle higher hostel prices.",
    [
      p("nami-house", "Nami House", "stay", 43.49, -1.526, "Anglet surf hostel with boards, bikes and dorms."),
      p("surf-hostel-biarritz", "Surf Hostel Biarritz", "stay", 43.479, -1.558, "Surf-focused hostel option near Biarritz."),
      p("garden-utopy", "GARDEN - Utopy Hostel", "stay", 43.492, -1.511, "Cheaper Bayonne/Anglet-side fallback for dorms."),
      p("bar-jean", "Bar Jean", "eat", 43.481, -1.561, "Basque Halles classic; open late and useful for a group."),
      p("bodega-halles", "La Bodega Les Halles", "eat", 43.4812, -1.5612, "Tapas-style sharing plates around Les Halles."),
      p("chistera", "Chistera et Coquillages", "eat", 43.4813, -1.5613, "Fish and seafood opposite Les Halles."),
      p("rdv-halles", "Le Rendez-vous des Halles", "night", 43.4814, -1.5605, "Animated bar, sharing plates and cocktails."),
      p("halles-bars", "Les Halles bar area", "night", 43.481, -1.561, "The obvious Biarritz bar zone."),
      p("duplex", "Duplex Club Biarritz", "night", 43.482, -1.559, "Central club option for a late night."),
      p("cote-basques", "Cote des Basques", "activity", 43.476, -1.568, "Classic surf beach and sunset spot."),
      p("grande-plage", "Grande Plage", "activity", 43.484, -1.557, "Central beach and promenade."),
      p("rocher-vierge", "Rocher de la Vierge", "activity", 43.481, -1.569, "Rocky viewpoint walk over the Atlantic."),
    ],
  ),
  sansebastian: city(
    "San Sebastian",
    "Spain",
    43.3183,
    -1.9812,
    13,
    "The must-visit finale: La Concha, Zurriola surf, Old Town pintxos and Semana Grande fireworks across the bay.",
    "Old Town for pintxos; Gros for surf and slightly better hostel value; Amara if festival prices force it.",
    "Book this first. You are there during Semana Grande, officially 8-15 August 2026.",
    [
      p("koba", "Koba Hostel", "stay", 43.3211, -1.9743, "Gros hostel near Zurriola; best fit if available."),
      p("room-city", "A Room In The City", "stay", 43.3172, -1.9845, "Central hostel-style option; book very early."),
      p("balea", "Balea Hostel", "stay", 43.3027, -2.005, "Budget fallback outside the core."),
      p("borda-berri", "Borda Berri", "eat", 43.3231, -1.9853, "Top Old Town pintxo stop; split the group."),
      p("cuchara", "La Cuchara de San Telmo", "eat", 43.324, -1.9857, "Famous modern pintxos; go early."),
      p("gandarias", "Gandarias", "eat", 43.3237, -1.9853, "Reliable pintxos and grilled meat."),
      p("bar-nestor", "Bar Nestor", "eat", 43.3234, -1.9863, "Tortilla and steak legend; hard for ten."),
      p("la-vina", "La Vina", "eat", 43.3242, -1.9842, "Burnt cheesecake stop on a pintxo crawl."),
      p("atari", "Atari Gastroteka", "night", 43.3238, -1.9849, "Old Town drinks and pintxos."),
      p("gros-bars", "Gros / Zabaleta bar zone", "night", 43.3218, -1.9743, "Younger surf-side bar scene."),
      p("dabadaba", "Dabadaba", "night", 43.318, -1.9712, "Concerts and DJ nights; check listings."),
      p("bataplan", "Bataplan", "night", 43.3154, -1.989, "Beachfront commercial club."),
      p("la-concha", "La Concha", "activity", 43.3164, -1.9868, "Iconic bay swim and recovery spot."),
      p("zurriola", "Zurriola Beach", "activity", 43.3262, -1.9732, "Surf beach in Gros."),
      p("fireworks", "Semana Grande fireworks", "activity", 43.3173, -1.9874, "Festival fireworks over La Concha; plan dinner around it."),
    ],
  ),
};

const routes = [
  {
    id: "classic",
    name: "Option 1 - Surf coast plus Porto",
    badge: "Recommended",
    meta: "14 nights, best balance",
    why: "The strongest all-rounder for a budget group: Lisbon, three Atlantic coast stops, one student-city reset, Porto, then San Sebastian for Semana Grande.",
    stops: [
      stop("lisbon", "Sat 1 Aug - Tue 4 Aug", 3),
      stop("ericeira", "Tue 4 Aug - Thu 6 Aug", 2),
      stop("peniche", "Thu 6 Aug - Sat 8 Aug", 2),
      stop("nazare", "Sat 8 Aug - Sun 9 Aug", 1),
      stop("coimbra", "Sun 9 Aug - Mon 10 Aug", 1),
      stop("porto", "Mon 10 Aug - Thu 13 Aug", 3),
      stop("sansebastian", "Thu 13 Aug - Sat 15 Aug", 2),
    ],
    transport: [
      leg("Lisbon to Ericeira", "Coach", "Coach is the budget default; car is only worth it if you hire cars for the full coast block.", "Coach 45-60 min. Train is not useful. Car about 45 min."),
      leg("Ericeira to Peniche/Baleal", "Shuttle or car", "Public buses can be awkward; a pre-booked transfer for ten may beat fragmented bus timings.", "Coach/bus via Torres Vedras is possible. Car about 1 hr 15."),
      leg("Peniche/Baleal to Nazare", "Shuttle or coach", "Use bus times if they line up; otherwise split a transfer for one short hop.", "Bus usually needs timetable care. Car about 1 hr."),
      leg("Nazare to Coimbra", "Coach", "Coach via Leiria is the public-transport play.", "Train links are less clean because the station is outside Nazare. Car about 1 hr 20."),
      leg("Coimbra to Porto", "Train", "This is where train is best: simple CP intercity/regional options and no parking issue.", "Train about 1 hr 15 to 1 hr 30. Coach also works."),
      leg("Porto to San Sebastian", "Coach", "Long coach is the budget route; car is faster but expensive with one-way and cross-border issues.", "ALSA/FlixBus style long coach roughly 11-13 hr. Train needs changes."),
    ],
  },
  {
    id: "galicia-bilbao",
    name: "Option 2 - Galicia plus Bilbao finish",
    badge: "Best finish logistics",
    meta: "14 nights, most city-heavy",
    why: "Skip the smaller Portuguese surf towns after Lisbon and use Porto as the launchpad into Galicia, San Sebastian, then Bilbao for cheaper beds and easier flights home.",
    stops: [
      stop("lisbon", "Sat 1 Aug - Tue 4 Aug", 3),
      stop("porto", "Tue 4 Aug - Fri 7 Aug", 3),
      stop("vigo", "Fri 7 Aug - Sun 9 Aug", 2),
      stop("santiago", "Sun 9 Aug - Tue 11 Aug", 2),
      stop("sansebastian", "Tue 11 Aug - Thu 13 Aug", 2),
      stop("bilbao", "Thu 13 Aug - Sat 15 Aug", 2),
    ],
    transport: [
      leg("Lisbon to Porto", "Train", "Fast CP train is cleaner than coach if booked early; coach is the cheaper fallback.", "Train around 3 hr. Coach around 3 hr 15-3 hr 45. Car adds parking hassle."),
      leg("Porto to Vigo", "Coach", "ALSA/FlixBus/Autna have stronger frequency than train; train is scenic but limited.", "Coach about 2 hr 15. Train normally limited services. Car about 1 hr 45."),
      leg("Vigo to Santiago", "Train", "Rail is usually simple for Galicia hops.", "Train about 1 hr 30-2 hr. Coach works. Car about 1 hr."),
      leg("Santiago to San Sebastian", "Coach or train", "This is the hard leg. Price both coach and rail; accept a long travel day.", "Coach/train can run 8-11 hr depending changes. Car about 6 hr 30."),
      leg("San Sebastian to Bilbao", "Coach", "Frequent Basque coach links make this an easy final hop.", "Coach about 1 hr 15. Car about 1 hr 10. Train is slower."),
    ],
  },
  {
    id: "biarritz",
    name: "Option 3 - Surf detour via Biarritz",
    badge: "Most coastal",
    meta: "14 nights, pricier but cool",
    why: "Stay close to the sea almost the whole way, trade Coimbra for French Basque surf, and finish in San Sebastian during the festival.",
    stops: [
      stop("lisbon", "Sat 1 Aug - Tue 4 Aug", 3),
      stop("ericeira", "Tue 4 Aug - Thu 6 Aug", 2),
      stop("peniche", "Thu 6 Aug - Sat 8 Aug", 2),
      stop("nazare", "Sat 8 Aug - Sun 9 Aug", 1),
      stop("porto", "Sun 9 Aug - Tue 11 Aug", 2),
      stop("biarritz", "Tue 11 Aug - Thu 13 Aug", 2),
      stop("sansebastian", "Thu 13 Aug - Sat 15 Aug", 2),
    ],
    transport: [
      leg("Lisbon to Ericeira", "Coach", "Direct coach is sensible and keeps cost low.", "Coach 45-60 min. Car about 45 min."),
      leg("Ericeira to Peniche/Baleal", "Shuttle or car", "A ten-person transfer can be worth pricing because public links are fiddly.", "Bus possible with changes. Car about 1 hr 15."),
      leg("Peniche/Baleal to Nazare", "Shuttle or coach", "Short hop; use public buses only if the timing is clean.", "Car about 1 hr."),
      leg("Nazare to Porto", "Coach/train mix", "Coach to Porto is simpler if direct; train works with station/taxi hassle.", "Coach usually easiest. Car about 2 hr 15."),
      leg("Porto to Biarritz", "Coach or flight/train mix", "This is the premium detour. Coach via Spain is cheap but long; check flights to Bilbao/Biarritz as dates open.", "Coach can be 10-13 hr. Car about 7 hr 30."),
      leg("Biarritz to San Sebastian", "Coach", "Short cross-border hop; bus or private transfer is the cleanest group move.", "Coach roughly 45-90 min depending stop. Car about 45 min."),
    ],
  },
];

const hostelworldCityUrls = {
  lisbon: "https://www.hostelworld.com/hostels/europe/portugal/lisbon/",
  ericeira: "https://www.hostelworld.com/hostels/europe/portugal/ericeira/",
  peniche: "https://www.hostelworld.com/hostels/europe/portugal/peniche/",
  nazare: "https://www.hostelworld.com/hostels/europe/portugal/nazare/",
  coimbra: "https://www.hostelworld.com/hostels/europe/portugal/coimbra/",
  porto: "https://www.hostelworld.com/hostels/europe/portugal/porto/",
  vigo: "https://www.hostelworld.com/hostels/europe/spain/vigo/",
  santiago: "https://www.hostelworld.com/hostels/europe/spain/santiago-de-compostela/",
  bilbao: "https://www.hostelworld.com/hostels/europe/spain/bilbao/",
  biarritz: "https://www.hostelworld.com/hostels/europe/france/biarritz/",
  sansebastian: "https://www.hostelworld.com/hostels/europe/spain/san-sebastian/",
};

const stayDetails = {
  "home-lisbon": stay("Listed", "watch", "Dorms from €44.89", "140+ staying on Hostelworld's Lisbon page.", "Great location and dinners, but pricey for a dorm block. Ask direct for ten beds before relying on split bookings."),
  "yes-lisbon": stay("Listed", "ok", "Dorms from €20.00", "149+ staying on Hostelworld's Lisbon page.", "Best Lisbon value/social balance from the visible options. Strong first enquiry for 1-4 Aug."),
  independente: stay("Listed", "ok", "Dorms from €16.00", "32+ staying on Hostelworld's Lisbon page.", "Good Bairro Alto location. Less obviously backpacker-social than Yes/Home but useful if price matters."),
  "surfers-den": stay("Listed", "watch", "Dorms from €20.00", "4+ staying on Hostelworld's Ericeira page.", "Good surf-hostel fit, but the public signal is small. Check whether ten beds exist before committing."),
  "wot-ericeira": stay("Listed", "ok", "Dorms from €13.00", "57+ staying on Hostelworld's Ericeira page.", "Best group-capacity signal in Ericeira. Make this the first exact-date check."),
  laneez: stay("Direct check", "watch", "No public rate found in this pass", "Not visible in the Hostelworld city pricing pass.", "Sea-view surf-house option, likely pricier. Treat as a direct enquiry, not the budget default."),
  "baleal-surf-camp": stay("Direct package", "watch", "Direct surf-stay pricing", "Official site lists a hostel 100m from the beach with dorms, kitchen, linen and free WiFi.", "Best surf logistics in Baleal. Directly ask for a ten-person dorm/surf package for 6-8 Aug."),
  "captains-log": stay("Direct check", "watch", "No public rate found in this pass", "Official site confirms it is a Baleal beach hostel/surf lodge.", "Good location, but no reliable public price/capacity signal. Use as a second direct enquiry."),
  "ferrel-surf-house": stay("Poor date fit", "risk", "Packages from 5 nights", "Official site says surf-and-stay packages start from 5 nights.", "Not ideal for the current 2-night Peniche stop unless you extend the surf block."),
  "nazare-hostel": stay("Listed", "risk", "Dorms from €25.00", "Hostelworld lists only 3 Nazare hostels; this one is 150m from the beach.", "Book early. Nazare has thin hostel supply and ten dorm beds can disappear quickly."),
  "hi-nazare": stay("Direct youth hostel", "watch", "Check direct", "Not visible in the Hostelworld Nazare pricing pass.", "Useful fallback if private hostels fill. Check Pousadas de Juventude direct for group beds."),
  "lab-hostel": stay("Small-capacity check", "risk", "Check direct", "Hostelworld property text notes three 6-bed dorms plus family/double rooms.", "There may be enough dorm beds in theory, but a group of ten would take most of the hostel."),
  serenata: stay("Listed", "watch", "Dorms from €19.00", "6+ staying on Hostelworld's Coimbra page.", "Best central Coimbra fit, but exact ten-bed availability needs checking."),
  "hi-coimbra": stay("Listed", "ok", "Dorms from €12.00", "4+ staying on Hostelworld's Coimbra page; free breakfast listed.", "Cheapest Coimbra fallback. Less central, but practical for one night."),
  "ctw-coimbra": stay("Fallback check", "watch", "No public rate found in this pass", "Not visible in the Hostelworld Coimbra pricing pass.", "Keep as a station-side fallback, but price it against Coimbra Portagem/HI before booking."),
  passenger: stay("Listed", "ok", "Dorms from €22.50", "97+ staying on Hostelworld's Porto page; free breakfast listed.", "Best transport location and strong capacity signal. Very sensible for Porto."),
  "gallery-hostel": stay("Listed", "ok", "Dorms from €25.88", "23+ staying on Hostelworld's Porto page.", "Good quality/Cedofeita option. Strong but pricier than Onefam/Nice Way."),
  "onefam-ribeira": stay("Listed", "ok", "Dorms from €14.00", "58+ staying on Hostelworld's Porto page; age 18-39.", "Best social value if everyone is within the age rule and wants organised nights."),
  "kaps-vigo": stay("Direct/hotel check", "watch", "Official listing from €55/night", "Public official listing surfaced with from-pricing, but not a ten-bed dorm signal.", "Vigo hostel supply is thin. Check this against Nautico Vigo and budget hotels."),
  "hostel-celta": stay("Direct check", "watch", "No public rate found in this pass", "Not visible in the Hostelworld Vigo pricing pass.", "Use as a practical central fallback only after checking exact availability."),
  "casco-vello-base": stay("Area target", "risk", "Nautico Vigo dorms from €30.00", "Hostelworld lists only 3 Vigo hostels; Nautico Vigo shows 3+ staying.", "Do not leave Vigo late. For ten people, price hostels against simple central budget hotels."),
  "seminario-menor": stay("Listed", "ok", "Dorms from €22.00", "Hostelworld lists Hostal Seminario Menor with private and dorm availability from pricing.", "Large albergue-style option and the safest group-capacity bet in Santiago."),
  "last-stamp": stay("Listed", "watch", "Dorms from €21.00", "The Last Stamp is listed 100m from the cathedral.", "Best centrality, but check reviews/current condition and ten-bed availability carefully."),
  "loop-inn": stay("Listed", "ok", "Dorms from €18.07", "Featured on Hostelworld's Santiago page.", "Good practical group option just north of the centre."),
  latroupe: stay("Listed", "ok", "Dorms from €22.68", "Hostelworld lists Latroupe with 19 events and central location.", "Best Bilbao group/social balance; good finish option if San Sebastian beds are brutal."),
  quartier: stay("Listed", "ok", "Dorms from €17.10", "Hostelworld lists Quartier in Casco Viejo.", "Cheaper old-town option. Check their booking instructions and late check-in details."),
  poshtel: stay("Listed", "watch", "Dorms from €30.33", "Hostelworld lists Poshtel near the Guggenheim.", "Cooler but pricier; use if Latroupe/Quartier do not have ten beds."),
  "nami-house": stay("Listed", "risk", "Dorms from €41.80", "8+ staying on Hostelworld's Biarritz page; no privates shown.", "Excellent surf-hostel vibe, but likely tight/expensive for ten in August."),
  "surf-hostel-biarritz": stay("Listed", "risk", "Dorms from €46.00", "9+ staying on Hostelworld's Biarritz page; free breakfast listed.", "Good surf option, but this is not a budget stop. Confirm exact beds before choosing Route 3."),
  "garden-utopy": stay("Listed", "watch", "Dorms from €15.50", "3+ staying on Hostelworld's Biarritz page.", "Cheapest visible Biarritz-area option; check location and transport before booking."),
  koba: stay("Listed", "risk", "Dorms from €26.25", "Hostelworld San Sebastian page lists Koba in Gros.", "Best fit if available, but Semana Grande makes this a book-now item."),
  "room-city": stay("Listed", "risk", "Dorms from €37.95", "Hostelworld lists A Room In The City near the centre.", "Great central option, likely expensive during festival dates."),
  balea: stay("Listed", "watch", "Dorms from €34.50", "Hostelworld lists Balea with dorms only.", "Budget fallback outside the core; useful if central beds are gone."),
};

const routeBudgetProfiles = {
  classic: {
    bestFor: "Best balance",
    watch: "San Sebastian beds and Portugal coast transfers",
    coast: 5,
    cities: 4,
    nightlife: 4,
    nightOuts: 9,
    risk: "Medium-high",
    riskScore: 3,
    transport: {
      coach: { cost: 155, hours: 21 },
      train: { cost: 190, hours: 19 },
      car: { cost: 235, hours: 16 },
    },
  },
  "galicia-bilbao": {
    bestFor: "Easiest finish",
    watch: "Long Galicia to San Sebastian travel day",
    coast: 3,
    cities: 5,
    nightlife: 5,
    nightOuts: 10,
    risk: "Medium",
    riskScore: 2,
    transport: {
      coach: { cost: 145, hours: 18 },
      train: { cost: 205, hours: 17 },
      car: { cost: 225, hours: 14 },
    },
  },
  biarritz: {
    bestFor: "Most coastal",
    watch: "Biarritz prices plus San Sebastian festival demand",
    coast: 5,
    cities: 3,
    nightlife: 4,
    nightOuts: 9,
    risk: "High",
    riskScore: 4,
    transport: {
      coach: { cost: 180, hours: 24 },
      train: { cost: 245, hours: 22 },
      car: { cost: 270, hours: 18 },
    },
  },
};

const fallbackStayRates = {
  lisbon: { budget: 20, balanced: 28, better: 45 },
  ericeira: { budget: 18, balanced: 24, better: 34 },
  peniche: { budget: 22, balanced: 30, better: 42 },
  nazare: { budget: 25, balanced: 31, better: 40 },
  coimbra: { budget: 15, balanced: 22, better: 30 },
  porto: { budget: 18, balanced: 25, better: 36 },
  vigo: { budget: 30, balanced: 42, better: 55 },
  santiago: { budget: 20, balanced: 27, better: 36 },
  bilbao: { budget: 20, balanced: 29, better: 40 },
  biarritz: { budget: 42, balanced: 50, better: 62 },
  sansebastian: { budget: 35, balanced: 42, better: 55 },
};

const sources = [
  ["San Sebastian Semana Grande 2026", "https://sansebastianturismoa.eus/en/agenda/semana-grande-2026/", "Official 8-15 August 2026 festival listing."],
  ["San Sebastian pintxos", "https://sansebastianturismoa.eus/en/gastronomy/going-for-pintxos/", "Official pintxo context and food areas."],
  ["San Sebastian nightlife", "https://www.sansebastianturismoa.eus/en/to-do/plans-in-san-sebastian/nightlife", "Official nightlife area guidance."],
  ["Hostelworld Lisbon hostels", "https://www.hostelworld.com/hostels/europe/portugal/lisbon/", "Public hostel from-prices and booking signals checked 11 May 2026."],
  ["Hostelworld Portugal route hostels", "https://www.hostelworld.com/hostels/europe/portugal/porto/", "Cross-check for Ericeira, Peniche, Nazare, Coimbra and Porto hostel pricing."],
  ["Hostelworld Spain/Basque hostels", "https://www.hostelworld.com/hostels/europe/spain/san-sebastian/", "Cross-check for Vigo, Santiago, Bilbao and San Sebastian hostel pricing."],
  ["Hostelworld Biarritz hostels", "https://www.hostelworld.com/hostels/europe/france/biarritz/", "Biarritz and Anglet surf-hostel pricing check."],
  ["Baleal Surf Camp hostels", "https://www.balealsurfcamp.com/accommodation/hostels/", "Direct surf-hostel facilities and group enquiry context."],
  ["Captain's Log House", "https://captainsloghouse.com/", "Direct Baleal hostel/surf-lodge fallback."],
  ["Ferrel Surf House prices", "https://www.ferrelsurfhouse.com/prices", "Direct package pricing and minimum-stay context."],
  ["ALSA Porto-San Sebastian", "https://www.alsa.com/en/coach/porto-san-sebastian", "Long coach route to check when tickets open."],
  ["FlixBus Porto-San Sebastian", "https://www.flixbus.com/bus-routes/bus-porto-san-sebastian", "Budget long-coach cross-check."],
  ["CP - Comboios de Portugal", "https://www.cp.pt/", "Portugal train planning."],
  ["Rede Expressos", "https://rede-expressos.pt/en", "Portugal coach planning."],
  ["Visit Portugal: Ericeira", "https://www.visitportugal.com/en/node/73781", "Surf reserve and beach context."],
  ["Visit Peniche", "https://visitpeniche.pt/", "Peniche, Baleal and Berlengas planning."],
  ["Visit Portugal: Nazare", "https://www.visitportugal.com/en/content/nazare", "Nazare and Praia do Norte context."],
  ["Porto nightlife: Galerias de Paris", "https://porto.travel/galerias-de-paris/", "Porto nightlife area."],
  ["Porto nightlife: Plano B", "https://porto.travel/nightlife/plano-b/", "Porto club cross-check."],
  ["Vigo Churruca nightlife", "https://www.turismodevigo.org/en/nightlife-churruca", "Official Vigo nightlife district."],
  ["Vigo Cies Islands", "https://turismo.vigo.org/en/cies-islands", "Official Cies Islands context."],
  ["Getting to Vigo from Porto", "https://turismo.vigo.org/en/porto", "Official Porto-Vigo train and bus options."],
  ["Santiago gastronomic guide", "https://www.santiagoturismo.com/files/2015/04/guiagastronomicaeng.pdf", "Official food guide."],
  ["Bilbao Casco Viejo", "https://www.visitbiscay.eus/en/-/get-yourself-lost-in-casco-viejo", "Official Casco Viejo food and bar context."],
  ["Bilbao pintxos", "https://www.euskadi.eus/gobierno-vasco/-/es/bares-pintxos/de-pintxos-por-el-casco-viejo-de-bilbao/", "Basque tourism pintxos context."],
  ["Biarritz transport", "https://www.destination-biarritz.fr/pratique/venir-se-deplacer-a-biarritz/comment-venir-biarritz/", "Official Biarritz access and local transport."],
  ["Biarritz Halles food guide", "https://www.destination-biarritz.fr/app/uploads/2025/07/carnet-gourmand-en.pdf", "Recent official food guide."],
  ["Nami House hostel", "https://www.hostelworld.com/hostels/p/277249/nami-house/", "Biarritz/Anglet surf-hostel availability context."],
  ["Goodmorning Hostel group policy", "https://goodmorninghostel.com/faq/", "Checked because some Lisbon hostels restrict groups."],
];

let map;
let countryLayer;
let routeLayer;
let cityLayer;
let placeLayer;
let selectedRouteId = "classic";
let selectedCityId = routes[0].stops[0].cityId;
let selectedCategory = "all";
let budgetSettings = {
  accommodation: "budget",
  transport: "coach",
  foodDaily: 28,
  nightlifeSpend: 18,
  activityFund: 90,
  bufferPercent: 10,
};
const checklistStorageKey = "lisbonNorthboundChecklistV1";
let checkedChecklistItems = loadChecklistState();
let isChecklistOpen = false;
const placeMarkers = new Map();

function city(name, country, lat, lng, zoom, summary, area, booking, places) {
  return { name, country, lat, lng, zoom, summary, area, booking, places };
}

function p(id, name, category, lat, lng, note) {
  return { id, name, category, lat, lng, note };
}

function stay(status, tone, price, signal, groupFit) {
  return { status, tone, price, signal, groupFit };
}

function stop(cityId, dates, nights) {
  return { cityId, dates, nights };
}

function leg(name, pick, reason, detail) {
  return { name, pick, reason, detail };
}

function currentRoute() {
  return routes.find((route) => route.id === selectedRouteId);
}

function currentStop() {
  return currentRoute().stops.find((item) => item.cityId === selectedCityId);
}

function mapsUrl(placeItem, cityItem) {
  const query = placeItem ? `${placeItem.name} ${cityItem.name}` : cityItem.name;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function categoryName(category) {
  return categories[category].label;
}

function initMap() {
  map = L.map("map", {
    zoomControl: false,
    scrollWheelZoom: true,
  }).setView([41.25, -6.8], 6);

  L.control.zoom({ position: "topright" }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  countryLayer = L.geoJSON(baseCountries, {
    style: (feature) => ({
      color: feature.properties.name === "Portugal" ? "rgba(11, 75, 85, 0.55)" : "rgba(23, 33, 31, 0.16)",
      fillColor: "transparent",
      fillOpacity: 0,
      weight: feature.properties.name === "Portugal" ? 2 : 1,
    }),
  }).addTo(map);

  routeLayer = L.layerGroup().addTo(map);
  cityLayer = L.layerGroup().addTo(map);
  placeLayer = L.layerGroup().addTo(map);

  renderAll();
  setTimeout(() => map.invalidateSize(), 250);
}

function renderAll() {
  renderRouteChoices();
  renderDecisionTools();
  renderRouteCard();
  renderItinerary();
  renderOperations();
  renderCity();
  renderTransport();
  renderCategoryFilters();
  renderSources();
  drawRoute(true);
}

function renderRouteChoices() {
  const routeChoices = document.querySelector("#routeChoices");
  routeChoices.innerHTML = routes
    .map(
      (route) => `
        <button class="route-choice ${route.id === selectedRouteId ? "active" : ""}" type="button" data-route="${route.id}">
          <strong>${route.name}</strong>
          <span>${route.meta}</span>
        </button>
      `,
    )
    .join("");

  routeChoices.querySelectorAll(".route-choice").forEach((button) => {
    button.addEventListener("click", () => selectRoute(button.dataset.route));
  });
}

function selectRoute(routeId) {
  selectedRouteId = routeId;
  selectedCityId = currentRoute().stops[0].cityId;
  renderRouteChoices();
  renderDecisionTools();
  renderRouteCard();
  renderItinerary();
  renderOperations();
  renderCity();
  renderTransport();
  drawRoute(true);
}

function renderDecisionTools() {
  renderRouteComparison();
  renderBudgetCalculator();
}

function renderRouteComparison() {
  const estimates = routes.map((route) => routeBudgetEstimate(route));
  const cheapest = estimates.reduce((winner, estimate) => (estimate.total < winner.total ? estimate : winner), estimates[0]);
  const comparison = document.querySelector("#routeComparison");
  comparison.innerHTML = `
    <div class="decision-head">
      <div>
        <p class="eyebrow">Decision dashboard</p>
        <h3>Compare the routes</h3>
      </div>
      <span class="decision-chip">Cheapest: ${cheapest.route.name.replace("Option ", "")}</span>
    </div>
    <div class="comparison-grid">
      ${estimates.map((estimate) => renderComparisonRoute(estimate)).join("")}
    </div>
    <p class="decision-note">
      Estimates use the hostel price signals already in the app plus planning ranges for intercity transport.
      Treat them as booking targets, not final quotes.
    </p>
  `;

  comparison.querySelectorAll(".comparison-route").forEach((button) => {
    button.addEventListener("click", () => selectRoute(button.dataset.route));
  });
}

function renderComparisonRoute(estimate) {
  const route = estimate.route;
  const profile = routeBudgetProfiles[route.id];
  return `
    <button class="comparison-route ${route.id === selectedRouteId ? "active" : ""}" type="button" data-route="${route.id}">
      <span class="comparison-label">${profile.bestFor}</span>
      <strong>${route.name}</strong>
      <span class="comparison-price">${formatEuro(estimate.total)} pp</span>
      <span class="comparison-sub">${formatEuro(estimate.groupTotal)} group | ${estimate.transportHours} travel hrs</span>
      <span class="risk-line risk-${profile.riskScore}">${profile.risk} booking risk</span>
      <span class="metric-row">${scoreBar("Sea", profile.coast)}${scoreBar("Cities", profile.cities)}${scoreBar("Nights", profile.nightlife)}</span>
      <small>${profile.watch}</small>
    </button>
  `;
}

function scoreBar(label, score) {
  return `
    <span class="score">
      <span>${label}</span>
      <i style="--score:${score}"></i>
    </span>
  `;
}

function renderBudgetCalculator() {
  const estimate = routeBudgetEstimate(currentRoute());
  const calculator = document.querySelector("#budgetCalculator");
  calculator.innerHTML = `
    <div class="budget-head">
      <div>
        <p class="eyebrow">Budget calculator</p>
        <h3>${currentRoute().name}</h3>
      </div>
      <div class="budget-total">
        <span>Estimated total</span>
        <strong>${formatEuro(estimate.total)} pp</strong>
        <em>${formatEuro(estimate.groupTotal)} group</em>
      </div>
    </div>
    <div class="budget-breakdown" aria-label="Budget breakdown">
      ${budgetBreakdownRow("Hostels", estimate.accommodation)}
      ${budgetBreakdownRow("Transport", estimate.transport)}
      ${budgetBreakdownRow("Food", estimate.food)}
      ${budgetBreakdownRow("Nightlife", estimate.nightlife)}
      ${budgetBreakdownRow("Activities", estimate.activities)}
      ${budgetBreakdownRow("Buffer", estimate.buffer)}
    </div>
    <div class="budget-controls">
      ${segmentedControl("Accommodation", "accommodation", [
        ["budget", "Cheapest beds"],
        ["balanced", "Balanced"],
        ["better", "Better hostels"],
      ])}
      ${segmentedControl("Transport", "transport", [
        ["coach", "Coach"],
        ["train", "Train mix"],
        ["car", "Cars/transfers"],
      ])}
      ${rangeControl("Food per day", "foodDaily", 18, 50, 1, "€")}
      ${rangeControl("Night out spend", "nightlifeSpend", 0, 45, 1, "€")}
      ${rangeControl("Activities fund", "activityFund", 0, 180, 5, "€")}
      ${rangeControl("Safety buffer", "bufferPercent", 0, 25, 1, "%")}
    </div>
  `;

  calculator.querySelectorAll("[data-budget-setting]").forEach((button) => {
    button.addEventListener("click", () => {
      budgetSettings[button.dataset.budgetSetting] = button.dataset.value;
      renderDecisionTools();
    });
  });

  calculator.querySelectorAll("[data-budget-range]").forEach((input) => {
    input.addEventListener("input", () => {
      budgetSettings[input.dataset.budgetRange] = Number(input.value);
      renderDecisionTools();
    });
  });
}

function budgetBreakdownRow(label, value) {
  return `
    <div>
      <span>${label}</span>
      <strong>${formatEuro(value)}</strong>
    </div>
  `;
}

function segmentedControl(label, key, options) {
  return `
    <fieldset class="control-group">
      <legend>${label}</legend>
      <div class="segment-row">
        ${options
          .map(
            ([value, text]) => `
              <button class="segment-button ${budgetSettings[key] === value ? "active" : ""}" type="button" data-budget-setting="${key}" data-value="${value}">
                ${text}
              </button>
            `,
          )
          .join("")}
      </div>
    </fieldset>
  `;
}

function rangeControl(label, key, min, max, step, unit) {
  const value = budgetSettings[key];
  const display = unit === "%" ? `${value}%` : `${unit}${value}`;
  return `
    <label class="range-control">
      <span>${label}<strong>${display}</strong></span>
      <input type="range" min="${min}" max="${max}" step="${step}" value="${value}" data-budget-range="${key}" />
    </label>
  `;
}

function routeBudgetEstimate(route) {
  const profile = routeBudgetProfiles[route.id];
  const accommodation = routeAccommodationCost(route);
  const transport = profile.transport[budgetSettings.transport].cost;
  const food = budgetSettings.foodDaily * 15;
  const nightlife = budgetSettings.nightlifeSpend * profile.nightOuts;
  const activities = budgetSettings.activityFund;
  const subtotal = accommodation + transport + food + nightlife + activities;
  const buffer = subtotal * (budgetSettings.bufferPercent / 100);
  const total = Math.round(subtotal + buffer);

  return {
    route,
    accommodation: Math.round(accommodation),
    transport,
    food,
    nightlife,
    activities,
    buffer: Math.round(buffer),
    total,
    groupTotal: total * 10,
    transportHours: profile.transport[budgetSettings.transport].hours,
  };
}

function routeAccommodationCost(route) {
  return route.stops.reduce((total, stopItem) => {
    return total + nightlyAccommodationRate(stopItem.cityId, budgetSettings.accommodation) * stopItem.nights;
  }, 0);
}

function nightlyAccommodationRate(cityId, mode) {
  const cityItem = cities[cityId];
  const stays = cityItem.places.filter((item) => item.category === "stay");
  const priced = stays
    .map((item) => {
      const detail = stayDetailFor(item);
      return { item, detail, price: nightlyPrice(detail.price) };
    })
    .filter((entry) => entry.price !== null)
    .sort((a, b) => a.price - b.price);
  const fallback = fallbackStayRates[cityId]?.[mode] || 30;
  let baseRate = fallback;

  if (priced.length) {
    if (mode === "budget") {
      baseRate = priced[0].price;
    } else if (mode === "balanced") {
      const okPriced = priced.filter((entry) => entry.detail.tone === "ok");
      baseRate = okPriced[0]?.price || priced[Math.floor(priced.length / 2)].price;
    } else {
      baseRate = priced[priced.length - 1].price;
    }
  }

  return Math.round(baseRate * bookingPressureMultiplier(cityId));
}

function bookingPressureMultiplier(cityId) {
  if (cityId === "sansebastian") return 1.25;
  if (cityId === "biarritz") return 1.15;
  if (cityId === "nazare" || cityId === "vigo") return 1.1;
  return 1;
}

function formatEuro(value) {
  return `€${Math.round(value).toLocaleString("en-GB")}`;
}

function renderRouteCard() {
  const route = currentRoute();
  document.querySelector("#routeMeta").textContent = route.meta;
  document.querySelector("#routeName").textContent = route.name;
  document.querySelector("#routeBadge").textContent = route.badge;
  document.querySelector("#routeWhy").textContent = route.why;
}

function renderItinerary() {
  const route = currentRoute();
  const itinerary = document.querySelector("#itinerary");
  itinerary.innerHTML = route.stops
    .map((item, index) => {
      const cityItem = cities[item.cityId];
      return `
        <button class="city-step ${item.cityId === selectedCityId ? "active" : ""}" type="button" data-city="${item.cityId}">
          <span>${index + 1}</span>
          <strong>${cityItem.name}</strong>
          <em>${item.nights}N | ${item.dates}</em>
        </button>
      `;
    })
    .join("");

  itinerary.querySelectorAll(".city-step").forEach((button) => {
    button.addEventListener("click", () => selectCity(button.dataset.city, true));
  });
}

function renderOperations() {
  renderDailyPlanner();
  renderBookingChecklist();
}

function renderDailyPlanner() {
  const route = currentRoute();
  const days = routeDailyPlan(route);
  const checklist = currentChecklistSummary();
  const planner = document.querySelector("#dailyPlanner");
  planner.innerHTML = `
    <div class="operations-head">
      <div>
        <p class="eyebrow">Day-by-day</p>
        <h3>Daily itinerary</h3>
      </div>
      <div class="operations-actions">
        <span class="operations-chip">${days.length} days | ${route.stops.length} bases</span>
        <button id="openChecklist" class="checklist-trigger" type="button" aria-controls="checklistDrawer" aria-expanded="${isChecklistOpen}">
          Checklist <span>${checklist.doneCount}/${checklist.items.length}</span>
        </button>
      </div>
    </div>
    <div class="day-timeline">
      ${days.map((day) => renderDayCard(day)).join("")}
    </div>
  `;

  planner.querySelectorAll(".day-card").forEach((card) => {
    const openDay = () => selectCity(card.dataset.city, true);
    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      openDay();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openDay();
    });
  });

  planner.querySelector("#openChecklist").addEventListener("click", openChecklistDrawer);
}

function renderDayCard(day) {
  return `
    <article class="day-card ${day.cityId === selectedCityId ? "active" : ""} ${day.final ? "final" : ""}" data-city="${day.cityId}" role="button" tabindex="0">
      <div class="day-date">
        <span>${day.weekday}</span>
        <strong>${day.date}</strong>
      </div>
      <div class="day-plan">
        <div class="day-top">
          <span class="day-pill ${day.type}">${day.label}</span>
          <strong>${day.cityName}</strong>
        </div>
        <dl>
          <div>
            <dt>Move</dt>
            <dd>${day.move}</dd>
          </div>
          <div>
            <dt>Do</dt>
            <dd>${day.activity}</dd>
          </div>
          <div>
            <dt>Eat / night</dt>
            <dd>${day.foodNight}</dd>
          </div>
          <div>
            <dt>Sleep</dt>
            <dd>${day.sleep}</dd>
          </div>
        </dl>
      </div>
    </article>
  `;
}

function routeDailyPlan(route) {
  const days = [];

  route.stops.forEach((stopItem, stopIndex) => {
    const [startIso] = datesToIso(stopItem.dates);
    for (let nightIndex = 0; nightIndex < stopItem.nights; nightIndex += 1) {
      const iso = addDaysIso(startIso, nightIndex);
      days.push(dayPlanForStop(route, stopItem, stopIndex, nightIndex, iso));
    }
  });

  const lastStop = route.stops[route.stops.length - 1];
  const [, finalIso] = datesToIso(lastStop.dates);
  days.push(finalDayPlan(lastStop, finalIso));
  return days;
}

function dayPlanForStop(route, stopItem, stopIndex, nightIndex, iso) {
  const cityItem = cities[stopItem.cityId];
  const dateParts = formatDateParts(iso);
  const isTravelDay = nightIndex === 0 && stopIndex > 0;
  const isStartDay = nightIndex === 0 && stopIndex === 0;
  const activity = pickPlace(stopItem.cityId, "activity", nightIndex + stopIndex);
  const food = pickPlace(stopItem.cityId, "eat", nightIndex);
  const night = pickPlace(stopItem.cityId, "night", nightIndex);

  return {
    cityId: stopItem.cityId,
    cityName: cityItem.name,
    weekday: dateParts.weekday,
    date: dateParts.date,
    label: isStartDay ? "Arrival" : isTravelDay ? "Travel" : "Local",
    type: isStartDay ? "arrival" : isTravelDay ? "travel" : "local",
    move: dailyMoveText(route, stopIndex, nightIndex),
    activity: activity ? activity.name : cityItem.summary,
    foodNight: `${food ? food.name : "Cheap local dinner"} + ${night ? night.name : "low-key drinks"}`,
    sleep: `${cityItem.name}, night ${nightIndex + 1} of ${stopItem.nights}`,
    final: false,
  };
}

function finalDayPlan(stopItem, iso) {
  const cityItem = cities[stopItem.cityId];
  const dateParts = formatDateParts(iso);
  const food = pickPlace(stopItem.cityId, "eat", 0);
  const activity = pickPlace(stopItem.cityId, "activity", 0);

  return {
    cityId: stopItem.cityId,
    cityName: cityItem.name,
    weekday: dateParts.weekday,
    date: dateParts.date,
    label: "Depart",
    type: "final",
    move: `Check out in ${cityItem.name}; keep bags central if flights or onward trains are later.`,
    activity: activity ? `${activity.name} if departure timing allows` : "Recovery breakfast and onward travel",
    foodNight: food ? `${food.name} before leaving` : "Final group meal if time allows",
    sleep: "Trip ends",
    final: true,
  };
}

function dailyMoveText(route, stopIndex, nightIndex) {
  if (stopIndex === 0 && nightIndex === 0) return "Arrive in Lisbon, check in, and keep the first night walkable.";
  if (nightIndex > 0) return "No intercity travel. Keep the day local and avoid burning time on logistics.";
  const legItem = route.transport[stopIndex - 1];
  return legItem ? `${legItem.name}: ${legItem.pick}. ${legItem.detail}` : "Travel to the next base.";
}

function pickPlace(cityId, category, index) {
  const items = cities[cityId].places.filter((item) => item.category === category);
  if (!items.length) return null;
  return items[index % items.length];
}

function renderBookingChecklist() {
  const { items: checklist, doneCount, percent } = currentChecklistSummary();
  const panel = document.querySelector("#bookingChecklist");

  panel.innerHTML = `
    <div class="operations-head drawer-head">
      <div>
        <p class="eyebrow">Booking checklist</p>
        <h3>What to lock in</h3>
      </div>
      <div class="operations-actions">
        <span class="operations-chip">${doneCount}/${checklist.length} done</span>
        <button id="closeChecklist" class="drawer-close" type="button" aria-label="Close checklist">Close</button>
      </div>
    </div>
    <div class="checklist-progress" aria-label="Checklist progress">
      <span style="width:${percent}%"></span>
    </div>
    <div class="checklist-list">
      ${checklist.map((item) => renderChecklistItem(item)).join("")}
    </div>
  `;

  panel.querySelectorAll("[data-checklist-id]").forEach((input) => {
    input.addEventListener("change", () => {
      checkedChecklistItems[input.dataset.checklistId] = input.checked;
      saveChecklistState();
      renderOperations();
    });
  });
  panel.querySelector("#closeChecklist").addEventListener("click", closeChecklistDrawer);
  syncChecklistDrawer();
}

function currentChecklistSummary() {
  const items = routeChecklist(currentRoute());
  const doneCount = items.filter((item) => checkedChecklistItems[item.id]).length;
  const percent = items.length ? Math.round((doneCount / items.length) * 100) : 0;
  return { items, doneCount, percent };
}

function openChecklistDrawer() {
  isChecklistOpen = true;
  syncChecklistDrawer();
}

function closeChecklistDrawer() {
  isChecklistOpen = false;
  syncChecklistDrawer();
}

function syncChecklistDrawer() {
  const drawer = document.querySelector("#checklistDrawer");
  const backdrop = document.querySelector("#checklistBackdrop");
  const trigger = document.querySelector("#openChecklist");
  drawer.classList.toggle("open", isChecklistOpen);
  drawer.setAttribute("aria-hidden", String(!isChecklistOpen));
  if (trigger) trigger.setAttribute("aria-expanded", String(isChecklistOpen));
  backdrop.hidden = !isChecklistOpen;
  document.body.classList.toggle("checklist-open", isChecklistOpen);
}

function renderChecklistItem(item) {
  const checked = Boolean(checkedChecklistItems[item.id]);
  return `
    <article class="check-item ${checked ? "done" : ""}">
      <input type="checkbox" data-checklist-id="${item.id}" aria-label="${item.title}" ${checked ? "checked" : ""} />
      <div>
        <div class="check-top">
          <span class="urgency ${item.priority}">${item.priorityLabel}</span>
          <strong>${item.title}</strong>
        </div>
        <p>${item.note}</p>
        ${item.href ? `<a href="${item.href}" target="_blank" rel="noreferrer">${item.linkLabel || "Open link"}</a>` : ""}
      </div>
    </article>
  `;
}

function routeChecklist(route) {
  const items = [];

  route.stops.forEach((stopItem) => {
    const cityItem = cities[stopItem.cityId];
    const priority = stayPriority(stopItem.cityId);
    const insight = accommodationInsight(cityItem.places.filter((item) => item.category === "stay"));
    items.push({
      id: `${route.id}|stay|${stopItem.cityId}`,
      priority: priority.key,
      priorityLabel: priority.label,
      title: `Book ${cityItem.name} beds`,
      note: `${stopItem.dates} · ${nightCount(stopItem.nights)} · ${insight.firstCheck} is the first check.`,
      href: hostelworldExactUrl(stopItem.cityId, stopItem),
      linkLabel: "Check beds",
    });
  });

  route.transport.forEach((legItem, index) => {
    const priority = transportPriority(legItem);
    items.push({
      id: `${route.id}|transport|${index}`,
      priority: priority.key,
      priorityLabel: priority.label,
      title: `Confirm ${legItem.name}`,
      note: `${legItem.pick}. ${legItem.detail}`,
      href: transportLink(legItem),
      linkLabel: "Check transport",
    });
  });

  activityChecklistItems(route).forEach((item) => items.push(item));
  items.push({
    id: `${route.id}|admin|kitty`,
    priority: "normal",
    priorityLabel: "Set up",
    title: "Create shared costs pot",
    note: "Agree how the group will split hostels, transfers, ferries, surf lessons and deposits.",
  });
  items.push({
    id: `${route.id}|admin|documents`,
    priority: "soon",
    priorityLabel: "Before booking",
    title: "Check IDs, insurance and cards",
    note: "Everyone needs valid ID/passport, travel insurance, and a card that works in Portugal, Spain and France if Route 3 wins.",
  });

  return items;
}

function stayPriority(cityId) {
  if (cityId === "sansebastian") return { key: "urgent", label: "Book first" };
  if (cityId === "lisbon" || cityId === "biarritz" || cityId === "nazare" || cityId === "vigo") return { key: "soon", label: "High risk" };
  return { key: "normal", label: "Book next" };
}

function transportPriority(legItem) {
  const text = `${legItem.name} ${legItem.detail}`.toLowerCase();
  if (text.includes("san sebastian") || text.includes("biarritz") || text.includes("8-11") || text.includes("11-13")) {
    return { key: "urgent", label: "Price early" };
  }
  if (text.includes("shuttle") || text.includes("transfer") || text.includes("fiddly")) {
    return { key: "soon", label: "Group quote" };
  }
  return { key: "normal", label: "Check times" };
}

function transportLink(legItem) {
  const text = legItem.name.toLowerCase();
  if (text.includes("porto to san sebastian")) return "https://www.alsa.com/en/coach/porto-san-sebastian";
  if (text.includes("porto to vigo")) return "https://turismo.vigo.org/en/porto";
  if (text.includes("train") || legItem.pick.toLowerCase().includes("train")) return "https://www.cp.pt/";
  if (legItem.pick.toLowerCase().includes("coach")) return "https://rede-expressos.pt/en";
  return "https://www.google.com/maps";
}

function activityChecklistItems(route) {
  const cityIds = route.stops.map((item) => item.cityId);
  const items = [];

  if (cityIds.includes("peniche")) {
    items.push({
      id: `${route.id}|activity|berlengas`,
      priority: "soon",
      priorityLabel: "Reserve",
      title: "Decide Berlengas boat day",
      note: "Weather and boat capacity matter in August. Book only if the Peniche stop stays in the chosen route.",
      href: "https://visitpeniche.pt/",
      linkLabel: "Visit Peniche",
    });
  }

  if (cityIds.includes("vigo")) {
    items.push({
      id: `${route.id}|activity|cies`,
      priority: "urgent",
      priorityLabel: "Permit needed",
      title: "Reserve Cies Islands ferry/permit",
      note: "Summer access is capacity-controlled, so this needs checking before Route 2 is locked.",
      href: "https://turismo.vigo.org/en/cies-islands",
      linkLabel: "Cies info",
    });
  }

  if (cityIds.includes("ericeira") || cityIds.includes("peniche")) {
    items.push({
      id: `${route.id}|activity|surf`,
      priority: "normal",
      priorityLabel: "Group quote",
      title: "Get surf lesson prices",
      note: "Ask hostels/surf schools for a ten-person lesson or board-hire bundle before arrival.",
    });
  }

  if (cityIds.includes("sansebastian")) {
    items.push({
      id: `${route.id}|activity|semana-grande`,
      priority: "urgent",
      priorityLabel: "Plan nights",
      title: "Plan Semana Grande evenings",
      note: "You overlap the 8-15 August 2026 festival. Keep dinner and fireworks timing loose around La Concha.",
      href: "https://sansebastianturismoa.eus/en/agenda/semana-grande-2026/",
      linkLabel: "Festival info",
    });
  }

  return items;
}

function renderCity() {
  const stopItem = currentStop();
  const cityItem = cities[selectedCityId];

  document.querySelector("#cityDates").textContent = `${stopItem.dates} | ${nightCount(stopItem.nights)}`;
  document.querySelector("#cityName").textContent = cityItem.name;
  document.querySelector("#citySummary").textContent = cityItem.summary;
  document.querySelector("#cityArea").textContent = cityItem.area;
  document.querySelector("#cityBooking").textContent = cityItem.booking;
  document.querySelector("#cityMaps").href = mapsUrl(null, cityItem);
  renderStayPlanner(cityItem, stopItem);

  const sections = sectionLabels
    .filter(([category]) => category !== "stay")
    .map(([category, label]) => {
      const items = cityItem.places.filter((item) => {
        if (selectedCategory !== "all" && selectedCategory !== category) return false;
        return item.category === category;
      });
      if (!items.length) return "";
      return `
        <div class="place-section">
          <span class="section-label">${label}</span>
          <div class="place-grid">
            ${items.map((item) => renderPlaceCard(item, cityItem)).join("")}
          </div>
        </div>
      `;
    })
    .join("");

  document.querySelector("#citySections").innerHTML = sections;
  document.querySelectorAll(".place-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      const marker = placeMarkers.get(card.dataset.place);
      if (!marker) return;
      map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 15), { duration: 0.45 });
      marker.openPopup();
    });
  });
}

function renderPlaceCard(item, cityItem) {
  return `
    <article class="place-card" data-place="${item.id}">
      <div class="place-card-top">
        <span class="type-pill" style="--type:${categories[item.category].color}">${categoryName(item.category)}</span>
        <a href="${mapsUrl(item, cityItem)}" target="_blank" rel="noreferrer">Map</a>
      </div>
      <h4>${item.name}</h4>
      <p>${item.note}</p>
    </article>
  `;
}

function renderStayPlanner(cityItem, stopItem) {
  const planner = document.querySelector("#stayPlanner");
  const stays = cityItem.places.filter((item) => item.category === "stay");

  if (selectedCategory !== "all" && selectedCategory !== "stay") {
    planner.innerHTML = "";
    return;
  }

  const exactUrl = hostelworldExactUrl(selectedCityId, stopItem);
  const insight = accommodationInsight(stays);
  planner.innerHTML = `
    <section class="availability-card" aria-label="Accommodation availability">
      <div class="section-head">
        <p class="eyebrow">Accommodation check</p>
        <h3>Hostels for ${stopItem.dates}</h3>
      </div>
      <div class="availability-kpis" aria-label="Accommodation summary">
        <div>
          <span>Group need</span>
          <strong>${nightCount(stopItem.nights)} / 10 beds</strong>
        </div>
        <div>
          <span>Best visible rate</span>
          <strong>${insight.bestRate}</strong>
        </div>
        <div>
          <span>First check</span>
          <strong>${insight.firstCheck}</strong>
        </div>
      </div>
      <p class="availability-note">
        Checked 11 May 2026. Prices are public "from" rates, not locked quotes for ten people.
        ${insight.statusRead}. Use the exact-date link before booking because August inventory moves quickly.
      </p>
      <div class="stay-grid">
        ${stays.map((item) => renderStayOption(item, cityItem, stopItem, exactUrl)).join("")}
      </div>
    </section>
  `;

  planner.querySelectorAll(".stay-option").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      const marker = placeMarkers.get(card.dataset.place);
      if (!marker) return;
      map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 15), { duration: 0.45 });
      marker.openPopup();
    });
  });
}

function accommodationInsight(stays) {
  const detailed = stays.map((item) => ({ item, details: stayDetailFor(item) }));
  const priced = detailed
    .map((entry) => ({ ...entry, price: nightlyPrice(entry.details.price) }))
    .filter((entry) => entry.price !== null)
    .sort((a, b) => a.price - b.price);
  const firstCheck =
    detailed.find((entry) => entry.details.tone === "ok") ||
    detailed.find((entry) => entry.details.tone === "watch") ||
    detailed[0];
  const toneCounts = detailed.reduce(
    (counts, entry) => {
      counts[entry.details.tone] = (counts[entry.details.tone] || 0) + 1;
      return counts;
    },
    { ok: 0, watch: 0, risk: 0 },
  );

  return {
    bestRate: priced.length ? `${priced[0].item.name} from €${priced[0].price.toFixed(priced[0].price % 1 ? 2 : 0)}` : "Needs live quote",
    firstCheck: firstCheck ? firstCheck.item.name : "Compare direct",
    statusRead: `${countLabel(toneCounts.ok, "stronger signal")}, ${countLabel(toneCounts.watch, "check-direct signal")}, ${countLabel(toneCounts.risk, "high-risk signal")} for this stop`,
  };
}

function renderStayOption(item, cityItem, stopItem, exactUrl) {
  const details = stayDetailFor(item);
  const totalHint = estimateStayTotal(details.price, stopItem.nights);
  return `
    <article class="stay-option" data-place="${item.id}">
      <div class="stay-option-top">
        <div>
          <span class="status-pill ${details.tone}">${details.status}</span>
          <h4>${item.name}</h4>
        </div>
        <strong>${details.price}</strong>
      </div>
      <dl class="stay-facts">
        <div>
          <dt>Availability signal</dt>
          <dd>${details.signal}</dd>
        </div>
        <div>
          <dt>Group fit</dt>
          <dd>${details.groupFit}</dd>
        </div>
        <div>
          <dt>Rough stay cost</dt>
          <dd>${totalHint}</dd>
        </div>
      </dl>
      <div class="stay-actions">
        <a href="${exactUrl}" target="_blank" rel="noreferrer">Check 10 beds</a>
        <a href="${mapsUrl(item, cityItem)}" target="_blank" rel="noreferrer">Map</a>
      </div>
    </article>
  `;
}

function stayDetailFor(item) {
  return stayDetails[item.id] || stay("Check direct", "watch", "No public rate found", "No public availability signal found in this pass.", "Contact direct before relying on it for a group of ten.");
}

function estimateStayTotal(priceText, nights) {
  const perNight = nightlyPrice(priceText);
  if (perNight === null) return "Needs live quote";
  const perPerson = Math.round(perNight * nights);
  const group = Math.round(perNight * nights * 10);
  return `~€${perPerson} pp / ~€${group} group before fees/taxes`;
}

function nightlyPrice(priceText) {
  const match = priceText.match(/€([0-9]+(?:\.[0-9]+)?)/);
  return match ? Number(match[1]) : null;
}

function nightCount(nights) {
  return `${nights} ${nights === 1 ? "night" : "nights"}`;
}

function countLabel(count, singular) {
  return `${count} ${count === 1 ? singular : `${singular}s`}`;
}

function loadChecklistState() {
  try {
    return JSON.parse(localStorage.getItem(checklistStorageKey)) || {};
  } catch (error) {
    return {};
  }
}

function saveChecklistState() {
  try {
    localStorage.setItem(checklistStorageKey, JSON.stringify(checkedChecklistItems));
  } catch (error) {
    // Ignore private browsing/storage errors; the checklist still works for the session.
  }
}

function hostelworldExactUrl(cityId, stopItem) {
  const base = hostelworldCityUrls[cityId] || "https://www.hostelworld.com/";
  const [dateFrom, dateTo] = datesToIso(stopItem.dates);
  return `${base}?dateFrom=${dateFrom}&dateTo=${dateTo}&guests=10`;
}

function datesToIso(label) {
  const [start, end] = label.split(" - ");
  return [datePartToIso(start), datePartToIso(end)];
}

function addDaysIso(iso, days) {
  const date = isoToDate(iso);
  date.setUTCDate(date.getUTCDate() + days);
  return dateToIso(date);
}

function formatDateParts(iso) {
  const date = isoToDate(iso);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return {
    weekday: weekdays[date.getUTCDay()],
    date: `${date.getUTCDate()} ${months[date.getUTCMonth()]}`,
  };
}

function isoToDate(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function dateToIso(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function datePartToIso(part) {
  const months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  const match = part.match(/(\d{1,2})\s+([A-Za-z]{3})/);
  if (!match) return "2026-08-01";
  return `2026-${months[match[2]]}-${match[1].padStart(2, "0")}`;
}

function renderCategoryFilters() {
  const filters = document.querySelector("#categoryFilters");
  filters.innerHTML = Object.entries(categories)
    .map(
      ([key, category]) => `
        <button class="category-filter ${key === selectedCategory ? "active" : ""}" type="button" data-category="${key}">
          <span style="--dot:${category.color}"></span>${category.label}
        </button>
      `,
    )
    .join("");

  filters.querySelectorAll(".category-filter").forEach((button) => {
    button.addEventListener("click", () => {
      selectedCategory = button.dataset.category;
      renderCategoryFilters();
      renderCity();
      drawPlaces();
    });
  });
}

function renderTransport() {
  const transportList = document.querySelector("#transportList");
  transportList.innerHTML = currentRoute().transport
    .map(
      (item) => `
        <article class="transport-row">
          <div class="transport-row-top">
            <strong>${item.name}</strong>
            <span class="pick">${item.pick}</span>
          </div>
          <p>${item.reason}</p>
          <p class="transport-detail">${item.detail}</p>
        </article>
      `,
    )
    .join("");
}

function renderSources() {
  document.querySelector("#sourceList").innerHTML = sources
    .map(
      ([label, href, note]) => `
        <li>
          <a href="${href}" target="_blank" rel="noreferrer">${label}<span>${note}</span></a>
        </li>
      `,
    )
    .join("");
}

function drawRoute(fit) {
  const route = currentRoute();
  routeLayer.clearLayers();
  cityLayer.clearLayers();

  const routeCoords = route.stops.map((item) => {
    const cityItem = cities[item.cityId];
    return [cityItem.lat, cityItem.lng];
  });

  const line = L.polyline(routeCoords, {
    color: "#d75637",
    weight: 5,
    opacity: 0.92,
    lineJoin: "round",
  }).addTo(routeLayer);

  route.stops.forEach((item, index) => {
    const cityItem = cities[item.cityId];
    const marker = L.marker([cityItem.lat, cityItem.lng], {
      icon: cityMarkerIcon(index + 1, item.cityId === selectedCityId),
    })
      .addTo(cityLayer)
      .bindPopup(`<strong>${index + 1}. ${cityItem.name}</strong><br>${item.dates}<br>${item.nights} nights`);

    marker.on("click", () => selectCity(item.cityId, true));
  });

  drawPlaces();

  if (fit) {
    map.fitBounds(line.getBounds(), { padding: [78, 78] });
  }
}

function drawPlaces() {
  const cityItem = cities[selectedCityId];
  placeLayer.clearLayers();
  placeMarkers.clear();

  filteredPlaces(cityItem).forEach((item) => {
    const marker = L.circleMarker([item.lat, item.lng], placeMarkerStyle(item.category))
      .addTo(placeLayer)
      .bindPopup(
        `<strong>${item.name}</strong><br><span>${categoryName(item.category)}</span><br>${item.note}<br><a href="${mapsUrl(item, cityItem)}" target="_blank" rel="noreferrer">Open in Google Maps</a>`,
      );
    placeMarkers.set(item.id, marker);
  });
}

function filteredPlaces(cityItem) {
  if (selectedCategory === "all") return cityItem.places;
  return cityItem.places.filter((item) => item.category === selectedCategory);
}

function cityMarkerIcon(number, isSelected) {
  return L.divIcon({
    className: `city-pin ${isSelected ? "selected" : ""}`,
    html: `<span>${number}</span>`,
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -18],
  });
}

function placeMarkerStyle(category) {
  return {
    radius: 6,
    color: "#fffdf8",
    weight: 2,
    fillColor: categories[category].color,
    fillOpacity: 0.98,
  };
}

function selectCity(cityId, shouldZoom) {
  selectedCityId = cityId;
  renderItinerary();
  renderOperations();
  renderCity();
  drawRoute(false);

  if (shouldZoom) {
    zoomToSelectedCity();
    document.querySelector(".city-card").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function zoomToSelectedCity() {
  const cityItem = cities[selectedCityId];
  const points = [[cityItem.lat, cityItem.lng], ...filteredPlaces(cityItem).map((item) => [item.lat, item.lng])];
  const bounds = L.latLngBounds(points);
  map.fitBounds(bounds, {
    padding: [56, 56],
    maxZoom: cityItem.zoom,
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMap();
  document.querySelector("#fitRoute").addEventListener("click", () => drawRoute(true));
  document.querySelector("#checklistBackdrop").addEventListener("click", closeChecklistDrawer);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isChecklistOpen) closeChecklistDrawer();
  });
});
