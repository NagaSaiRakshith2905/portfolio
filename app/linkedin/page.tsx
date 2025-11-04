import { Loader } from "lucide-react";
import { redirect } from "next/navigation";

export default async function page() {
  redirect("https://www.linkedin.com/in/naga-sai-rakshith/");
  return <Loader className="animate-spin mx-auto my-20" />;
}
