(function flexible (window, document) {
  var docEl = document.documentElement

  function setRemUnit () {
    var rem = docEl.clientWidth / 7.5
    docEl.style.fontSize = rem + 'px'
  }
  setRemUnit()

  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })
}(window, document))
