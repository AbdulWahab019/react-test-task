export function useRoutes(app) {
  app.use("/calculator", require("./controllers/calculatorController"));
}
