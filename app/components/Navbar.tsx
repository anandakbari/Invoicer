// import Image from "next/image";
// import Link from "next/link";
// import Logo from "@/public/logo.png";
// import {buttonVariants} from "@/components/ui/button";
// import {RainbowButton} from "@/components/ui/rainbow-button";
//
// export function Navbar() {
//     return (
//         <div className="flex items-center justify-between py-5">
//             <Link
//                 href="/"
//                 className="group relative flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 "
//             >
//
//                 {/* Logo container */}
//                 <div className="relative z-10">
//                     <Image
//                         src={Logo}
//                         alt="Invoicer logo"
//                         className="size-10 object-contain transition-transform duration-200 group-hover:scale-105 rounded-md"
//                     />
//                     {/* Logo gradient overlay */}
//                     <div
//                         className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full"/>
//                 </div>
//
//                 {/* Text with gradient */}
//                 <p className="relative z-10 text-3xl font-bold tracking-tight bg-gradient-to-r bg-clip-text text-transparent transition-all duration-200 from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
//                     Invoicer
//                 </p>
//             </Link>
//             <Link href="/login">
//                 <RainbowButton>Get Started</RainbowButton>
//             </Link>
//         </div>
//     );
// }

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { RainbowButton } from "@/components/ui/rainbow-button";

export function Navbar() {
    return (
        <nav className="container mx-auto">
            <div className="flex items-center justify-between py-6">
                <Link
                    href="/"
                    className="group relative flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200"
                >
                    <div className="relative z-10">
                        <Image
                            src={Logo}
                            alt="Invoicer logo"
                            className="size-10 object-contain transition-transform duration-200 group-hover:scale-105 rounded-md"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full"/>
                    </div>
                    <p className="relative z-10 text-3xl font-bold tracking-tight bg-gradient-to-r bg-clip-text text-transparent transition-all duration-200 from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                        Invoicer
                    </p>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
                    <Link href="#pricing" className="text-gray-600 hover:text-gray-900">Demo</Link>
                    <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                </div>

                <div className="flex items-center gap-4">

                    <Link href="/register">
                        <RainbowButton>Get Started</RainbowButton>
                    </Link>
                </div>
            </div>
        </nav>
    );
}