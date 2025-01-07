"use client";

import React from 'react';
import Image from "next/image";


// Import your images
import feature1 from "@/public/hero.png";
import feature2 from "@/public/invoices.png";
import feature3 from "@/public/createinvoice.png";
import {Card} from "@/components/ui/card";
import {SectionHeader} from "@/app/components/SectionHeader";

const featuresData = [
    {
        title: "Smart Collaboration",
        description: "Real-time dashboard analytics for real-time collaboration",
        image: feature1,
    },
    {
        title: "Seamless Invoice Management",
        description: "Effortless invoice management with a click of a button",
        image: feature2,
    },
    {
        title: "Easy Invoice Creation",
        description: "Effortless invoice creation with a user-friendly interface",
        image: feature3,
    }
];

export const FeaturesSection = () => {
    return (
        <section id={"features"} className={"pb-16 lg:py-24"}>
            <div className={"container"}>
                <SectionHeader
                    eyebrow={"Why Choose Us"}
                    title={"Powerful Features"}
                    description={"Discover the tools that will transform your workflow"}
                />
                <div className={"flex flex-col mt-10 gap-20 md:mt-20"}>
                    {featuresData.map((feature, featureIndex) => (
                        <Card
                            key={feature.title}
                            className={"px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky"}
                            style={{
                                top: `calc(64px + ${featureIndex * 40}px)`
                            }}
                        >
                            <div className={"lg:grid lg:grid-cols-2 lg:gap-16"}>
                                <div className={"lg:pb-16"}>
                                    <div
                                        className={"bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text"}
                                    >
                                        <span>{feature.title}</span>
                                    </div>
                                    <h3 className={"font-serif text-2xl mt-2 md:mt-5 md:text-4xl"}>
                                        {feature.description}
                                    </h3>
                                    <hr className={"border-t-2 border-white/5 mt-4 md:mt-5"}/>

                                    <div className="mt-8">
                                        <div className="h-1 w-20 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full"></div>
                                    </div>
                                </div>
                                <div className={"relative"}>
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        className={"mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg transition-transform duration-300 hover:scale-105"}
                                        priority={featureIndex === 0}
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};