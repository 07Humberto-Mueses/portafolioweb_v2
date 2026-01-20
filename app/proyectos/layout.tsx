import Header from "@/components/organisms/Header";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            <main className="bg-[#C6C7C0] dark:bg-[#131313] pt-24 pb-16 flex items-center justify-center min-h-screen">
                {children}
            </main>
        </div>
    );
}
