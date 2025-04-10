import { PageLayout } from "~/sharedComponents/PageLayout";
import type { Route } from "../+types/home";
import { EvaluationsContent } from "~/evaluations/EvaluationsContent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Evaluations() {
  return  <PageLayout Content={EvaluationsContent}/>;
}
