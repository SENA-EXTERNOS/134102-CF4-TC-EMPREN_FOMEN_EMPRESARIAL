<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estructura de costos y capacidad instalada

    p.mb-5 Como su nombre lo indica, la estructura de costos debe incluir todos los costos necesarios para que la empresa funcione y pueda cumplir con sus propuestas al cliente. Se debe tener en cuenta, entre otros: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.fnd-18.p-5
        .row.justify-content-center
          .col-lg-6

            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | La materia prima.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Los salarios.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Los empaques.
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | El servicio de Internet.


          .col-lg-6
            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Las comisiones.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Los impuestos sobre ingresos
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | La renta.
    p.mb-5 Los aspectos más importantes de la estructura de costos son:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-between.align-items-between
          .col-lg-4
            figure
              img.img-81(src='@/assets/curso/temas/tema2/img-1.svg')  

          .col-lg-8
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2 t-pur2")
              .row(titulo="Fundamentos para los cálculos matemáticos")
                  p.pp-l Estudian los conceptos matemáticos básicos como números, conjuntos, figuras geométricas, etc., y cómo se forman jerarquías de estructuras y conceptos más complejos, especialmente las estructuras más importantes que conforman el lenguaje de las matemáticas como: teorías y sus diferentes modelos, otorgando de esta manera, un significado a las fórmulas, pruebas, definiciones, algoritmos, entre otros.
              .row(titulo="Área de costos (directos e indirectos)")
                  p.pp-l Un ejemplo de costos directos son las materias primas, es decir, los materiales que han servido de base para la elaboración de los productos o para el desarrollo de los proyectos. En la gran mayoría de los casos se extraen de la naturaleza; en otros casos los producen empresas del sector primario.
                    <br><br>
                    | Son gastos variables aquellos que se originan y cambian en función del volumen de producción, aumentando o disminuyendo.
              .row(titulo="¿Cuál es el área de gastos?")
                  p.pp-l El departamento de finanzas debe tener un control exhaustivo de todos los gastos e ingresos de la empresa (salvo que exista un departamento de contabilidad independiente).
              .row(titulo="¿Para qué sirve el área de costo total?")
                  p.pp-l El costo total es la suma del costo fijo más el costo variable. Está constituido por el valor total de los factores que utiliza la empresa; esto quiere decir los costos asociados a cada nivel de producción; de esta forma, es posible definir los costos asociados a cada unidad de producto.
                    <br><br>
                    | Los costos totales son la sumatoria de todos los gastos de una empresa, los cuales son necesarios para llevar a cabo su actividad económica. Esto, independientemente que dependan o no, del volumen de producción.

              .row(titulo="¿Cómo determinar el precio de venta?")
                  p.pp-l El precio de la venta es el valor promedio del valor de la compra de los productos, el cual se determina si dividimos el valor total de las compras, entre la cantidad total de unidades compradas.
              .row(titulo="¿Cuál es el punto de equilibrio y para qué sirve?")
                  p.pp-l El punto de equilibrio se establece a través de un cálculo que sirve para definir el momento en que los ingresos de una empresa cubren sus gastos fijos y variables; esto es, cuando se logra vender lo mismo que se gasta, no se gana ni se pierde, se ha alcanzado el punto de equilibrio.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4.fnd-11
          p Después de entender cómo funciona la estructura de costos dentro de una empresa u organización, ahora se abarcará un concepto de gran importancia para el desarrollo de las actividades de la misma: la capacidad instalada.

    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Capacidad instalada

    .row.justify-content-between.align-items-between.mb-5
      .col-lg-7
        p La capacidad instalada indica el nivel de producción que puede alcanzar una fábrica con la infraestructura que tiene disponible.
        p.mb-5 Con infraestructura física, se hace referencia a instalaciones públicas que unen partes de la ciudad y proporcionan los servicios básicos necesarios para el funcionamiento de la misma, como la red de caminos y los servicios públicos.
        .cajon.color-primario.p-4.mb-4.fnd-6 
          p Según sus características, una infraestructura puede ser dura y la componen los elementos físicos, como las carreteras, los edificios, los aeropuertos, etc., o infraestructura blanda, que hace referencia al capital humano y las organizaciones sociales que otorgan vida a la infraestructura dura.
      .col-lg-5
        figure
          img.img-81(src='@/assets/curso/temas/tema2/img-2.svg')  

    p.mb-5 Cuando se cuenta con la infraestructura correcta, se debe verificar también, si se está implementando un adecuado sistema de producción, para que todo funcione de manera óptima.


    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Conceptos y necesidades para la implementación de un sistema productivo

    .row.justify-content-between.align-items-between.mb-5
      .col-lg-5
        figure
          img.img-81(src='@/assets/curso/temas/tema2/img-3.svg')          
      .col-lg-7
        p.mb-5 El sistema productivo es el modo como se utilizan y se combinan los factores productivos para llevar a cabo su transformación y, posteriormente, convertirlos en bienes y servicios. Para consolidarse, se debe producir la mayor cantidad de bienes en el menor costo posible y esto se consigue mediante el diseño de una buena relación y coordinación de las tecnologías, mano de obra y materia prima.
          <br><br>
          | Además, las máquinas, son indiscutiblemente importantes en la producción, debido a que aumentan y aceleran los procedimientos, dotan de perfeccionamiento a los trabajos, ahorran esfuerzos, hacen que el hombre se adueñe de la producción, facilitan la comercialización, extienden el consumo y satisfacen las necesidades de la empresa.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4.fnd-6 
          p Para la implementación de un sistema productivo, es de suma importancia tener en cuenta la infraestructura de la tecnología de la información (TI), porque esta hace referencia a los elementos necesarios para operar y gestionar entornos de TI empresariales. La infraestructura de TI puede implementarse en un sistema de <em>cloud computing</em> o en las instalaciones de la empresa.

    p.mb-5 Lo invitamos a ver el siguiente video, donde se amplía la temática sobre el sistema productivo.

    figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video    


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4.fnd-11
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.













</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
