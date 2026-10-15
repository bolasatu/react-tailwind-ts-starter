import { Html } from "react-email";
import { HeaderWithLogo } from "@/components/email/header-with-logo";
import { Content } from "@/components/email/content";
import { OrderSummaryTable } from "@/components/email/order-summary-table";
import { BillingOrderSummary } from "@/components/email/billing-order-summary";
import { CallToAction } from "@/components/email/call-to-action";
import { UtilityFooter } from "@/components/email/utility-footer";

export function OrderConfirmedEmail() {
  return (
    <Html>
      <HeaderWithLogo />
      <Content />
      <OrderSummaryTable />
      <BillingOrderSummary />
      <CallToAction />
      <UtilityFooter />
    </Html>
  );
}
export default OrderConfirmedEmail