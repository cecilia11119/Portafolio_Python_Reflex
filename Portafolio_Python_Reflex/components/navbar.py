import reflex as rx
import Portafolio_Python_Reflex.styles.styles as styles
from Portafolio_Python_Reflex.styles.styles import Size
from Portafolio_Python_Reflex.styles.colors import Color


def navbar() -> rx.Component:
    return rx.hstack(
        rx.box(
            rx.span("Full Stack", color=Color.PRIMARY.value),
            rx.span(" Oracle Next Education", color=Color.SECONDARY.value),
            style=styles.navbar_title_style
        ),
        position="sticky",
        bg=Color.CONTENT.value,
        padding_x=Size.BIG.value,
        padding_y=Size.LARGE.value,
        z_index="999",
        top="0"
    )
