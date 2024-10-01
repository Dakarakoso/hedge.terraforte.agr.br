const { spawn } = require("node:child_process");

runCommand("npm", ["run", "start:dev"]);

let isInterrupted = false;

function stopServices() {
  return new Promise((resolve, reject) => {
    const stopProcess = runCommand("npm", ["run", "services:stop"]);

    stopProcess.on("exit", (code) => {
      if (code === 0) {
        console.log("\n🟢 Services stopped successfully.");
        resolve();
      } else {
        console.error(`\n❌ Failed to stop services. Exit code: ${code}`);
        reject(new Error(`Service stop process failed with code ${code}`));
      }
    });

    stopProcess.on("error", (err) => {
      console.error(`\n❌ Error stopping services: ${err.message}`);
      reject(err);
    });
  });
}

function handleTermination() {
  if (isInterrupted) return;
  isInterrupted = true;

  console.log("\n🔴 Process interrupted. Stopping services...");

  stopServices()
    .then(() => {
      console.log("\n🟢 Process terminated gracefully. Have a good rest!");
      process.exit(0);
    })
    .catch((err) => {
      console.error(`\n❌ Error during shutdown: ${err.message}`);
      process.exit(1);
    });
}

process.on("SIGINT", handleTermination);
process.on("SIGTERM", handleTermination);
process.on("SIGHUP", handleTermination);

process.on("uncaughtException", (err) => {
  console.error(`\n❌ Uncaught exception: ${err.message}`);
  handleTermination();
});

function runCommand(command, args) {
  return spawn(command, args, {
    stdio: "inherit",
    shell: true,
  });
}

console.log("Development server running. Press Ctrl+C to stop.");
