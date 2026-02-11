(function () {
  const script = document.createElement("script");
  script.src = "https://cdn.torqbit.com/static/js/chat-embed.prod.js?v=" + Date.now();
  script.defer = true;

  // Preserve exact attribute casing
  script.setAttribute("data-agentId", "cmlg5hfir000kywyycyh65u0e");
  script.setAttribute("data-position", "bottom-right");

  document.head.appendChild(script);
})();
