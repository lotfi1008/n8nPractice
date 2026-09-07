"use client"

import * as React from "react"
import { useForm } from "react-hook-form"

import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormField,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordField } from "@/components/ui/password-field"
import { Button } from "@/components/ui/button"

type LoginFormValues = {
  identifier: string
  password: string
}

/**
 * آیکون کاربر (Digche JSX دقیق از شواهد)
 */
const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Basic-Users" transform="translate(-64, -234)" fillRule="nonzero">
        <g id="User" transform="translate(44, 166)">
          <g id="Icon/User/Linear" transform="translate(20, 68)">
            <path
              d="M17,7 C17,9.76142383 14.7614238,12 12,12 C9.23857617,12 7,9.76142383 7,7 C7,4.23857617 9.23857617,2 12,2 C14.7614238,2 17,4.23857617 17,7 Z"
              id="Vector"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fillRule="nonzero"
            />
            <g
              id="Vector"
              strokeLinecap="round"
              strokeLinejoin="round"
              fillRule="evenodd"
              strokeWidth="1"
              transform="translate(3.41, 15)"
              stroke="currentColor"
            >
              <path
                d="M17.1799927,7 C17.1799927,3.13000011 13.3299961,0 8.58999634,0 C3.84999657,0 0,3.13000011 0,7"
                strokeWidth="1.5"
                fillRule="nonzero"
              />
              <line x1="0" y1="7" x2="17.1799927" y2="7" strokeWidth="1.5" fillRule="nonzero" />
            </g>
            <polygon id="Vector" opacity="0" fillRule="nonzero" points="0 0 24 0 24 24 0 24" />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

/**
 * آیکون قفل (Digche JSX دقیق از شواهد)
 */
const LockSquareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.45492 21.7553L6.68668 21.042L6.45492 21.7553ZM3.24472 18.5451L3.95801 18.3133L3.24472 18.5451ZM20.7553 18.5451L20.042 18.3133L20.7553 18.5451ZM17.5451 21.7553L17.3133 21.042L17.5451 21.7553ZM17.5451 8.24472L17.3133 8.95801L17.5451 8.24472ZM20.7553 11.4549L20.042 11.6867L20.7553 11.4549ZM6.45492 8.24472L6.68668 8.95801L6.45492 8.24472ZM3.24472 11.4549L3.95801 11.6867L3.24472 11.4549ZM12.75 13C12.75 12.5858 12.4142 12.25 12 12.25C11.5858 12.25 11.25 12.5858 11.25 13H12H12.75ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H12H11.25ZM10 8V8.75H14V8V7.25H10V8ZM14 22V21.25H10V22V22.75H14V22ZM10 22V21.25C8.08034 21.25 7.29839 21.2407 6.68668 21.042L6.45492 21.7553L6.22315 22.4686C7.11777 22.7593 8.19709 22.75 10 22.75V22ZM3 15H2.25C2.25 16.8029 2.24075 17.8822 2.53142 18.7768L3.24472 18.5451L3.95801 18.3133C3.75925 17.7016 3.75 16.9197 3.75 15H3ZM6.45492 21.7553L6.68668 21.042C5.39282 20.6216 4.37841 19.6072 3.95801 18.3133L3.24472 18.5451L2.53142 18.7768C3.1002 20.5274 4.47263 21.8998 6.22315 22.4686L6.45492 21.7553ZM21 15H20.25C20.25 16.9197 20.2407 17.7016 20.042 18.3133L20.7553 18.5451L21.4686 18.7768C21.7593 17.8822 21.75 16.8029 21.75 15H21ZM14 22V22.75C15.8029 22.75 16.8822 22.7593 17.7768 22.4686L17.5451 21.7553L17.3133 21.042C16.7016 21.2407 15.9197 21.25 14 21.25V22ZM20.7553 18.5451L20.042 18.3133C19.6216 19.6072 18.6072 20.6216 17.3133 21.042L17.5451 21.7553L17.7768 22.4686C19.5274 21.8998 20.8998 20.5274 21.4686 18.7768L20.7553 18.5451ZM21 15H21.75C21.75 13.1971 21.7593 12.1178 21.4686 11.2232L20.7553 11.4549L20.042 11.6867C20.2407 12.2984 20.25 13.0803 20.25 15H21ZM17.5451 8.24472L17.3133 8.95801C18.6072 9.37841 19.6216 10.3928 20.042 11.6867L20.7553 11.4549L21.4686 11.2232C20.8998 9.47263 19.5274 8.1002 17.7768 7.53142L17.5451 8.24472ZM3 15H3.75C3.75 13.0803 3.75925 12.2984 3.95801 11.6867L3.24472 11.4549L2.53142 11.2232C2.24075 12.1178 2.25 13.1971 2.25 15H3ZM6.45492 8.24472L6.22315 7.53142C4.47263 8.1002 3.1002 9.47263 2.53142 11.2232L3.24472 11.4549L3.95801 11.6867C4.37841 10.3928 5.39282 9.37841 6.68668 8.95801L6.45492 8.24472ZM17 7H16.25V8H17H17.75V7H17ZM7 8H7.75V7H7H6.25V8H7ZM12 2V2.75C14.3472 2.75 16.25 4.65279 16.25 7H17H17.75C17.75 3.82436 15.1756 1.25 12 1.25V2ZM12 2V1.25C8.82436 1.25 6.25 3.82436 6.25 7H7H7.75C7.75 4.65279 9.65279 2.75 12 2.75V2ZM12 13H11.25V17H12H12.75V13H12ZM10 8V7.25C8.58853 7.25 7.6278 7.24738 6.8754 7.37414L7 8.11372L7.1246 8.85329C7.7222 8.75262 8.52815 8.75 10 8.75V8ZM7 8.11372L6.8754 7.37414C6.64772 7.4125 6.43257 7.46338 6.22315 7.53142L6.45492 8.24472L6.68668 8.95801C6.81685 8.91571 6.95935 8.88113 7.1246 8.85329L7 8.11372ZM7 8H6.25V8.11372H7H7.75V8H7ZM14 8V8.75C15.4719 8.75 16.2778 8.75262 16.8754 8.85329L17 8.11372L17.1246 7.37414C16.3722 7.24738 15.4115 7.25 14 7.25V8ZM17 8.11372L16.8754 8.85329C17.0407 8.88113 17.1831 8.91571 17.3133 8.95801L17.5451 8.24472L17.7768 7.53142C17.5674 7.46338 17.3523 7.4125 17.1246 7.37414L17 8.11372ZM17 8H16.25V8.11372H17H17.75V8H17Z"
      fill="currentColor"
    />
  </svg>
)

export function LoginForm() {
  const methods = useForm<LoginFormValues>({
    defaultValues: { identifier: "", password: "" },
  })
  const { handleSubmit, control, reset } = methods
  const [loading, setLoading] = React.useState(false)
  const onSubmit = (data: LoginFormValues) => {
    // رفتار صرفاً نمایشی: بارگذاری موقت و سپس پاک‌کردن فرم.
    setLoading(true)
    // صرفاً برای نمایش وضعیت loading؛ هیچ کال خارجی انجام نمی‌شود.
    setTimeout(() => {
      setLoading(false)
      // برای اهداف نمایشی فقط در کنسول چاپ می‌کنیم.
      console.log("submitted:", data)
      reset()
    }, 900)
  }

  return (
    <div dir="rtl" aria-label="فرم ورود" className="max-w-md">
      <Form {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FormField
            name="identifier"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>نام کاربری یا ایمیل</FormLabel>
                <FormControl>
                  {/* استفاده از startContent برای قرارگیری آیکون سمت مناسب (راست) */}
                  <Input
                    placeholder="نام کاربری یا ایمیل خود را وارد کنید"
                    startContent={<UserIcon />}
                    // از onValueChange استفاده می‌کنیم تا مقدار نهایی رشته به react-hook-form فرستاده شود
                    value={field.value}
                    onValueChange={(v) => field.onChange(v)}
                    onBlur={field.onBlur}
                    name={field.name}
                    // aria توسط FormControl و FormMessage مدیریت می‌شود
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="password"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>رمز عبور</FormLabel>
                <FormControl>
                  {/* PasswordField شامل دکمهٔ نمایش/پنهان است. آیکون قفل را در startContent قرار می‌دهیم. */}
                  <PasswordField
                    placeholder="رمز عبور خود را وارد کنید"
                    startContent={<LockSquareIcon />}
                    // PasswordField از onValueChange برای مقادیر رشته‌ای استفاده می‌کند
                    value={field.value}
                    onValueChange={(v) => field.onChange(v)}
                    onBlur={field.onBlur}
                    name={field.name}
                    revealToggle={true}
                    // برای فرم ورود نیاز به نوار قدرت و چک‌لیست نیست
                    strength={false}
                    requirements={false}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <Button type="submit" loading={loading} fullWidth>
              ورود
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm
