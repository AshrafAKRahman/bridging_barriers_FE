export async function POST(request) {
  const body = await request.json();
  console.log(`Webhook received for ${body.action} event`);
  console.log(`Saving ${body.text.url} to db`);
  return new Response("OK");
}
