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
    const buttonText = $(this).text() === "Hide" ? "Show Text" : "Hide Text";
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

  setInterval(function () {
    const currentText = $(".changeText").text(); // Get the current text of the element
    const newText = currentText === "Hello" ? "Text Repeat every 2" : "Hello"; // Determine the new text
    $(".changeText").fadeOut(1000, function () {
      // Fade out the text
      $(this).text(newText).fadeIn(1000); // Change the text and fade it back in
    });
  }, 2000); // Repeat every 2 seconds
});
