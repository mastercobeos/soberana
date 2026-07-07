import { DATA, DATA_EN, UI } from './data';

export function getDataForLocale(locale) {
  return locale === 'es' ? DATA : DATA_EN;
}

export function getMessages(locale) {
  return UI[locale] || UI.en;
}

export function modelAnchorId(name) {
  return (
    'modelo-' +
    name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  );
}

export function formatMXN(cents) {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2
  }).format(cents / 100);
}

export const WHATSAPP_URL =
  'https://wa.me/529842281177?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20soluciones%20EcoFlow.';

export function categoryPagesData(locale) {
  const isEs = locale === 'es';
  return {
    paneles: {
      kicker: isEs ? 'Energía solar' : 'Solar energy',
      title: isEs ? 'Paneles solares' : 'Solar panels',
      desc: isEs
        ? 'Opciones portátiles y plegables para complementar estaciones EcoFlow, cargar durante el día y extender autonomía en campo, hogar u operación móvil.'
        : 'Portable and folding options to complement EcoFlow stations, recharge during the day, and extend runtime in the field, at home, or on the move.',
      metaTitle: isEs ? 'Catálogo solar' : 'Solar catalog',
      metaSub: isEs ? '60 W a 400 W · precios' : '60 W to 400 W · pricing',
      primaryCta: isEs ? 'Ver paneles' : 'View panels',
      secondaryCta: isEs ? 'Ver estaciones' : 'View stations'
    },
    baterias: {
      kicker: isEs ? 'Expansión de energía' : 'Energy expansion',
      title: isEs ? 'Baterías' : 'Batteries',
      desc: isEs
        ? 'Baterías extra para ampliar autonomía, respaldar más horas y construir sistemas escalables según el modelo EcoFlow compatible.'
        : 'Extra batteries to extend runtime, provide longer backup, and build scalable systems for the compatible EcoFlow model.',
      metaTitle: isEs ? 'Catálogo de baterías' : 'Battery catalog',
      metaSub: 'GLACIER · DELTA · Pro · Ultra',
      primaryCta: isEs ? 'Ver baterías' : 'View batteries',
      secondaryCta: isEs ? 'Ver paneles' : 'View panels'
    },
    paquetes: {
      kicker: isEs ? 'Combos solares' : 'Solar combos',
      title: isEs ? 'Paquetes' : 'Bundles',
      desc: isEs
        ? 'Combinaciones listas para entender qué estación, panel, batería o accesorio conviene según el tipo de respaldo que necesita el cliente.'
        : 'Ready-made combinations to help you understand which station, panel, battery, or accessory fits the customer\'s backup needs.',
      metaTitle: isEs ? 'Paquetes Soberana' : 'Soberana bundles',
      metaSub: isEs ? 'Estación · panel · batería · control' : 'Station · panel · battery · control',
      primaryCta: isEs ? 'Ver paquetes' : 'View bundles',
      secondaryCta: isEs ? 'Ver paneles' : 'View panels'
    },
    inteligentes: {
      kicker: isEs ? 'Control, clima y carga móvil' : 'Control, climate, and mobile charging',
      title: isEs ? 'Inteligentes' : 'Smart equipment',
      desc: isEs
        ? 'Equipos complementarios para automatizar respaldo residencial, cargar desde vehículos y manejar clima o refrigeración portátil dentro del ecosistema EcoFlow.'
        : 'Companion equipment to automate residential backup, charge from vehicles, and handle portable climate or cooling inside the EcoFlow ecosystem.',
      metaTitle: isEs ? 'Equipos inteligentes' : 'Smart equipment',
      metaSub: 'Panel · Alternador · WAVE · GLACIER',
      primaryCta: isEs ? 'Ver equipos' : 'View products',
      secondaryCta: isEs ? 'Ver baterías' : 'View batteries'
    }
  };
}
