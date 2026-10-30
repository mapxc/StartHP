window.PAGE_CONFIG = {
  theme: "fox",
  weatherCity: { name: "Бишкек", lat: 42.8746, lon: 74.5698 },
  timerMin: 25,
  tasks: [
    { t: "Настроить синхронизацию через GitHub", done: true },
    { t: "Задеплоить стартерпейдж", done: true }
  ],
  backlog: [
    { t: "Cyberpunk 2077: Phantom Liberty", cat: "Игра", done: false },
    { t: "Baldur’s Gate 3 (Акт 3)", cat: "Игра", done: false }
  ],
  streamCfg: {
    active: "spotify",
    urls: {
      spotify: "https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0",
      yandex: "https://music.yandex.ru/iframe/playlist/yamusic-top/1033",
      lofi: "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=0"
    }
  },
  cfg: {
    accent: "",
    bgUrl: "",
    bgDim: 45,
    font: "sans",
    radius: "14px",
    linkView: "tiles",
    newTab: true,
    showWeather: true,
    showEngines: true,
    showTimer: true,
    showMonthCal: true,
    showFolders: true,
    showTasks: true,
    showFinRow: true,
    showWidgets: true,
    perPageTheme: true,
    pageThemes: {
      home: "fox",
      cyber: "cyberpunk",
      design: "minimal",
      fun: "gaming"
    },
    wp: { type: "preset", url: "", preset: 0 },
    bgBlur: 0,
    bgBright: 100,
    bgSat: 100,
    panelAlpha: 82
  },
  // Твои папки и закладки (можешь править прямо здесь)
  groups: [
    {
      n: "Экосистема Google",
      icon: "🌐",
      l: [
        ["Gmail", "https://mail.google.com"],
        ["Google Диск", "https://drive.google.com"],
        ["Google Календарь", "https://calendar.google.com"],
        ["Документы", "https://docs.google.com"]
      ]
    },
    {
      n: "Разработка и Код",
      icon: "💻",
      l: [
        ["GitHub", "https://github.com"],
        ["Stack Overflow", "https://stackoverflow.com"],
        ["MDN Web Docs", "https://developer.mozilla.org"]
      ]
    }
  ]
};
