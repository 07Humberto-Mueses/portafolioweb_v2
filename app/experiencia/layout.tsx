import Header from "@/components/organisms/Header";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="pt-24 pb-16 w-full px-2 sm:px-6 md:px-16 flex-1">
                {children}
            </main>
        </div>
    );
}
