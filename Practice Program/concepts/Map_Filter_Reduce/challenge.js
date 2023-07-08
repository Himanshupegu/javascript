// import emojipedia from "./emojipedia";

const emojipedia = require('./emojipedia')

const newEmojipedia = emojipedia.map(function (newEntry) {
  return newEntry.meaning.substring(0, 100)
})

console.log(newEmojipedia)

