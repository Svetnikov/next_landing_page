
export const metadata = {
 title: 'Con lrc se crean los Layouts!',
 description: 'Con lrc se crean los Layouts!',
};
export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      {/* <h1>Hello Root Layout Root Name</h1> */}
      {children}
    </div>
  );
}