window.onload = function () {
  const userLanguage = navigator.language || navigator.languages[0];
  let request, instaRequest1, instaRequest2, hashtag;

  if (userLanguage === "ko-KR") {
    request = "사진 1장 리뷰 2줄 부탁드립니다!";
    instaRequest1 = "스토리로 작성해주시고 매장을 태그 해 주세요!";
    instaRequest2 =
      "해시태그를 자동으로 복사하였습니다! 스토리 작성후 붙혀넣기 해주세요";
    hashtag =
      "#부산데이트코스 #lasertagsports #레이저태그스포츠 #레이저태그스포츠서면점 #부산서바이벌 #서면데이트 #레이저서바이벌 #서면놀거리 #서면핫플 #부산핫플 #부산여행 #부산가족여행 #부산데이트 #서면데이트코스 #부산여행코스 #부산맛집 #부산카페 #서면맛집 #서면카페 #서면놀거리 #서면놀만한곳";
  } else {
    request = "Please take a photo and write a 2-sentence review!";
    instaRequest1 = "Please write a story and tag the store!";
    instaRequest2 =
      "automatically copied the hashtag! Please paste it after writing the story";
    hashtag =
      "#BusanTourism #BusanVacation #BusanAttractions #seomyeonBeach #seomyeon #seomyeonDate #LaserTagBusan #LaserTagseomyeon #BusanNightlife #BusanPlayground #ThingsToDoInBusan #BusanActivities #BusanRestaurants #seomyeonRestaurants #BusanFamilyTravel #seomyeonCafe #seomyeonTravel #Visitseomyeon #BusanBeach #TravelToBusan #KoreaTravel #SouthKoreaTravel #ExploreBusan #KoreanVacation #BusanHoliday";
  }

  const naver = document.querySelector(".naver");
  const google = document.querySelector(".google");
  const insta = document.querySelector(".insta");

  function showExamplesAndRedirect(callback) {
    const modal = document.getElementById("imageModal");
    modal.style.display = "block";

    setTimeout(() => {
      modal.style.display = "none";
      callback();
    }, 5000);
  }

  naver.addEventListener("click", () => {
    alert(request);
    showExamplesAndRedirect(() => {
      window.location.href =
        "https://m.place.naver.com/place/2070088115/review/visitor";
    });
  });

  google.addEventListener("click", () => {
    alert(request);
    showExamplesAndRedirect(() => {
      // window.location.href = "https://g.page/r/CXfAXMEY8nB9EAI/review";
      alert("현재 준비중입니다!");
    });
  });

  insta.addEventListener("click", () => {
    alert(instaRequest1);
    alert(request);
    alert(instaRequest2);

    navigator.clipboard.writeText(hashtag);

    showExamplesAndRedirect(() => {
      if (/android/.test(navigator.userAgent.toLowerCase())) {
        window.location.href = "https://www.instagram.com/";
      } else {
        window.location.href = "instagram://camera";
      }
    });
  });
};
