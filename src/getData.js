const fs = require("fs");

const json_data = fs.readFileSync("src/data_example.json")
const categories = JSON.parse(json_data);

module.exports = categories;