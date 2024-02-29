"use strict";

window.addEventListener("DOMContentLoaded", () => {
  onChangeSelect();
});

function onChangeSelect() {

    var e = document.getElementById("dropdownMenuVersion");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;

    switch (text) {
      case "23.1":
        document.querySelector(".repo-version").innerHTML="Repository Service 23.1.0";
        document.querySelector(".transform-version").innerHTML="Transform Service 5.0.1";
        document.querySelector(".search-version").innerHTML="Search Service 2.0.9.1";
        document.querySelector(".share-version").innerHTML="Share UI 23.1.0";
        document.querySelector(".adf-version").innerHTML="ADF UI 4.3.0";
        document.querySelector(".activemq-version").innerHTML="ActiveMQ 5.18";
        break;
      case "7.4":
        document.querySelector(".repo-version").innerHTML="Repository Service 7.4.1";
        document.querySelector(".transform-version").innerHTML="Transform Service 4.0.1";
        document.querySelector(".search-version").innerHTML="Search Service 2.0.8.2";
        document.querySelector(".share-version").innerHTML="Share UI 7.4.1";
        document.querySelector(".adf-version").innerHTML="ADF UI 4.1.0";
        document.querySelector(".activemq-version").innerHTML="ActiveMQ 5.17";
        break;
      case "7.3":
        document.querySelector(".repo-version").innerHTML="Repository Service 7.3.1";
        document.querySelector(".transform-version").innerHTML="Transform Service 3.1.1";
        document.querySelector(".search-version").innerHTML="Search Service 2.0.5.2";
        document.querySelector(".share-version").innerHTML="Share UI 7.3.1";
        document.querySelector(".adf-version").innerHTML="ADF UI 3.1.0";
        document.querySelector(".activemq-version").innerHTML="ActiveMQ 5.17";
        break;
      default:
        break;
    }

}