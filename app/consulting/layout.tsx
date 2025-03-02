export default function ConsultingLayout({
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