import './global.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ja'>
      <body className='flex min-h-screen w-screen justify-center p-4'>{children}</body>
    </html>
  )
}

export default RootLayout
