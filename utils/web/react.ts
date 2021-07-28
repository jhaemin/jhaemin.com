import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export const bindTextInput = (
  value: string,
  dispatch: Dispatch<SetStateAction<string>>
) => ({
  value,
  onChange: (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(e.currentTarget.value),
})
