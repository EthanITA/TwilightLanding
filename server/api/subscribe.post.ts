export default defineEventHandler(async (event) => {
  const url = `https://${process.env.MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`; // Endpoint for your account details
  const { email } = await readBody<{
    email: string;
  }>(event);
  console.log('email', email);
  await fetch(url, {
    method: 'POST', // or 'POST', 'PUT', 'DELETE', etc., depending on the operation
    headers: {
      Authorization: `Basic ${btoa(':' + process.env.MAILCHIMP_API_KEY)}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
  setResponseStatus(event, 201);
  return { success: true };
});
