const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const categories = require("./getData");
const app = express();

app.set("port", 8080);

app.set("views", path.join(__dirname, "views"));

app.engine(".hbs",exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDirDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars")
}));

app.set("view engine", ".hbs");
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require("./routes"));
app.use(express.static(path.join(__dirname, "public")))

app.listen(app.get("port"), ()=>{
    console.log(`sever on http://localhost:${app.get("port")}`);
});