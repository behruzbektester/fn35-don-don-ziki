const elGameZone = document.getElementById("gameZone");
const elStatus = document.getElementById("status");
const elGameZonePicker = document.getElementById("gameZonePicker");
const elHands = document.querySelectorAll(".js-hand");
const elhumanHand = document.getElementById("humanHand");
const elAiHand = document.getElementById("aiHand");
const elRefreshGame = document.getElementById("refreshGame");
const elScore = document.getElementById("score");
const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

export {
  elGameZone,
  elGameZonePicker,
  elHands,
  elAiHand,
  elhumanHand,
  elRefreshGame,
  elStatus,
  elScore,
  showBtn,
  modal,
  closeBtn,
  overlay,
};
