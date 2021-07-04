import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import { CLERK_FRONTEND_API, CLERK_SIGN_IN_URL } from "./constants";
import Header from "./Header";
import Home from "./Home";

const RedirectToSignIn = () => {
  useEffect(() => {
    window.location.href = CLERK_SIGN_IN_URL;
  });
  return null;
};

const App = () => (
  <ClerkProvider frontendApi={CLERK_FRONTEND_API}>
    <SignedIn>
      <Header />
      <Home />
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </ClerkProvider>
);

export default App;
