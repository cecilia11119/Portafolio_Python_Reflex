import reflex as rx
import Portafolio_Python_Reflex.styles.styles as styles


def title(text: str) -> rx.Component:
    return rx.heading(
        text,
        style=styles.title_style
    )
