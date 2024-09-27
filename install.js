module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/IAHispano/Applio applio",
      },
    },
    {
      method: "shell.run",
      params: {
        path: "applio",
        message: [
          "git reset --hard 5db5e53ad30cc69007e576d96f85fdd932c9fea8"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
          params: {
          venv: "env",               
          path: "applio",
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "applio",                // Edit this to customize the path to start the shell from
        message: [
          "pip install --upgrade setuptools",
          "pip install -r ../requirements.txt",
        ]
      }
    }
  ]
}
