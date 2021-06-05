const times = document.querySelectorAll(
  "div.course-horizontal-card .box > span.align-icon"
);
chrome.storage.sync.get("timeSelected", function(val){
  if(val != undefined && val != null)
  {
    var timeSelectedByUser = val.timeSelected;
    filterByTime(timeSelectedByUser);
  }
});

function filterByTime(time){
  const times = document.querySelectorAll(
    "div.course-horizontal-card .box > span.align-icon"
  );
  const maxTime = time;
  times.forEach(tm => {
    validateTime(tm, maxTime);
  })
}

function validateTime(time) {
  const html = time.innerHTML;
  const hours = html.charAt(0);
  if (hours < maxtime) 
    setNewStyle(time);
}

function serNewStyle(time){
  time.style.color = "green";
  time.style.fontWeight: "bold";

  const parentCard = time.closet(".card.courses-horizontal-card");
  parentCard.style.border = "2px solid green";
}