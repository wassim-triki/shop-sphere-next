import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

function StripeErrorPage() {
  return (
    <div className="mx-auto mt-[40%] h-96 max-w-[90%] md:mt-[10%] md:max-w-[50vw]">
      <div className="flex flex-col items-center gap-4">
        <div className="grid h-20 w-20 place-content-center rounded-full bg-red-50">
          <div className="grid h-11 w-11 place-content-center rounded-full bg-red-600">
            <X className="h-7 w-7 text-white" />
          </div>
        </div>
        <h2 className="flex items-center gap-1 text-xl font-bold text-gray-800">
          <span className="-ml-9 text-3xl">😱</span>
          Payment Error
        </h2>
        <div className="text-center text-muted-foreground">
          <p>An error accured during your payment.</p>
          <p>Please try again.</p>
        </div>
        <Button asChild>
          <Link className="mt-4" href={"/"}>
            Go Back
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default StripeErrorPage;
