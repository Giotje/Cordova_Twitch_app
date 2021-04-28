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
function put_live(filter_nul) {
  url__ = `https://api.twitch.tv/kraken/streams?channel=${filter_nul}`
    request.onload = function () {

          if (request.status >= 200 && request.status < 400) {
            const response = request.responseText;
            const json = JSON.parse(response);
            console.log(json);
            //   console.log(json.streams);
            follow_live(json)
          } else {
            console.log("error");
          }
        };
        request.open("GET", url__, true); //非同步
        request.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json");
        request.setRequestHeader("Client-ID", client);
        request.send();
  
}
  // url = `https://api.twitch.tv/kraken/streams/${localStorage.getItem("etst")}`;
  // check()
function follow_live(json){

 const live_container = document.querySelector('.live'); 
 live_container.innerHTML = ''; //清空
 console.log(json.streams.length)
 for(let i=0; i<json.streams.length;i++){
     const game_tv = document.createElement("div");  //創建物件
     game_tv.classList.add('color'); // 加入class
     game_tv.setAttribute("data-stream",`${json.streams[i].channel.name}`)
     game_tv.setAttribute("title",`${json.streams[i].channel.name}`);

     game_tv.setAttribute("onclick","myFunction(this)");

     game_tv.setAttribute("style",`background-image:url('${json.streams[i].preview.large}');`);

     game_tv.innerHTML = `
     <img src="${json.streams[i].channel.logo}"
   />
   <div class="text-align_">
          <h5>${json.streams[i].channel.name}</h5>
          <p>${json.streams[i].channel.status}</p>
        </div>
     `; 
     live_container.appendChild(game_tv);
 }


}
 


//   const live_container = document.querySelector(".live");
//   live_container.innerHTML = ""; //清空
//   console.log(json.follows.length);
//   for (let i = 0; i < json.follows.length; i++) {
//     localStorage.setItem(
//       `follow_stream${[i]}`,
//       `${json.follows[i].channel._id},`
//     );

//     check_url = `https://api.twitch.tv/kraken/streams/${localStorage.getItem(
//       `follow_stream${[i]}`
//     )}`;
//     console.log(check_url);
//   }
//   var steam_data =
//   {
//     "stream_0": `${
//     localStorage.getItem('follow_stream0')}`,
//     "stream_0": `${
//       localStorage.getItem('follow_stream1')}`,

//   }
// console.log(steam_data);

// }
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

// function download_twitch() {
//   request.onload = function () {
//     if (request.status >= 200 && request.status < 400) {
//       const response = request.responseText;
//       const json = JSON.parse(response);
//       //   console.log(json.streams);
//       put_live(json);
//     } else {
//       console.log("error");
//     }
//   };
//   request.open("GET", base_url, true); //非同步
//   request.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json");
//   request.setRequestHeader("Client-ID", client);
//   request.send();
// }

$(document).ready(function () {

  setTimeout(function(){
  follow_url = `https://api.twitch.tv/kraken/users/${localStorage.getItem(
    "user_id"
  )}/follows/channels?limit=100`;
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const response = request.responseText;
      const json = JSON.parse(response);
      for (let i = 0; i < json.follows.length; i++) {
        localStorage.setItem(
          `follow_stream${[i]}`,
          `${json.follows[i].channel._id}`
        );
        id_ = json.follows[i].channel._id;
      }


      var follow_streamer_list_ids = `${localStorage.getItem("follow_stream0")},${localStorage.getItem("follow_stream2")},${localStorage.getItem("follow_stream1")},${localStorage.getItem("follow_stream3")},${localStorage.getItem("follow_stream4")},${localStorage.getItem("follow_stream5")},${localStorage.getItem("follow_stream6")},${localStorage.getItem("follow_stream7")},${localStorage.getItem("follow_stream8")},${localStorage.getItem("follow_stream9")},${localStorage.getItem("follow_stream10")},${localStorage.getItem("follow_stream11")},${localStorage.getItem("follow_stream12")},${localStorage.getItem("follow_stream13")},${localStorage.getItem("follow_stream14")},${localStorage.getItem("follow_stream15")},${localStorage.getItem("follow_stream16")},${localStorage.getItem("follow_stream17")},${localStorage.getItem("follow_stream18")},${localStorage.getItem("follow_stream19")},${localStorage.getItem("follow_stream20")},${localStorage.getItem("follow_stream21")},${localStorage.getItem("follow_stream22")},${localStorage.getItem("follow_stream23")},${localStorage.getItem("follow_stream24")},${localStorage.getItem("follow_stream25")},${localStorage.getItem("follow_stream26")},${localStorage.getItem("follow_stream27")},${localStorage.getItem("follow_stream28")},${localStorage.getItem("follow_stream29")},${localStorage.getItem("follow_stream30")},${localStorage.getItem("follow_stream31")},${localStorage.getItem("follow_stream32")},${localStorage.getItem("follow_stream33")},${localStorage.getItem("follow_stream34")},${localStorage.getItem("follow_stream35")},${localStorage.getItem("follow_stream36")},${localStorage.getItem("follow_stream37")},${localStorage.getItem("follow_stream38")},${localStorage.getItem("follow_stream39")},${localStorage.getItem("follow_stream40")},${localStorage.getItem("follow_stream41")},${localStorage.getItem("follow_stream42")},${localStorage.getItem("follow_stream43")},${localStorage.getItem("follow_stream44")},${localStorage.getItem("follow_stream45")},${localStorage.getItem("follow_stream46")},${localStorage.getItem("follow_stream47")},${localStorage.getItem("follow_stream48")},${localStorage.getItem("follow_stream49")},${localStorage.getItem("follow_stream50")},${localStorage.getItem("follow_stream51")},${localStorage.getItem("follow_stream52")},${localStorage.getItem("follow_stream53")},${localStorage.getItem("follow_stream54")},${localStorage.getItem("follow_stream55")},${localStorage.getItem("follow_stream56")},${localStorage.getItem("follow_stream57")},${localStorage.getItem("follow_stream58")},${localStorage.getItem("follow_stream59")},${localStorage.getItem("follow_stream60")},${localStorage.getItem("follow_stream61")},${localStorage.getItem("follow_stream62")},${localStorage.getItem("follow_stream63")},${localStorage.getItem("follow_stream64")},${localStorage.getItem("follow_stream65")},${localStorage.getItem("follow_stream66")},${localStorage.getItem("follow_stream67")},${localStorage.getItem("follow_stream68")},${localStorage.getItem("follow_stream69")},${localStorage.getItem("follow_stream70")},${localStorage.getItem("follow_stream71")},${localStorage.getItem("follow_stream72")},${localStorage.getItem("follow_stream73")},${localStorage.getItem("follow_stream74")},${localStorage.getItem("follow_stream75")},${localStorage.getItem("follow_stream76")},${localStorage.getItem("follow_stream77")},${localStorage.getItem("follow_stream78")},${localStorage.getItem("follow_stream79")},${localStorage.getItem("follow_stream80")},${localStorage.getItem("follow_stream81")},${localStorage.getItem("follow_stream82")},${localStorage.getItem("follow_stream83")},${localStorage.getItem("follow_stream84")},${localStorage.getItem("follow_stream85")},${localStorage.getItem("follow_stream86")},${localStorage.getItem("follow_stream87")},${localStorage.getItem("follow_stream88")}, ${localStorage.getItem("follow_stream89")},${localStorage.getItem("follow_stream90")},${localStorage.getItem("follow_stream91")},${localStorage.getItem("follow_stream92")},${localStorage.getItem("follow_stream93")},${localStorage.getItem("follow_stream94")},${localStorage.getItem("follow_stream95")},${localStorage.getItem("follow_stream96")},${localStorage.getItem("follow_stream97")},${localStorage.getItem("follow_stream98")},${localStorage.getItem("follow_stream99")},${localStorage.getItem("follow_stream100")},${localStorage.getItem("follow_stream4340")},`;
      var comma = ",";
      var filter_nul = follow_streamer_list_ids.replace(/null,/g ,"")


      console.log(filter_nul);
      localStorage.setItem("follow_list",follow_streamer_list_ids);


      put_live(filter_nul);

      // console.log(json);
    } else {
      console.log("error");
    }
  };
  request.open("GET", follow_url, true); //非同步
  request.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json");
  request.setRequestHeader("Client-ID", client);
  request.send();
}, 2000);
});


