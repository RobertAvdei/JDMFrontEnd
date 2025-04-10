import { DashboardContent } from "~/dashboard/DashboardContent";
import type { Route } from "../+types/home";
import { PageLayout } from "~/sharedComponents/PageLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Dashboard() {
  return  <PageLayout Content={DashboardContent}/>;
}
