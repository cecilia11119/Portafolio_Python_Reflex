import reflex as rx
import Portafolio_Python_Reflex.constants as const
from Portafolio_Python_Reflex.styles.styles import Size
from Portafolio_Python_Reflex.components.title import title
from Portafolio_Python_Reflex.components.link_sponsor import link_sponsor


def sponsors() -> rx.Component:
    return rx.vstack(
        title("Colaboran"),
        rx.responsive_grid(
            link_sponsor(
                "elgato.png",
                const.ELGATO_URL,
                "Logotipo de Elgato"
            ),
            link_sponsor(
                "mvp.png",
                const.MVP_URL,
                "Logotipo de Microsoft MVP"
            ),
            spacing=Size.BIG.value,
            columns=[1, 2]
        ),
        width="100%",
        align_items="start",
        spacing=Size.MEDIUM.value
    )
