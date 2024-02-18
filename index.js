const token =
  "EAANGaiwGVz8BOylObSFZAOLA24Mx26ZAPW2KyZBdS3hCp5o1ZBLwTYHZByoEdNFeruvDbAJo4BjQGSRu0ZAb0QDUfIZCux55Dwwn2JfOYPcVdQHgPDJOXjESu4uZCO0G3RFuX7x8ImcGyZCBgcuvQlZC2iKpWFrxiVh4XAA019dh5UhV0y5PBUsLyD2GybQuAyYMrdKtbArz43FTJFYBnu1KYZD";

const express = require("express");
const body_parser = require("body-parser");
const axios = require("axios").default;
const app = express().use(body_parser.json());

const port = 3000;

// Accepts POST requests at /webhook endpoint
app.post("/webhook", (req, res) => {
  let body = req.body;

  // Check the Incoming webhook message
  //   console.log(JSON.stringify(req.body, null, 2));

  //   let phone_number_id =
  //     req.body.entry[0].changes[0].value.metadata.phone_number_id;
  //   let from = req.body.entry[0].changes[0].value.messages[0].from; // extract the phone number from the webhook payload
  //   let msg_body = req.body.entry[0].changes[0].value.messages[0].text.body; // extract the message text from the webhook payload
  axios({
    method: "POST",
    url:
      "https://graph.facebook.com/v12.0/" +
      "204620449410277" +
      "/messages?access_token=" +
      token,
    data: {
      messaging_product: "whatsapp",
      to: "94767860850",
      text: { body: "Ack: " + "Hello Ruhaimmmm" },
    },
    headers: { "Content-Type": "application/json" },
  });

  res.sendStatus(200);
});

// app.get("/webhook", (req, res) => {
//   const verify_token = "ruhaim";

//   // Parse params from the webhook verification request
//   let mode = req.query["hub.mode"];
//   let token = req.query["hub.verify_token"];
//   let challenge = req.query["hub.challenge"];

//   if (mode && token) {
//     // Check the mode and token sent are correct
//     if (mode === "subscribe" && token === verify_token) {
//       console.log("WEBHOOK_VERIFIED");
//       res.status(200).send("heheheh");
//     } else {
//       res.sendStatus(403);
//     }
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
