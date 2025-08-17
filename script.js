// Initialize the map
var map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

// Add OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// ---- Add Markers with Images ----
var locations = [
  {
    name: "Mohenjo-daro (Indus Valley Civilization)",
    coords: [27.3286, 68.1386],
    desc: `
      <b>Period:</b> c. 2500 BCE<br>
      <b>Artistic Significance:</b> One of the world's earliest urban settlements with advanced town planning. Famous for the <i>Dancing Girl</i> bronze statue (4.5 inches tall), soapstone seals with Indus script, and terracotta figurines.<br>
      <b>UNESCO World Heritage Site:</b> Yes (since 1980)<br>
      <b>Key Features:</b> Great Bath, grid-pattern streets, elaborate drainage system<br>
      <b>Materials Used:</b> Bronze, terracotta, steatite, shell
    `,
    img: "mj.jpg"
  },
  {
    name: "Sarnath (Maurya/Gupta Period)",
    coords: [25.3814, 83.0220],
    desc: `
      <b>Period:</b> 3rd century BCE - 6th century CE<br>
      <b>Artistic Significance:</b> Site of Buddha's first sermon. Home to Ashoka's <i>Lion Capital</i> (now India's national emblem) and exquisite Gupta-era Buddha statues that established the classical Indian art style.<br>
      <b>UNESCO World Heritage Site:</b> Part of "Archaeological Site of Sarnath" (tentative list)<br>
      <b>Key Features:</b> Dhamek Stupa, Ashokan pillar remnants, museum with Gupta sculptures<br>
      <b>Art Style:</b> Transition from aniconic to iconic Buddha representations
    `,
    img: "sarnath.jpg"
  },
  {
    name: "Ajanta Caves (Maharashtra)",
    coords: [20.5519, 75.7033],
    desc: `
      <b>Period:</b> 2nd century BCE - 6th century CE<br>
      <b>Artistic Significance:</b> 30 rock-cut Buddhist cave monuments containing what are considered the finest surviving examples of ancient Indian painting, particularly the exquisite frescoes of Jataka tales.<br>
      <b>UNESCO World Heritage Site:</b> Yes (since 1983)<br>
      <b>Key Features:</b> Cave 1 (Bodhisattva murals), Cave 2 (detailed ceiling art), Cave 26 (large chaitya)<br>
      <b>Technique:</b> Fresco secco (paint on dry plaster) using mineral pigments
    `,
    img: "ajanta.jpg"
  },
  {
    name: "Khajuraho Temples (Madhya Pradesh)",
    coords: [24.8318, 79.9199],
    desc: `
      <b>Period:</b> 950–1050 CE (Chandela Dynasty)<br>
      <b>Artistic Significance:</b> Group of Hindu and Jain temples famous for their nagara-style architecture and erotic sculptures representing the kama sutra tradition. Only about 20 temples remain of original 85.<br>
      <b>UNESCO World Heritage Site:</b> Yes (since 1986)<br>
      <b>Key Temples:</b> Kandariya Mahadeva (largest), Lakshmana, Vishvanatha<br>
      <b>Sculpture Themes:</b> Divine couples (mithunas), celestial maidens (apsaras), everyday life
    `,
    img: "kj.jpeg"
  },
  {
    name: "Thanjavur (Chola Dynasty)",
    coords: [10.7867, 79.1378],
    desc: `
      <b>Period:</b> 9th-13th century CE<br>
      <b>Artistic Significance:</b> Home to the Brihadeeswarar Temple (1010 CE), a UNESCO site representing Chola architecture's peak. Also renowned for Chola bronze sculptures like the Nataraja.<br>
      <b>UNESCO World Heritage Site:</b> "Great Living Chola Temples" (since 1987)<br>
      <b>Key Features:</b> 216 ft vimana (tower), massive lingam, frescoes<br>
      <b>Bronze Technique:</b> Lost-wax casting (cire perdue) producing hollow icons
    `,
    img: "thanja.jpg"
  },
  {
    name: "Agra (Mughal Empire)",
    coords: [27.1767, 78.0081],
    desc: `
      <b>Period:</b> 16th-17th century CE<br>
      <b>Artistic Significance:</b> Mughal capital housing the Taj Mahal (1632), the pinnacle of Indo-Islamic architecture. Also center for Mughal miniature painting under Akbar's ateliers.<br>
      <b>UNESCO World Heritage Site:</b> Taj Mahal (since 1983), Agra Fort (since 1983)<br>
      <b>Key Features:</b> Pietra dura inlay work, chahar bagh gardens, calligraphy<br>
      <b>Painting Schools:</b> Developed the Mughal style blending Persian and Indian elements
    `,
    img: "taj.jpg"
  },
  {
    name: "Jaipur (Rajput Kingdom)",
    coords: [26.9124, 75.7873],
    desc: `
      <b>Period:</b> 18th century onward<br>
      <b>Artistic Significance:</b> Center of Rajput miniature painting schools (Kangra, Mewar styles) known for poetic Krishna themes and vibrant colors. Also home to Hawa Mahal's intricate jali work.<br>
      <b>UNESCO World Heritage Site:</b> Jaipur City (since 2019)<br>
      <b>Key Features:</b> City Palace murals, Amer Fort mirrors, gemstone art<br>
      <b>Painting Characteristics:</b> Flat perspective, bold outlines, nature motifs
    `,
    img: "hawa.jpeg"
  },
  {
    name: "Santiniketan (Bengal Renaissance)",
    coords: [23.6795, 87.6856],
    desc: `
      <b>Period:</b> Early 20th century<br>
      <b>Artistic Significance:</b> Founded by Rabindranath Tagore as Visva-Bharati University (1921), becoming India's first modernist art center. Nurtured the Bengal School rejecting colonial academic art.<br>
      <b>UNESCO World Heritage Site:</b> Tentative list (since 2010)<br>
      <b>Key Artists:</b> Nandalal Bose, Benode Behari Mukherjee, Ramkinkar Baij<br>
      <b>Style:</b> Synthesis of Indian folk and Asian traditions with modernism
    `,
    img: "santi.webp"
  },
  {
    name: "Baroda (Modern Indian Art)",
    coords: [22.3072, 73.1812],
    desc: `
      <b>Period:</b> Post-Independence (1950s onward)<br>
      <b>Artistic Significance:</b> The Faculty of Fine Arts at MS University became India's most progressive art school, producing modern masters like M.F. Husain, Tyeb Mehta, and Nasreen Mohamedi.<br>
      <b>Key Movements:</b> Progressive Artists' Group, Neo-Tantric art<br>
      <b>Characteristics:</b> Bold experimentation with cubism, abstraction, and indigenous forms<br>
      <b>Legacy:</b> Redefined Indian modernism beyond colonial frameworks
    `,
    img: "baroda.jpg"
  },
  {
    name: "New Delhi (Contemporary Art)",
    coords: [28.6139, 77.2090],
    desc: `
      <b>Period:</b> 21st century<br>
      <b>Artistic Significance:</b> Hub for contemporary Indian art with institutions like National Gallery of Modern Art (NGMA), Kiran Nadar Museum, and India Art Fair. Center for new media and installation art.<br>
      <b>Key Venues:</b> Lodhi Art District (public murals), Dilli Haat crafts<br>
      <b>Trends:</b> Global engagement while addressing local issues like urbanization<br>
      <b>Notable Artists:</b> Subodh Gupta, Bharti Kher, Shilpa Gupta
    `,
    img: "nd.jpg"
  }
];

// Loop through locations and add markers with custom icons
var customIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

locations.forEach(function(loc) {
  L.marker(loc.coords, {icon: customIcon}).addTo(map)
    .bindPopup(`
      <div style="max-width:300px">
        <h3 style="margin:5px 0;color:#d35400">${loc.name}</h3>
        <img src="${loc.img}" alt="${loc.name}" style="width:100%;height:auto;margin-bottom:8px">
        <div style="font-size:0.9em;line-height:1.4">${loc.desc}</div>
      </div>
    `);
});

// Add layer control
L.control.layers(null, null, {collapsed:false}).addTo(map);