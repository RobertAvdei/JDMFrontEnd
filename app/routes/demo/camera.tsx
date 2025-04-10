import { PageLayout } from "~/sharedComponents/PageLayout";
import type { Route } from "../+types/home";
import { CameraComponent } from "~/demo/CameraPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Camera" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return  <PageLayout Content={CameraComponent}/>;
}