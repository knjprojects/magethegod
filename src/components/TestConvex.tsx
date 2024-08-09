"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const tasks: any = useQuery(api.tasks.get); //if tasks id undefined, craetes tasks.ts in /convex then npx convex dev
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <h1>
          We are simply testing the readability f convex data using the
          useQiuery
        </h1>
        <div>
          {" "}
          {tasks?.map(({ _id, text }: any) => <div key={_id}>{text}</div>)}
        </div>
      </div>
    </main>
  );
}
