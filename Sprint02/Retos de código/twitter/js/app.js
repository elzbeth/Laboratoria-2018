//accessing the id to create a variable
var boxText = document.getElementById("boxText");
var wordCount = document.getElementById("wordCount");
var button = document.getElementById("nt-submit");
var printTweet = document.getElementById('printTweet');
var tweetTime = document.getElementById('tweet-time');

//adding keyup event to the text box
boxText.addEventListener("keyup",function(){
    var characters = boxText.value.split('',140);
  wordCount.innerText = characters.length;
});

boxText.addEventListener("keyup", counter);

//this function will help us to give a limit of characters to the text box
function counter() {
     var characters = boxText.value.split('');
     console.log(characters.length);
     wordCount.innerText = 140 - (characters.length);
    if (characters.length >= 121 && characters.length < 130) {
        wordCount.style.color = '#f7b817';
    } //if it passes the 120 characters the counter is painted yellow
    else if (characters.length >= 131 && characters.length < 140) {
        wordCount.style.color = '#ff0000';
    } //if it passes the 120 characters the counter is painted red
    else if (characters.length < 120) {
        wordCount.style.color = '#2b2b2b';
    }//if they are less than 120 characters it is painted black
    if (characters.length > 0) {
        button.removeAttribute('disabled')
        button.style.backgroundColor = '#1da1f2';
    }//in case of empty text disable the button
    if (boxText.value == '' || boxText.value[0] == "\n" || characters.length > 140) {
        button.setAttribute('disabled', 'true');
        button.style.backgroundColor = '#657786';
    }
}

tweetTime.addEventListener('click',addTweet);

//this function helps us to mark the time tweet was published
function gettingTime() {
  var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var meridian = '';
    if (minutes < 10) {
        minutes = (String(0) + String(minutes));
    }
    if (hours >= 13) {
        hours = hours - 12;
        meridian = 'PM';
    } else {
        meridian = 'AM';
    }
    return hours + ':' + minutes + ' ' + meridian;
}

//adding a click event to the button
button.addEventListener('click', addTweet);

function addTweet(event) {
    event.preventDefault();

      var container = document.createElement('div');
      var message = document.createElement('p');
      var time = document.createElement('p');
      var author = document.createElement('p');
      var author = document.createTextNode('Bill Shakespeare');
      var account = document.createElement('p');
      var account = document.createTextNode('@2bOrNot2b');
      var profilePicture = document.createElement('button');


      message.innerText = boxText.value; //agregando atributos
      time.textContent = gettingTime();

      // agregar los elementos a los elementos existentes
      container.appendChild(profilePicture);
      profilePicture.className=("profile-btn3");
      container.appendChild(author);
      
      container.appendChild(account);

      container.appendChild(time);
      time.className=("ctweet-date");
      time.style.margin=("0 auto 0 30px");
      container.appendChild(message);
      message.className=("cttext");
      printTweet.appendChild(container);
      printTweet.className=("stream");

     boxText.value = '';  // segun para dejar vacio el textarea despues de dar submit
     wordCount.textContent=140;                    //pero aun no funciona :(

}

  /* este es el codigo que se utilizaria para
    crear todos los elementos de la section con id stream
     var newtweet = document.createElement('article');
        var newButton = document.createElement('button');
        var newAuthor = document.createElement('p');
        var newAacount = document.createElement('p');
        var newTxt = document.createElement('p');

        newTxt.innerText = boxText.value;

        newTweet.appendChild('newButton');
        newTweet.appendChild('newAuthor');
        newTweet.appendChild('newAacount');
        newTweet.appendChild('newTxt');

        document.getElementById('stream').appendChild('newTweet');


*/



//counter();

//}
//Fin de la conversación de chat
//Escribe un mensaje...

//Elegir archivos
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);

function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}
