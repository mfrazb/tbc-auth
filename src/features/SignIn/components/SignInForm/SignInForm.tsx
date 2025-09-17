import { Button, Text } from '../../../../components'
import { Form } from 'radix-ui'
import type { Dispatch, SetStateAction } from 'react'
import styled from '@emotion/styled'
import { theme } from '../../../../utils'
import { Flex, TextField } from '@radix-ui/themes'

interface SignInFormProps {
  email: string
  password: string
  error: string | null
  loading: boolean
  setEmail: Dispatch<SetStateAction<string>>
  setPassword: Dispatch<SetStateAction<string>>
  handleSignIn: (e: React.FormEvent) => Promise<void>
  signInForm: {
    form: {
      email: {
        id: string
        placeholder: string
      }
      password: {
        id: string
        placeholder: string
      }
    }
  }
}

const FormContainer = styled(Form.Root)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['spacing-md']};
  width: 100%;
`

const FormInputContainer = styled(Flex)`
  flex-direction: column;
  gap: ${theme.spacing['spacing-xs']};
`

const FormMessage = styled(Form.Message)`
  font-size: ${theme.fontSize['font-size-xs']};
  font-weight: bold;
  color: ${theme.colors['tbc-tomato-red']};
`

// MFB TODO: add "forgot password" link
// MFB TODO: add "show password" button
export const SignInForm = ({
  email,
  password,
  error,
  loading,
  setEmail,
  setPassword,
  handleSignIn,
  signInForm,
}: SignInFormProps) => {
  return (
    <FormContainer onSubmit={handleSignIn} style={{ width: '100%' }}>
      <FormInputContainer>
        <Form.Field name={signInForm.form.email.id}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
            }}
          >
            <FormMessage match="valueMissing">
              Please enter your email
            </FormMessage>
            <FormMessage match="typeMismatch">
              Please provide a valid email
            </FormMessage>
          </div>
          <Form.Control asChild>
            <TextField.Root
              variant="surface"
              placeholder={signInForm.form.email.placeholder}
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name={signInForm.form.password.id}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
            }}
          >
            <FormMessage match="valueMissing">
              Please enter your password
            </FormMessage>
          </div>
          <Form.Control asChild>
            <TextField.Root
              variant="surface"
              placeholder={signInForm.form.password.placeholder}
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              required
            />
          </Form.Control>
        </Form.Field>
        {error && (
          <Text color="red" size="2">
            {error}
          </Text>
        )}
      </FormInputContainer>
      <Form.Submit asChild>
        <Button variant="tbc-mustard" type="submit" disabled={loading}>
          {loading ? 'Signing in...' : 'Log in'}
        </Button>
      </Form.Submit>
    </FormContainer>
  )
}
