//onloy creating during clerk setup, after going to clerk dashboard >> jwt templates>> create Convex JWT Token, leave convex name as is, then copying issuer url
const authConfig = {
  providers: [
    {
      domain: "https://legible-parrot-24.clerk.accounts.dev", //"https://fond-sawfly-54.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
};

export default authConfig;
