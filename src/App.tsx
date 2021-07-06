import React from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn
} from "@clerk/clerk-react";
import { CLERK_FRONTEND_API } from "./constants";
import Header from "./Header";
import Home from "./Home";

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
