import { Loader } from "lucide-react";
import { RedirectType, redirect } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{ source: string }>;
}) {
  const source = (await params).source;
  redirect("https://www.linkedin.com/in/naga-sai-rakshith/");
  return <Loader className="animate-spin mx-auto my-20" />;
}
