module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/IAHispano/Applio app",
      },
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
          params: {
          venv: "env",               
          path: "app",
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "uv pip install -r ../requirements.txt",
        ]
      }
    }
  ]
}
