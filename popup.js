console.log("This is a popup!");

const btnIDList = ["OPEN_NOT_DEPLOY_PRODUCTS"];

window.addEventListener("load", function () {
  btnIDList.map((id) => {
    const $btnOpenAllBtn = document.querySelector("#" + id);
    $btnOpenAllBtn.addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          data: { action: id },
        });
      });
    });
  });
});
