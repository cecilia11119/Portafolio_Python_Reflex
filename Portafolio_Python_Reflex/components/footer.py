import reflex as rx
import datetime
import Portafolio_Python_Reflex.constants as const
from Portafolio_Python_Reflex.styles.styles import Size
from Portafolio_Python_Reflex.styles.colors import Color, TextColor


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(
            src="logoflor.png",
            height=Size.VERY_BIG.value,
            width=Size.VERY_BIG.value,
            alt="Logotipo de MoureDev. Una \"eme\" entre llaves."
        ),
        rx.link(
            rx.box(
                f"© 2014-{datetime.date.today().year} ",
                rx.span("Pagina Python Reflex by Cecilia Cardenas", color=Color.PRIMARY.value),
                #" v3."
            ),
            href=const.MOUREDEV_URL,
            is_external=True,
            font_size=Size.MEDIUM.value
        ),
        rx.text(
           # "BUILDING SOFTWARE WITH ♥ FROM GALICIA TO THE WORLD.",
            font_size=Size.MEDIUM.value,
            margin_top=Size.ZERO.value
        ),
        margin_bottom=Size.BIG.value,
        padding_bottom=Size.BIG.value,
        padding_x=Size.BIG.value,
        spacing=Size.DEFAULT.value,
        color=TextColor.FOOTER.value
    )
