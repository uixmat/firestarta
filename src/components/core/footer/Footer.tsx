import { Section } from "@/components/core/section/Section";
import { Link } from "@/lib/intl/navigation";
import Logo from "@/components/core/brand/Logo";

export default async function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="mt-auto">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <Section size="sm">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex flex-col gap-1">
                <h5 className="flex items-center gap-2 mb-2 text-white">
                  <Logo className="h-5" />{" "}
                  <b className="font-poppins">Firestarta</b>
                </h5>
                <p>&copy; {year}</p>
                <p>
                  Designed &amp; built by{" "}
                  <a
                    href="https://x.com/uixmat"
                    target="_blank"
                    className="text-indigo-300 hover:text-white"
                  >
                    uixmat
                  </a>
                  .
                </p>
              </div>

              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/users"
                    title="Demo Users"
                    className="text-indigo-300 hover:text-white"
                  >
                    Demo Users
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    title="Demo Pricing"
                    className="text-indigo-300 hover:text-white"
                  >
                    Demo Pricing
                  </Link>
                </li>
                <li className="opacity-20">Documentation</li>
              </ul>

              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/privacy"
                    title="Privacy"
                    className="text-indigo-300 hover:text-white"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    title="Terms"
                    className="text-indigo-300 hover:text-white"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/license"
                    title="License"
                    className="text-indigo-300 hover:text-white"
                  >
                    License
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/uixmat/firestarta"
                    target="_blank"
                    title="Firestarta Github"
                    className="text-indigo-300 hover:text-white"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
