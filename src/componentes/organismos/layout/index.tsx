interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen">
      <aside className="w-[20rem] h-full border-r-[1px] border-r-gray-200">
        Sidebar
      </aside>
      <div className="flex flex-1 flex-col h-full">
        <header className="h-[60px] border-b-[1px] border-b-gray-200">
          Header
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export { Layout };
