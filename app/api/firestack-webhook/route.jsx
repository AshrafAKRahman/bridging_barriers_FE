export async function POST(request) {
  const body = request.body;
  console.log(body);
  return new Response("OK");
}
