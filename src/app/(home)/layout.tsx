import Navbar from "@/components/Navbar";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="h-screen w-screen bg-background text-duckBlue2">


      {children}
    </div>)
}