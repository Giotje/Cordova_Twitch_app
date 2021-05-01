$(document).ready(function(){
    $(".search_button").click(function(){

      // localStorage.clear();
      localStorage.removeItem("search_val_id");
      localStorage.removeItem("search_val");

  
    
    event.preventDefault();
    user =   $(".search_val").val();
    localStorage.setItem("search_val", user);

    var local_store_username = localStorage.getItem("search_val");
    // console.log(local_store_username);
    var get_user_id = `https://api.twitch.tv/kraken/users?login=${user}`;
    // console.log(get_user_id)
    request.onload = function(){
        if (request.status>=200 && request.status<400){
            const response = request.responseText;
            const json = JSON.parse(response);
              //  location.reload(); 
      search(json);
  
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

  function search(json) {

    url__0 = `https://api.twitch.tv/kraken/streams/${json.users[0]._id}`;
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log(json);
        //   console.log(json.streams);
        put_live_search(json);
        
      } else {
        console.log("error");
      }
    };
    request.open("GET", url__0, true); //非同步
    request.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json");
    request.setRequestHeader("Client-ID", client);
    request.send();
  }

  function put_live_search(json) {
    const live_container = document.querySelector(".search_result");
    live_container.innerHTML = "";
    // console.log(json.streams.length);
    // console.log(json);
      const search_tv = document.createElement("div"); //創建物件
      search_tv.classList.add("search_");
      search_tv.setAttribute("data-stream", `${json.stream.channel.name}`);
      search_tv.setAttribute("title", `${json.stream.channel.name}`);
      search_tv.setAttribute(
        "style",
        `background-image:url('${json.stream.preview.large}');`
      );
  
      search_tv.innerHTML = `   
       <div class="text-align_">
  
       <img src="${json.stream.channel.logo}"/>
     <p class="viewers">${json.stream.viewers}</p>
     <div class="meta_data">
     <p class="title">${json.stream.channel.name}</p>
     <p class="title_status">${json.stream.channel.status}</p>
     <p class="title_game">${json.stream.game}</p>
     </div>
         
          </div>
       `;
      live_container.appendChild(search_tv);
    
  }