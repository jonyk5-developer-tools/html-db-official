
let htmlDB = require("./index.js");
let express = require("express");
let app = express();
let axe = new htmlDB.db();
axe.createTable("abx");

axe.getTable("abx").set("A", "B")
let n = axe.all();
let a = new htmlDB.db(n);
console.log(a.all())
let b = new htmlDB.db(n);
let c = axe.toJSON();
console.log(c)
let d = new htmlDB.db(c);
console.log(d.all());
console.log(d.hasTable("abx"));
class tds extends htmlDB.Plugin{
    run(self){
        self.findMe = true;
        return;
    }
}
axe.loadPlugins([new tds()]);
console.log(axe.findMe)
axe.save();
axe.createTable("d1");
console.log(axe.all())
axe.load();
console.log(axe.all())
app.use("/db", htmlDB.WebManager);
app.listen(3000)