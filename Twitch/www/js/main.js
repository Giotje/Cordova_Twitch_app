// Get stream url

// if(localStorage.getItem("mytime") === null){
// alert("leeg")
// }

$(document).ready(function () {
  $(".username_update_input").val(`${localStorage.getItem("username")}`);
  $("#username_show").text(`${localStorage.getItem("username")}`);

  //set home nav auto active color
  $(".home_nav").css("color", "white");
  $(".search_nav").css("color", "#644D87");
  $(".featured_nav").css("color", "#644D87");
  $(".player_nav").css("color", "#644D87");

  $(".settings_nav").css("color", "#644D87");

  //set auto show div home
  $(".videos_layout_container").show();
  $(".search").hide();
  $(".featured").hide();
  $(".player").hide();

  $(".settings").hide();

  //home button_nav
  $(".home_nav").on("click", function () {
    event.preventDefault();

    //set color
    $(".home_nav").css("color", "white");
    $(".search_nav").css("color", "#644D87");
    $(".featured_nav").css("color", "#644D87");
    $(".player_nav").css("color", "#644D87");

    $(".settings_nav").css("color", "#644D87");

    //set right div to show
    $(".videos_layout_container").show();
    $(".search").hide();
    $(".featured").hide();
    $(".player").hide();

    $(".settings").hide();
  });
  //end home button_nav

  //featured button_nav
  $(".featured_nav").on("click", function () {
    event.preventDefault();

    //set color
    $(".home_nav").css("color", "#644D87");
    $(".search_nav").css("color", "#644D87");
    $(".player_nav").css("color", "#644D87");

    $(".featured_nav").css("color", "white");
    $(".settings_nav").css("color", "#644D87");

    //set right div to show
    $(".videos_layout_container").hide();
    $(".search").hide();
    $(".player").hide();

    $(".featured").show();
    $(".settings").hide();
  });
  //end featured button_nav

  //featured button_nav
  $(".search_nav").on("click", function () {
    $(".search_val").focus();

    event.preventDefault();

    //set color
    $(".home_nav").css("color", "#644D87");
    $(".search_nav").css("color", "white");
    $(".player_nav").css("color", "#644D87");

    $(".featured_nav").css("color", "#644D87");
    $(".settings_nav").css("color", "#644D87");

    //set right div to show
    $(".videos_layout_container").hide();
    $(".search").show();
    $(".player").hide();

    $(".featured").hide();
    $(".settings").hide();
  });
  //end featured button_nav

  //Settings button_nav
  $(".settings_nav").on("click", function () {
    event.preventDefault();

    //set color
    $(".home_nav").css("color", "#644D87");
    $(".search_nav").css("color", "#644D87");
    $(".player_nav").css("color", "#644D87");

    $(".featured_nav").css("color", "#644D87");
    $(".settings_nav").css("color", "white");

    //set right div to show
    $(".videos_layout_container").hide();
    $(".search").hide();
    $(".player").hide();

    $(".featured").hide();
    $(".settings").show();
  });
  //end Settings button_nav

  //player button_nav
  $(".player_nav").on("click", function () {
    event.preventDefault();

    //set color
    $(".home_nav").css("color", "#644D87");
    $(".search_nav").css("color", "#644D87");
    $(".featured_nav").css("color", "#644D87");
    $(".settings_nav").css("color", "#644D87");
    $(".player_nav").css("color", "white");

    //set right div to show
    $(".videos_layout_container").hide();
    $(".search").hide();
    $(".player").show();

    $(".featured").hide();
    $(".settings").hide();
  });
  //end player button_nav
 
    setTimeout(function () {
      $(".color").each(function () {
        var $this = $(this);
        $this.on("click", function () {
          sessionStorage.removeItem("player_chat_url");
          sessionStorage.removeItem("player_url");

          var streamname = $(this).data("stream");
          var streamname_lowercase = streamname.toLowerCase();
          console.log(streamname_lowercase);
          // redirect to node js website for stream m3u8 url
          $.get(
            `https://twitchm3u8.herokuapp.com/${streamname_lowercase}`,
            function (data) {
              var stream_url = $("#myInput", data).val();
              sessionStorage.setItem("player_url", stream_url);

              // Twitch Chat
              var url = `https://nightdev.com/hosted/obschat?theme=&channel=${streamname}&fade=false&bot_activity=false&prevent_clipping=false`;
              sessionStorage.setItem("player_chat_url", url);
              $(".player_nav").click();

              var video = document.getElementById("player");
              playM3u8(sessionStorage.getItem("player_url"));
              // alert(sessionStorage.getItem("player_chat_url"));
              document.getElementById(
                "chatframe_desktop"
              ).src = sessionStorage.getItem("player_chat_url");

              function playM3u8(url) {
                if (Hls.isSupported()) {
                  video.volume = 0.3;
                  var hls = new Hls();
                  var m3u8Url = url;
                  hls.loadSource(m3u8Url);
                  hls.attachMedia(video);
                  hls.on(Hls.Events.MANIFEST_PARSED, function () {
                    video.play();
                  });
                  document.title = url;
                } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
                  video.src = url;
                  video.addEventListener("canplay", function () {
                    video.play();
                  });
                  video.volume = 0.3;
                  document.title = url;
                }
              }

             

             

              
              //end Twitch chat
            }
          );
        });
      });
    }, 1000);

  $(".featured_nav").on("click", function () {
    setTimeout(function () {
      $(".featur").each(function () {
        var $this = $(this);
        $this.on("click", function () {
          sessionStorage.removeItem("player_chat_url");
          sessionStorage.removeItem("player_url");

          var streamname = $(this).data("stream");
          var streamname_lowercase = streamname.toLowerCase();

          // redirect to node js website for stream m3u8 url
          $.get(
            `https://twitchm3u8.herokuapp.com/${streamname_lowercase}`,
            function (data) {
              var stream_url = $("#myInput", data).val();
              sessionStorage.setItem("player_url", stream_url);

              // Twitch Chat
              var url = `https://nightdev.com/hosted/obschat?theme=&channel=${streamname}&fade=false&bot_activity=false&prevent_clipping=false`;
              sessionStorage.setItem("player_chat_url", url);
              $(".player_nav").click();

              var video = document.getElementById("player");
              playM3u8(sessionStorage.getItem("player_url"));
              // alert(sessionStorage.getItem("player_chat_url"));
              document.getElementById(
                "chatframe_desktop"
              ).src = sessionStorage.getItem("player_chat_url");

              function playM3u8(url) {
                if (Hls.isSupported()) {
                  video.volume = 0.3;
                  var hls = new Hls();
                  var m3u8Url = url;
                  hls.loadSource(m3u8Url);
                  hls.attachMedia(video);
                  hls.on(Hls.Events.MANIFEST_PARSED, function () {
                    video.play();
                  });
                  document.title = url;
                } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
                  video.src = url;
                  video.addEventListener("canplay", function () {
                    video.play();
                  });
                  video.volume = 0.3;
                  document.title = url;
                }
              }

             

             

              
              //end Twitch chat
            }
          );
        });
      });
    }, 1000);
  });
});

//
