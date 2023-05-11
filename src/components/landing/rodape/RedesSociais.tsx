import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconBrandYoutube } from "@tabler/icons-react"
import RedeSocial from "./RedeSocial"

export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandLinkedin />} url="https://www.linkedin.com/in/augusto-costa-batista-8b57b7236/" />
            <RedeSocial icone={<IconBrandWhatsapp />} url="https://wa.me/+5551980586827" />
            <RedeSocial icone={<IconBrandGithub />} url="https://github.com/AugustoCosBat" />
        </div>
    )
}