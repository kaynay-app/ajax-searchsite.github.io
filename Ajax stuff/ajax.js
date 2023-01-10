function retrieve_data(str) {
  //alert(str);
  //elt =document.getElementById('raw-json')
  //elt.innerHTML = str;

  let json_elt = document.getElementById('raw-json')
  let name_elt = document.getElementById("name");
  let url_elt = document.getElementById("url");

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    json_elt.innerHTML = JSON.stringify(this.response, undefined, 2);
    tvmaze_callback(this, name_elt, url_elt);
    //brew_callback(this, name_elt, url_elt);
  }
  xhttp.responseType = "json";
  xhttp.open('GET', 'http://api.tvmaze.com/api/search/shows?q=' + str);
  //xhttp.open('GET', 'https://api.openbrewerydb.org/breweries/search?query=' + str);
  xhttp.send();
}
function brew_callback(message, name_elt, url_elt){
  name_elt.innerHTML = message.response[0].name;
  url_elt.href = url_elt.innerHTML = message.response[0].website_url;
}

function tvmaze_callback(message, name_elt, url_elt){
  name_elt.innerHTML  = message.response[0].show.name;
  url_elt.href = url_elt.innerHTML = message.response[0].show.url;
}
