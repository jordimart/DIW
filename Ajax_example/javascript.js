function loadDoc(string) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
        this.responseText;
    }
  };
  console.log(string);
  xhttp.open("GET", "contents/content_" + string +
    ".txt", true);
  xhttp.send();
}
