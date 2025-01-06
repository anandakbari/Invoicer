"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import SubmitButton from "@/app/components/SubmitButtons";
import {useActionState} from "react";
import {onboardUser} from "@/app/actions";
import {useForm} from "@conform-to/react";
import {parseWithZod} from "@conform-to/zod";
import {onboardingSchema} from "@/app/utils/zodSchema";



export default function () {

    const [lastResult,action]=useActionState(onboardUser,undefined);
    const [form, fields]=useForm({
        lastResult,
        onValidate({formData}){
            return parseWithZod(formData,{schema:onboardingSchema});
        },
        shouldValidate:'onBlur',
        shouldRevalidate:'onInput',
    })

    return (
        <div className={"min-h-screen w-screen flex items-center justify-center"}>
            <Card>
                <CardHeader className={"max-w-sm mx-auto"}>
                    <CardTitle className={"text-xl"}>Finish setting up your account</CardTitle>
                    <CardDescription>Enter your information to finish setting up your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className={"grid gap-4"} action={action} id={form.id} onSubmit={form.onSubmit} noValidate>
                        <div className={"grid grid-cols-2 gap-4"}>
                            <div className={"flex flex-col gap-2"}>
                                <Label>First Name</Label>
                                <Input placeholder={"John"} name={fields.firstName.name} key={fields.firstName.key}
                                       defaultValue={fields.firstName.initialValue}/>
                                <p className={"text-red-500 text-sm"}>{fields.firstName.errors}</p>
                            </div>

                            <div className={"flex flex-col gap-2"}>
                                <Label>Last Name</Label>
                                <Input placeholder={"Doe"} name={fields.lastName.name} key={fields.lastName.key}
                                       defaultValue={fields.lastName.initialValue}/>
                                <p className={"text-red-500 text-sm"}>{fields.lastName.errors}</p>
                            </div>
                        </div>
                        <div className={"grid gap-2"}>
                            <Label>Address</Label>
                            <Input placeholder={"123 Main St"} key={fields.address.key} name={fields.address.name}
                                   defaultValue={fields.address.initialValue}/>
                            <p className={"text-red-500 text-sm"}>{fields.address.errors}</p>
                        </div>
                        <SubmitButton text={"Finish onboarding"}/>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}