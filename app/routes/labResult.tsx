import type { Route } from "../+types/home";
import { PageLayout } from "~/sharedComponents/PageLayout";
import { LabResultContent } from "~/labResult/labResultContent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lab Results" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Dashboard() {
  return  <PageLayout Content={LabResultContent}/>;
}
