
document.addEventListener('DOMContentLoaded', function() {
  var collapsibleElems = document.querySelectorAll('.collapsible');
  var options = {};
  var instances = M.Collapsible.init(collapsibleElems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  var notificacionesIcon = document.getElementById('notificaciones');
  var notificacionesBox = document.getElementById('notificacionesBox');
  var notificacionesVisible = false;

  notificacionesIcon.addEventListener('click', function() {
    if (notificacionesVisible) {
      notificacionesBox.style.display = 'none';
    } else {
      notificacionesBox.style.display = 'block';
    }
    notificacionesVisible = !notificacionesVisible;
  });

  var collapsibleElems = document.querySelectorAll('.collapsible');
  var options = {};
  var instances = M.Collapsible.init(collapsibleElems, options);
});