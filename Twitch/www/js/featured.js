
$(".featured_nav").on("click", function () {

const request_featured = new XMLHttpRequest(); //rq
const client = "g7o1paeiwxkakqj4qs2zajdixk595n";
const game_num = 6;
let game_name = encodeURIComponent("League of Legends");

//featured streams


function featured_live(json) {
  const live_container = document.querySelector(".featured_live");
  live_container.innerHTML = "";
  // console.log(json.streams.length);
  console.log(json);
  for (let i = 0; i < json.featured.length; i++) {
    const game_tv = document.createElement("div"); //創建物件
    game_tv.classList.add("color");
    game_tv.classList.add("featur");

    game_tv.setAttribute("data-stream", `${json.featured[i].stream.channel.display_name}`);
    game_tv.setAttribute(
      "style",
      `background-image:url('${json.featured[i].stream.preview.large}');`
    );

    game_tv.innerHTML = `   
     <div class="text-align_">

     <img src="${json.featured[i].stream.channel.logo}"/>
   <p class="viewers">${json.featured[i].stream.viewers}</p>
   <div class="meta_data">
   <p class="title">${json.featured[i].stream.channel.display_name}</p>
   <p class="title_status">${json.featured[i].stream.channel.description}</p>
   <p class="title_game">${json.featured[i].stream.game}</p>
   </div>
       
        </div>
     `;
    live_container.appendChild(game_tv);
  }
}

//GET HOME PAGE FOLLOWING
$(document).ready(function () {
  setTimeout(function () {
   
   
    request_featured.onload = function () {
      if (request_featured.status >= 200 && request_featured.status < 400) {
        const response = request_featured.responseText;
        const json = JSON.parse(response);

        featured_live(json);

        // console.log(json);
      } else {
        console.log("error");
      }
    };
    request_featured.open("GET", "https://api.twitch.tv/kraken/streams/featured", true); //非同步
    request_featured.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json");
    request_featured.setRequestHeader("Client-ID", client);
    request_featured.send();
  });
});
});