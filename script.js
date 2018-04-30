document.addEventListener("DOMContentLoaded", function(event) { 
    VK.init(function() { 
     getInformation();
      }, function() { 
     alert("error!");
}, '5.74'); 
});

function getInformation(){
    VK.api("account.getProfileInfo", null, function(data){
        document.getElementById("info").innerHtml = data.response.first_name;
    })
}
