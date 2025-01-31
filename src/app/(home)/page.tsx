import Button from "@/components/Button"
import Link from "next/link";
const links = [
  { href: "/", label: "" },
  { href: "/about", label: "about" },
  { href: "/blog", label: "blog" },
  { href: "/pages/support", label: "support" },
  { href: "/contact", label: "contact" },
];




export default function Home() {
  return (
    <div className=" flex items-center justify-center min-h-screen">
      <div className="space-y-4  w-1/2">
        <div className="mt-10">
          <div className="flex flex-col h-12 mt- items-middle center  items-align-center  sm:flex-col lg:flex-row sm:mt-8">
            {links.slice(0, 1).map((link) => (
              <Link key={link.href} href={link.href} className="flex-1  basis-[calc(50%-2rem)]">
                <div className="flex justify-center h-1/2">
                  <Button className="w-1/2   ">
                    <div className="p-2 text-center">

                      duckb3ar
                    </div>
                  </Button>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-16 mt-20">
            {links.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className="flex-1 basis-[calc(50%-2rem)]">
                <Button className="w-full p-16 text-center ">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}




