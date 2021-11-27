const express = require('express');
const Router = express.Router();


Router.route("/api/Cities")
get((req, res) => {
    res.json({ response: { cities } });
  })

module.exports = Router