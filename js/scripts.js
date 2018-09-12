var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

const times = document.getElementById('times');
const iconContainer = document.getElementById('info-container');
// let infoP = document.getElementById('info');
times.onclick = function() {
  click();
};

function click() {
  iconContainer.style.display = 'none';
}
