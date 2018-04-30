VK.Init(function(){
  VK.api("account.getProfileInfo", function(data){
    alert(data.response.first_name);
  });
});
