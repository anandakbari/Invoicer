"use client";

import React from 'react';
import { SectionHeader } from "@/app/components/SectionHeader";
import { ArrowUpRightIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-16 lg:py-24 relative">
            {/*/!* Rainbow Gradient Background *!/*/}
            {/*<div className="absolute inset-0 -mt-12 blur-3xl" style={{ zIndex: -1 }}>*/}
            {/*    <svg*/}
            {/*        fill="none"*/}
            {/*        viewBox="0 0 400 400"*/}
            {/*        height="100%"*/}
            {/*        width="100%"*/}
            {/*        xmlns="http://www.w3.org/2000/svg"*/}
            {/*    >*/}
            {/*        <g clipPath="url(#clip0_10_20)">*/}
            {/*            <g filter="url(#filter0_f_10_20)">*/}
            {/*                <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#03FFE0" />*/}
            {/*                <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#7C87F8" />*/}
            {/*                <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#4C65E4" />*/}
            {/*                <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#043AFF" />*/}
            {/*            </g>*/}
            {/*        </g>*/}
            {/*        <defs>*/}
            {/*            <filter*/}
            {/*                colorInterpolationFilters="sRGB"*/}
            {/*                filterUnits="userSpaceOnUse"*/}
            {/*                height="720.666"*/}
            {/*                id="filter0_f_10_20"*/}
            {/*                width="720.666"*/}
            {/*                x="-160.333"*/}
            {/*                y="-160.333"*/}
            {/*            >*/}
            {/*                <feFlood floodOpacity="0" result="BackgroundImageFix" />*/}
            {/*                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />*/}
            {/*                <feGaussianBlur stdDeviation="80.1666" result="effect1_foregroundBlur_10_20" />*/}
            {/*            </filter>*/}
            {/*        </defs>*/}
            {/*    </svg>*/}
            {/*</div>*/}

            <div className="container max-w-4xl mx-auto relative">
                <SectionHeader
                    eyebrow="Get In Touch"
                    title="Contact Us"
                    description="Have questions? We're here to help with all your invoicing needs"
                />

                <div className="mt-12">

                    {/* Contact Form */}
                    <Card className="shadow-xl">
                        <CardHeader>
                            <CardTitle>Contact Us</CardTitle>
                            <CardDescription>Fill out the form below to reach us.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full h-12 px-4 rounded-lg bg-gray-50 border border-gray-300 focus:border-emerald-400 focus:outline-none transition-colors"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full h-12 px-4 rounded-lg bg-gray-50 border border-gray-300 focus:border-emerald-400 focus:outline-none transition-colors"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        className="w-full h-32 p-4 rounded-lg bg-gray-50 border border-gray-300 focus:border-emerald-400 focus:outline-none transition-colors resize-none"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <button className="w-full bg-gradient-to-r from-emerald-400 to-sky-400 h-12 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                                    Send Message
                                    <ArrowUpRightIcon className="size-4" />
                                </button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between">
                            <div>
                                <h2 className="font-serif text-2xl md:text-3xl">Start Creating Professional Invoices</h2>
                                <p className="text-sm md:text-base mt-2">
                                    Join thousands of businesses using Invoicer to streamline their billing process
                                </p>
                            </div>
                            <Link href="/login">
                            <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 transition-colors">
                                <span className="font-semibold">Get Started</span>
                                <ArrowUpRightIcon className="size-4" />
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
