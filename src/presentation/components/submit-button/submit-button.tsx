import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'

type Props = {
  children: React.ReactNode
}

const SubmitButton: React.FC<Props> = ({ children }: Props) => {
  const { state } = useContext(Context)
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
