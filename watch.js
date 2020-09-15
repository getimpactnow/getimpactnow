const chokidar = require("chokidar");
const { spawn } = require("child_process");

// One-liner for current directory
chokidar
  .watch("src/", {
    awaitWriteFinish: {
      stabilityThreshold: 500,
      pollInterval: 100,
    },
  })
  .on("change", (event, path) => {
    console.log(event, path);
    const yarn = spawn("yarn", ["autobuild"]);

    yarn.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });

    yarn.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    yarn.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });
  });
