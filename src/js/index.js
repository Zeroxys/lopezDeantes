import "../css/index.css"
import "../main.html"
import "../serviciosl.html"

// asesorias legales
import "../asesoria_legal/area_fiscal.html"
import "../asesoria_legal/area_laboral.html"
import "../asesoria_legal/area_mercantil.html"
import "../asesoria_legal/area_familiar.html"
import "../asesoria_legal/area_civil.html"
import "../asesoria_legal/area_amparo.html"

// asesorias contables
import "../asesoria_contable/asesoria_contable.html"
import "../asesoria_contable/asesoria_electronica.html"
import "../asesoria_contable/incorporacion_fiscal.html"
import "../asesoria_contable/personasfisicasmorales.html"
import "../asesoria_contable/declaraciones_anuales.html"
import "../asesoria_contable/devolucion_impuestos.html"
import "../asesoria_contable/asesoria_contable_fiscal.html"
import "../asesoria_contable/timbrado.html"

// auditoria
import "../auditoria/serviciosauditoria.html"

//contacto
import "../contacto/contacto.html"

import "font-awesome/css/font-awesome.css"

$(document).ready(function () {
  $('.responsive-button').on('click', function () {
    $('.navList').toggleClass('show');
  })
})