import { serveDir, serveFile } from "jsr:@std/http/file-server";

Deno.serve(async (req: Request) => {
    const pathname = new URL(req.url).pathname;

    console.log(pathname);

    if (pathname === "/") {
        return await serveFile(req, "./frontend/index.html");
    }

    if (pathname.startsWith("/")) {
        return await serveDir(req, {
            fsRoot: "frontend",
        });
    }

    return new Response("Not found");
});
