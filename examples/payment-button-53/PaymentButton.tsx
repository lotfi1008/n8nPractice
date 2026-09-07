import * as React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"

// آیکون Digche — نسخهٔ JSX دقیقاً از شواهد وارد شده
function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 9H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="2.75"
        y="3.75"
        width="18.5"
        height="16.5"
        rx="3.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export type PaymentButtonProps = {
  /** متن دکمه. پیش‌فرض: «پرداخت» */
  label?: string
  /** مبلغ را می‌توان رشته یا عدد داد. در صورت عدد، با فرمت فارسی نمایش داده می‌شود. */
  amount?: string | number
  /** نماد واحد پول (مثلاً "تومان") — در صورت ندادن و داشتن amount، از فقط عدد استفاده می‌شود. */
  currency?: string
  /** برای صفحه‌خوان اگر لازم باشد توصیف اضافه */
  ariaLabel?: string
  loading?: boolean
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  /** پروپس‌های ظاهری دکمه که از کامپوننت Dig پاس می‌شوند */
  variant?: ButtonProps["variant"]
  color?: ButtonProps["color"]
  size?: ButtonProps["size"]
  radius?: ButtonProps["radius"]
  fullWidth?: boolean
}

export default function PaymentButton({
  label = "پرداخت",
  amount,
  currency,
  ariaLabel,
  loading = false,
  disabled = false,
  onClick,
  variant = "default",
  color = "primary",
  size = "default",
  radius,
  fullWidth = false,
}: PaymentButtonProps) {
  // فرمت کردن مبلغ به فارسی اگر عدد داده شده باشد
  const formatAmount = React.useCallback((a: string | number) => {
    if (typeof a === "number") {
      try {
        return new Intl.NumberFormat("fa-IR").format(a)
      } catch {
        return String(a)
      }
    }
    return String(a)
  }, [])

  const content = (
    <>
      {/* در حالت RTL آیکون را قبل از متن قرار می‌دهیم تا در سمت راست نمایش یابد. */}
      <CreditCardIcon aria-hidden />

      <span className="flex items-baseline gap-2">
        <span>{label}</span>
        {amount != null ? (
          <span className="text-sm opacity-90" aria-hidden>
            {formatAmount(amount)}{currency ? ` ${currency}` : ""}
          </span>
        ) : null}
      </span>
    </>
  )

  return (
    <Button
      // قرار دادن dir="rtl" تا ترتیب بصری آیکون/متن با جهت فارسی همخوانی داشته باشد
      dir="rtl"
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      fullWidth={fullWidth}
      loading={loading}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
      // برای دسترس‌پذیری: aria-busy توسط خود Button زمانی که loading=true تنظیم می‌شود
      // این کامپوننت نمایشی است و منطق پرداخت را اجرا نمی‌کند.
    >
      {content}
    </Button>
  )
}
