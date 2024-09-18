import { DraftModeScript } from '@makeswift/runtime/next/server'

import { MakeswiftProvider } from '@/lib/makeswift/provider'

type Params = {
  lang: string
  path?: string[]
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Params
}>) {
  return (
    <html lang={params.lang}>
      <head>
        <DraftModeScript appOrigin={process.env.MAKESWIFT_APP_ORIGIN} />
      </head>
      <body>
        <MakeswiftProvider>{children}</MakeswiftProvider>
      </body>
    </html>
  )
}
