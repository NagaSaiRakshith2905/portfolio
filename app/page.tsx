import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 max-w-3xl mx-auto py-6 px-8 flex flex-col gap-12">
      <AboutSection />
      <ConnectSection />
    </main>
  );
}

function AboutSection() {
  return (
    <section className="flex flex-col items-start justify-center">
      <h1 className="text-white text-base font-medium">
        Rakshith
      </h1>
      <p className="text-white/70 mt-2">
        Software engineer @ Capgemini [ Project: Cisco ]. Building web applications and exploring new technologies.
      </p>
      <h2 className="text-white text-base font-medium mt-4">
        Current Tech Stack
      </h2>
      <ul className="list-disc list-inside text-white/70 mt-2">
        <li>Frontend:
          <span className="font-medium">
            React, Next.js, Tailwind CSS
          </span>
        </li>
        <li>Backend:
          <span className="font-medium">
            Next.js, Springboot
          </span>
        </li>
        <li>Database:
          <span className="font-medium">
            PostgreSQL [ Using <Link href="https://neon.com/" target="noopener noreferrer" className="border-b border-dashed" >Neon</Link> for projects ]
          </span>
        </li>
        <li>Version Control:
          <span className="font-medium">
            Git, GitHub
          </span>
        </li>
        <li>ORM:
          <span className="font-medium">
            Drizzle ORM
          </span>
        </li>
        <li>Auth Provider:
          <span className="font-medium">
            Better-Auth
          </span>
        </li>
      </ul>
    </section>
  )
}

function ConnectSection() {
  return (
    <section className="flex flex-col items-start justify-center">
      <h1 className="text-white text-base font-medium">
        Connect
      </h1>
      <p className="text-white/70 mt-2">
        Reach me at <Link href="mailto:nagasairakshith.bs@gmail.com" className="border-b border-dashed">
          nagasairakshith.bs@gmail.com
        </Link> or connect with me on the platforms below.
      </p>
      <Link href="/github" className="text-white text-base border-b border-dashed mt-4">
        GitHub
      </Link>
      <Link href="/linkedin" className="text-white text-base border-b border-dashed mt-4">
        LinkedIn
      </Link>
    </section>
  )
}