import { serve } from "https://deno.land/std@0.53.0/http/server.ts";

let port: string = Deno.env.get("PORT") || "8001";
const s = serve({ port: parseInt(port) });

console.log(`http://localhost:${port}/`);
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
