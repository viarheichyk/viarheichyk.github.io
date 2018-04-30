VK.Init(function(){
  VK.api("account.getProfileInfo", {}, function(data){
    document.getElementById("info").innerHtml = data.response.first_name;
  });
});
