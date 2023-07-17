var i = 0;
var txt =
  "my name is Lucas Wikström," +
  "\n" +
  "a front-end developer" +
  "\n" +
  "currently based in Stockholm."; /* The text */
var speed = 80; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
