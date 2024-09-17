import { runtime } from "@/lib/makeswift/runtime"
import { MakeswiftApiHandler } from "@makeswift/runtime/next/server"
import { strict } from "assert"


strict(process.env.MAKESWIFT_SITE_API_KEY, "MAKESWIFT_SITE_API_KEY is required")

const handler = MakeswiftApiHandler(process.env.MAKESWIFT_SITE_API_KEY, {
  runtime,
  getFonts() {
    return [
      {
        family: 'var(--font-inter)',
        label: 'Inter',
        variants: [
          { weight: '300', style: 'normal' },
          { weight: '300', style: 'italic' },
          { weight: '400', style: 'normal' },
          { weight: '400', style: 'italic' },
          { weight: '700', style: 'normal' },
          { weight: '800', style: 'normal' },
        ],
      },
    ]
  },
  apiOrigin: process.env.MAKESWIFT_API_ORIGIN,
  appOrigin: process.env.MAKESWIFT_APP_ORIGIN,
})

export { handler as GET, handler as POST }
