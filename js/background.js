chrome.runtime.onInstalled.addListener(() => {
  chrome.storege.sync.set({ timeSelected: 2 }, () => {
    console.log("Tiempo selenado por defecto");
  });
});
