import reflex as rx
import datetime
import Portafolio_Python_Reflex.constants as const
from Portafolio_Python_Reflex.styles.styles import Size
from Portafolio_Python_Reflex.styles.colors import Color, TextColor
from Portafolio_Python_Reflex.components.link_icon import link_icon
from Portafolio_Python_Reflex.components.info_text import info_text


def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(
                name="Cecilia Cardenas",
                size="xl",
                src="avatar.jpg",
                color=TextColor.BODY.value,
                bg=Color.CONTENT.value,
                padding="2px",
                border="4px",
                border_color=Color.PRIMARY.value
            ),
            rx.vstack(
                rx.heading(
                    "Cecilia Cardenas",
                    size="lg"
                ),
                rx.text(
                    "@",
                    margin_top=Size.ZERO.value,
                    color=Color.PRIMARY.value
                ),
                rx.hstack(
                    link_icon(
                        "icons/github.svg",
                        const.GITHUB_URL,
                        "GitHub"
                    ),
                    link_icon(
                        "icons/whatsapp.svg",
                        const.WHATSAPP_URL,
                        "whatsapp"
                    ),
                   # link_icon(
                   #     "icons/instagram.svg",
                   #     const.INSTAGRAM_URL,
                   #     "Instagram"
                   # ),
                   # link_icon(
                   #     "icons/tiktok.svg",
                   #     const.TIKTOK_URL,
                   #     "TikTok"
                   # ),
                   # link_icon(
                   #     "icons/spotify.svg",
                   #     const.SPOTIFY_URL,
                   #     "Spotify"
                   #),
                    link_icon(
                        "icons/linkedin.svg",
                        const.LINKEDIN_URL,
                        "LinkedIn"
                    ),
                    spacing=Size.LARGE.value
                ),
                align_items="start"
            ),
            spacing=Size.DEFAULT.value
        ),
        rx.flex(
            info_text(
                f"{experience()}+",
                "años de experiencia"
            ),
            rx.spacer(),
            info_text(
                "100+", "aplicaciones creadas"
            ),
            rx.spacer(),
            info_text(
                "1M+", "seguidores"
            ),
            width="100%"
        ),
        rx.text(
            f"""
            Hola mi nombre es Cecilia Cardenas soy desarrolladora Full stack Jr Oracle Next Education
            """,
            font_size=Size.DEFAULT.value,
            color=TextColor.BODY.value
        ),
        spacing=Size.BIG.value,
        align_items="start"
    )


def experience() -> int:
    return datetime.date.today().year - 2010
