import string from "./css.js";

const player = {
  id: undefined,
  // 设置初始速度
  time: 100,
  n: 1,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2"),
  },
  // 绑定函数事件
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  init: () => {
     // 绑定事件
     player.bindEvents();
    // 默认播放,把id提出来
    player.play();
  },
  bindEvents: () => {
    for (const key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  // 写页面
  run: () => {
    player.n += 1;
    // 当写完时，n不再+1
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    // 在页面上写css
    player.ui.demo.innerText = string.substring(0, player.n);
    // 在结构中写css
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  // 播放
  play: () => {
    // console.log("play");
    player.id = setInterval(player.run, player.time);
  },
  //暂停
  pause: () => {
    window.clearInterval(player.id);
  },
  // 慢速
  slow: () => {
    player.pause();
    player.time = 300;
    player.play();
  },
  // 中速
  normal: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  // 快速
  fast: () => {
    player.pause();
    player.time = -100;
    player.play();
  },
};
// 调用初始化
player.init();
 