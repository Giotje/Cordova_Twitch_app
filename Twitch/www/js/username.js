$(document).ready(function(){
    $(".username_update_button").click(function(){
      // localStorage.clear();

    event.preventDefault();
    user =   $(".username_update_input").val();
    localStorage.setItem("username", user);

    var local_store_username = localStorage.getItem("username");
    console.log(local_store_username);
    var get_user_id = `https://api.twitch.tv/kraken/users?login=${user}`;
    console.log(get_user_id)
    request.onload = function(){
        if (request.status>=200 && request.status<400){
            const response = request.responseText;
            const json = JSON.parse(response);
            console.log(json);
            console.log(json.users[0]._id);
               
               localStorage.setItem("user_id", json.users[0]._id);
               location.reload(); 

  
        }else{
            console.log('error');
        }
    }
    request.open("GET",get_user_id,true); //非同步
    request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
    request.setRequestHeader('Client-ID',client);
    request.send();

    });
  });