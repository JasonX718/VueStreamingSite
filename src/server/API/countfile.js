const fs = require('fs')
const args = process.argv.slice(2)
const basePath = args[0] || __dirname

async function count(path) {
  path = normalizePath(path)
  let fileList = await readdir(path)
  let fullPath
  let fileNum = 0

  for (let i = 0; i < fileList.length; i++) {
    fullPath = path + fileList[i]
    if ((await lstat(fullPath)).isDirectory()) {
      fileNum += await count(fullPath)
    } else {
      fileNum++
    }
  }

  return fileNum
}

function readdir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

function lstat(path) {
  return new Promise((resolve, reject) => {
    fs.lstat(path, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

function normalizePath(path) {
  if (path.endsWith('/')) return path

  return path + '/'
}

async function execute(path) {
  const fileNum = await count(path)
  console.log(path, 'files:', fileNum)
}

execute(basePath)