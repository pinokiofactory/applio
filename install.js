module.exports = {
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
        message: [
          "conda update -y -c conda-forge huggingface_hub",
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
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r ../requirements.txt",
        ]
      }
    }
  ]
}
