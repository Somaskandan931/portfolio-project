// netlify/functions/notify.js
// Receives inquiry from Services page, sends Telegram notification.
// Env vars needed (set in Netlify dashboard AND .env for local):
//   TELEGRAM_BOT_TOKEN
//   TELEGRAM_CHAT_ID

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  // CORS headers so the React app can call this
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { name, email, service, budget, message } = body;

  if (!name || !email || !service || !message) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Missing required fields' }),
    };
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error('Telegram env vars not set');
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Server configuration error' }),
    };
  }

  // Format the Telegram message
  const text = [
    `🔔 *New Service Inquiry*`,
    ``,
    `👤 *Name:* ${name}`,
    `📧 *Email:* ${email}`,
    `🛠 *Service:* ${service}`,
    budget ? `💰 *Budget:* ${budget}` : null,
    ``,
    `📝 *Message:*`,
    message,
  ]
    .filter(line => line !== null)
    .join('\n');

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'Markdown',
        }),
      }
    );

    const result = await res.json();

    if (!result.ok) {
      console.error('Telegram API error:', result);
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ error: 'Failed to send notification' }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Fetch error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};