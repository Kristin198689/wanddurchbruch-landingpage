import { redirect } from "next/navigation";
import activeConfig from "@/config/active.config";

export default function RootPage() {
  redirect(`/${activeConfig.defaultLocale}`);
}
