
/*
Use for most multiple-option forms such as
cookies/premissions checkboxes.

Takes an array of objects which is then parsed
into a cookie.
*/
function submitForm() {

}

/*
Used for creating a cookie.
*/
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/*
Used to retrieve a cookie using a known name.
*/
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


/*
Takes a list of lists, where each list contains a series of user
selected choices (e.g. list of reasons and list of goals).
*/
function alcohol_submitForm() {

}