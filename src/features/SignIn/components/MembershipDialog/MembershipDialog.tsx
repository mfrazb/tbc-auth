import { Button, Text } from '../../../../components'
import { Dialog, Flex, TextField } from '@radix-ui/themes'
import { Cross2Icon } from '@radix-ui/react-icons'
import { useState } from 'react'
import styled from '@emotion/styled'
import { theme } from '../../../../utils'

interface MembershipDialogProps {
  membership: {
    richText: string
    form: {
      firstName: {
        placeholder: string
      }
      lastName: {
        placeholder: string
      }
      email: {
        placeholder: string
      }
      submit: string
    }
  }
}

const DialogContainer = styled(Flex)`
  flex-direction: column;
  gap: ${theme.spacing['spacing-xs']};
`

const DialogContent = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['spacing-xs']};
  max-width: 480px;
`

const DialogHeader = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
`

// MFB TODO: add form input messages on membership request form
// MFB TODO: add handleSignUp function to send email to TBC
export const MembershipDialog = ({ membership }: MembershipDialogProps) => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  return (
    <DialogContainer>
      <Text>{membership.richText}</Text>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button variant="soft-green">Reach out to request membership</Button>
        </Dialog.Trigger>
        <DialogContent>
          <DialogHeader>
            <Dialog.Title className="DialogTitle">
              Request membership
            </Dialog.Title>
            <Dialog.Close>
              <Button
                variant="outline"
                aria-label="Close"
                style={{ width: '30px', height: '30px', padding: '0' }}
              >
                <Cross2Icon />
              </Button>
            </Dialog.Close>
          </DialogHeader>
          <Dialog.Description className="DialogDescription">
            {`Share your name and email, and we'll reach out.`}
          </Dialog.Description>
          <Flex gap="2">
            <TextField.Root
              variant="surface"
              placeholder={membership.form.firstName.placeholder}
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              type="text"
              style={{ width: '100%' }}
              required
            />
            <TextField.Root
              variant="surface"
              placeholder={membership.form.lastName.placeholder}
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              type="text"
              style={{ width: '100%' }}
              required
            />
          </Flex>
          <TextField.Root
            variant="surface"
            placeholder={membership.form.email.placeholder}
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            required
          />
          <Dialog.Close>
            <Button variant="tbc-green">{membership.form.submit}</Button>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Root>
    </DialogContainer>
  )
}
