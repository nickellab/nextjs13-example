'use client'
import { twMerge } from 'tailwind-merge'

type Props = React.ComponentProps<'button'> & {}
const Button: React.FC<Props> = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge('bg-blue-500 rounded-lg py-2 px-4 text-white', className)}
    />
  )
}

export default Button
