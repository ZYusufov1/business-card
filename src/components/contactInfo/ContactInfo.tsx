import { Anchor } from '@mantine/core'

interface ContactInfoProps {
    orderResume?: number,
    orderContact?: number,
    orderMail?: number
}

const ContactInfo = ({ orderResume, orderContact, orderMail }: ContactInfoProps) => {
    return (
        <>
            <Anchor
                underline="hover"
                href="tel:+79365106387"
                c="white"
                fz={30}
                style={{ order: orderContact }}
            >
                Contact me
            </Anchor>

            <Anchor
                underline="hover"
                c="white"
                fz={30}
                data-disabled
                style={{ order: orderResume }}
            >
                Download a resume
            </Anchor>

            <Anchor
                underline="hover"
                href="mailto:zaury8252@gmail.com"
                c="white"
                fz={30}
                style={{ order: orderMail }}
            >
                Mail
            </Anchor>
        </>
    )
}

export default ContactInfo