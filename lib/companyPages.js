// Copy for the "Nosotros" and "Envíos y garantía" pages, rendered with
// the same LegalDocument layout as the legal pages.

export function aboutSections(locale) {
  const isEs = locale === 'es';
  return {
    kicker: isEs ? 'Quiénes somos' : 'About us',
    title: 'Soberana Solutions',
    intro: isEs
      ? 'Vendemos soluciones de energía EcoFlow en México: estaciones portátiles, paneles solares, baterías de expansión y paquetes completos para respaldo de hogar y negocio.'
      : 'We sell EcoFlow energy solutions in Mexico: portable power stations, solar panels, expansion batteries, and complete bundles for home and business backup.',
    sections: [
      {
        title: isEs ? 'Qué hacemos' : 'What we do',
        paragraphs: isEs
          ? [
              'Ayudamos a hogares y negocios a mantener luz, internet, refrigeración y equipos esenciales durante apagones, con equipos EcoFlow nuevos y respaldados por 5 años de garantía del fabricante.',
              'No vendemos por catálogo a ciegas: te asesoramos para elegir el equipo correcto según lo que necesitas respaldar, cuántas horas y con qué presupuesto.'
            ]
          : [
              'We help homes and businesses keep lights, internet, refrigeration, and essential equipment running during outages, with new EcoFlow units backed by a 5-year manufacturer warranty.',
              'We don’t sell blindly from a catalog: we help you choose the right unit based on what you need to back up, for how many hours, and on what budget.'
            ]
      },
      {
        title: isEs ? 'Cómo comprar' : 'How to buy',
        paragraphs: isEs
          ? [
              'Puedes comprar directamente en esta página con tarjeta: el pago se procesa de forma segura con Stripe y los datos de tu tarjeta nunca pasan por nuestros servidores.',
              'Si prefieres atención personal o tienes dudas antes de comprar, escríbenos por WhatsApp al <strong>+52 984 228 1177</strong> y te asesoramos sin compromiso.'
            ]
          : [
              'You can buy directly on this site by card: payments are processed securely by Stripe and your card details never touch our servers.',
              'If you prefer personal attention or have questions before buying, message us on WhatsApp at <strong>+52 984 228 1177</strong> for free advice.'
            ]
      },
      {
        title: isEs ? 'Dónde operamos' : 'Where we operate',
        paragraphs: isEs
          ? [
              'Atendemos en todo México con entrega bajo pedido. La atención es en español e inglés.'
            ]
          : [
              'We serve all of Mexico with on-order delivery. Support is available in Spanish and English.'
            ]
      }
    ]
  };
}

export function shippingSections(locale) {
  const isEs = locale === 'es';
  return {
    kicker: isEs ? 'Compra con confianza' : 'Buy with confidence',
    title: isEs ? 'Envíos y garantía' : 'Shipping and warranty',
    intro: isEs
      ? 'Todo lo que necesitas saber sobre la entrega de tu equipo, la garantía que lo respalda y cómo te atendemos después de la compra.'
      : 'Everything you need to know about delivery, the warranty behind your unit, and how we support you after purchase.',
    sections: [
      {
        title: isEs ? 'Envíos' : 'Shipping',
        paragraphs: isEs
          ? [
              'Los equipos se manejan <strong>bajo pedido</strong>.',
              'Hacemos entregas en todo México. Después de tu compra te contactamos al teléfono que dejaste en el pedido para coordinar la entrega.'
            ]
          : [
              'Units are handled <strong>on order</strong>.',
              'We deliver across Mexico. After your purchase we contact you at the phone number on your order to coordinate delivery.'
            ]
      },
      {
        title: isEs ? 'Garantía' : 'Warranty',
        paragraphs: isEs
          ? [
              'Todos los equipos son nuevos y cuentan con <strong>5 años de garantía</strong> del fabricante EcoFlow.',
              'Si tu equipo presenta un problema cubierto por la garantía, escríbenos por WhatsApp al <strong>+52 984 228 1177</strong> y te acompañamos en el proceso.'
            ]
          : [
              'All units are new and covered by a <strong>5-year</strong> EcoFlow manufacturer warranty.',
              'If your unit has an issue covered by the warranty, message us on WhatsApp at <strong>+52 984 228 1177</strong> and we’ll guide you through the process.'
            ]
      },
      {
        title: isEs ? 'Pagos' : 'Payments',
        paragraphs: isEs
          ? [
              'Los pagos se procesan con <strong>Stripe</strong>, uno de los procesadores de pago más grandes del mundo. Los datos de tu tarjeta viajan directo a Stripe: nunca los vemos ni los almacenamos.',
              'Recibirás un comprobante de pago por correo electrónico al completar tu compra.'
            ]
          : [
              'Payments are processed by <strong>Stripe</strong>, one of the largest payment processors in the world. Your card details go straight to Stripe: we never see or store them.',
              'You will receive a payment receipt by email when your purchase is complete.'
            ]
      },
      {
        title: isEs ? 'Facturación y aclaraciones' : 'Invoicing and support',
        paragraphs: isEs
          ? [
              '¿Necesitas factura o tienes cualquier duda con tu pedido? Contáctanos por WhatsApp al <strong>+52 984 228 1177</strong> con tu comprobante de pago y lo resolvemos.'
            ]
          : [
              'Need an invoice or have any question about your order? Contact us on WhatsApp at <strong>+52 984 228 1177</strong> with your payment receipt and we’ll take care of it.'
            ]
      }
    ]
  };
}
