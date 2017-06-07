var wrapper = document.querySelector('#wrapper');

var doc = document.body;

doc.addEventListener("click", function(e){
  //console.log("I'm being clicked...");

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200) {
      console.log("Vanilla AJAX fired...");
      var data = document.createElement('div');
      data.innerHTML = this.responseText;
      wrapper.append(data);
    }
  }

  xhr.open('GET', 'message.html', true);
  xhr.send();

})

doc.addEventListener("dblclick", function(e){
  $.ajax({
    url: "message.html"
  })
    .done(function( data ) {
      console.group();
      console.group();
      console.warn('jQuery AJAX fired...');
      console.groupEnd();
      console.groupEnd();
      var myData = $('<div>').html(data);
      $(wrapper).append( myData );

    });
})

