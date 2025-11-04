import { Loader } from "lucide-react";
import { redirect } from "next/navigation";

export default async function page() {
  redirect("https://github.com/NagaSaiRakshith2905/");
  return <Loader className="animate-spin mx-auto my-20" />;
}
