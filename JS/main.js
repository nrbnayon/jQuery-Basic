$(document).ready(function () {
  //    $('selector').action()
  //   $("h3").hide();
  //   $(".classSelector").hide();
  //   $("#li1").hide();

  // button click
  //   $(".clickBtn").click(function () {
  //     $(".text").hide();
  //     $(".clickBtn")
  //       .text("Show")
  //       .click(function () {
  //         $("this").show();
  //       });
  //   });

  // button toggle

  $(".clickBtn").click(function () {
    $(".text").toggle();
    const buttonText = $(this).text() === "Hide" ? "Show Text" : "Hide";
    $(this).text(buttonText);
  });

  // Fade in/out effect
  $("#fadeBtn").click(function () {
    $(".text").fadeToggle(); // Fades the text in or out
  });

  // Toggle a CSS class
  $("#toggleClassBtn").click(function () {
    $(".text").toggleClass("highlight"); // Toggles the "highlight" class
  });

  // Slide up/down effect
  $("#slideToggleBtn").click(function () {
    $(".text").slideToggle(); // Slides the text up or down
  });

  // Hover effect that changes text color
  $(".text").hover(
    function () {
      $(this).css("color", "blue");
    },
    function () {
      $(this).css("color", "black");
    }
  );

  // Add new content after a click event
  $("#li1").click(function () {
    $(this).after("<li>New item added after clicking li1</li>");
  });

  // Repeat every 2 seconds

  setInterval(function () {
    const currentText = $(".changeText").text(); // Get the current text of the element
    const newText = currentText === "Hello" ? "Text Repeat every 2" : "Hello"; // Determine the new text
    // $(".changeText").text(newText);
    $(".changeText").fadeOut(1000, function () {
      // Fade out the text
      $(this).text(newText).fadeIn(1000); // Change the text and fade it back in
    });
  }, 2000); // Repeat every 2 seconds

  $(".dropbtn").click(function () {
    const buttonText = $(this).text() === "Close" ? "Open" : "Close";
    $(this).text(buttonText);
    let currentText = $(this).text();

    if (currentText === "Close") {
      $(".lorem").slideDown(1000);
    } else {
      $(".lorem").slideUp(1000);
    }
  });

  // Box Btn

  $(".boxBtn").click(function () {
    $(".box1").fadeToggle(1000);
    $(".box2").fadeToggle(2000);
    $(".box3").fadeToggle(3000);
    $(".box4").fadeTo(1000, 0.9);
  });

  // animation
  //   $(".animationBtn").click(function () {
  //     $(".animationBox").animate({
  //       left: "500px",
  //       width: "150px",
  //       height: "150px",
  //     });
  //   });

  //   animation variable
  $(".animationBtn").click(function () {
    var box = $(".animationBox");
    box.animate({ height: "300px", opacity: "0.5" }, "slow");
    box.animate({ width: "300px", opacity: "0.7" }, "slow");
    box.animate({ height: "200px", opacity: "0.4" }, "slow");
    box.animate({ width: "200px", opacity: "1" }, "slow");
  });

  //   animation variable
  $(".animationBtn2").click(function () {
    var box = $(".animationBox2");
    box.animate({ height: "300px", opacity: "0.5" }, "slow");
    box.animate({ width: "300px", opacity: "0.7", fontSize: "30px" }, "slow");
    box.animate({ height: "100px", opacity: "0.4" }, "slow");
    box.animate({ width: "100px", opacity: "1", fontSize: "20px" }, "slow");
  });

  //stop slide

  $(".stopBtn").click(function () {
    $(".stopText").slideDown(2000);
  });
  $(".stop").click(function () {
    $(".stopText").stop();
  });

  //   call back function
  $(".callbackBtn").click(function () {
    $(".callbackText").hide("slow", function () {
      alert("Call Nayon");
    });
  });
});
