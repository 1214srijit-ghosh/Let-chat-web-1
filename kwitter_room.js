
var firebaseConfig = {
      apiKey: "AIzaSyDM06S8U72uU9dcGu1RrvEDwj98_YfkjzQ",
      authDomain: "kwitter-45535.firebaseapp.com",
      databaseURL: "https://kwitter-45535-default-rtdb.firebaseio.com",
      projectId: "kwitter-45535",
      storageBucket: "kwitter-45535.appspot.com",
      messagingSenderId: "513119027548",
      appId: "1:513119027548:web:fd5198321a71afde138199"
    };
    
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
