import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import range from "/utils/helpers/range.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react"
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
  {`13+`}
</Text>
  {` años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#f3b32b"}}>
  {`100+`}
</Text>
  {` aplicaciones creadas`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#f3b32b"}}>
  {`1M+`}
</Text>
  {` seguidores`}
</Box>
</Flex>
  <Text sx={{"fontSize": "1em", "color": "#C3C7CB"}}>
  {`
            Hola mi nombre es Cecilia Cardenas soy desarrolladora Full stack Jr Oracle Next Education
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
  <Link as={NextLink} href={`https://www.youtube.com/watch?v=2deMkkfP6Sk`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#8b5f00"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Java`} src={`icons/java.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Java`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`El chat y los grupos de estudio de la comunidad`}
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
  <Image alt={`Visual Basic`} src={`icons/desktop.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
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
  {`Recursos y más`}
</Heading>
  <Link as={NextLink} href={`https://mouredev.com/libro-git`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#8b5f00"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Git y GitHub desde cero`} src={`icons/git.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Git y GitHub desde cero`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Aquí puedes comprar mi libro en formato físico y eBook`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://amazon.es/shop/mouredev/list/2ZIHJJFJ9AVZ3`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#8b5f00"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Libros recomendados`} src={`icons/book.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Libros recomendados`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Mi listado de libros sobre programación, ciencia y tecnología`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://mouredev.com/setup`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#8b5f00"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Mi setup`} src={`icons/setup.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Mi setup`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Listado con todos los elementos que uso en mi trabajo`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://mouredev.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#8b5f00"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`MoureDev`} src={`icons/logo.png`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`MoureDev`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Mi sitio web`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://buymeacoffee.com/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#8b5f00"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Invítame a un café`} src={`icons/coffee.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Invítame a un café`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`¿Quieres ayudarme a que siga creando contenido?`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Contacto`}
</Heading>
  <Link as={NextLink} href={`https://mypublicinbox.com/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#8b5f00"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`MyPublicInbox`} src={`icons/checkemail.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`MyPublicInbox`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Respuesta rápida y con preferencia`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`mailto:braismoure@mouredev.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#8b5f00"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Email`} src={`icons/email.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Email`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`braismoure@mouredev.com`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
  <VStack alignItems={`start`} spacing={`0.8em`} sx={{"width": "100%"}}>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Colaboran`}
</Heading>
  <SimpleGrid columns={[1, 2]} spacing={`2em`}>
  <Link as={NextLink} href={`https://e.lga.to/MoureDev`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image alt={`Logotipo de Elgato`} src={`elgato.png`} sx={{"height": "4em", "aspectRatio": "5 / 2"}}/>
</Link>
  <Link as={NextLink} href={`https://mvp.microsoft.com/es-es/PublicProfile/5004970`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image alt={`Logotipo de Microsoft MVP`} src={`mvp.png`} sx={{"height": "4em", "aspectRatio": "5 / 2"}}/>
</Link>
</SimpleGrid>
</VStack>
</VStack>
</Center>
  <VStack spacing={`1em`} sx={{"marginBottom": "2em", "paddingBottom": "2em", "paddingX": "2em", "color": "#A3ABB2"}}>
  <Image alt={`Logotipo de MoureDev. Una "eme" entre llaves.`} src={`logo.png`} sx={{"height": "4em", "width": "4em"}}/>
  <Link as={NextLink} href={`https://mouredev.com`} isExternal={true} sx={{"fontSize": "0.8em", "textDecoration": "none", "Hover": {}}}>
  <Box>
  {`© 2014-2023 `}
  <Text as={`span`} sx={{"color": "#f3b32b"}}>
  {`Pagina Python Reflex by Cecilia Cardenas`}
</Text>
  {` v3.`}
</Box>
</Link>
  <Text sx={{"fontSize": "0.8em", "marginTop": "0px !important"}}>
  {`BUILDING SOFTWARE WITH ♥ FROM GALICIA TO THE WORLD.`}
</Text>
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
