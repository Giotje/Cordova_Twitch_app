// Get stream url
$(document).ready(function () {
  $(".username_update_input").val(`${localStorage.getItem("username")}`);
  $(".settings_button").on("click", function () {
    event.preventDefault();
    $(".videos_layout_container").hide();
    $(".settings").show();
    $(".navbar-toggler").click();
  });

  setTimeout(function () {
    $(".color").each(function () {
      var $this = $(this);
      $this.on("click", function () {
        alert($(this).data("stream"));
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
  }, 500);
});

//
