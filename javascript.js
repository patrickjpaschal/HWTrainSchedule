// (function(){

  const config = {
    apiKey: "AIzaSyC1tnCKzwDcTD2P2ECSP-4Z7QIZYRkKrWc",
    authDomain: "train-ffd32.firebaseapp.com",
    databaseURL: "https://train-ffd32.firebaseio.com",
    projectId: "train-ffd32",
    storageBucket: "",
    messagingSenderId: "231483080100",
    appId: "1:231483080100:web:fc270fdcb476a0b5"
  };
  firebase.initializeApp(config);
  
  //   const preObject = document.getElementById('object');
  // var dbRefObject = firebase.database().ref().child("object");
  // dbRefObject.on("value", snap => console.log(snap.val()));
  var dataRef = firebase.database();
  
  var name = "";
  var destiny = "";
  var first = "";
  var freqency = "";
  var next1 = "";
  
  $("#addTrain").click(function(event) {
    event.preventDefault();
  
    name = $("#tName")
      .val()
      .trim();
    destiny = $("#dTrain")
      .val()
      .trim();
    first = $("#fTrain")
      .val()
      .trim();
    frequency = $("#freqTrain")
      .val()
      .trim();
  
      // systemTrainInfo = {
      //   Train_Name: name,
      //   Destination: destiny,
      //   Frequency: frequency,
      //   First_Train: first,
      //   Next_Train: next1,
      //   dateAdded: firebase.database.ServerValue.TIMESTAMP
      // }
      
    dataRef.ref().push({
      Train_Name: name,
      Destination: destiny,
      Frequency: frequency,
      First_Train: first,
      Next_Train: next1,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });
  
  dataRef.ref().on(
    "child_added",
    function(childSnapshot) {
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().destiny);
      console.log(childSnapshot.val().next1);
      console.log(childSnapshot.val().first);
      console.log(childSnapshot.val().freqency);
  
      $(".contents").append( 
        $("<tr>").append(
        "<th scope='col'  class='nTrain1'>" +
          childSnapshot.val().name +
          "</th><td scope='col' class='dTrain1'>" +
          childSnapshot.val().destiny +
          "</td><td scope='col' class='freqTrain1'>" +
          childSnapshot.val().frequency +
          "</td><td scope='col' class='next1'>" +
          childSnapshot.val().first +
          "</td><td scope='col' class='mins'>" +
          childSnapshot.val().next1 +
          "</td></tr>"
          
      ));
    
    
    console.log(systemTrainInfo)
    
    
    },
    function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
      console.error(error);
    }
  );
  
  dataRef
    .ref()
    .orderByChild("dateAdded")
    .limitToLast(1)
    .on("child_added", function(snapshot) {
      $(".ntrain1").text(snapshot.val().Train_Name);
      $(".dTrain1").text(snapshot.val().Destination);
      $(".freqTrain1").text(snapshot.val().Frequency);
      $(".next1").text(snapshot.val().Next_Train);
    });
  
  //     // Code for the push
  //     dataRef.ref().push({
  
  //       name: name,
  //       location: destiny,
  //       Start: first,
  //       Frequency: frequency,
  //       dateAdded: firebase.database.ServerValue.TIMESTAMP
  //     });
  //   });
  
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    //   console.log("DIFFERENCE IN TIME: " + diffTime);
  
    //   var currentTime = moment();
    //   console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
  
    //   var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    //   console.log(firstTimeConverted);
  
    //   var tMinutesTillTrain = tFrequency - tRemainder;
    //   console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain)
  
    //   var tRemainder = diffTime % tFrequency;
    //   console.log(tRemainder);
  
    //   var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    //   console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
  