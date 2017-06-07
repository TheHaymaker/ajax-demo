var wrapper = document.querySelector('#wrapper');

var doc = document.body;

doc.addEventListener("click", function(e){
  //console.log("I'm being clicked...");

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200) {
      var data = document.createElement('div');
      data.innerHTML = this.responseText;
      wrapper.append(data);
    }
  }

  xhr.open('GET', 'message.html', true);
  xhr.send();

})