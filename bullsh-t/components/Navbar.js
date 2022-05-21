import React from 'react'
import { HStack, Icon, IconButton, Tooltip as ChakraTooltip, useColorMode } from '@chakra-ui/react'
import { InfoOutlineIcon, SunIcon, MoonIcon, QuestionOutlineIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { IoArrowBack, IoHelpCircleOutline, IoInformationCircleOutline } from 'react-icons/io5'
import { BsMoonStarsFill } from 'react-icons/bs'
import { GiFlexibleLamp } from 'react-icons/gi'

const Tooltip = ({ children, ...props }) => {
    return (
        <ChakraTooltip 
            p={"0.5em 0.75em"}
            openDelay={150}
            sx={{
                borderRadius: "0.25em"
            }}
            {...props}
        >
            {children}
        </ChakraTooltip>
    )
}

const LinkButton = React.forwardRef((props, ref) => {
    return (
        <NextLink href={props.href} passHref>
            <IconButton
                as="a"
                ref={ref}
                variant="ghost"
                {...props}
            />
        </NextLink>
    )
})

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const { pathname } = useRouter()

    return (
        <HStack
            mb={"2em"}
            p={"10px"}
            flex
            justify="end"
        >

            {pathname !== "/" &&
            <Tooltip label="Go back">
                <LinkButton
                    href="/"
                    aria-label="Go back"
                    icon={<Icon as={IoArrowBack} />}
                    mr="auto"
                    fontSize={"1.2em"}
                />
            </Tooltip>
            }

            <Tooltip label={`Switch to ${colorMode == "light" ? "dark" : "light"} mode`}>
            <IconButton 
                onClick={toggleColorMode}
                variant="ghost"
                aria-label={`Switch to ${colorMode == "light" ? "dark" : "light"} mode`}
                icon={<Icon as={colorMode == "light" ? BsMoonStarsFill : GiFlexibleLamp} fontSize="1.25em" />}
            />
            </Tooltip>

            <Tooltip 
                isDisabled={pathname == "/rules"} 
                label="Lean how to play"
            >
            <LinkButton
                href="/rules"
                disabled={pathname == "/rules"}
                aria-label="Learn how to play"
                icon={<Icon as={IoHelpCircleOutline} fontSize="1.5em" />}
            />
            </Tooltip>

            <Tooltip 
                isDisabled={pathname == "/about"}
                label="About this project"
            >
            <LinkButton
                href="/about"
                disabled={pathname == "/about"}
                aria-label="About this project"
                icon={<Icon as={IoInformationCircleOutline} fontSize="1.5em" />}
            />
            </Tooltip>

        </HStack>
    )
}

export default Navbar