import { Anchor, Flex } from '@mantine/core'

const ContactInfo = () => {
    return (
        <Flex pl={73} pt={41} pb={49} pr={73} justify="space-between">
            <Anchor
                underline="hover"
                href="tel:+79365106387"
                c="white"
                fz={30}
            >
                Contact me
            </Anchor>

            <Anchor
                underline="hover"
                c="white"
                fz={30}
                data-disabled
            >
                Download a resume
            </Anchor>

            <Anchor
                underline="hover"
                href="mailto:zaury8252@gmail.com"
                c="white"
                fz={30}
            >
                Mail
            </Anchor>
        </Flex>
    )
}

export default ContactInfo