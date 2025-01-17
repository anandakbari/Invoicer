"use server";

import {requireUser} from "@/app/utils/hooks";
import {parseWithZod} from "@conform-to/zod";
import {invoiceSchema, onboardingSchema} from "@/app/utils/zodSchema";
import prisma from "@/app/utils/db";
import {redirect} from "next/navigation";
import {emailClient} from "@/app/utils/mailtrap";
import {formatCurrency} from "@/app/utils/formatCurrency";

export async function onboardUser(prevState: any, formData: FormData) {
    const session = await requireUser();

    const submission = parseWithZod(formData, {
        schema: onboardingSchema,
    });

    if (submission.status !== "success") {
        return submission.reply();
    }

    const data = await prisma.user.update({
        where: {
            id: session.user?.id
        },
        data: {
            firstName: submission.value.firstName,
            lastName: submission.value.lastName,
            address: submission.value.address
        }
    });

    return redirect("/dashboard");


}

export async function createInvoice(prevState: any, formData: FormData) {
    const session = await requireUser();

    const submission = parseWithZod(formData, {
        schema: invoiceSchema,
    });

    if (submission.status !== "success") {
        return submission.reply();
    }

    const data = await prisma.invoice.create({
        data: {
            clientAddress: submission.value.clientAddress,
            clientEmail: submission.value.clientEmail,
            clientName: submission.value.clientName,
            currency: submission.value.currency,
            date: submission.value.date,
            dueDate: submission.value.dueDate,
            fromAddress: submission.value.fromAddress,
            fromEmail: submission.value.fromEmail,
            fromName: submission.value.fromName,
            invoiceItemDescription: submission.value.invoiceItemDescription,
            invoiceItemQuantity: submission.value.invoiceItemQuantity,
            invoiceItemRate: submission.value.invoiceItemRate,
            invoiceName: submission.value.invoiceName,
            invoiceNumber: submission.value.invoiceNumber,
            note: submission.value.note,
            status: submission.value.status,
            total: submission.value.total,
            userId: session.user?.id,

        },

    });

    const sender = {
        email: "hello@demomailtrap.com",
        name: "Anand Akbari",
    };

    emailClient.send({
        from: sender,
        to: [{email: "aakbarianand@gmail.com"}],
        template_uuid: "d159c707-7ab3-4846-98f3-2aeb43da577b",
        template_variables: {
            "clientName": submission.value.clientName,
            "invoiceNumber": submission.value.invoiceNumber,
            "dueDate": new Intl.DateTimeFormat('en-US', {
                dateStyle: "medium",
            }).format(new Date(submission.value.date)),
            "totalAmount": formatCurrency({
                amount: submission.value.total,
                currency: submission.value.currency as any
            }),
            "invoiceLink": `http://localhost:3000/api/invoice/${data.id}`,
        }
    });

    return redirect("/dashboard/invoices")
}

export async function editInvoice(prevState: any, formData: FormData) {
    const session = await requireUser();

    const submission = parseWithZod(formData, {
        schema: invoiceSchema,
    });

    if (submission.status !== "success") {
        return submission.reply();
    }

    const data = await prisma.invoice.update({
        where: {
            id: formData.get('id') as string,
            userId: session.user?.id,
        },
        data: {
            clientAddress: submission.value.clientAddress,
            clientEmail: submission.value.clientEmail,
            clientName: submission.value.clientName,
            currency: submission.value.currency,
            date: submission.value.date,
            dueDate: submission.value.dueDate,
            fromAddress: submission.value.fromAddress,
            fromEmail: submission.value.fromEmail,
            fromName: submission.value.fromName,
            invoiceItemDescription: submission.value.invoiceItemDescription,
            invoiceItemQuantity: submission.value.invoiceItemQuantity,
            invoiceItemRate: submission.value.invoiceItemRate,
            invoiceName: submission.value.invoiceName,
            invoiceNumber: submission.value.invoiceNumber,
            note: submission.value.note,
            status: submission.value.status,
            total: submission.value.total,
        },
    });

    const sender = {
        email: "hello@demomailtrap.com",
        name: "Anand Akbari",
    };

    emailClient.send({
        from: sender,
        to: [{email: "aakbarianand@gmail.com"}],
        template_uuid: "0a8986c7-5b60-4152-8a82-95f596b05ae3",
        template_variables: {
            "clientName": submission.value.clientName,
            "invoiceNumber": submission.value.invoiceNumber,
            "dueDate": new Intl.DateTimeFormat('en-US', {
                dateStyle: "medium",
            }).format(new Date(submission.value.date)),
            "totalAmount": formatCurrency({
                amount: submission.value.total,
                currency: submission.value.currency as any
            }),
            "invoiceLink": `https://localhost:3000/api/invoice/${data.id}`,
        }
    });

    return redirect("/dashboard/invoices")
}

export async function DeleteInvoice(invoiceId:string){
    const session=await requireUser();

    const data=await prisma.invoice.delete({
        where: {
            userId: session.user?.id,
            id:invoiceId,
        },
    });

    return redirect("/dashboard/invoices");
}

export async function MarkAsPaidAction(invoiceId: string) {
    const session = await requireUser();

    const data = await prisma.invoice.update({
        where: {
            userId: session.user?.id,
            id: invoiceId,
        },
        data: {
            status: "PAID",
        },
    });

    return redirect("/dashboard/invoices");
}