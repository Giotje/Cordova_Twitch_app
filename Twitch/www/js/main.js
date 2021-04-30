// Get stream url

// if(localStorage.getItem("mytime") === null){
// alert("leeg")
// }


$(document).ready(function () {
  $(".username_update_input").val(`${localStorage.getItem("username")}`);




  //set home nav auto active color
  $(".home_nav").css("color","darkorchid");
  $(".search_nav").css("color","#212529");
  $(".featured_nav").css("color","#212529");
  $(".settings_nav").css("color","#212529");

  //set auto show div home
  $(".videos_layout_container").show();
  $(".search").hide();
  $(".featured").hide();
  $(".settings").hide();


//home button_nav
$(".home_nav").on("click", function () {
  event.preventDefault();

  //set color
  $(".home_nav").css("color","darkorchid");
  $(".search_nav").css("color","#212529");
  $(".featured_nav").css("color","#212529");
  $(".settings_nav").css("color","#212529");

  
  //set right div to show
  $(".videos_layout_container").show();
  $(".search").hide();
  $(".featured").hide();
  $(".settings").hide();
});
//end home button_nav

//featured button_nav
$(".featured_nav").on("click", function () {
  event.preventDefault();

  //set color
  $(".home_nav").css("color","#212529");
  $(".search_nav").css("color","#212529");
  $(".featured_nav").css("color","darkorchid");
  $(".settings_nav").css("color","#212529");

  
  //set right div to show
  $(".videos_layout_container").hide();
  $(".search").hide();
  $(".featured").show();
  $(".settings").hide();
});
//end featured button_nav

//featured button_nav
$(".search_nav").on("click", function () {
  event.preventDefault();

  //set color
  $(".home_nav").css("color","#212529");
  $(".search_nav").css("color","darkorchid");
  $(".featured_nav").css("color","#212529");
  $(".settings_nav").css("color","#212529");

  
  //set right div to show
  $(".videos_layout_container").hide();
  $(".search").show();
  $(".featured").hide();
  $(".settings").hide();
});
//end featured button_nav


  //Settings button_nav
  $(".settings_nav").on("click", function () {
    event.preventDefault();

    //set color
    $(".home_nav").css("color","#212529");
    $(".search_nav").css("color","#212529");
    $(".featured_nav").css("color","#212529");
    $(".settings_nav").css("color","darkorchid");

    
    //set right div to show
    $(".videos_layout_container").hide();
    $(".search").hide();
    $(".featured").hide();
    $(".settings").show();
  });
  //end Settings button_nav

  setTimeout(function () {
    $(".color").each(function () {
      var $this = $(this);
      $this.on("click", function () {
        var streamname = $(this).data("stream");
        // redirect to node js website for stream m3u8 url
        $.get(
          `https://twitchm3u8.herokuapp.com/${streamname}`,
          function (data) {
            var stream_url = $("#myInput", data).val();
            sessionStorage.setItem("player_url", stream_url);

            // Twitch Chat
            var url = `https://nightdev.com/hosted/obschat?theme=&channel=${streamname}&fade=false&bot_activity=false&prevent_clipping=false`;
            sessionStorage.setItem("player_chat_url", url);
            window.location.href = "player/index.html";

            //end Twitch chat
          }
        );
      });
    });
  }, 900);
});

//
