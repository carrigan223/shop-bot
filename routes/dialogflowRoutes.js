module.exports = (app) => {
  //route handling
  app.get("/", (req, res) => {
    res.send("Successful send");
  });

  app.post("/api/df_text_query", (req, res) => {
    res.send({ insert: "Text Query" });
  });

  app.post("/api/df_event_query", (req, res) => {
    res.send({ insert: "Event Query" });
  });
};
