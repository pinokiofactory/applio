module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: [
        "git fetch --all",
        "git reset --hard origin/main"
      ],
    }
  }, {
    method: "shell.run",
    params: {
      path: "applio",
      message: [
        "git fetch --all",
        "git reset --hard origin/main"
      ],
    }
  }]
}
