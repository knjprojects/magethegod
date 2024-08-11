import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
//only accessible public routes are sign-in, sign-up and /
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);
//all other routes are now private
export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) auth().protect(); //role arguemnet is emoty rn for protect
});
//now that our middleware is setup, we can attempt to call authentication webhooks when a user is created in /convex/users
//to create a webhook in convex, let's create http.ts->

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
