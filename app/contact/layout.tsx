export default function ContactLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="light-theme min-h-screen bg-background">
            {children}
        </div>
    );
  }