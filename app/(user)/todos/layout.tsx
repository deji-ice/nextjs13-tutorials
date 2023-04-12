import TodosList from "./TodosList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex m-5 flex-2">
      <div>
        {/* @ts-ignore */}
        <TodosList />
      </div>
      <div className="flex-1"> {children}</div>
    </main>
  );
}
