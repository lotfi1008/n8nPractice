"use client"

import React from "react"
import { useForm } from "react-hook-form"

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordField } from "@/components/ui/password-field"
import { InputGroup } from "@/components/ui/input-group"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar } from "@/components/ui/avatar"
import { DateField } from "@/components/ui/date-field"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

// آیکون‌های Digche (Linear) — دقیقاً همان SVGِ تأییدشده در evidence.icons
const IconUserEdit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><g id="Basic-Users" transform="translate(-168, -482)" fillRule="nonzero" stroke="currentColor" strokeWidth="1.5"><g id="User-edit" transform="translate(148, 414)"><g id="Icon/User-edit/Linear" transform="translate(20, 68)"><path d="M17,7 C17,9.76142383 14.7614238,12 12,12 C9.23857617,12 7,9.76142383 7,7 C7,4.23857617 9.23857617,2 12,2 C14.7614238,2 17,4.23857617 17,7 Z" id="Vector"></path><path d="M3.40997314,22 C3.40997314,18.1300001 7.26000023,15 12,15" id="Vector"></path><path d="M18.8292003,15.3618459 L15.2891612,18.901885 C15.1491612,19.041885 15.0191734,19.3018509 14.9891734,19.4918509 L14.799171,20.8418264 C14.729171,21.3318264 15.0691807,21.6718362 15.5591807,21.6018362 L16.9091563,21.4118338 C17.0991563,21.3818338 17.3691832,21.251846 17.4991832,21.111846 L21.0391612,17.5718677 C21.6491612,16.9618677 21.9391612,16.2518361 21.0391612,15.3518361 C20.1491612,14.4618361 19.4392003,14.7518458 18.8292003,15.3618459 Z" id="Vector"></path><path d="M18.3193359,15.8718262 C18.6193359,16.9518262 19.4593066,17.7917969 20.5393066,18.0917969" id="Vector"></path></g></g></g></g></svg>
)
const IconEmail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><rect x="2" y="3.5" width="20" height="17" rx="4" stroke="currentColor" strokeWidth="1.5"/><path d="M17 7.25L13.87 9.75C12.84 10.57 11.15 10.57 10.12 9.75L7 7.25" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
)
const IconLockSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.45492 21.7553L6.68668 21.042L6.45492 21.7553ZM3.24472 18.5451L3.95801 18.3133L3.24472 18.5451ZM20.7553 18.5451L20.042 18.3133L20.7553 18.5451ZM17.5451 21.7553L17.3133 21.042L17.5451 21.7553ZM17.5451 8.24472L17.3133 8.95801L17.5451 8.24472ZM20.7553 11.4549L20.042 11.6867L20.7553 11.4549ZM6.45492 8.24472L6.68668 8.95801L6.45492 8.24472ZM3.24472 11.4549L3.95801 11.6867L3.24472 11.4549ZM12.75 13C12.75 12.5858 12.4142 12.25 12 12.25C11.5858 12.25 11.25 12.5858 11.25 13H12H12.75ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H12H11.25ZM10 8V8.75H14V8V7.25H10V8ZM14 22V21.25H10V22V22.75H14V22ZM10 22V21.25C8.08034 21.25 7.29839 21.2407 6.68668 21.042L6.45492 21.7553L6.22315 22.4686C7.11777 22.7593 8.19709 22.75 10 22.75V22ZM3 15H2.25C2.25 16.8029 2.24075 17.8822 2.53142 18.7768L3.24472 18.5451L3.95801 18.3133C3.75925 17.7016 3.75 16.9197 3.75 15H3ZM6.45492 21.7553L6.68668 21.042C5.39282 20.6216 4.37841 19.6072 3.95801 18.3133L3.24472 18.5451L2.53142 18.7768C3.1002 20.5274 4.47263 21.8998 6.22315 22.4686L6.45492 21.7553ZM21 15H20.25C20.25 16.9197 20.2407 17.7016 20.042 18.3133L20.7553 18.5451L21.4686 18.7768C21.7593 17.8822 21.75 16.8029 21.75 15H21ZM14 22V22.75C15.8029 22.75 16.8822 22.7593 17.7768 22.4686L17.5451 21.7553L17.3133 21.042C16.7016 21.2407 15.9197 21.25 14 21.25V22ZM20.7553 18.5451L20.042 18.3133C19.6216 19.6072 18.6072 20.6216 17.3133 21.042L17.5451 21.7553L17.7768 22.4686C19.5274 21.8998 20.8998 20.5274 21.4686 18.7768L20.7553 18.5451ZM21 15H21.75C21.75 13.1971 21.7593 12.1178 21.4686 11.2232L20.7553 11.4549L20.042 11.6867C20.2407 12.2984 20.25 13.0803 20.25 15H21ZM17.5451 8.24472L17.3133 8.95801C18.6072 9.37841 19.6216 10.3928 20.042 11.6867L20.7553 11.4549L21.4686 11.2232C20.8998 9.47263 19.5274 8.1002 17.7768 7.53142L17.5451 8.24472ZM3 15H3.75C3.75 13.0803 3.75925 12.2984 3.95801 11.6867L3.24472 11.4549L2.53142 11.2232C2.24075 12.1178 2.25 13.1971 2.25 15H3ZM6.45492 8.24472L6.22315 7.53142C4.47263 8.1002 3.1002 9.47263 2.53142 11.2232L3.24472 11.4549L3.95801 11.6867C4.37841 10.3928 5.39282 9.37841 6.68668 8.95801L6.45492 8.24472ZM17 7H16.25V8H17H17.75V7H17ZM7 8H7.75V7H7H6.25V8H7ZM12 2V2.75C14.3472 2.75 16.25 4.65279 16.25 7H17H17.75C17.75 3.82436 15.1756 1.25 12 1.25V2ZM12 2V1.25C8.82436 1.25 6.25 3.82436 6.25 7H7H7.75C7.75 4.65279 9.65279 2.75 12 2.75V2ZM12 13H11.25V17H12H12.75V13H12ZM10 8V7.25C8.58853 7.25 7.6278 7.24738 6.8754 7.37414L7 8.11372L7.1246 8.85329C7.7222 8.75262 8.52815 8.75 10 8.75V8ZM7 8.11372L6.8754 7.37414C6.64772 7.4125 6.43257 7.46338 6.22315 7.53142L6.45492 8.24472L6.68668 8.95801C6.81685 8.91571 6.95935 8.88113 7.1246 8.85329L7 8.11372ZM7 8H6.25V8.11372H7H7.75V8H7ZM14 8V8.75C15.4719 8.75 16.2778 8.75262 16.8754 8.85329L17 8.11372L17.1246 7.37414C16.3722 7.24738 15.4115 7.25 14 7.25V8ZM17 8.11372L16.8754 8.85329C17.0407 8.88113 17.1831 8.91571 17.3133 8.95801L17.5451 8.24472L17.7768 7.53142C17.5674 7.46338 17.3523 7.4125 17.1246 7.37414L17 8.11372ZM17 8H16.25V8.11372H17H17.75V8H17Z" fill="currentColor"/></svg>
)
const IconCall = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g data-optical-balance="1.048" transform="translate(12 12) scale(1.048) translate(-12 -12)"><path fillRule="evenodd" clipRule="evenodd" d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
)
const IconUserAdd = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><g id="Basic-Users" transform="translate(-376, -234)" fillRule="nonzero" stroke="currentColor" strokeWidth="1.5"><g id="User-add" transform="translate(356, 166)"><g id="Icon/User-add/Linear" transform="translate(20, 68)"><path d="M17,7 C17,9.76142383 14.7614238,12 12,12 C9.23857617,12 7,9.76142383 7,7 C7,4.23857617 9.23857617,2 12,2 C14.7614238,2 17,4.23857617 17,7 Z" id="Vector"></path><path d="M3.41000366,22 C3.41000366,18.1300001 7.26000023,15 12,15 C12.96,15 13.8900098,15.1299951 14.7600098,15.3699951" id="Vector"></path><path d="M22,18 C22,18.32 21.9600049,18.6299927 21.8800049,18.9299927 C21.7900049,19.3299927 21.6300134,19.7199976 21.4200134,20.0599976 C20.7300134,21.2199975 19.46,22 18,22 C16.97,22 16.0399963,21.6099707 15.3399963,20.9699707 C15.0399963,20.7099707 14.7799866,20.3999976 14.5799866,20.0599976 C14.2099866,19.4599975 14,18.75 14,18C14,16.92 14.4300049,15.930022 15.1300049,15.210022 C15.8600049,14.460022 16.88,14 18,14 C19.1799999,14 20.2500012,14.5100171 20.9700012,15.3300171 C21.6100012,16.0400171 22,16.98 22,18 Z" id="Vector"></path><line x1="19.4897461" y1="17.9799805" x2="16.5097656" y2="17.9799805" id="Vector"></line><line x1="18" y1="16.5200195" x2="18" y2="19.5100098" id="Vector"></line></g></g></g></g></svg>
)
const IconStethoscope = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.6667 15.5413C19.242 15.5413 19.7083 15.075 19.7083 14.4997C19.7083 13.9244 19.242 13.458 18.6667 13.458C18.0914 13.458 17.625 13.9244 17.625 14.4997C17.625 15.075 18.0914 15.5413 18.6667 15.5413Z" fill="currentColor"/><path d="M18.6663 17.8337C20.5073 17.8337 21.9997 16.3413 21.9997 14.5003C21.9997 12.6594 20.5073 11.167 18.6663 11.167C16.8254 11.167 15.333 12.6594 15.333 14.5003C15.333 16.3413 16.8254 17.8337 18.6663 17.8337Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.83301 12.833V17.833C7.83301 18.9381 8.27199 19.9979 9.0534 20.7793C9.8348 21.5607 10.8946 21.9997 11.9997 21.9997H14.4997C15.6047 21.9997 16.6646 21.5607 17.446 20.7793C18.2274 19.9979 18.6663 18.9381 18.6663 17.833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.1667 2H12.6667C13.219 2 13.6667 2.44772 13.6667 3V6.91354C13.6667 10.1188 11.1167 12.7917 7.91042 12.8333C7.13791 12.8435 6.37107 12.7002 5.65442 12.4116C4.93776 12.123 4.28557 11.695 3.73571 11.1523C3.18584 10.6096 2.74925 9.96307 2.45129 9.25027C2.15333 8.53747 1.99993 7.77257 2 7V3C2 2.44772 2.44772 2 3 2H4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
)
const IconAnchor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 21.9998V7.2998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 7C13.4 7 14.5 5.9 14.5 4.5C14.5 3.1 13.4 2 12 2C10.6 2 9.5 3.1 9.5 4.5C9.5 5.9 10.6 7 12 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 10.7998H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 13C22 19.5 12 15.5 12 22C12 15.5 2 19.5 2 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
)
const IconAnchorSimple = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.9999 6.99983C13.3806 6.99983 14.4998 5.88058 14.4998 4.49992C14.4998 3.11925 13.3806 2 11.9999 2C10.6193 2 9.5 3.11925 9.5 4.49992C9.5 5.88058 10.6193 6.99983 11.9999 6.99983Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 22L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.49992 12H2C2 14.6521 3.05353 17.1955 4.92883 19.0708C6.80413 20.9461 9.34759 21.9997 11.9997 21.9997C14.6517 21.9997 17.1952 20.9461 19.0705 19.0708C20.9458 17.1955 21.9993 14.6521 21.9993 12H19.4994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
)
const IconCalendarPin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.7623 16.2682L19.7155 15.25C19.237 14.7847 18.431 14.9997 18.2522 15.6404L17.9287 16.7993C17.8807 16.9711 17.7324 17.0966 17.5539 17.1165L15.7826 17.3137C15.0467 17.3956 14.736 18.2884 15.264 18.8037L18.2815 21.7484C18.8066 22.2608 19.6957 21.9442 19.7729 21.2174L19.9612 19.4442C19.9788 19.2781 20.0904 19.1366 20.2486 19.0796L21.4199 18.6581C22.0291 18.4388 22.1984 17.6634 21.7354 17.2135L20.7623 16.2682Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.2305 21.7693L16.6083 20.3916" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.5 9.08984H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.37 22H7C3.5 22 2 20 2 17V8.5C2 5.5 3.5 3.5 7 3.5H15C18.5 3.5 20 5.5 20 8.5V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.9951 13.7002H11.0041" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.29395 13.7002H7.30293" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.29395 16.7002H7.30293" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
)
const IconUpload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g data-optical-balance="1.047" transform="translate(12 12) scale(1.047) translate(-12 -12)"><path d="M21.51 15.1104V15.2404C21.51 19.7104 19.72 21.5004 15.25 21.5004H8.73998C4.26998 21.5004 2.47998 19.7104 2.47998 15.2404V15.1104" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15.0001V3.62012" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.3499 5.85L11.9999 2.5L8.6499 5.85" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
)
const IconGuide = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g data-optical-balance="1.096" transform="translate(12 12) scale(1.096) translate(-12 -12)"><path d="M6.58275 4.73786C9.58982 5.268 11.382 6.37693 12.0002 7.01357C12.6184 6.37693 14.4107 5.268 17.4177 4.73786C18.9411 4.46929 19.7028 4.33501 20.3515 4.8497C21.0002 5.3644 21.0002 6.20019 21.0002 7.87176V13.8791C21.0002 15.4076 21.0002 16.1718 20.5839 16.6489C20.1676 17.126 19.251 17.2876 17.4177 17.6108C15.7835 17.8989 14.5081 18.3579 13.585 18.8192C12.6767 19.2731 12.2225 19.5 12.0002 19.5C11.7779 19.5 11.3238 19.2731 10.4155 18.8192C9.49234 18.3579 8.21694 17.8989 6.58275 17.6108C4.74953 17.2876 3.83292 17.126 3.41658 16.6489C3.00024 16.1718 3.00024 15.4076 3.00024 13.8791V7.87176C3.00024 6.20019 3.00024 5.3644 3.64895 4.8497C4.29765 4.33501 5.05935 4.46929 6.58275 4.73786Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.0002 6.5L12.0002 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></g></svg>
)
const IconUserSearch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><g id="Basic-Users" transform="translate(-64, -482)" fillRule="nonzero" stroke="currentColor" strokeWidth="1.5"><g id="User-search" transform="translate(44, 414)"><g id="Icon/User-search/Linear" transform="translate(20, 68)"><path d="M17,7 C17,9.76142383 14.7614238,12 12,12 C9.23857617,12 7,9.76142383 7,7 C7,4.23857617 9.23857617,2 12,2 C14.7614238,2 17,4.23857617 17,7 Z" id="Vector"></path><path d="M3.40997314,22 C3.40997314,18.1300001 7.26000023,15 12,15" id="Vector"></path><path d="M21.4000244,18.2000122 C21.4000244,19.9673234 19.9673234,21.4000244 18.2000122,21.4000244 C16.432701,21.4000244 15,19.9673234 15,18.2000122 C15,16.432701 16.432701,15 18.2000122,15 C19.9673234,15 21.4000244,16.432701 21.4000244,18.2000122 Z" id="Vector"></path><line x1="22" y1="22" x2="21" y2="21" id="Vector"></line></g></g></g></g></svg>
)

type FormValues = {
  name: string
  email: string
  password: string
  phone: string
  clinicName: string
  specialty: string
  address: string
  city: string
  founded: { year: number; month: number; day: number } | null
  logo?: File | null
  description?: string
  avatar?: File | null
  terms?: boolean
}

export default function ClinicRegisterForm() {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      clinicName: "",
      specialty: "",
      address: "",
      city: "",
      founded: null,
      description: "",
      terms: false,
    },
  })

  const { handleSubmit, control, setValue, watch } = form
  const [submitting, setSubmitting] = React.useState(false)
  const [avatarPreview, setAvatarPreview] = React.useState<string | null>(null)

  const onSubmit = (values: FormValues) => {
    setSubmitting(true)
    // فقط نمایشِ حالت لودینگِ نمونه؛ هیچ تماس شبکه‌ای یا لاجیک بک‌اند انجام نمی‌شود.
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log("ثبت‌نام مطب (نمونه):", values)
      setSubmitting(false)
    }, 900)
  }

  // گزینه‌های نمونه برای تخصص و شهر
  const specialties = [
    { value: "internal", label: "داخلی" },
    { value: "dentistry", label: "دندان‌پزشکی" },
    { value: "pediatrics", label: "اطفال" },
    { value: "dermatology", label: "پوست" },
  ]
  const cities = [
    { value: "tehran", label: "تهران" },
    { value: "mashhad", label: "مشهد" },
    { value: "isfahan", label: "اصفهان" },
    { value: "shiraz", label: "شیراز" },
  ]

  // مانیتور آپلود آواتار برای پیش‌نمایش
  React.useEffect(() => {
    const subscription = watch((value) => {
      const f = value.avatar
      if (f instanceof File) {
        const url = URL.createObjectURL(f)
        setAvatarPreview(url)
        return () => URL.revokeObjectURL(url)
      }
      setAvatarPreview(null)
    })
    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <div dir="rtl" className="max-w-2xl rounded-lg border bg-background p-6">
      <h2 className="mb-4 text-lg font-semibold">ثبت‌نام مطب آنلاین</h2>

      {/* Dig Form: پل بین react-hook-form و کامپوننت‌های فرم دیگ */}
      <Form {...form as any}>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          {/* نام و نام خانوادگی */}
          <FormField
            control={control as any}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نام و نام خانوادگی</FormLabel>
                <FormControl>
                  <Input
                    placeholder="مثال: دکتر علی رضایی"
                    startContent={<IconUserEdit className="text-muted-foreground" />}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ایمیل */}
          <FormField
            control={control as any}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ایمیل</FormLabel>
                <FormControl>
                  <Input
                    placeholder="name@example.com"
                    type="email"
                    startContent={<IconEmail className="text-muted-foreground" />}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>برای ارسال اعلان و بازیابی رمز استفاده می‌شود.</FormDescription>
              </FormItem>
            )}
          />

          {/* رمز عبور */}
          <FormField
            control={control as any}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رمز عبور</FormLabel>
                <FormControl>
                  <PasswordField
                    revealToggle
                    strength
                    requirements
                    inputClassName="w-full"
                    // PasswordField یک prop onValueChange می‌پذیرد همان‌طور که در evidence بود
                    onValueChange={(val) => field.onChange(val)}
                    value={field.value}
                    startContent={<IconLockSquare className="text-muted-foreground" />}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* تلفن */}
          <FormField
            control={control as any}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>تلفن تماس</FormLabel>
                <FormControl>
                  <Input
                    placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                    inputMode="tel"
                    faDigits
                    startContent={<IconCall className="text-muted-foreground" />}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* نام مطب */}
          <FormField
            control={control as any}
            name="clinicName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نام مطب</FormLabel>
                <FormControl>
                  <Input
                    placeholder="نام مطب یا مرکز پزشکی"
                    startContent={<IconUserAdd className="text-muted-foreground" />}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* تخصص (Select) */}
          <FormField
            control={control as any}
            name="specialty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>تخصص</FormLabel>
                <FormControl>
                  <Select value={field.value ?? ""} onValueChange={(v) => field.onChange(v)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="انتخاب تخصص" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectLabel>
                        <div className="flex items-center gap-2"><IconStethoscope className="size-4"/> تخصص</div>
                      </SelectLabel>
                      <SelectGroup>
                        {specialties.map((s) => (
                          <SelectItem key={s.value} value={s.value}>
                            {s.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* آدرس */}
          <FormField
            control={control as any}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>آدرس</FormLabel>
                <FormControl>
                  <Input
                    placeholder="خیابان، پلاک، طبقه"
                    startContent={<IconAnchor className="text-muted-foreground" />}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* شهر */}
          <FormField
            control={control as any}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>شهر / استان</FormLabel>
                <FormControl>
                  <Select value={field.value ?? ""} onValueChange={(v) => field.onChange(v)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="انتخاب شهر" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectLabel>
                        <div className="flex items-center gap-2"><IconAnchorSimple className="size-4"/> شهر</div>
                      </SelectLabel>
                      <SelectGroup>
                        {cities.map((c) => (
                          <SelectItem key={c.value} value={c.value}>
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* تاریخ تأسیس */}
          <FormField
            control={control as any}
            name="founded"
            render={({ field }) => (
              <FormItem>
                <FormLabel>تاریخ تأسیس</FormLabel>
                <FormControl>
                  {/* DateField خروجی‌اش را ساختار DateValue می‌دهد */}
                  <DateField
                    value={field.value as any}
                    onChange={(v) => field.onChange(v)}
                    calendar="jalali"
                    className="w-fit"
                  />
                </FormControl>
                <FormDescription>
                  <span className="flex items-center gap-2"><IconCalendarPin className="size-4"/> تقویم شمسی</span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* آپلود لوگو */}
          <FormField
            control={control as any}
            name="logo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>آپلود لوگو</FormLabel>
                <FormControl>
                  <InputGroup>
                    <Input
                      type="file"
                      fileButtonLabel="انتخاب"
                      filePlaceholder="فایلی انتخاب نشده"
                      startContent={<IconUpload className="text-muted-foreground" />}
                      onChange={(e) => {
                        const f = (e.target as HTMLInputElement).files?.[0] ?? null
                        field.onChange(f)
                      }}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        field.onChange(null)
                      }}
                    >
                      حذف
                    </Button>
                  </InputGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* توضیحات */}
          <FormField
            control={control as any}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>توضیحات مطب</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="معرفی کوتاه، ساعات کاری، توضیحات اضافی"
                    rows={4}
                    startContent={undefined}
                    // Textarea از normalizeArabic پشتیبانی می‌کند و پیش‌فرض روشن است
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  <span className="flex items-center gap-2"><IconGuide className="size-4"/> معرفی مختصر</span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* آواتار / عکس پروفایل */}
          <FormField
            control={control as any}
            name="avatar"
            render={({ field }) => (
              <FormItem>
                <FormLabel>آواتار / عکس پروفایل</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-3">
                    <Avatar
                      name={""}
                      src={avatarPreview ?? undefined}
                      className="size-12"
                    >
                      {!avatarPreview && <IconUserSearch className="size-6 text-muted-foreground" />}
                    </Avatar>

                    <div className="flex-1">
                      <Input
                        type="file"
                        fileButtonLabel="انتخاب عکس"
                        filePlaceholder="فایلی انتخاب نشده"
                        onChange={(e) => {
                          const f = (e.target as HTMLInputElement).files?.[0] ?? null
                          field.onChange(f)
                        }}
                      />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* توافق‌نامه */}
          <FormField
            control={control as any}
            name="terms"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={Boolean(field.value)}
                      onCheckedChange={(c) => field.onChange(Boolean(c))}
                    />
                    <div>
                      <div className="text-sm">با قوانین و شرایط استفاده موافقم</div>
                      <div className="text-xs text-muted-foreground">(خواندن و پذیرش پیش از ارسال الزامی است)</div>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* دکمه ارسال */}
          <div className="flex items-center justify-end gap-2 pt-2">
            <Button type="submit" loading={submitting} disabled={submitting}>
              ثبت‌نام مطب
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                form.reset()
                setAvatarPreview(null)
              }}
            >
              پاک‌کردن فرم
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
