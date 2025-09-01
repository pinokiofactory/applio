module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",
        env: {
            "TF_ENABLE_ONEDNN_OPTS": "0"
         },
        path: "app",
        message: [
          "tensorboard --logdir logs --host 127.0.0.1 --port 8050",
        ],
        on: [{
          "event": "/http:\\/\\/[^\\s\\/]+:\\d{2,5}(?=[^\\w]|$)/",
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url2: "{{input.event[0]}}"
      }
    }
  ]
}