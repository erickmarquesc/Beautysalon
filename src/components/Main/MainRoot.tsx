import { ReactNode } from 'react'

interface IMainRootProps {
  children: ReactNode;
}

export const MainRoot = ({ children }: IMainRootProps) => {
  return (
    <main>
      {children}
    </main>
  )
}