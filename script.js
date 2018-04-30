VK.init(function(){
  VK.api("account.getProfileInfo", null, function(data){
    document.getElementById("info").innerHtml = data.response.first_name;
  });
});
