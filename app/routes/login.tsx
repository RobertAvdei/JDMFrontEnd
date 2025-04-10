import { PageLayout } from "~/sharedComponents/PageLayout";
import type { Route } from "../+types/home";
import { LoginContent } from "~/login/LOGINContent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return  <PageLayout Content={LoginContent}/>;
}
