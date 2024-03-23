import reflex as rx
import Portafolio_Python_Reflex.constants as const
from Portafolio_Python_Reflex.components.link_button import link_button
from Portafolio_Python_Reflex.components.title import title
from Portafolio_Python_Reflex.styles.styles import Size


def links() -> rx.Component:
    return rx.vstack(
        title("Proyectos"),
        link_button(
            "Python",
            "Pandas analisis de datos agrupamientos histograma matplotlib",
            "icons/python.svg",
            const.PYTHON_URL
        ),
        link_button(
            "JavaScript",
            "Juego el ahorcado con Javascript",
            "icons/js.svg",
            const.JAVASCRIPT_URL
        ),

         link_button(
            "React",
            "Formulario de productos y categorias",
            "icons/react.svg",
            const.REACT_URL
        ),

        link_button(
            "Java",
            "Reservas con java y mysql - listas de reservas y huéspedes.",
            "icons/java.svg",
            const.JAVA_URL
        ),
      
        link_button(
            "Html",
            "E-commerce con Html 5 y Css 3",
            "icons/html5.svg",
            const.HTMLCSS_URL
        ),
        link_button(
            "Visual Basic",
            "Sistema creado en Visual Studio con vb y Sql",
            "icons/visualStudio.svg",
            const.VISUAL_STUDIO_URL
        ),

        

        title("Recursos"),
        link_button(
            "GitHub",
            "Aquí puedes encontrar mis proyectos",
            "icons/git.svg",
            const.BOOK_URL
        ),
       # link_button(
       #     "Libros recomendados",
       #     "Mi listado de libros sobre programación, ciencia y tecnología",
       #     "icons/book.svg",
       #     const.BOOKS_URL
       # ),
       # link_button(
       #     "Mi setup",
       #     "Listado con todos los elementos que uso en mi trabajo",
       #     "icons/setup.svg",
       #     const.SETUP_URL
       # ),
       # link_button(
       #     "MoureDev",
       #     "Mi sitio web",
       #     "icons/logo.png",
       #     const.MOUREDEV_URL
       # ),
       # link_button(
       #     "Invítame a un café",
       #     "¿Quieres ayudarme a que siga creando contenido?",
       #     "icons/coffee.svg",
       #     const.COFFEE_URL
       # ),

        title("Contacto"),
        #link_button(
        #    "MyPublicInbox",
        #    "Respuesta rápida y con preferencia",
        #    "icons/checkemail.svg",
        #    const.MYPUBLICINBOX_URL
        #),
        link_button(
            "Email",
            const.EMAIL,
            "icons/email.svg",
            f"mailto:{const.EMAIL}"
        ),
        width="100%",
        spacing=Size.DEFAULT.value,
    )
