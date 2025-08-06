import { Button as RadixButton, Flex } from '@radix-ui/themes'

type ButtonProps = {
  content: string
}

export const Button = ({ content }: ButtonProps) => {
  return (
    <Flex direction="column">
      <RadixButton variant="solid">{content}</RadixButton>
    </Flex>
  )
}
