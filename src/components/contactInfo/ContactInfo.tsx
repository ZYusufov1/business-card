import { Anchor, Image, Text } from '@mantine/core'
import icon from './../../../public/telegram.svg'

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
				ta="center"
				display="flex"
				underline="hover"
				target="_blank"
				rel="noopener noreferrer"
				href="https://t.me/zyusu"
				c="white"
				fz={!isMobile ? 30 : 20}
				style={{ order: !isMobile ? orderContact : 2, alignItems: 'center', gap: 5 }}
			>
				Telegram <Image h={!isMobile ? 45 : 22} w={!isMobile ? 45 : 22} src={icon} alt="telegram"/>
			</Anchor>

			<Anchor
				ta="center"
				target="_blank"
				rel="noopener noreferrer"
				underline="hover"
				c="white"
				fz={!isMobile ? 30 : 20}
				data-disabled
				style={{ order: !isMobile ? orderResume : 3 }}
			>
				Download a resume
			</Anchor>

			<Text
				c="white"
				fz={!isMobile ? 30 : 20}
				style={{ order: !isMobile ? orderMail : 1 }}
			>
				zaury8252@gmail.com
			</Text>
		</>
	)
}

export default ContactInfo