module.exports = {
  requires: {
    bundle: "ai",
  },
  run: [
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/IAHispano/Applio app",
      },
    },
    {
      method: "shell.run",
      params: {
        venv_python: "3.11",
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r ../requirements.txt",
        ]
      }
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
    }
  ]
}
