/* eslint-disable no-undef */
class XmlHttpRequest  {

  constructor () {        
    if(window.XMLHttpRequest) {    // For all other browsers
        this.xmlhttp = new XMLHttpRequest();
    } else {                       // For IE6 and below
        this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } 
  }

  get (url, callback) {
    this.xmlhttp.open('GET', url, false);
    this.xmlhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 201) {
        const data = JSON.parse(this.responseText);
        callback(data);
      }
    };
    this.xmlhttp.send();
  }

  post (url, request, callback) {
    this.xmlhttp.open('POST', url, false);
    this.xmlhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 201) {
        const data = JSON.parse(this.responseText);
        callback(data);
      }
    };
    this.xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    this.xmlhttp.send(request);
  }
}

export default XmlHttpRequest;