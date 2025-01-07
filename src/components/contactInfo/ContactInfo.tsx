import { Anchor } from '@mantine/core'

interface ContactInfoProps {
	orderResume?: number,
	orderContact?: number,
	orderMail?: number,
	isMobile?: boolean
}

const ContactInfo = ({ orderResume, orderContact, orderMail, isMobile }: ContactInfoProps) => {
	return (
		<>
			<Anchor
				underline="hover"
				href="tel:+79365106387"
				c="white"
				fz={!isMobile ? 30 : 20}
				style={{ order: !isMobile ? orderContact : 2 }}
			>
				Contact me
			</Anchor>

			<Anchor
				underline="hover"
				c="white"
				fz={!isMobile ? 30 : 20}
				data-disabled
				style={{ order: !isMobile ? orderResume : 3 }}
			>
				Download a resume
			</Anchor>

			<Anchor
				underline="hover"
				href="mailto:zaury8252@gmail.com"
				c="white"
				fz={!isMobile ? 30 : 20}
				style={{ order: !isMobile ? orderMail : 1 }}
			>
				Mail
			</Anchor>
		</>
	)
}

export default ContactInfo