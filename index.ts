import { serve } from "bun";

serve({
  port: 3001,
  fetch(req) {
    console.log("Request received:", req.method, req.url);
    return new Response("Hello from Bun!");
  },
});

console.log("Server is running on http://localhost:3001");
