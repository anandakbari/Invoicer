import {signOut} from "@/app/utils/auth";

import {requireUser} from "@/app/utils/hooks";
import {DashboardBlocks} from "@/app/components/DashboardBlocks";
import {DollarSign} from "lucide-react";
import {InvoiceGraph} from "@/app/components/InvoiceGraph";
import {RecentInvoices} from "@/app/components/RecentInvoices";
import {Suspense} from "react";
import {EmptyState} from "@/app/components/EmptyState";
import {Skeleton} from "@/components/ui/skeleton";
import prisma from "@/app/utils/db";


async function getData(userId: string) {
    const data = await prisma.invoice.findMany({
        where: {
            userId: userId,
        },
        select: {
            id: true,
        },
    });

    return data;
}

export default async function Dashboard() {
    const session = await requireUser();
    const data = await getData(session.user?.id as string);
   return (
    <>
      {data.length < 1 ? (
        <EmptyState
          title="No invoices found"
          description="Create an invoice to see it right here"
          buttontext="Create Invoice"
          href="/dashboard/invoices/create"
        />
      ) : (
        <Suspense fallback={<Skeleton className="w-full h-full flex-1" />}>
          <DashboardBlocks />
          <div className="grid gap-4 lg:grid-cols-3 md:gap-8">
            <InvoiceGraph />
            <RecentInvoices />
          </div>
        </Suspense>
      )}
    </>
  );
}