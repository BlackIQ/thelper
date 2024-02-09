// curl --location 'https://api.telegram.org/bot5928828905:AAHA9ECkUssA5ia-IroFpqUZWhcB_l1z2dQ/sendMessage' \
// --header 'Content-Type: application/json' \
// --data '{
//     "chat_id": -802906270,
//     "text": "کفتار"
// }'

import axios from "axios";

export const SEND = async (req, res) => {
  const data = req.body;
  const { bot } = req.params;

  const baseUrl = "https://api.telegram.org";

  try {
    const response = await axios.post(`${baseUrl}/bot${bot}/sendMessage`, data);

    return res.status(200).send(response.data);
  } catch (error) {
    console.log(error.message);

    return res.status(500).send({ error: error.response.data.message });
  }
};
