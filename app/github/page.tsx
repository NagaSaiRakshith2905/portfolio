import { Loader } from "lucide-react";
import { RedirectType, redirect } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{ source: string }>;
}) {
  const source = (await params).source;
  redirect("https://github.com/NagaSaiRakshith2905/");
  return <Loader className="animate-spin mx-auto my-20" />;
}
