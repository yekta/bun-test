import { serve } from "bun";

serve({
  fetch(req) {
    console.log("Request received:", req.method, req.url);
    return new Response("Hello from Bun!");
  },
});
