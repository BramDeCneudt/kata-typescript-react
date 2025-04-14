import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
 return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>About</Button>
    </div>
  )
}
