import Header from "@/components/organisms/Header";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            <main className="min-h-screen flex flex-col">
                {children}
            </main>
        </div>
    );
}
