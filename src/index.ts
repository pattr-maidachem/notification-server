console.log("🟢 Server is running...");

setInterval(() => {
  console.log(`[${new Date()}]`, "⏰ Checking for updates...");
  
}, 10000);

process.on("SIGINT", () => {
  console.log("🛑 Gracefully shutting down...");
  process.exit(0);
});
