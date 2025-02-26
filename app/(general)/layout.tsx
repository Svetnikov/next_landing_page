import { Navbar } from "@/components";

export default function  GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
        <Navbar/>
        <div className="flex flex-col items-center">
          <h1>Hello Root Layout Root Name</h1>
          {children}
        </div>
    </>
  );
}