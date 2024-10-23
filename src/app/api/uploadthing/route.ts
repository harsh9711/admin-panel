import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core"; 
import { UTApi } from "uploadthing/server";


export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: {
    token: process.env.UPLOADTHING_TOKEN,
  },
});
export async function DELETE(request: Request) {
  const { filekey } = await request.json();
  const utApi = new UTApi();
  await utApi.deleteFiles(filekey);

  return Response.json({ message: "Image Deleted" });
}
