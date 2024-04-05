const express = require('express');
const app = express();
app.use(express.json())

app.set('port', process.env.PORT || 3000);
app.locals.title = 'NoSnakeZone'
app.locals.noSnakeZones = 
[ { id: '1', region: "Ireland", livability: "High", costOfLiving: "Moderate", hasSnakes: false, description: "Ireland is famous for its lush green landscapes, rich cultural heritage, and friendly people. Snakes have never been native to Ireland, adding to its charm." },
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
  { id: '31', region: "Cayman Islands", livability: "High", costOfLiving: "High", hasSnakes: false, description: "The Cayman Islands are a British Overseas Territory known for their stunning beaches, crystal-clear waters, and world-class diving sites. Snakes are not native to the Cayman Islands, making them a safe and luxurious destination for travelers." },
];

app.get('/', (request, response) => {
    response.send('No Snake Zones!');
})

app.get('/api/v1/noSnakeZones', (request, response) => {
    const noSnakeZones = app.locals.noSnakeZones

    response.json({ noSnakeZones })
})

app.get("/api/v1/noSnakeZones/:id", (request, response) => {
    const zones = app.locals.noSnakeZones
    const id = request.params.id

    const foundZone = zones.find(zone => zone.id === id)
    if(foundZone) {
        response.status(200).json({ foundZone })
    } else {
        response.sendStatus(404)
    }
})

app.post('/api/v1/noSnakeZones', (request, response) => {
    const { region , livability, costOfLiving, hasSnakes, description } = request.body
    const newZone = {
        id: `${Date.now()}`,
        region: region,
        livability: livability,
        costOfLiving: costOfLiving,
        hasSnakes: hasSnakes,
        description: description
    }

    app.locals.noSnakeZones.push(newZone)
    response.status(201).send(newZone)
})

app.delete('/api/v1/noSnakeZones/:id', (request, response) => {
    const id = request.params.id
    const zoneToDelete = app.locals.noSnakeZones.find(zone => zone.id === id)

    if(zoneToDelete) {
        app.locals.noSnakeZones.splice(app.locals.noSnakeZones.indexOf(zoneToDelete), 1)
        response.status(201).send(zoneToDelete)
    } else {
        response.sendStatus(404)
    }
})

app.put('/api/v1/noSnakeZones/:id', (request, response) => {
    const id = request.params.id
    const { region , livability, costOfLiving, hasSnakes, description } = request.body
    const zoneToPut = {
        id: id,
        region: region,
        livability: livability,
        costOfLiving: costOfLiving,
        hasSnakes: hasSnakes,
        description: description
    }

    const foundZone = app.locals.noSnakeZones.find(zone => zone.id === id)

    if(foundZone) {
        app.locals.noSnakeZones[app.locals.noSnakeZones.indexOf(foundZone)] = zoneToPut
        response.status(200).send(zoneToPut)
    } else {
        app.locals.noSnakeZones.push(zoneToPut)
    }
})

app.patch('/api/v1/noSnakeZones/:id', (request, response) => {
    const id = request.params.id
    const updates = request.body
    const foundZone = app.locals.noSnakeZones.find(zone => zone.id === id)

    if(foundZone) {
        Object.keys(updates).forEach(key => {foundZone[key] = updates[key]})
        response.status(201).send(foundZone)
    } else {
        response.status(404).send('Zone not found')
    }
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

