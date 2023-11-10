// async = makes a function return a Promise
// await = makes an async function wait for a Promise

async function loadFile() {
  let fileLoaded = true;

  if (fileLoaded) {
    return 'File loaded';
  } else {
    throw 'File not loaded';
  }
}

async function startProcess() {
  try {
    let message = await loadFile();
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

startProcess();

// loadFile()
//   .then((value) => console.log(value))
//   .catch((err) => console.log(err));
