const path = require('path')
module.exports = {
  version: "3.7",
  title: "Applio",
  description: "A simple, high-quality voice conversion tool focused on ease of use and performance.",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = info.exists("app/env")
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      tensorboard: info.running("tensorboard.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js"),
      link: info.running("link.js")
    }
    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      if (running.start && running.tensorboard) {
        let local = info.local("start.js")
        let local2 = info.local("tensorboard.js")
        if (local && local.url && local2 && local2.url2) {
          return [{
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: "fa-solid fa-rocket",
            text: "Open Tensorboard",
            href: local2.url2,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "Applio-Terminal",
            href: "start.js",
          }, {
            icon: 'fa-solid fa-terminal',
            text: "TB-Terminal",
            href: "tensorboard.js",
          }]
        } else {
          return [{
            icon: 'fa-solid fa-terminal',
            text: "Applio-Terminal",
            href: "start.js",
          }, {
            icon: 'fa-solid fa-terminal',
            text: "TB-Terminal",
            href: "tensorboard.js",
          }]
        }
      } else if (running.tensorboard) {
        let local2 = info.local("tensorboard.js")
        if (local2 && local2.url2) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Tensorboard",
            href: local2.url2,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "TB-Terminal",
            href: "tensorboard.js",
          }, {
            icon: 'fa-solid fa-power-off',
            text: "Start",
            href: "start.js",
          }]
        } else {
          return [{
            icon: 'fa-solid fa-terminal',
            text: "TB-Terminal",
            href: "tensorboard.js",
          }]
        }
      } else if (running.start) {
        let local = info.local("start.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "Applio-Terminal",
            href: "start.js",
          }, {
            icon: 'fa-solid fa-power-off',
            text: "Tensorboard",
            href: "tensorboard.js",
          }]
        } else {
          return [{
            icon: 'fa-solid fa-terminal',
            text: "Applio-Terminal",
            href: "start.js",
          }]
        }
      } else if (running.update) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Updating",
          href: "update.js",
        }]
      } else if (running.reset) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Resetting",
          href: "reset.js",
        }]
      } else if (running.link) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Deduplicating",
          href: "link.js",
        }]
      } else {
        return [{
          default: true,
          icon: "fa-solid fa-power-off",
          text: "Start",
          href: "start.js",
        }, {
          icon: "fa-solid fa-power-off",
          text: "Tensorboard",
          href: "tensorboard.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        }, {
          icon: "fa-solid fa-file-zipper",
          text: "<div><strong>Save Disk Space</strong><div>Deduplicates redundant library files</div></div>",
          href: "link.js",
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "<div><strong>Reset</strong><div>Revert to pre-install state</div></div>",
          href: "reset.js",
          confirm: "Are you sure you wish to reset the app?"

        }]
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
