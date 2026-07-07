import { DATA } from './data';

// Product catalogs for subpages. Each entry keeps ES/EN copy so pages
// can pick the right locale without duplicating the array structure.

// Prices are authored as display strings (MXN); cents are derived once at
// module load so the checkout API and the UI share a single source of truth.
export function priceToCents(price) {
  const numeric = parseFloat(String(price).replace(/[^0-9.]/g, ''));
  return Math.round(numeric * 100);
}

function withCents(product) {
  return { ...product, priceCents: priceToCents(product.price) };
}

export const solarPanels = [
  {
    slug: 'panel-portatil-220w',
    family: 'Solar',
    image:
      '/products/img-13.png',
    price: '$8,249',
    saleStatus: { es: 'Bajo pedido', en: 'On order' },
    title: { es: 'Panel portátil 220W', en: 'Portable 220W panel' },
    description: {
      es: 'Panel solar plegable de potencia media para recargar estaciones EcoFlow durante el día. Conviene cuando quieres más velocidad que un panel compacto sin cargar con un panel grande.',
      en: 'Mid-power folding solar panel for recharging EcoFlow stations during the day. Fits when you want more speed than a compact panel without carrying a large one.'
    },
    featured: true
  },
  {
    slug: 'panel-rigido-400w',
    family: 'Solar',
    image:
      '/products/img-02.png',
    price: '$11,349',
    saleStatus: { es: 'Bajo pedido', en: 'On order' },
    title: { es: 'Panel rígido 400W, par', en: 'Rigid 400W panels, pair' },
    description: {
      es: 'Par de paneles rígidos para instalación más fija en techo, terraza o estructura. Conviene cuando buscas carga solar diaria y estable para estaciones DELTA o sistemas de respaldo.',
      en: 'Pair of rigid panels for fixed rooftop, terrace, or structural mounting. Fits when you need daily, stable solar input for DELTA stations or backup systems.'
    },
    featured: true
  },
  {
    slug: 'panel-110w',
    family: 'EcoFlow',
    image:
      '/products/img-01.png',
    price: '$4,999',
    saleStatus: { es: 'Bajo pedido', en: 'On order' },
    title: { es: 'Panel Solar EcoFlow 110W', en: 'EcoFlow 110W solar panel' },
    description: {
      es: 'Panel plegable y fácil de mover para recargar estaciones RIVER o DELTA pequeñas. Es buena opción para camping, apagones cortos y mantener equipos básicos con apoyo solar.',
      en: 'Folding, easy-to-move panel for recharging RIVER or small DELTA stations. Great for camping, short outages, and keeping essentials running with solar support.'
    }
  },
  {
    slug: 'panel-160w',
    family: 'EcoFlow',
    image:
      '/products/img-22.png',
    price: '$5,499',
    saleStatus: { es: 'Bajo pedido', en: 'On order' },
    title: { es: 'Panel Solar 160W', en: '160W solar panel' },
    description: {
      es: 'Panel portátil con mayor captación que uno compacto. Sirve para recargar estaciones medianas durante el día y extender autonomía en viajes, campo o respaldo en casa.',
      en: 'Portable panel with higher yield than a compact one. Ideal for recharging mid-size stations during the day and extending runtime on trips, in the field, or at home.'
    }
  },
  {
    slug: 'panel-125w',
    family: 'EcoFlow',
    image:
      '/products/img-26.png',
    price: '$5,299',
    saleStatus: { es: 'Bajo pedido', en: 'On order' },
    title: { es: 'Panel Solar 125W', en: '125W solar panel' },
    description: {
      es: 'Panel intermedio para quien necesita más carga que un panel chico, pero quiere seguir con algo ligero. Funciona bien con estaciones portátiles y uso ocasional.',
      en: 'Mid-range panel for anyone who needs more input than a compact one but still wants something light. Works well with portable stations and occasional use.'
    }
  },
  {
    slug: 'panel-400w-oficial',
    family: 'EcoFlow',
    image:
      '/products/img-26.png',
    price: '$14,849',
    saleStatus: { es: 'Bajo pedido', en: 'On order' },
    title: { es: 'Panel Solar EcoFlow 400W', en: 'EcoFlow 400W solar panel' },
    description: {
      es: 'Panel portátil de alta potencia para cargar más rápido estaciones DELTA. Conviene cuando necesitas recuperar batería durante el día y aprovechar mejor las horas de sol.',
      en: 'High-output portable panel for faster DELTA recharging. Great when you need to top up the battery during the day and make the most of sunny hours.'
    }
  },
  {
    slug: 'panel-160w-b',
    family: 'EcoFlow',
    image:
      '/products/img-22.png',
    price: '$5,602.59',
    saleStatus: { es: 'Bajo pedido', en: 'On order' },
    title: { es: 'Panel Solar 160W', en: '160W solar panel' },
    description: {
      es: 'Panel portátil con mayor captación que uno compacto. Sirve para recargar estaciones medianas durante el día y extender autonomía en viajes, campo o respaldo en casa.',
      en: 'Portable panel with higher yield than a compact one. Ideal for recharging mid-size stations during the day and extending runtime on trips, in the field, or at home.'
    }
  },
  {
    slug: 'panel-60w-tipo-c',
    family: 'Tipo C',
    image:
      '/products/img-26.png',
    price: '$2,899',
    saleStatus: { es: 'Bajo pedido', en: 'On order' },
    title: { es: 'Panel Solar 60W Tipo C', en: '60W Type C solar panel' },
    description: {
      es: 'Panel compacto para cargas pequeñas, celulares, tablets o estaciones muy portátiles. Es práctico para movilidad, emergencias ligeras y uso donde el espacio importa.',
      en: 'Compact panel for small loads, phones, tablets, or ultra-portable stations. Practical for mobility, light emergencies, and use where space matters.'
    }
  }
].map(withCents);

export const batteries = [
  {
    slug: 'delta-2-extra',
    family: 'DELTA 2',
    image:
      '/products/img-03.png',
    price: '$12,930.17',
    saleStatus: { es: 'Bajo pedido', en: 'On order' },
    title: {
      es: 'EcoFlow Batería Extra DELTA 2 (1024Wh)',
      en: 'EcoFlow DELTA 2 Extra Battery (1024Wh)'
    },
    description: {
      es: 'Batería extra para duplicar la autonomía de una DELTA 2 compatible. Sirve cuando quieres mantener refrigerador, internet o luces durante más horas sin cambiar de estación.',
      en: 'Extra battery to double the runtime of a compatible DELTA 2. Ideal when you want to keep a fridge, internet, or lights on for longer without changing stations.'
    },
    featured: true
  },
  {
    slug: 'delta-3-max-plus-extra',
    family: 'DELTA 3',
    image:
      '/products/img-07.png',
    price: '$20,688.79',
    saleStatus: { es: 'Bajo pedido', en: 'On order' },
    title: {
      es: 'EcoFlow DELTA 3 Max Plus (2048Wh) Batería Extra',
      en: 'EcoFlow DELTA 3 Max Plus (2048Wh) Extra Battery'
    },
    description: {
      es: 'Batería adicional de 2048Wh para extender un sistema DELTA 3 Max Plus. Conviene para apagones más largos, oficina completa o cargas esenciales por más tiempo.',
      en: 'Additional 2048Wh battery to extend a DELTA 3 Max Plus system. Great for longer outages, a full office, or essential loads for extended time.'
    }
  },
  {
    slug: 'glacier-extra',
    family: 'GLACIER',
    image:
      '/products/img-23.png',
    price: '$6,033.62',
    saleStatus: { es: 'Bajo pedido', en: 'On order' },
    title: { es: 'Batería Extra GLACIER', en: 'GLACIER Extra Battery' },
    description: {
      es: 'Batería removible para el refrigerador portátil GLACIER. No es para respaldar una casa; sirve para usar el cooler sin cable y mantener alimentos o bebidas frías en movimiento.',
      en: 'Removable battery for the GLACIER portable fridge. Not for home backup; it keeps the cooler running unplugged so food and drinks stay cold on the move.'
    }
  },
  {
    slug: 'delta-pro-3-extra',
    family: 'DELTA Pro 3',
    image:
      '/products/img-05.png',
    price: '$47,412.93',
    saleStatus: { es: 'Bajo pedido', en: 'On order' },
    title: { es: 'Batería Extra DELTA Pro 3', en: 'DELTA Pro 3 Extra Battery' },
    description: {
      es: 'Batería de expansión para DELTA Pro 3. Sirve para que el respaldo residencial dure más horas con refrigerador, bomba, internet o circuitos prioritarios.',
      en: 'Expansion battery for DELTA Pro 3. Extends residential backup for a fridge, pump, internet, or priority circuits.'
    }
  },
  {
    slug: 'delta-pro-ultra',
    family: 'Ultra',
    image:
      '/products/img-10.png',
    price: '$55,171.55',
    saleStatus: { es: 'Bajo pedido', en: 'On order' },
    title: { es: 'Batería DELTA Pro Ultra', en: 'DELTA Pro Ultra Battery' },
    description: {
      es: 'Módulo de batería para DELTA Pro Ultra. Es para sistemas residenciales grandes y permite crecer la autonomía por etapas según los circuitos que quieras respaldar.',
      en: 'Battery module for DELTA Pro Ultra. Designed for large residential systems and scales runtime in stages based on the circuits you back up.'
    }
  },
  {
    slug: 'delta-2-max-extra',
    family: 'DELTA 2 Max',
    image:
      '/products/img-04.png',
    price: '$18,964.66',
    saleStatus: { es: 'Bajo pedido', en: 'On order' },
    title: { es: 'Batería Extra DELTA 2 Max', en: 'DELTA 2 Max Extra Battery' },
    description: {
      es: 'Batería adicional para DELTA 2 Max. Ayuda a mantener refrigerador, oficina, TV o luces por más tiempo durante apagones prolongados.',
      en: 'Additional battery for DELTA 2 Max. Helps keep a fridge, office, TV, or lights on longer during extended outages.'
    }
  }
].map(withCents);

// Bundle copy templated by usage category. Each package = station + solar
// panel, with specs and per-device runtime estimates. All images are local.
const BUNDLE_CATS = {
  emergencia: {
    family: { es: 'Emergencia ligera', en: 'Light emergency' },
    intro: {
      es: 'Paquete ultra portátil para apagones cortos, comunicación, luz básica y recarga solar durante el día.',
      en: 'Ultra-portable bundle for short outages, communication, basic lighting, and solar recharge during the day.'
    },
    usage: {
      es: 'Pensado para internet, celular, iluminación LED y una laptop eficiente. No conviene para refrigerador, microondas o cargas de calor.',
      en: 'Designed for internet, phone, LED lighting, and an efficient laptop. Not for a fridge, microwave, or heating loads.'
    },
    loads: [
      { es: 'Módem/router 12 W', en: 'Modem/router 12 W' },
      { es: 'Módem + luz LED 22 W', en: 'Modem + LED light 22 W' },
      { es: 'Módem + luz + celulares 32 W', en: 'Modem + light + phones 32 W' },
      { es: '+ laptop eficiente 77 W', en: '+ efficient laptop 77 W' }
    ]
  },
  homeoffice: {
    family: { es: 'Home office y entretenimiento', en: 'Home office and entertainment' },
    intro: {
      es: 'Paquete para home office, entretenimiento ligero y ventilación básica.',
      en: 'Bundle for home office, light entertainment, and basic ventilation.'
    },
    usage: {
      es: 'Para trabajar varias horas con internet, laptop, monitor, TV o ventilador. Es portátil, pero no sustituye un sistema residencial.',
      en: 'For several hours of work with internet, laptop, monitor, TV, or fan. Portable, but not a replacement for a residential system.'
    },
    loads: [
      { es: 'Laptop eficiente 45 W', en: 'Efficient laptop 45 W' },
      { es: 'Módem + laptop 57 W', en: 'Modem + laptop 57 W' },
      { es: 'Módem + laptop + monitor 82 W', en: 'Modem + laptop + monitor 82 W' },
      { es: '+ ventilador 132 W', en: '+ fan 132 W' },
      { es: '+ TV 212 W', en: '+ TV 212 W' }
    ]
  },
  esenciales: {
    family: { es: 'Cargas esenciales del hogar', en: 'Essential household loads' },
    intro: {
      es: 'Paquete para respaldo esencial de casa: refrigerador eficiente, internet, luces, TV y computadoras, con carga solar de apoyo.',
      en: 'Bundle for essential home backup: efficient fridge, internet, lights, TV, and computers, with supporting solar charge.'
    },
    usage: {
      es: 'Adecuado para refrigerador eficiente, internet, luces, TV, computadoras y algunos aparatos de cocina usados por periodos cortos.',
      en: 'Suitable for an efficient fridge, internet, lights, TV, computers, and some kitchen appliances used briefly.'
    },
    loads: [
      { es: 'Refrigerador eficiente 120 W', en: 'Efficient fridge 120 W' },
      { es: 'Refrigerador + módem 132 W', en: 'Fridge + modem 132 W' },
      { es: 'Refrigerador + módem + luces 162 W', en: 'Fridge + modem + lights 162 W' },
      { es: '+ TV 242 W', en: '+ TV 242 W' },
      { es: '+ laptop 287 W', en: '+ laptop 287 W' }
    ]
  },
  residencial: {
    family: { es: 'Respaldo residencial y cargas grandes', en: 'Residential backup and large loads' },
    intro: {
      es: 'Paquete para respaldo residencial, herramientas, RV o circuitos prioritarios. El panel aporta carga de apoyo; para cargar más rápido conviene ampliar el arreglo solar.',
      en: 'Bundle for residential backup, tools, an RV, or priority circuits. The panel adds supporting charge; expand the solar array for faster charging.'
    },
    usage: {
      es: 'Para circuitos prioritarios, refrigerador, congelador, bomba, herramientas, equipos sensibles o respaldo residencial con cálculo de cargas.',
      en: 'For priority circuits, fridge, freezer, pump, tools, sensitive equipment, or residential backup with a load calculation.'
    },
    loads: [
      { es: 'Refrigerador eficiente 120 W', en: 'Efficient fridge 120 W' },
      { es: 'Refrigerador + congelador 220 W', en: 'Fridge + freezer 220 W' },
      { es: '+ internet/luces 282 W', en: '+ internet/lights 282 W' },
      { es: '+ bomba intermitente 782 W', en: '+ intermittent pump 782 W' },
      { es: '+ herramientas 1,282 W', en: '+ controlled tools 1,282 W' }
    ]
  }
};

const BUNDLE_LIST = [
  { slug: 'river3-110', cat: 'emergencia', station: 'RIVER 3', panel: 'Panel Solar EcoFlow 110W', si: '/products/img-19.png', pi: '/products/img-01.png', price: '$9,348.27', carga: '2.6 h', cap: '230 Wh', out: '300 W', times: ['16 h', '8.9 h', '6.1 h', '2.5 h'] },
  { slug: 'river3plus-220', cat: 'emergencia', station: 'RIVER 3 Plus', panel: 'Panel Solar EcoFlow 220W', si: '/products/img-18.png', pi: '/products/img-13.png', price: '$13,679.27', carga: '98 min', cap: '286 Wh', out: '600 W', times: ['20 h', '11 h', '7.6 h', '3.2 h'] },
  { slug: 'river2max-220', cat: 'homeoffice', station: 'RIVER 2 Max', panel: 'Panel Solar EcoFlow 220W', si: '/products/img-14.png', pi: '/products/img-13.png', price: '$14,279.27', carga: '2.9 h', cap: '512 Wh', out: '500 W', times: ['9.7 h', '7.6 h', '5.3 h', '3.3 h', '2.1 h'] },
  { slug: 'river3max-220', cat: 'homeoffice', station: 'RIVER 3 Max', panel: 'Panel Solar EcoFlow 220W', si: '/products/img-17.png', pi: '/products/img-13.png', price: '$16,279.27', carga: '3.3 h', cap: '572 Wh', out: '600 W', times: ['11 h', '8.5 h', '5.9 h', '3.7 h', '2.3 h'] },
  { slug: 'river2pro-220', cat: 'homeoffice', station: 'RIVER 2 Pro', panel: 'Panel Solar EcoFlow 220W', si: '/products/img-15.png', pi: '/products/img-13.png', price: '$16,279.27', carga: '4.4 h', cap: '768 Wh', out: '800 W', times: ['15 h', '11 h', '8.0 h', '4.9 h', '3.1 h'] },
  { slug: 'river3maxplus-220', cat: 'homeoffice', station: 'RIVER 3 Max Plus', panel: 'Panel Solar EcoFlow 220W', si: '/products/img-16.png', pi: '/products/img-13.png', price: '$16,479.27', carga: '4.9 h', cap: '858 Wh', out: '600 W', times: ['16 h', '13 h', '8.9 h', '5.5 h', '3.4 h'] },
  { slug: 'delta2black-400', cat: 'esenciales', station: 'DELTA 2 Black', panel: 'Panel Solar EcoFlow 400W', si: '/products/img-24.png', pi: '/products/img-26.png', price: '$21,494.23', carga: '3.1 h', cap: '980 Wh', out: '500 W', times: ['6.9 h', '6.3 h', '5.1 h', '3.4 h', '2.9 h'] },
  { slug: 'delta3-400', cat: 'esenciales', station: 'DELTA 3', panel: 'Panel Solar EcoFlow 400W', si: '/products/img-11.png', pi: '/products/img-26.png', price: '$26,994.23', carga: '3.2 h', cap: '1,024 Wh', out: '1,800 W', times: ['7.3 h', '6.6 h', '5.4 h', '3.6 h', '3.0 h'] },
  { slug: 'delta3plus-rigido400', cat: 'esenciales', station: 'DELTA 3 Plus', panel: 'Panel Solar Rígido 400W', si: '/products/img-11.png', pi: '/products/img-02.png', price: '$31,398.20', carga: '6.4 h', cap: '2,048 Wh', out: '1,800 W', times: ['15 h', '13 h', '11 h', '7.2 h', '6.1 h'] },
  { slug: 'delta2max-rigido400', cat: 'esenciales', station: 'DELTA 2 Max', panel: 'Panel Solar Rígido 400W', si: '/products/img-08.png', pi: '/products/img-02.png', price: '$32,998.20', carga: '6.4 h', cap: '2,048 Wh', out: '2,400 W', times: ['15 h', '13 h', '11 h', '7.2 h', '6.1 h'] },
  { slug: 'deltapro-rigido400', cat: 'residencial', station: 'DELTA Pro', panel: 'Panel Solar Rígido 400W', si: '/products/img-12.png', pi: '/products/img-02.png', price: '$37,598.20', carga: '11 h', cap: '3,600 Wh', out: '3,600 W', times: ['26 h', '14 h', '11 h', '3.9 h', '2.4 h'] },
  { slug: 'deltapro3-rigido400', cat: 'residencial', station: 'DELTA Pro 3', panel: 'Panel Solar Rígido 400W', si: '/products/img-25.png', pi: '/products/img-02.png', price: '$67,598.20', carga: '13 h', cap: '4,096 Wh', out: '4,000 W', times: ['29 h', '16 h', '12 h', '4.5 h', '2.7 h'] },
  { slug: 'deltaproultra-rigido400', cat: 'residencial', station: 'DELTA Pro Ultra', panel: 'Panel Solar Rígido 400W', si: '/products/img-10.png', pi: '/products/img-02.png', price: '$117,399.20', carga: '19 h', cap: '6 kWh+', out: '7,200 W+', times: ['43 h', '23 h', '18 h', '6.5 h', '4.0 h'] },
  { slug: 'delta3max-400', cat: 'esenciales', station: 'DELTA 3 Max', panel: 'Panel Solar EcoFlow 400W', si: '/products/img-11.png', pi: '/products/img-26.png', price: '$38,494.23', carga: '6.4 h', cap: '2,048 Wh', out: '3,000 W', times: ['15 h', '13 h', '11 h', '7.2 h', '6.1 h'] }
];

export const bundles = BUNDLE_LIST.map((b) => {
  const cat = BUNDLE_CATS[b.cat];
  const title = `${b.station} + ${b.panel}`;
  return withCents({
    slug: b.slug,
    price: b.price,
    stationImage: b.si,
    panelImage: b.pi,
    image: b.si,
    station: b.station,
    panel: b.panel,
    title: { es: title, en: title },
    family: cat.family,
    saleStatus: { es: 'Bajo pedido', en: 'On order' },
    intro: {
      es: `${b.station} con ${b.panel}. ${cat.intro.es} Carga solar estimada: ${b.carga} en sol útil.`,
      en: `${b.station} with ${b.panel}. ${cat.intro.en} Estimated solar charge: ${b.carga} of useful sun.`
    },
    specs: { carga: b.carga, cap: b.cap, out: b.out },
    usage: cat.usage,
    runtime: cat.loads.map((l, i) => ({ label: l, time: b.times[i] })).filter((r) => r.time)
  });
});

export const smartProducts = [
  { slug: 'smart-home-panel-2', family: { es: 'Respaldo residencial', en: 'Residential backup' }, image: '/products/img-27.png', price: '$38,999', title: 'Smart Home Panel 2', description: { es: 'Panel inteligente para conectar una batería EcoFlow a circuitos de la casa. Permite respaldar cargas importantes de forma más ordenada, como refrigerador, luces, internet o bomba.', en: 'Smart panel to connect an EcoFlow battery to home circuits. Backs up important loads in an organized way, such as fridge, lights, internet, or pump.' }, featured: true },
  { slug: 'delta2-alternator-800', family: { es: 'Carga vehicular', en: 'Vehicle charging' }, image: '/products/img-06.png', price: '$21,292.24', title: 'Delta 2 + Alternador 800W', description: { es: 'Combo para cargar una DELTA 2 desde el vehículo mientras manejas. Conviene para trabajo móvil, viajes, camping o respaldo cuando no tienes toma de corriente cerca.', en: 'Combo to charge a DELTA 2 from a vehicle while you drive. Great for mobile work, travel, camping, or backup where no outlet is nearby.' } },
  { slug: 'alternator-800', family: { es: 'Carga vehicular', en: 'Vehicle charging' }, image: '/products/img-06.png', price: '$5,085.34', title: { es: 'Alternador 800W', en: '800W alternator' }, description: { es: 'Cargador para aprovechar el alternador del vehículo y recargar estaciones EcoFlow compatibles. Es útil para vans, camionetas de trabajo y salidas largas fuera de red.', en: 'Charger to tap into the vehicle alternator and refill compatible EcoFlow stations. Useful for vans, work trucks, and long off-grid trips.' } },
  { slug: 'glacier-extra-battery', family: { es: 'Refrigeración portátil', en: 'Portable cooling' }, image: '/products/img-23.png', price: '$6,033.62', title: { es: 'EcoFlow GLACIER Batería Extra', en: 'EcoFlow GLACIER Extra Battery' }, description: { es: 'Batería extra para el refrigerador portátil GLACIER. Sirve para usarlo sin cable y mantener comida o bebidas frías durante traslados, playa, campo o trabajo móvil.', en: 'Extra battery for the GLACIER portable fridge. Lets you use it cordlessly and keep food or drinks cold during transit, beach trips, field work, or mobile jobs.' } },
  { slug: 'wave-3', family: { es: 'Clima portátil', en: 'Portable climate' }, image: '/products/img-21.png', price: '$20,688.79', title: 'EcoFlow WAVE 3', description: { es: 'Aire acondicionado y calefactor portátil para espacios pequeños. Conviene para cuartos, campers, tiendas o zonas de trabajo donde necesitas clima sin instalación fija.', en: 'Portable AC and heater for small spaces. Great for rooms, campers, tents, or work areas where you need climate control without fixed installation.' } },
  { slug: 'wave-3-battery', family: { es: 'Clima portátil', en: 'Portable climate' }, image: '/products/img-20.png', price: '$14,654.31', title: { es: 'EcoFlow WAVE 3 Batería extra', en: 'EcoFlow WAVE 3 Extra Battery' }, description: { es: 'Batería adicional para usar el WAVE 3 sin estar conectado a la luz. Extiende el tiempo de enfriamiento o calefacción en modo portátil.', en: 'Additional battery to run the WAVE 3 unplugged. Extends cooling or heating time in portable mode.' } }
].map((p) => withCents({ ...p, saleStatus: { es: 'Bajo pedido', en: 'On order' } }));

// Home-page power stations (lib/data.js models) exposed as purchasable
// products. Models with a price range (e.g. DELTA Pro Ultra) are excluded:
// their final price depends on configuration, so they stay quote-only.
export function stationSlug(name) {
  return (
    'estacion-' +
    name
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  );
}

export const stations = DATA.models
  .filter((m) => m.display_price && !m.display_price.includes(' - '))
  .map((m) =>
    withCents({
      slug: stationSlug(m.name),
      family: m.family,
      image: m.image,
      price: m.display_price,
      title: m.name
    })
  );

export const allProducts = [...solarPanels, ...batteries, ...bundles, ...smartProducts, ...stations];

const productsBySlug = new Map(allProducts.map((p) => [p.slug, p]));

export function findProductBySlug(slug) {
  return productsBySlug.get(slug) || null;
}

export function localizeProduct(product, locale) {
  const pick = (field) =>
    field && typeof field === 'object' && !Array.isArray(field) && (field.es || field.en)
      ? field[locale] || field.es || field.en
      : field;
  return {
    ...product,
    title: pick(product.title),
    description: pick(product.description),
    family: pick(product.family),
    saleStatus: pick(product.saleStatus)
  };
}
