import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import range from "/utils/helpers/range.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, Spacer, Text, VStack } from "@chakra-ui/react"
import Script from "next/script"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents())
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Box>
  <Script strategy={`afterInteractive`}>
  {`document.documentElement.lang='es'`}
</Script>
  <HStack sx={{"position": "sticky", "bg": "#171F26", "paddingX": "2em", "paddingY": "1.5em", "zIndex": "999", "top": "0"}}>
  <Box sx={{"fontFamily": "Comfortaa", "fontWeight": "500", "fontSize": "1em"}}>
  <Text as={`span`} sx={{"color": "#f3b32b"}}>
  {`Full Stack`}
</Text>
  <Text as={`span`} sx={{"color": "#8b5f00"}}>
  {` Oracle Next Education`}
</Text>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "560px", "width": "100%", "marginY": "2em", "padding": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`1em`}>
  <Avatar name={`Cecilia Cardenas`} size={`xl`} src={`avatar.jpg`} sx={{"color": "#C3C7CB", "bg": "#171F26", "padding": "2px", "border": "4px", "borderColor": "#f3b32b"}}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Cecilia Cardenas`}
</Heading>
  <Text sx={{"marginTop": "0px !important", "color": "#f3b32b"}}>
  {`@`}
</Text>
  <HStack spacing={`1.5em`}>
  <Link as={NextLink} href={`https://github.com/cecilia11119`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image alt={`GitHub`} src={`icons/github.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://api.whatsapp.com/send?phone=51914036159`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image alt={`whatsapp`} src={`icons/whatsapp.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/carmen-cecilia-cardenas-oliveros/`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image alt={`LinkedIn`} src={`icons/linkedin.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#f3b32b"}}>
  {`2+`}
</Text>
  {` años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#f3b32b"}}>
  {`5+`}
</Text>
  {` proyectos creados`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#f3b32b"}}>
  {`5+`}
</Text>
  {` skills`}
</Box>
</Flex>
  <Text sx={{"fontSize": "1em", "color": "#C3C7CB"}}>
  {`
            Hola mi nombre es Cecilia Cardenas soy desarrolladora Full Stack Jr Oracle Next Education
            `}
</Text>
</VStack>
  <VStack spacing={`1em`} sx={{"width": "100%"}}>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Proyectos`}
</Heading>
  <Link as={NextLink} href={`https://www.youtube.com/watch?v=4JbNoqi6Ifg`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#8b5f00"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Python`} src={`icons/python.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Python`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Pandas analisis de datos agrupamientos histograma matplotlib`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://cecilia11119.github.io/Juego-del-ahorcado-challenge-/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#8b5f00"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`JavaScript`} src={`icons/js.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`JavaScript`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Juego el ahorcado con Javascript`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://ventas-react.vercel.app/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#8b5f00"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`React`} src={`icons/react.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`React`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Formulario de productos y categorias`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/watch?v=2deMkkfP6Sk`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#8b5f00"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Java`} src={`icons/java.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Java`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Reservas con java y mysql - listas de reservas y huéspedes.`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://cecilia11119.github.io/E-commerce/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#8b5f00"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Html`} src={`icons/html5.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Html`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`E-commerce con Html 5 y Css 3`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/watch?v=QQ0gjBYPqrI`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#8b5f00"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Visual Basic`} src={`icons/visualStudio.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Visual Basic`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Sistema creado en Visual Studio con vb y Sql`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Recursos`}
</Heading>
  <Link as={NextLink} href={`https://github.com/cecilia11119`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#8b5f00"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`GitHub`} src={`icons/git.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`GitHub`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Aquí puedes encontrar mis proyectos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Contacto`}
</Heading>
  <Link as={NextLink} href={`mailto:cecilia11119@gmail.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#8b5f00"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Email`} src={`icons/email.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Email`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`cecilia11119@gmail.com`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack spacing={`1em`} sx={{"marginBottom": "2em", "paddingBottom": "2em", "paddingX": "2em", "color": "#A3ABB2"}}>
  <Image alt={`Logotipo de Cecilia Cardenas.`} src={`logoflor.png`} sx={{"height": "4em", "width": "4em"}}/>
  <Link as={NextLink} href={`https://mouredev.com`} isExternal={true} sx={{"fontSize": "0.8em", "textDecoration": "none", "Hover": {}}}>
  <Box>
  {`© 2014-2024 `}
  <Text as={`span`} sx={{"color": "#f3b32b"}}>
  {`Pagina Python Reflex by Cecilia Cardenas`}
</Text>
</Box>
</Link>
  <Text sx={{"fontSize": "0.8em", "marginTop": "0px !important"}}/>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Cecilia Cardenas | desarrolladora freelance Full stack Jr Oracle Next Education`}
</title>
  <meta content={`Hola, mi nombre es Cecilia Cardenas. Soy desarrolladora freelance Full stack Jr Oracle Next Education.`} name={`description`}/>
  <meta content={`avatar.jpg`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
