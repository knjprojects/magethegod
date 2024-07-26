"use client";
// ./src/app/studio/[[...index]]/Studio.tsx
//import {NextStudio} from 'next-sanity/studio'

import { NextStudio } from "next-sanity/studio";
import { StudioProvider, StudioLayout, StudioComponents } from "sanity";

import defineConfig from "../../sanity/sanity.config";

const Studio = () => {
  return (
    <NextStudio config={defineConfig}>
      <StudioProvider config={defineConfig}>
        {/* Put components here and you'll have access to the same React hooks as Studio gives you when writing plugins */}
        <StudioLayout />
      </StudioProvider>
    </NextStudio>
  );
};
export default Studio;
