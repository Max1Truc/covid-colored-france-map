const express = require('express')
const fs = require('fs')
const fetch = require('node-fetch');
const app = express()
const port = 3132

app.use(express.static('static'))
app.use(express.static('data'))

const DATA_SOURCE = "https://app.stopcovid.gouv.fr/infos/key-figures.json"
function downloadData() {
    console.log("Updated data on:");
    console.dir(new Date())
    console.log("")
    fetch(DATA_SOURCE).then((response) => response.text()).then((data) => {
        fs.writeFileSync("data/data.json", data)
    })
}
setInterval(() => {
    downloadData();
}, 1000 * 60 * 60 * 24);
downloadData();

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})
