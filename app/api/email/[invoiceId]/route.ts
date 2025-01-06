import {requireUser} from "@/app/utils/hooks";
import prisma from "@/app/utils/db";
import {NextResponse} from "next/server";
import {emailClient} from "@/app/utils/mailtrap";
import {formatCurrency} from "@/app/utils/formatCurrency";


export async function POST(request: Request, {
    params
}: {
    params: Promise<{ invoiceId: string }>
}) {
    try {
        const session = await requireUser();
        const {invoiceId} = await params;

        const invoiceData = await prisma.invoice.findUnique({
            where: {
                id: invoiceId,
                userId: session.user?.id,
            },
        });

        if (!invoiceData) {
            return NextResponse.json({error: "Invoice not found"}, {status: 404})
        }

        const sender = {
            email: "hello@demomailtrap.com",
            name: "Anand Akbari",
        };

        emailClient
            .send({
                from: sender,
                to: [{email:"aakbarianand@gmail.com"}],
                template_uuid: "b1cf3bd9-cd09-49e1-afd6-4ff62fd2c426",
                template_variables: {
                    "clientName": invoiceData.clientName,
                    "invoiceNumber": invoiceData.invoiceNumber,
                    "dueDate": invoiceData.dueDate,
                    "totalAmount": invoiceData.total
                }
            })

        return NextResponse.json({success: true})
    } catch (error) {
        return NextResponse.json({error: "Failed to send Email reminder"}, {status: 500})
    }

}