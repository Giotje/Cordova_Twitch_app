const request = new XMLHttpRequest(); //rq
const client = "g7o1paeiwxkakqj4qs2zajdixk595n";
const game_num = 6;
let game_name = encodeURIComponent("League of Legends");
let base_url = `https://api.twitch.tv/kraken/streams/?game=${game_name}&limit=${game_num}`;

//https://api.twitch.tv/kraken/games/top
// 要拿到channel name https:/`/twitch.tv/channel_name
// json.streams[i].channels 有資訊 url,game,broadcaster_language, status
// json.streams[i].viewers 有觀看人數
// json.streams[i].preview.medium 圖片
function put_live(json) {
  const live_container = document.querySelector(".live");
  live_container.innerHTML = ""; //清空
  console.log(json.follows.length);
  for (let i = 0; i < json.follows.length; i++) {
    localStorage.setItem(
      `follow_stream${[i]}`,
      `${json.follows[i].channel._id},`
    );

    check_url = `https://api.twitch.tv/kraken/streams/${localStorage.getItem(
      `follow_stream${[i]}`
    )}`;
    console.log(check_url);
  }
  var steam_data =
  {
    "stream": `${
      localStorage.getItem('follow_stream0')}`,

  }
n

}
// function check_live(json_) {
//     // console.log(json);
//     console.log(json_);
//     for (let i = 0; i < json_.follows.length; i++) {
//         // console.log(json.follows[i].channel._id);
//         url_ = `https://api.twitch.tv/kraken/streams?channel=${json_.follows[i].channel._id}`;
// console.log(url_)
//     };

//     if (request.status >= 200 && request.status < 400) {

//         const response = request.responseText;
//         const json = JSON.parse(response);
//         // console.log(oke);
//         put_live(json);
//     } else {
//               console.log("error");
//             }
//             request.open("GET", url_, true);
//             request.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json");
//             request.setRequestHeader("Client-ID", client);
//             request.send();

//     }

function download_twitch() {
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const response = request.responseText;
      const json = JSON.parse(response);
      //   console.log(json.streams);
      put_live(json);
    } else {
      console.log("error");
    }
  };
  request.open("GET", base_url, true); //非同步
  request.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json");
  request.setRequestHeader("Client-ID", client);
  request.send();
}

$(document).ready(function () {
  follow_url = `https://api.twitch.tv/kraken/users/${localStorage.getItem(
    "user_id"
  )}/follows/channels?limit=100`;
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const response = request.responseText;
      const json = JSON.parse(response);
      console.log(json);
      put_live(json);
    } else {
      console.log("error");
    }
  };
  request.open("GET", follow_url, true); //非同步
  request.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json");
  request.setRequestHeader("Client-ID", client);
  request.send();
});

//Selector
document.querySelector(".container").addEventListener("click", function (e) {
  if (e.target.classList.value === "lol") {
    game_name = encodeURIComponent("League of Legends");
    base_url = `https://api.twitch.tv/kraken/streams/?game=${game_name}&limit=${game_num}`;
    download_twitch();
  } else if (e.target.classList.value === "hs") {
    game_name = encodeURIComponent("Hearthstone");
    base_url = `https://api.twitch.tv/kraken/streams/?game=${game_name}&limit=${game_num}`;
    download_twitch();
  }
});
