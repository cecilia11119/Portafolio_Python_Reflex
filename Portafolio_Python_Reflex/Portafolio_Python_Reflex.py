import reflex as rx
import Portafolio_Python_Reflex.styles.styles as styles

from Portafolio_Python_Reflex.components.navbar import navbar
from Portafolio_Python_Reflex.components.footer import footer
from Portafolio_Python_Reflex.views.header.header import header
from Portafolio_Python_Reflex.views.links.links import links
from Portafolio_Python_Reflex.views.sponsors.sponsors import sponsors
from Portafolio_Python_Reflex.styles.styles import Size


# class State(rx.State):
#     pass


def index() -> rx.Component:
    return rx.box(
        rx.script("document.documentElement.lang='es'"),
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                links(),
                #sponsors(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                padding=Size.BIG.value
            )
        ),
        footer()
    )


app = rx.App(
    stylesheets=styles.STYLESHEETS,
    style=styles.BASE_STYLE,
    head_components=[
        rx.script(src="https://www.googletagmanager.com/gtag/js?id=G-3YGHT3XJFS"),
        rx.script(
            """
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-3YGHT3XJFS');
"""
        ),
    ],
)

app.add_page(
    index,
    title="Cecilia Cardenas | desarrolladora freelance Full stack Jr Oracle Next Education",
    description="Hola, mi nombre es Cecilia Cardenas. Soy desarrolladora freelance Full stack Jr Oracle Next Education.",
    image="avatar.jpg"
)

app.compile()
