const enviroments = require("./config/enviroment");
const AppRouter = require("./routes/router");
const Server = require("./server/server");


 (()=> {
    main();
 })();

 function main() {
    new Server(enviroments.PORT, AppRouter.routes).start()
 }