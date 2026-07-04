export function privacySections(locale) {
  const isEs = locale === 'es';
  return {
    kicker: 'Legal',
    title: isEs ? 'Aviso de privacidad' : 'Privacy notice',
    intro: isEs
      ? 'Información sobre el tratamiento de datos personales recabados a través del sitio, cotizaciones y canales comerciales.'
      : 'Information about the handling of personal data collected through the website, quotes, and commercial channels.',
    updatedLabel: isEs ? 'Última actualización: 25 de junio de 2026' : 'Last updated: June 25, 2026',
    note: isEs ? (
      <span>
        <strong>Importante:</strong> este documento está preparado como base operativa para México. Debe completarse con los datos reales del responsable y revisarse por asesoría legal antes de publicarse definitivamente.
      </span>
    ) : (
      <span>
        <strong>Important:</strong> this document is prepared as an operational baseline for Mexico. It must be completed with the actual controller information and reviewed by legal counsel before final publication.
      </span>
    ),
    sections: isEs
      ? [
          { title: '1. Identidad y domicilio del responsable', paragraphs: [
            '<strong>Soberana Solutions</strong>, con razón social, RFC y domicilio fiscal <strong>por completar</strong>, es responsable del tratamiento de los datos personales que se recaben a través de este sitio web, formularios, mensajes, llamadas, cotizaciones o canales comerciales relacionados.',
            'Correo para privacidad y derechos ARCO: <strong>por completar</strong>.'
          ]},
          { title: '2. Datos personales que podemos recabar', paragraphs: [
            'Podemos tratar datos de identificación y contacto como nombre, teléfono, correo electrónico, ciudad, estado, empresa, producto de interés, requerimientos de energía, datos de cotización, historial de comunicación y cualquier dato que el usuario proporcione voluntariamente.',
            'También podemos recabar datos técnicos de navegación como dirección IP, tipo de navegador, dispositivo, páginas visitadas, fecha/hora de acceso y cookies o tecnologías similares.',
            'No solicitamos datos personales sensibles. Si el usuario los proporciona voluntariamente, se tratarán únicamente cuando sean necesarios para atender su solicitud y conforme a la legislación aplicable.'
          ]},
          { title: '3. Finalidades primarias', paragraphs: [
            'Los datos personales pueden utilizarse para responder solicitudes, preparar cotizaciones, contactar al usuario, dar seguimiento comercial, validar disponibilidad, coordinar entregas o instalaciones, brindar soporte, gestionar garantías, conservar registros administrativos y cumplir obligaciones legales.'
          ]},
          { title: '4. Finalidades secundarias', paragraphs: [
            'Podemos utilizar datos de contacto para enviar información comercial, promociones, novedades, recomendaciones de productos o comunicaciones de seguimiento. El titular puede oponerse a estas finalidades en cualquier momento escribiendo al correo de privacidad indicado en este aviso.'
          ]},
          { title: '5. Transferencias y encargados', paragraphs: [
            'Podemos compartir datos con proveedores de logística, instaladores, técnicos, fabricantes, distribuidores autorizados, plataformas tecnológicas, servicios de comunicación, contabilidad, facturación, autoridades competentes o terceros necesarios para atender una solicitud, operación, garantía o cumplimiento legal.',
            'Cuando un tercero trate datos por cuenta de Soberana Solutions, se procurará que actúe como encargado y bajo instrucciones del responsable.'
          ]},
          { title: '6. Derechos ARCO y revocación', paragraphs: [
            'El titular puede ejercer sus derechos de acceso, rectificación, cancelación u oposición, así como revocar su consentimiento, enviando una solicitud al correo de privacidad. La solicitud deberá incluir nombre del titular, medio de contacto, descripción clara del derecho que desea ejercer, documentos que acrediten identidad o representación y cualquier información que facilite la localización de los datos.',
            'La respuesta se emitirá conforme a los plazos y procedimientos previstos por la legislación mexicana aplicable.'
          ]},
          { title: '7. Limitación de uso o divulgación', paragraphs: [
            'El usuario puede solicitar dejar de recibir comunicaciones promocionales o limitar el uso de sus datos para finalidades secundarias mediante el correo indicado en este aviso.'
          ]},
          { title: '8. Cookies y tecnologías similares', paragraphs: [
            'Este sitio puede utilizar cookies o tecnologías similares para funcionamiento técnico, análisis de navegación, seguridad, preferencias y mejora del sitio. El usuario puede deshabilitarlas desde la configuración de su navegador, aunque algunas funciones podrían verse afectadas.'
          ]},
          { title: '9. Conservación de datos', paragraphs: [
            'Los datos se conservarán durante el tiempo necesario para cumplir las finalidades descritas, atender obligaciones legales, resolver aclaraciones, dar seguimiento a cotizaciones o conservar evidencia de la relación comercial.'
          ]},
          { title: '10. Cambios al aviso', paragraphs: [
            'Este aviso puede modificarse por cambios legales, operativos o comerciales. Las actualizaciones estarán disponibles en esta misma página.'
          ]}
        ]
      : [
          { title: '1. Controller identity and address', paragraphs: [
            '<strong>Soberana Solutions</strong>, with corporate name, RFC, and tax address <strong>to be completed</strong>, is the controller for the personal data collected through this website, forms, messages, calls, quotes, or related commercial channels.',
            'Privacy and ARCO rights email: <strong>to be completed</strong>.'
          ]},
          { title: '2. Personal data we may collect', paragraphs: [
            'We may process identification and contact data such as name, phone, email, city, state, company, product of interest, energy requirements, quote data, communication history, and any data the user voluntarily provides.',
            'We may also collect technical browsing data such as IP address, browser type, device, pages visited, date/time of access, and cookies or similar technologies.',
            'We do not request sensitive personal data. If the user voluntarily provides it, it will be processed only as needed to handle the request and in accordance with applicable law.'
          ]},
          { title: '3. Primary purposes', paragraphs: [
            'Personal data may be used to respond to inquiries, prepare quotes, contact the user, provide commercial follow-up, validate availability, coordinate deliveries or installations, provide support, manage warranties, keep administrative records, and comply with legal obligations.'
          ]},
          { title: '4. Secondary purposes', paragraphs: [
            'We may use contact data to send commercial information, promotions, news, product recommendations, or follow-up communications. The data subject may object to these purposes at any time by writing to the privacy email in this notice.'
          ]},
          { title: '5. Transfers and processors', paragraphs: [
            'We may share data with logistics providers, installers, technicians, manufacturers, authorized distributors, technology platforms, communication services, accounting, invoicing, competent authorities, or third parties needed to handle a request, transaction, warranty, or legal obligation.',
            'When a third party processes data on behalf of Soberana Solutions, it will act as a processor under the controller\'s instructions.'
          ]},
          { title: '6. ARCO rights and revocation', paragraphs: [
            'The data subject may exercise their rights of access, rectification, cancellation, or objection, and may revoke consent, by sending a request to the privacy email. The request must include the subject\'s name, contact method, a clear description of the right being exercised, documents proving identity or representation, and any information that helps locate the data.',
            'Responses will be issued in accordance with the timelines and procedures set by applicable Mexican law.'
          ]},
          { title: '7. Limitation of use or disclosure', paragraphs: [
            'The user may opt out of promotional communications or limit the use of their data for secondary purposes through the email indicated in this notice.'
          ]},
          { title: '8. Cookies and similar technologies', paragraphs: [
            'This site may use cookies or similar technologies for technical operation, browsing analysis, security, preferences, and site improvement. The user may disable them in browser settings, though some features may be affected.'
          ]},
          { title: '9. Data retention', paragraphs: [
            'Data will be retained for as long as needed to fulfill the described purposes, meet legal obligations, resolve inquiries, follow up on quotes, or maintain evidence of the commercial relationship.'
          ]},
          { title: '10. Changes to the notice', paragraphs: [
            'This notice may be updated for legal, operational, or commercial reasons. Updates will be available on this same page.'
          ]}
        ]
  };
}

export function termsSections(locale) {
  const isEs = locale === 'es';
  return {
    kicker: 'Legal',
    title: isEs ? 'Términos y condiciones' : 'Terms and conditions',
    intro: isEs
      ? 'Reglas generales para el uso del sitio, consulta de productos, precios, cotizaciones, garantías e información comercial.'
      : 'General rules for using the site, browsing products, pricing, quotes, warranties, and commercial information.',
    updatedLabel: isEs ? 'Última actualización: 25 de junio de 2026' : 'Last updated: June 25, 2026',
    note: isEs ? (
      <span>
        <strong>Importante:</strong> estos términos están preparados para un catálogo comercial en México. Deben ajustarse con razón social, domicilio, datos fiscales, canales de atención, políticas de venta, instalación, garantía y devoluciones reales.
      </span>
    ) : (
      <span>
        <strong>Important:</strong> these terms are prepared for a commercial catalog in Mexico. They must be adjusted with actual corporate name, address, tax details, support channels, and real sales, installation, warranty, and returns policies.
      </span>
    ),
    sections: isEs
      ? [
          { title: '1. Aceptación de términos', paragraphs: ['Al navegar este sitio, consultar productos, solicitar información o pedir una cotización, el usuario acepta estos términos y condiciones. Si no está de acuerdo, debe abstenerse de utilizar el sitio.'] },
          { title: '2. Naturaleza del sitio', paragraphs: ['Este sitio funciona como catálogo informativo de soluciones de energía, paneles, baterías, paquetes y accesorios. La publicación de productos no constituye por sí misma una oferta irrevocable ni garantiza disponibilidad inmediata.'] },
          { title: '3. Precios y disponibilidad', paragraphs: [
            'Los precios se muestran en pesos mexicanos y, salvo indicación distinta, incluyen IVA. Pueden cambiar sin previo aviso por disponibilidad, promociones, tipo de cambio, costos de logística, errores de captura, actualización de fabricante o condiciones comerciales.',
            'La disponibilidad indicada en productos bajo pedido es estimada y puede requerir confirmación de inventario antes de cerrar una operación.'
          ] },
          { title: '4. Cotizaciones y pedidos', paragraphs: ['Las cotizaciones deberán confirmarse por escrito e indicar producto, precio, vigencia, forma de pago, disponibilidad, envío, instalación, accesorios incluidos y condiciones particulares. Un pedido se considerará confirmado únicamente cuando Soberana Solutions lo acepte por escrito y, en su caso, se haya realizado el pago acordado.'] },
          { title: '5. Instalación y validación técnica', paragraphs: ['Los sistemas residenciales, equipos de respaldo, paneles, inversores, baterías y conexiones eléctricas pueden requerir cálculo de cargas, revisión del sitio, instalación profesional, protecciones eléctricas y cumplimiento de normas aplicables. El usuario es responsable de no instalar ni operar equipos fuera de especificación.'] },
          { title: '6. Garantías', paragraphs: ['Las garantías estarán sujetas a las condiciones del fabricante, distribuidor autorizado y legislación aplicable. La garantía puede depender de uso adecuado, instalación correcta, conservación de comprobantes, números de serie, accesorios originales y evaluación técnica.'] },
          { title: '7. Envíos, entregas y disponibilidad bajo pedido', paragraphs: ['Los tiempos de entrega son estimados y pueden variar por inventario, logística, zona geográfica, disponibilidad del proveedor, aduanas o causas externas. Los productos bajo pedido pueden requerir anticipo, confirmación especial o plazo adicional.'] },
          { title: '8. Cambios, cancelaciones y devoluciones', paragraphs: ['Las condiciones de cambios, cancelaciones o devoluciones deberán confirmarse en la cotización o comprobante correspondiente. Algunos productos especiales, bajo pedido, instalados, usados, abiertos o configurados pueden estar sujetos a restricciones permitidas por la legislación aplicable.'] },
          { title: '9. Información del catálogo', paragraphs: ['Las descripciones, imágenes, capacidades, autonomías, compatibilidades y recomendaciones son informativas. El consumo real depende de cada equipo conectado, hábitos de uso, temperatura, instalación, estado de baterías, configuración y condiciones del sitio.'] },
          { title: '10. Propiedad intelectual', paragraphs: ['El contenido del sitio, diseño, textos, organización, bases de datos, imágenes generadas, selección de productos y materiales comerciales pertenecen a Soberana Solutions o a sus respectivos titulares. Las marcas de terceros pertenecen a sus propietarios.'] },
          { title: '11. Enlaces externos', paragraphs: ['El sitio puede incluir enlaces a páginas de fabricantes, distribuidores u otros terceros. Soberana Solutions no controla esos sitios ni se responsabiliza por su contenido, disponibilidad, políticas o cambios.'] },
          { title: '12. Limitación de responsabilidad', paragraphs: ['En la medida permitida por la ley, Soberana Solutions no será responsable por daños derivados del uso incorrecto de equipos, instalaciones no autorizadas, falta de cálculo técnico, variaciones de consumo, indisponibilidad de productos, interrupciones del sitio o decisiones tomadas con información no validada técnicamente.'] }
        ]
      : [
          { title: '1. Acceptance of terms', paragraphs: ['By browsing this site, consulting products, requesting information, or asking for a quote, the user accepts these terms and conditions. If they do not agree, they must refrain from using the site.'] },
          { title: '2. Nature of the site', paragraphs: ['This site works as an informational catalog for energy solutions, panels, batteries, bundles, and accessories. Publishing products does not constitute an irrevocable offer nor guarantee immediate availability.'] },
          { title: '3. Prices and availability', paragraphs: [
            'Prices are shown in Mexican pesos and, unless otherwise stated, include VAT. They may change without notice due to availability, promotions, exchange rates, logistics costs, entry errors, manufacturer updates, or commercial conditions.',
            'Availability indicated for on-order products is estimated and may require inventory confirmation before closing a transaction.'
          ] },
          { title: '4. Quotes and orders', paragraphs: ['Quotes must be confirmed in writing and must indicate product, price, validity, payment method, availability, shipping, installation, included accessories, and special conditions. An order is only considered confirmed once Soberana Solutions accepts it in writing and, when applicable, the agreed payment has been made.'] },
          { title: '5. Installation and technical validation', paragraphs: ['Residential systems, backup equipment, panels, inverters, batteries, and electrical connections may require load calculation, site review, professional installation, electrical protections, and compliance with applicable standards. The user is responsible for not installing or operating equipment outside its specifications.'] },
          { title: '6. Warranties', paragraphs: ['Warranties are subject to manufacturer, authorized distributor, and applicable legal conditions. The warranty may depend on proper use, correct installation, retention of receipts, serial numbers, original accessories, and technical evaluation.'] },
          { title: '7. Shipping, delivery, and on-order availability', paragraphs: ['Delivery times are estimates and may vary due to inventory, logistics, geographic area, supplier availability, customs, or external causes. On-order products may require a deposit, special confirmation, or additional lead time.'] },
          { title: '8. Changes, cancellations, and returns', paragraphs: ['Exchange, cancellation, or return conditions must be confirmed in the quote or corresponding proof. Some special, on-order, installed, used, opened, or configured products may be subject to restrictions permitted by applicable law.'] },
          { title: '9. Catalog information', paragraphs: ['Descriptions, images, capacities, runtimes, compatibilities, and recommendations are informational. Actual consumption depends on each connected device, usage habits, temperature, installation, battery state, configuration, and site conditions.'] },
          { title: '10. Intellectual property', paragraphs: ['Site content, design, text, organization, databases, generated images, product selection, and commercial materials belong to Soberana Solutions or their respective owners. Third-party trademarks belong to their owners.'] },
          { title: '11. External links', paragraphs: ['The site may include links to manufacturer, distributor, or other third-party pages. Soberana Solutions does not control those sites and is not responsible for their content, availability, policies, or changes.'] },
          { title: '12. Limitation of liability', paragraphs: ['To the extent permitted by law, Soberana Solutions is not liable for damages arising from misuse of equipment, unauthorized installations, lack of technical calculation, consumption variations, product unavailability, site interruptions, or decisions made using information that has not been technically validated.'] }
        ]
  };
}
