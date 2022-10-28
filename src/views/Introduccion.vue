<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/img-intro.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p <b>Estimado aprendiz,</b> bienvenido a este componente formativo donde se abordará la temática sobre procesos productivos, los cuales forman parte de un conjunto de operaciones que una empresa debe realizar con el fin de ofrecer un bien, un servicio o un producto. Además, abarca la totalidad de los procedimientos que permiten transformar un recurso, una idea o una materia prima, en el resultado final que una empresa ofrece al mercado. 
          .cajon.color-primario.p-4.mb-4.fnd-6
            .h5 Cajón texto color
            p Cuando se habla sobre el costo de la producción, se entiende que se refiere a los gastos necesarios para mantener un determinado proyecto, una línea de procesamiento o un equipo, en funcionamiento. En una compañía normal, la diferencia entre el ingreso (por ventas y otras entradas) y el costo de producción, da como resultado el beneficio bruto. 

      p.mb-5 En la tarea de conocer y calcular la capacidad instalada, se puede evidenciar que esta determina el máximo rendimiento posible que puede alcanzar una empresa, y se calcula teniendo en cuenta los recursos disponibles y empleados, cantidad y calidad de estos recursos, y un periodo de tiempo estimado, entre otros.
      p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.      
  
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
