export default {
  global: {
    componenteFormativo: 'Procesos productivos, costos y capacidad instalada',
    descripcionCurso:
      'Dentro del desarrollo de un sistema productivo, los insumos, los productos, los procesos y el flujo de información, juegan un papel fundamental. Los insumos, hacen referencia a los recursos humanos y, con el capital, se consideran las instalaciones y el equipo. Durante el estudio de este componente se ampliarán, estos conceptos, para obtener una completa comprensión de esta temática.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal-.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos para la creación de un sistema productivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos y características de producción',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Calidad en los procesos productivos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tecnología en el sistema productivo',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estructura de costos y capacidad instalada',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fundamentos para la creación de un sistema productivo',
      referencia:
        'Editorial Etecé. (2021).<em> Proceso de producción.</em>  Concepto.de.  https://concepto.de/proceso-de-produccion/',
      tipo: 'Artículo',
      link: 'https://concepto.de/proceso-de-produccion/',
    },
    {
      tema: 'Fundamentos para la creación de un sistema productivo',
      referencia:
        'FAO. (s.f.). 4.<em> Costos de producción.</em>  https://www.fao.org/3/v8490s/v8490s06.htm',
      tipo: 'Documento',
      descarga: 'https://www.fao.org/3/v8490s/v8490s06.htm',
    },
    {
      tema: 'Fundamentos para la creación de un sistema productivo',
      referencia:
        'nexusintegra. (s.f.). <em>Tecnologías que dominarán la producción en 2021.</em>  https://nexusintegra.io/es/tecnologias-dominaran-produccion-industrial-2021/',
      tipo: 'Artículo',
      link:
        'https://nexusintegra.io/es/tecnologias-dominaran-produccion-industrial-2021/',
    },
    {
      tema: 'Estructura de costos y capacidad instalada',
      referencia:
        'Resolución 0829 de 2015. (Ministerio de Salud y Protección Social). Por la cual se definen las condiciones técnicas para la destinación de los recursos del proyecto “Fortalecimiento de la capacidad instalada asociada a la prestación de servicios de salud en infraestructura y dotación hospitalaria nacional”. Marzo 18 de 2015.',
      tipo: 'PDF',
      descarga:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0829-de-2015.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Capacidad instalada:',
      significado:
        'técnica que indica la máxima tasa de producción que puede obtenerse de un proceso.',
    },
    {
      termino: 'Desperdicio:',
      significado:
        'fracción o resto de material que queda luego de terminar las operaciones y que tiene algún valor monetario.',
    },
    {
      termino: 'Diagrama:',
      significado:
        'representación gráfica de las variaciones de un fenómeno o de las relaciones que tienen los elementos o las partes de un conjunto.',
    },
    {
      termino: 'Estrategia:',
      significado:
        'forma o sistema de dirigir un asunto para lograr un objetivo.',
    },
    {
      termino: 'Gestión de la documentación:',
      significado:
        'compete a los procesos que se necesitan, para generar, divulgar, custodiar, almacenar, organizar, recuperar y destino final de la documentación de una empresa. ',
    },
    {
      termino: 'Incentivo:',
      significado:
        'expresión general que incluye influencias, tanto positivas como negativas, que avivan el esfuerzo humano.',
    },
    {
      termino: 'Normatividad:',
      significado:
        'es un conjunto de criterios o fórmulas, con las que se rige la conducta humana. Pueden ser éstas de carácter voluntario o pueden ser obligatorias',
    },
    {
      termino: 'Planeación y control:',
      significado:
        'herramientas y políticas establecidas para organizar y ejecutar las actividades relacionadas con los procesos de producción.',
    },
    {
      termino: 'Producto:',
      significado:
        'elemento que se ofrece en un mercado con la intención de satisfacer al consumidor.',
    },
    {
      termino: 'Productividad:',
      significado:
        'resultante de dividir la producción entre los recursos. A mayor producción y menores recursos o costos utilizados en ella, mayor es la productividad.',
    },
    {
      termino: 'Rentabilidad:',
      significado:
        'relación existente entre los beneficios que proporciona una determinada operación o cosa y la inversión o el esfuerzo que se ha hecho; cuando se trata del rendimiento financiero; se suele expresar en porcentajes.',
    },
    {
      termino: 'Trabajo en equipo',
      significado:
        'labor en la que todos los miembros están comprometidos para alcanzar las metas y los objetivos propuestos, al apoyarse unos a otros, alineados y trabajando en un mismo propósito.',
    },
  ],
  referencias: [
    {
      referencia: 'ConceptoDefinición. (s.f.). <em>Producción.</em>',
      link: 'https://conceptodefinicion.de/produccion/',
    },
    {
      referencia:
        'Nueva ISO 9001:2015. (2015).<em> ISO 9001 en los procesos de producción. </em>',
      link:
        'https://www.nueva-iso-9001-2015.com/2015/05/iso-9001-procesos-produccion/',
    },
    {
      referencia:
        'Portafolio. (2022). <em>Productividad en 2021 fue de 0.64 %:</em> Dane. ',
      link:
        'https://www.portafolio.co/economia/gobierno/productividad-en-2021-fue-de-0-64-dane-562934',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
