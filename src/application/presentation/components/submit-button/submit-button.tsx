import React, { useContext } from 'react'
import { FormContext } from '@/application/presentation/contexts'

type Props = {
  children: React.ReactNode
}

const SubmitButton: React.FC<Props> = ({ children }: Props) => {
  const { state } = useContext(FormContext)
  return (
    <button
      data-testid="submit"
      disabled={state.isFormInvalid}
      type="submit"
    >
      {children}
    </button>
  )
}

export default SubmitButton
