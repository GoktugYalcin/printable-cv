import {Suspense} from "react";

import Profile from "@/components/Profile";
import ProjectList from "@/components/ProjectList";
import ProfileLoader from "@/components/Profile/loader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 pl-0">
      <Suspense fallback={<ProfileLoader />}>
          <Profile />
      </Suspense>
      <ProjectList />
    </main>
  );
}
