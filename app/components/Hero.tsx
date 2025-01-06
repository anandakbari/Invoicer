// import Image from "next/image";
// import Link from "next/link";
// import HeroImage from "@/public/hero.png";
// import {RainbowButton} from "@/components/ui/rainbow-button";
//
// export function Hero() {
//     return (
//         <section className="relative flex flex-col items-center justify-center py-12 lg:py-20">
//             <div className="text-center">
//         <span className="text-sm text-primary font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-full">
//           Introducing Invoicer
//         </span>
//                 <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter">
//                     Invoicing made{" "}
//                     <span className="block -mt-2 bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
//             super easy!
//           </span>
//                 </h1>
//
//                 <p className="max-w-xl mx-auto mt-4 lg:text-lg text-muted-foreground">
//                     Creating Invoices can be a pain! We at Invoicer make it super
//                     easy for you to get paid in time!
//                 </p>
//
//                 <div className="mt-7 mb-12">
//                     <Link href="/login">
//                         <RainbowButton>Get Unlimted Access</RainbowButton>
//                     </Link>
//                 </div>
//             </div>
//
//             <div className="relative items-center w-full py-12 mx-auto mt-12">
//                 <svg
//                     className="absolute inset-0 -mt-24 blur-3xl"
//                     style={{ zIndex: -1 }}
//                     fill="none"
//                     viewBox="0 0 400 400"
//                     height="100%"
//                     width="100%"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <g clipPath="url(#clip0_10_20)">
//                         <g filter="url(#filter0_f_10_20)">
//                             <path
//                                 d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
//                                 fill="#03FFE0"
//                             ></path>
//                             <path
//                                 d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
//                                 fill="#7C87F8"
//                             ></path>
//                             <path
//                                 d="M320 400H400V78.75L106.2 134.75L320 400Z"
//                                 fill="#4C65E4"
//                             ></path>
//                             <path
//                                 d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
//                                 fill="#043AFF"
//                             ></path>
//                         </g>
//                     </g>
//                     <defs>
//                         <filter
//                             colorInterpolationFilters="sRGB"
//                             filterUnits="userSpaceOnUse"
//                             height="720.666"
//                             id="filter0_f_10_20"
//                             width="720.666"
//                             x="-160.333"
//                             y="-160.333"
//                         >
//                             <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//                             <feBlend
//                                 in="SourceGraphic"
//                                 in2="BackgroundImageFix"
//                                 mode="normal"
//                                 result="shape"
//                             ></feBlend>
//                             <feGaussianBlur
//                                 result="effect1_foregroundBlur_10_20"
//                                 stdDeviation="80.1666"
//                             ></feGaussianBlur>
//                         </filter>
//                     </defs>
//                 </svg>
//                 <Image
//                     src={HeroImage}
//                     alt="Hero image"
//                     className="relative object-cover w-full border rounded-lg lg:rounded-2xl shadow-2xl"
//                 />
//             </div>
//         </section>
//     );
// }



import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/hero.png";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ArrowRight, Star, CheckCircle2, Shield, Zap } from "lucide-react";

const FeatureBadge = ({ icon: Icon, text }) => (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border shadow-sm">
        <Icon className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium">{text}</span>
    </div>
);

export function Hero() {
    return (
        <section className="container mx-auto">
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-20">
                {/* Left side - Content */}
                <div className="flex-1 text-center lg:text-left z-10">
                    {/* Top Badge */}
                    <div className="inline-flex mb-6">
                        <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                            <div className="flex -space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                    />
                                ))}
                            </div>
                            <span className="text-sm font-medium">
                                Trusted by 2,000+ businesses
                            </span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                        Create & Send
                        <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                            Professional Invoices
                        </span>
                        <span className="block mt-2">in Seconds</span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl lg:max-w-2xl">
                        Stop struggling with complicated invoicing software. Create professional
                        invoices in seconds and get paid faster with automated reminders and integrated payments.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <Link href="/register">
                            <RainbowButton className="w-full sm:w-auto text-lg px-8">
                                Start Free Trial
                            </RainbowButton>
                        </Link>
                        <Link
                            href="#demo"
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
                        >
                            Watch Demo <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                        <FeatureBadge icon={CheckCircle2} text="14-day free trial" />
                        <FeatureBadge icon={Shield} text="Bank-level security" />
                        <FeatureBadge icon={Zap} text="Instant setup" />
                        <FeatureBadge icon={Star} text="5-star rated support" />
                    </div>

                    {/* Integration Logos */}
                    <div className="mt-12">
                        <p className="text-sm text-muted-foreground mb-4">
                            Integrates seamlessly with
                        </p>
                        <div className="flex flex-wrap items-center gap-6">
                            {/* Replace these divs with actual integration logos */}
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="h-8 w-24 bg-gray-200 rounded opacity-50 hover:opacity-100 transition-opacity"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right side - Image */}
                <div className="flex-1 relative w-full">
                    {/* Floating Feature Cards */}
                    <div className="absolute -left-16 top-1/4 animate-float-slow hidden lg:block">
                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-medium">Payment Received</p>
                                    <p className="text-sm text-muted-foreground">$2,400.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -right-8 bottom-1/4 animate-float hidden lg:block">
                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <Zap className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-medium">Invoice Sent</p>
                                    <p className="text-sm text-muted-foreground">INV-2024-001</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Gradient */}
                    <div className="absolute inset-0 -mt-12 blur-3xl" style={{ zIndex: -1 }}>
                        <svg
                            fill="none"
                            viewBox="0 0 400 400"
                            height="100%"
                            width="100%"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_10_20)">
                                <g filter="url(#filter0_f_10_20)">
                                    <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#03FFE0"/>
                                    <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#7C87F8"/>
                                    <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#4C65E4"/>
                                    <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#043AFF"/>
                                </g>
                            </g>
                            <defs>
                                <filter
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse"
                                    height="720.666"
                                    id="filter0_f_10_20"
                                    width="720.666"
                                    x="-160.333"
                                    y="-160.333"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="80.1666" result="effect1_foregroundBlur_10_20"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>

                    {/* Main Image */}
                    <Image
                        src={HeroImage}
                        alt="Invoice management dashboard"
                        className="relative w-full rounded-lg lg:rounded-2xl shadow-2xl border"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}