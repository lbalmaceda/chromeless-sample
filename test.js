const { Chromeless } = require('chromeless')
const path = require('path');

const chromeless = new Chromeless()


async function run() {
  //Open the QuickStart Home page
  const screenshot = await chromeless
    .goto("http://localhost:3000")
    .wait("#qsLoginBtn")
    // Click log in, wait for Lock and fill the form
    .click("#qsLoginBtn")
    .wait("input[name='password']")
    .wait(3000)
    .type("asdasd", "input[name='username']")
    .type("asdasd", "input[name='password']")
    //Submit form and wait for any errors
    .click(".auth0-lock-widget-container .auth0-lock-submit")
    .wait(5000)
    .wait("#qsLogoutBtn")
    .screenshot({ filePath: path.join(__dirname, 'out/logged-in.png') });

  console.log(screenshot) // prints local file path or S3 url

  await chromeless.end()
}

run().catch(console.error.bind(console))