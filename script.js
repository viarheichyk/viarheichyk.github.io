document.addEventListener("DOMContentLoaded", function(event) { 
    VK.init(function() { 
     getInformation();
      }, function() { 
     alert("error!");
}, '5.74'); 
});

function getInformation(){
    VK.api("account.getProfileInfo", {"v":"5.74"}, function(data){
        document.getElementById("info").innerHtml = data.response;
    })
}
