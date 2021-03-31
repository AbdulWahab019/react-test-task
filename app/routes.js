"use strict";
exports.__esModule = true;
function useRoutes(app) {
    app.use("/calculator", require("./controllers/calculatorController"));
}
exports.useRoutes = useRoutes;
