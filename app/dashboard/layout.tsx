import {requireUser} from "@/app/utils/hooks";
import Link from "next/link";
import Logo from "@/public/logo.png";
import Image from "next/image";
import {DashboardLinks} from "@/app/components/DashboardLinks";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu, User2} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {signOut} from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import {redirect} from "next/navigation";
import {Toaster} from "@/components/ui/sonner";

async function getUser(userId: string) {
    const data = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            firstName: true,
            lastName: true,
            address: true,
        },
    })

    if (!data?.firstName || !data?.lastName || !data?.address) {
        redirect("/onboarding");
    }
}

export default async function DashboardLayout({
                                                  children
                                              }: {
    children: React.ReactNode
}) {
    const session = await requireUser();
    const data = await getUser(session.user?.id as string);
    return (
        <>
            <div className={"grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"}>
                <div className={"hidden border-r bg-muted/40 md:block"}>
                    <div className={"flex flex-col max-h-screen h-full gap-2"}>
                        <div className={"h-14 flex items-center border-b px-4 lg:h-[60px] lg:px-6"}>
                            <Link
                                href="/"
                                className="group relative flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
                            >
                                {/* Background gradient */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-lg"/>

                                {/* Logo container */}
                                <div className="relative z-10">
                                    <Image
                                        src={Logo}
                                        alt="Invoicer logo"
                                        className="size-8 object-contain transition-transform duration-200 group-hover:scale-105"
                                    />
                                    {/* Logo gradient overlay */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full"/>
                                </div>

                                {/* Text with gradient */}
                                <p className="relative z-10 text-2xl font-bold tracking-tight bg-gradient-to-r bg-clip-text text-transparent transition-all duration-200 from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                                    Invoicer
                                </p>
                            </Link>
                        </div>
                        <div className={"flex-1"}>
                            <nav className={"grid items-start gap-2 text-sm font-medium lg:px-4"}>
                                <DashboardLinks/>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className={"flex flex-col"}>
                    <header className={"flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg-h[60px] lg:px-6"}>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant={"outline"} size={"icon"} className={"md:hidden"}>
                                    <Menu className={"size-5"}/>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side={"left"}>
                                <nav className={"grid gap-2 mt-10"}>
                                    <DashboardLinks/>
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <div className={"flex items-center ml-auto"}>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className={"rounded-full"} variant={"outline"} size={"icon"}>
                                        <User2/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align={"end"}>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem asChild>
                                        <Link href={"/dashboard"}>Dashboard</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={"/dashboard/invoices"}>Invoices</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem asChild>
                                        <form className={"w-full"} action={async () => {
                                            "use server";
                                            await signOut()
                                        }}>
                                            <button className={"w-full text-left"}>Log out</button>
                                        </form>

                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </header>
                    <main className={"flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6"}>
                        {children}
                    </main>
                </div>
            </div>
            <Toaster richColors closeButton theme={"light"}/>
        </>
    )
}