const express = require('express');
const app = express();
app.use(express.json())
const cors = require('cors');
app.use(cors());

app.set('port', process.env.PORT || 8000);
app.locals.title = 'NoSnakeZones'
app.locals.noSnakeZones = [
  { "id": 1, "region": "Ireland", "livability": "High", "costOfLiving": "Moderate", "hasSnakes": false, "description": "Ireland is famous for its lush green landscapes, rich cultural heritage, and friendly people. Snakes have never been native to Ireland, adding to its charm." },
  { id: '2', region: "Hawaii", livability: "High", costOfLiving: "High", hasSnakes: false, description: "Hawaii is renowned for its tropical beauty, laid-back lifestyle, and diverse culture. While there are a few non-native snake species, they are not established, and the islands remain largely snake-free." },
  { id: '3', region: "Faroe Islands", livability: "Moderate", costOfLiving: "Moderate", hasSnakes: false, description: "The Faroe Islands offer stunning natural landscapes, a rich Viking history, and a close-knit community. Snakes are not native to these islands, making them safe from snake encounters." },
  { id: '4', region: "Svalbard (Norway)", livability: "Low", costOfLiving: "N/A", hasSnakes: false, description: "Svalbard is an Arctic archipelago known for its polar bears, glaciers, and remote wilderness. Due to its extreme climate, snakes are absent from Svalbard." },
  { id: '5', region: "Falkland Islands", livability: "Moderate", costOfLiving: "Moderate", hasSnakes: false, description: "The Falkland Islands offer rugged landscapes, abundant wildlife, and a peaceful atmosphere. Snakes are not native to these islands, making them safe for exploration." },
  { id: '6', region: "Galapagos Islands", livability: "Moderate", costOfLiving: "Moderate", hasSnakes: false, description: "The Galapagos Islands are renowned for their unique biodiversity and pristine ecosystems. While there are a few non-native snake species, they are closely monitored, and the islands remain relatively snake-free." },
  { id: '7', region: "Newfoundland and Labrador (Canada)", livability: "Moderate", costOfLiving: "Moderate", hasSnakes: false, description: "Newfoundland and Labrador offer stunning coastal landscapes, friendly locals, and abundant wildlife. Snakes are not native to this region, making it safe for outdoor activities." },
  { id: '8', region: "Seychelles", livability: "Moderate", costOfLiving: "High", hasSnakes: false, description: "Seychelles is a tropical paradise known for its crystal-clear waters, lush forests, and luxury resorts. While there are a few non-venomous snake species, they are rare and pose little threat to residents or tourists." },
  { id: '9', region: "Palau", livability: "Moderate", costOfLiving: "High", hasSnakes: false, description: "Palau is an archipelago paradise in the western Pacific Ocean, famous for its stunning coral reefs, pristine beaches, and rich culture. Snakes are not native to Palau, contributing to its appeal as a safe and tranquil destination." },
  { id: '10', region: "French Polynesia", livability: "Moderate", costOfLiving: "High", hasSnakes: false, description: "French Polynesia is renowned for its overwater bungalows, turquoise lagoons, and vibrant marine life. With no native snakes, the islands offer a safe and idyllic environment for residents and visitors alike." },
  { id: '11', region: "Saint Helena", livability: "Moderate", costOfLiving: "Moderate", hasSnakes: false, description: "Saint Helena is a remote island in the South Atlantic Ocean, known for its rugged beauty and historical significance. Snakes are not native to Saint Helena, making it a safe destination for nature lovers." },
  { id: '12', region: "Andaman Islands (India)", livability: "Moderate", costOfLiving: "Moderate", hasSnakes: false, description: "The Andaman Islands are renowned for their pristine beaches, lush rainforests, and vibrant marine life. While there are some snake species, they pose minimal threat to residents and visitors, and snake encounters are rare." },
  { id: '13', region: "Mauritius", livability: "Moderate", costOfLiving: "Moderate", hasSnakes: false, description: "Mauritius is a tropical paradise in the Indian Ocean, known for its stunning beaches, lush forests, and diverse culture. Snakes are not native to Mauritius, making it a safe destination for travelers." },
  { id: '14', region: "Bermuda", livability: "High", costOfLiving: "High", hasSnakes: false, description: "Bermuda is a British Overseas Territory known for its pink sand beaches, crystal-clear waters, and charming pastel-colored houses. Snakes are not native to Bermuda, allowing residents and visitors to enjoy outdoor activities without the fear of encountering snakes." },
  { id: '15', region: "Maldives", livability: "Moderate", costOfLiving: "High", hasSnakes: false, description: "The Maldives is a tropical paradise made up of over 1,000 coral islands, known for its luxurious resorts, pristine beaches, and vibrant marine life. Snakes are not native to the Maldives, making it a safe destination for beachgoers and scuba divers." },
  { id: '16', region: "Tuvalu", livability: "Low", costOfLiving: "N/A", hasSnakes: false, description: "Tuvalu is a remote island nation in the Pacific Ocean, known for its stunning coral atolls, friendly locals, and laid-back lifestyle. Snakes are not native to Tuvalu, making it a safe destination for travelers seeking peace and tranquility." },
  { id: '17', region: "Vanuatu", livability: "Moderate", costOfLiving: "Moderate", hasSnakes: false, description: "Vanuatu is an archipelago nation in the South Pacific Ocean, known for its lush rainforests, pristine beaches, and vibrant culture. While there are some snake species, encounters are rare, and the islands are considered safe for visitors." },
  { id: '18', region: "Saint Kitts and Nevis", livability: "Moderate", costOfLiving: "High", hasSnakes: false, description: "Saint Kitts and Nevis is a Caribbean paradise known for its stunning beaches, lush rainforests, and historic sites. Snakes are not native to these islands, making them a safe destination for travelers seeking relaxation and adventure." },
  { id: '19', region: "Saint Pierre and Miquelon (France)", livability: "Moderate", costOfLiving: "Moderate", hasSnakes: false, description: "Saint Pierre and Miquelon are French territories off the coast of Newfoundland, known for their rugged beauty, rich maritime history, and French culture. Snakes are not native to these islands, making them safe for exploration." },
  { id: '20', region: "Saint Vincent and the Grenadines", livability: "Moderate", costOfLiving: "Moderate", hasSnakes: false, description: "Saint Vincent and the Grenadines is a Caribbean nation known for its stunning beaches."},
  { id: '21', region: "Turks and Caicos Islands (UK)", livability: "Moderate", costOfLiving: "High", hasSnakes: false, description: "The Turks and Caicos Islands are a British Overseas Territory known for their pristine beaches, turquoise waters, and vibrant marine life. Snakes are not native to these islands, making them a safe destination for beach lovers and snorkelers." },
  { id: '22', region: "Azores (Portugal)", livability: "Moderate", costOfLiving: "Moderate", hasSnakes: false, description: "The Azores, an autonomous region of Portugal, offer lush landscapes, volcanic terrain, and a mild climate. Snakes are not native to the Azores, making it a safe destination for outdoor enthusiasts." },
  { id: '23', region: "Isle of Man (UK)", livability: "High", costOfLiving: "Moderate", hasSnakes: false, description: "The Isle of Man is known for its stunning coastline, historic sites, and motorcycle racing events. Snakes are not native to the Isle of Man, allowing residents and visitors to enjoy the island's natural beauty without concern." },
  { id: '24', region: "Santorini (Greece)", livability: "Moderate", costOfLiving: "High", hasSnakes: false, description: "Santorini is a picturesque Greek island famous for its white-washed buildings, stunning sunsets, and volcanic landscapes. Snakes are not native to Santorini, making it a popular destination for romantic getaways and relaxation." },
  { id: '25', region: "French Riviera (France)", livability: "High", costOfLiving: "High", hasSnakes: false, description: "The French Riviera, or Côte d'Azur, is known for its glamorous resorts, Mediterranean coastline, and vibrant nightlife. Snakes are not common in this region, allowing residents and tourists to enjoy the stunning beaches and cultural attractions." },
  { id: '26', region: "Channel Islands (UK)", livability: "Moderate", costOfLiving: "Moderate", hasSnakes: false, description: "The Channel Islands, located between England and France, offer beautiful beaches, historic landmarks, and a relaxed lifestyle. Snakes are not native to the Channel Islands, making them a safe destination for outdoor activities and exploration." },
  { id: '27', region: "Malta", livability: "Moderate", costOfLiving: "High", hasSnakes: false, description: "Malta is an archipelago in the Mediterranean known for its historic sites, crystal-clear waters, and vibrant culture. Snakes are not native to Malta, allowing visitors to explore the island's rich history and natural beauty without fear." },
  { id: '28', region: "Barbados", livability: "Moderate", costOfLiving: "High", hasSnakes: false, description: "Barbados is a Caribbean island famous for its stunning beaches, vibrant festivals, and rich colonial history. While there are a few non-venomous snake species, they are rare and pose little threat to residents or tourists." },
  { id: '29', region: "Alderney (UK)", livability: "Moderate", costOfLiving: "Moderate", hasSnakes: false, description: "Alderney is one of the Channel Islands known for its rugged coastline, rich history, and diverse wildlife. Snakes are not native to Alderney, making it a peaceful destination for nature lovers and outdoor enthusiasts." },
  { id: '30', region: "Montserrat", livability: "Low", costOfLiving: "Moderate", hasSnakes: false, description: "Montserrat is a Caribbean island known for its active volcano, black sand beaches, and lush rainforests. While there are some snake species, they are not commonly encountered, and the island remains largely snake-free." },
  { id: '31', region: "Cayman Islands", livability: "High", costOfLiving: "High", hasSnakes: false, description: "The Cayman Islands are a British Overseas Territory known for their stunning beaches, crystal-clear waters, and world-class diving sites. Snakes are not native to the Cayman Islands, making them a safe and luxurious destination for travelers." }
]

app.locals.snakes = [
  // { name: "Corn Snake", isVenemous: false, isAggressive: false, image: "https://www.thesprucepets.com/thmb/n0QvLg46o27XE8PjQSVtR6m7ZIo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/corn-snake-from-the-lower-florida-keys-530475947-588124bc5f9b58bdb3ec9f93.jpg" },
  { name: "Corn Snake", isVenemous: false, isAggressive: false, image: "John Smith" },
  { name: "Ball Python", isVenemous: false, isAggressive: false, image: "https://kinovareptiles.com/wp-content/uploads/2019/04/2016-10-24-15.17.17_2-1024x887.jpg" },
  { name: "King Snake", isVenemous: false, isAggressive: true, image: "https://msherps.com/wp-content/uploads/2021/08/Lhol-1-scaled.jpg" },
  { name: "Garter Snake", isVenemous: false, isAggressive: true, image: "https://msherps.com/wp-content/uploads/2021/08/IMG_4769-edited-scaled.jpg" },
  { name: "Milk Snake", isVenemous: false, isAggressive: false, image: "https://reptilerapture.net/assets/images/honduran-milksnake-adult-female-5feet.jpg" },
  { name: "Rosy Boa", isVenemous: false, isAggressive: true, image: "https://inaturalist-open-data.s3.amazonaws.com/photos/36509403/original.jpeg" },
  { name: "Hognose Snake", isVenemous: false, isAggressive: true, image: "https://herofortheplanet.org/longleaf/wp-content/uploads/sites/30/2021/05/Male_and_female_red_phase_Southern_hognose_snakes.jpg" },
  { name: "Rat Snake", isVenemous: false, isAggressive: false, image: "https://i.redd.it/lr71oyhysq081.jpg" },
  { name: "Pine Snake", isVenemous: false, isAggressive: true, image: "https://cincinnatizoo.org/wp-content/uploads/2013/02/florida-pine-snake-scaled.jpg" },
  { name: "Gopher Snake", isVenemous: false, isAggressive: false, image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Pituophis_catenifer_catenifer.jpg" },
  { name: "Black Rat Snake", isVenemous: false, isAggressive: true, image: "https://images.saymedia-content.com/.image/t_share/MjAxNjA0OTU3NDIwMzk3OTUz/facts-about-southern-black-racer-snakes.jpg" },
  { name: "Blue Racer", isVenemous: false, isAggressive: false, image: "https://thetrustees.org/wp-content/uploads/2023/05/PhotobyJackYuen-scaled.jpg" },
  { name: "Bull Snake", isVenemous: false, isAggressive: true, image: "https://facts.net/wp-content/uploads/2023/09/14-surprising-facts-about-bullsnake-1696052045.jpg" },
  { name: "Coachwhip Snake", isVenemous: false, isAggressive: false, image: "https://www.macrophotobug.com/wp-content/uploads/2016/06/coachwhip-mating-pair-colorado.jpg" },
  { name: "Indigo Snake", isVenemous: false, isAggressive: true, image: "https://wildlifeflorida.org/wp-content/uploads/2023/10/8427810580_8b3b886c2a_k.jpg" },
  { name: "Cape Gopher Snake", isVenemous: false, isAggressive: false, image: "https://reptilerapture.net/cdn-cgi/image/quality%3D85/assets/images/baja-cape-gopher-f.jpg" },
  { name: "Eastern Hognose Snake", isVenemous: false, isAggressive: true, image: "https://npr.brightspotcdn.com/dims4/default/b0cb6ba/2147483647/strip/true/crop/960x540+0+37/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwxpr%2Ffiles%2F202106%2F10001496_10152014679797111_1281201188321088257_n.jpg" },
  { name: "Longnose Snake", isVenemous: false, isAggressive: false, image: "https://lh3.googleusercontent.com/proxy/KS_ZYe86ju1vKzvI_VmubJ4EusUmeAcwmigRZZ7Fu6yPpJ94HPzX5B63DM1O7uuppI7ChNelEOOw9OIu90QRFwD2brbdVFqGFslWPpmiDBfulTsZOUcWGcMouKRglunrOsHYcg" },
  { name: "Patch-nosed Snake", isVenemous: false, isAggressive: true, image: "https://californiaherps.com/snakes/images/shvirgulteaslors220.jpg" },
  { name: "Plains Hognose Snake", isVenemous: false, isAggressive: false, image: "https://www.thesprucepets.com/thmb/B6ON7RJA-kGViF6wnQ2FTBcBJ6w=/2121x0/filters:no_upscale():strip_icc()/GettyImages-487494818-9e5087a02d154515aabe5dd40f7449b9.jpg" },
  { name: "Copperhead", isVenemous: true, isAggressive: false, image: "https://i.redd.it/ncbzr0lrigaa1.jpg" },
  { name: "Cottonmouth", isVenemous: true, isAggressive: true, image: "https://www.nps.gov/bith/learn/nature/images/cottonmouth_USFWS-photo_JesusMoreno.jpg" },
  { name: "Rattlesnake", isVenemous: true, isAggressive: false, image: "https://people.com/thmb/hFHkzxCULdyfKBuLH6BzL3Bif30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(735x198:737x200)/rattlesnake-discovery-082123-tout-5ddc306ccb8c45b5891c6d6ac0b0fbe7.jpg" },
  { name: "Cobra", isVenemous: true, isAggressive: true, image: "https://people.com/thmb/EmUZlWzaFV0o9Lr1K8XbmXtc4m8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/cobra-040523-4264ad06aec145a991c94ecda8be78a6.jpg" },
  { name: "Taipan", isVenemous: true, isAggressive: false, image: "https://media.pri.org/s3fs-public/56809792.jpg" },
  { name: "Black Mamba", isVenemous: true, isAggressive: true, image: "https://www.treehugger.com/thmb/U-UNHRGofknYfPuhVt0Ap9QQ_yM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-182381530-c11214cea58a42a4b414e9d9d823fdcb.jpg" },
  { name: "Inland Taipan", isVenemous: true, isAggressive: false, image: "https://media.australian.museum/media/dd/images/Some_image.width-1200.cc00a1a.jpg" },
  { name: "Russell's Viper", isVenemous: true, isAggressive: true, image: "https://s3.amazonaws.com/media.jungledragon.com/images/806/20839_medium.JPG?AWSAccessKeyId=05GMT0V3GWVNE7GGM1R2&Expires=1714608010&Signature=%2FWhTcVgBNGvfIdiO6ebT7uIN1T0%3D" },
  { name: "Saw-scaled Viper", isVenemous: true, isAggressive: false, image: "https://res.cloudinary.com/roundglass/image/upload/c_crop,h_1439,w_2560,x_0,y_131/f_auto/q_auto/c_limit,w_1500/v1671605742/rg/collective/media/goa-bhagwan-mahavir-wls-saw-scaled-viper-one-curled-omkar-dharwadkar_lczmds.jpg" },
  { name: "Boomslang", isVenemous: true, isAggressive: true, image: "https://4x4afrika.com/wp-content/uploads/2022/04/Boomslang-male-Johan-Marais.jpg" },
  { name: "King Cobra", isVenemous: true, isAggressive: false, image: "https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_cobra.jpg" },
  { name: "Gaboon Viper", isVenemous: true, isAggressive: true, image: "https://undergroundreptileshub.com/wp-content/uploads/2022/08/195833802_313943603680793_3971795530916219274_n.jpg" },
  { name: "Fer-de-lance", isVenemous: true, isAggressive: false, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Lachesis_muta_muta.jpg/1200px-Lachesis_muta_muta.jpg" },
  { name: "Tiger Snake", isVenemous: true, isAggressive: true, image: "https://media.australian.museum/media/dd/images/Some_image.width-1600.383c7d5.jpg" },
  { name: "Death Adder", isVenemous: true, isAggressive: false, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7s51e7FUCr82gJJ4JTf8zBMTre-Og6M-r8ZFdoMyZXw&s" },
  { name: "Puff Adder", isVenemous: true, isAggressive: true, image: "https://cdn.kloofconservancy.org.za/le/wp-content/uploads/2022/07/09212827/Leopards-Echo-Puff-adder-Nick-Evans-1.jpg" },
  { name: "Coral Snake", isVenemous: true, isAggressive: false, image: "https://www.poisoncentertampa.org/wp-content/uploads/2020/02/bigstock-Eastern-Coral-Snake-63159841.jpg" },
  { name: "Fierce Snake", isVenemous: true, isAggressive: true, image: "https://cdn.newsapi.com.au/image/v1/667872dcf0703bb7aea9babf6ed16a92" },
  { name: "Krait", isVenemous: true, isAggressive: false, image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Laticauda_laticaudata.jpg" },
  { name: "Black-Necked Spitting Cobra", isVenemous: true, isAggressive: true, image: "https://facts.net/wp-content/uploads/2023/10/15-intriguing-facts-about-black-spitting-cobra-1696206781.jpg" }
];

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.get('/', (request, response) => {
    response.send('No Snake Zones!');
})

app.get('/api/v1/noSnakeZones', (request, response) => {
    const noSnakeZones = app.locals.noSnakeZones

    response.json({noSnakeZones})
})

app.get('/api/v1/snakes', (request, response) => {
  const snakes = app.locals.snakes
 

  response.json({snakes})
})

// app.get("/api/v1/noSnakeZones/:id", (request, response) => {
//     const zones = app.locals.noSnakeZones
//     const id = request.params.id

//     const foundZone = zones.find(zone => zone.id === id)
//     if(foundZone) {
//         response.status(200).json({ foundZone })
//     } else {
//         response.sendStatus(404)
//     }
// })

// app.post('/api/v1/noSnakeZones', (request, response) => {
//     const { region , livability, costOfLiving, hasSnakes, description } = request.body
//     const newZone = {
//         id: `${Date.now()}`,
//         region: region,
//         livability: livability,
//         costOfLiving: costOfLiving,
//         hasSnakes: hasSnakes,
//         description: description
//     }

//     app.locals.noSnakeZones.push(newZone)
//     response.status(201).send(newZone)
// })

// app.delete('/api/v1/noSnakeZones/:id', (request, response) => {
//     const id = request.params.id
//     const zoneToDelete = app.locals.noSnakeZones.find(zone => zone.id === id)

//     if(zoneToDelete) {
//         app.locals.noSnakeZones.splice(app.locals.noSnakeZones.indexOf(zoneToDelete), 1)
//         response.status(201).send(zoneToDelete)
//     } else {
//         response.sendStatus(404)
//     }
// })

// app.put('/api/v1/noSnakeZones/:id', (request, response) => {
//     const id = request.params.id
//     const { region , livability, costOfLiving, hasSnakes, description } = request.body
//     const zoneToPut = {
//         id: id,
//         region: region,
//         livability: livability,
//         costOfLiving: costOfLiving,
//         hasSnakes: hasSnakes,
//         description: description
//     }

//     const foundZone = app.locals.noSnakeZones.find(zone => zone.id === id)

//     if(foundZone) {
//         app.locals.noSnakeZones[app.locals.noSnakeZones.indexOf(foundZone)] = zoneToPut
//         response.status(200).send(zoneToPut)
//     } else {
//         app.locals.noSnakeZones.push(zoneToPut)
//     }
// })

// app.patch('/api/v1/noSnakeZones/:id', (request, response) => {
//     const id = request.params.id
//     const updates = request.body
//     const foundZone = app.locals.noSnakeZones.find(zone => zone.id === id)

//     if(foundZone) {
//         Object.keys(updates).forEach(key => {foundZone[key] = updates[key]})
//         response.status(201).send(foundZone)
//     } else {
//         response.status(404).send('Zone not found')
//     }
// })




 


// const express = require('express');
// const fs = require('fs');
// const app = express();
// let persistentData = {};
// try {
//     persistentData = JSON.parse(fs.readFileSync('data.json', 'utf8'));
// } catch (err) {
//     console.error('Error reading data file:', err);
// }
// app.use(express.json());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     persistentData.user = {name: 'Tom'}
//     fs.writeFileSync('data.json', JSON.stringify(persistentData, null, 2));
//     app.locals.persistentData = persistentData;
//     next();
// });
// app.get('/data', (req, res) => {
//     res.json(app.locals.persistentData);
// });
// app.post('/data', (req, res) => {
//     const newData = req.body;
//     let existingData = [];
//     console.log(newData);
//     try {
//         existingData = JSON.parse(fs.readFileSync('data.json', 'utf8'));
//         if (!Array.isArray(existingData)) {
//             throw new Error('Data in data.json is not an array');
//         }
//     } catch (err) {
//         console.error('Error reading or parsing data file:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//     }
//     existingData.push(newData);
//     fs.writeFileSync('data.json', JSON.stringify(existingData, null, 2));
//     res.send('Data received and persisted successfully');
// });
// app.listen(3001, () => {
//     console.log('Server is running on port 3001');
// });
