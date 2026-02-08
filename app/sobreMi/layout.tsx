import Header from "@/components/organisms/Header";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header/>
            <main className="pt-24 pb-16 flex items-center justify-center min-h-screen">
                {children}
            </main>
        </div>
    );
}
