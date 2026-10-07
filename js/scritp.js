$(function () {
  $(window).on("scroll", function () {
    let sc = $(window).scrollTop();
    // console.log(sc);
    let pg01 = $("#con01").offset().top;
    let pg02 = $("#con02").offset().top;
    let pg03 = $("#con03").offset().top;
    let pg04 = $("#con04").offset().top;
    if (sc >= pg01 - 200) {
      $("#con01").addClass("on");
    } else {
      $("#con01").removeClass("on");
    }
    if (sc >= pg02 - 400) {
      $("#con02").addClass("on");
    } else {
      $("#con02").removeClass("on");
    }
    if (sc >= pg03 - 400) {
      $("#con03").addClass("on");
    } else {
      $("#con03").removeClass("on");
    }
    if (sc >= pg04 - 600) {
      $("#con04").addClass("on");
    } else {
      $("#con04").removeClass("on");
    }
    if (sc >= pg04 - 600) {
      $("#con05").addClass("on");
    } else {
      $("#con05").removeClass("on");
    }
  });
  //숫자바뀌기

  let num = 0;
  let stop = setInterval(function () {
    num = num + 17;
    $(".count").text(num);
    if (num >= 493) {
      clearInterval(stop);
    }
  }, 90);
  let num01 = 0;
  let stop01 = setInterval(function () {
    num01 = num01 + 1;
    $(".count01").text(num01);
    if (num01 >= 12) {
      clearInterval(stop01);
    }
  }, 200);
  let num02 = 0;
  let stop02 = setInterval(function () {
    num02 = num02 + 6;
    $(".count02").text(num02);
    if (num02 >= 43) {
      clearInterval(stop02);
    }
  }, 300);

  //공지
  $(".btn div").on("click", function () {
    let i = $(this).index();
    $(".gongzi ul").hide();
    $(".gongzi ul").eq(i).show().css({ display: "flex" });
    $(".btn div").css({ color: "#000000" });
    $(this).eq(i).css({ color: "#858585" });
  });
});
