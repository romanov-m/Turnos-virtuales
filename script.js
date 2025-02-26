$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

// $(document).ready(function() {
//     $('#load-page-button').click(function() {
//       fetch('inicio.html') // Reemplaza 'otra_pagina.html' con la URL de la otra página
//         .then(response => response.text())
//         .then(html => {
//           $('#aquicontent').html(html); // Actualiza el contenido del contenedor
//           //$('#load-page-button').hide(); // Oculta el botón
//         });
//     });
//   });
  // $(document).ready(function() {
//     $('a[data-page]').click(function(e) {
//       e.preventDefault(); // Evita que la página se recargue
//       var pageUrl = $(this).data('page');
//       cargarPagina(pageUrl);
//     });
  
//     function cargarPagina(pageUrl) {
//       fetch(inicio.html)
//         .then(response => response.text())
//         .then(html => {
//           $('#aquicontent').html(html); // Actualiza el contenido del contenedor
//         });
//     }
//   });

$(document).ready(function() {
    // Manejar clics en enlaces para cargar páginas iniciales
    $('a[data-page]').click(function(e) {
      e.preventDefault();
      var pageUrl = $(this).data('page');
      cargarPagina(pageUrl);
    });
  
    // Manejar clics en botones dentro de las páginas cargadas
    $(document).on('click', '#load-page-button', function(e) {
      e.preventDefault();
      var pageUrl = $(this).data('page');
      cargarPagina(pageUrl);
    });
  
    function cargarPagina(pageUrl) {
      fetch(pageUrl)
        .then(response => response.text())
        .then(html => {
          $('#aquicontent').html(html);
        });
    }
  });