import { useState } from 'react'
import Logo from '../assets/shared/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery';

const links = ['home', 'destination', 'crew', 'technology']

export default function Navbar({ currentPage }) {
    const theme = useTheme()
    const [drawerOpened, setDrawerOpened] = useState(false)

    return (
        <Stack direction='row'
            pt={{ xs: 3, sm: 0, md: 5 }}
            pb={{ xs: 5 }}
            pl={{ xs: 3, sm: 5, md: 7 }}
            pr={{ xs: 3, sm: 0 }}
            width='100%'
            justifyContent='space-between'
            alignItems='center'
            sx={{
                '& > *:first-of-type:hover': {
                    cursor: 'pointer'
                }
            }}
        >
            <Link href='/'>
                <Image src={Logo} alt='logo'
                    width={useMediaQuery(theme.breakpoints.down("sm")) ? 40 : 48}
                    height={useMediaQuery(theme.breakpoints.down("sm")) ? 40 : 48}
                />
            </Link>
            <Divider sx={{
                display: { xs: 'none', md: 'block' },
                height: '1px', backgroundColor: 'primary.main', flexGrow: '1',
                mixBlendMode: 'normal',
                opacity: '0.25',
                marginLeft: '70px',
                position: 'relative',
            }}
            />
            <Stack direction='row' spacing={{ sm: 2, md: 6 }}
                pl={{ sm: 1.5, md: 10 }}
                pr={{ sm: 5, md: 19 }}
                display={{ xs: 'none', sm: 'flex' }}
                justifyContent='space-between'
                alignItems='center'
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    backdropFilter: 'blur(30px)',
                    position: 'relative',
                }}
            >
                <Divider sx={{
                    display: { xs: 'none', md: 'block' },
                    height: '1px', backgroundColor: 'primary.main',
                    width: '30px',
                    opacity: '0.25',
                    position: 'absolute',
                    left: '0',
                    border: 'none',
                }} />
                {
                    links.map((link, index) => {
                        return (
                            <Link key={index} href={`/${link !== 'home' ? link : ''}`}>
                                <Stack direction='row' spacing={1.5} py={{ sm: 4.8, md: 4.9 }}
                                    sx={{
                                        position: 'relative',
                                        '&:hover': {
                                            cursor: 'pointer',
                                        },
                                        '&:hover > hr:not(.active)': {
                                            backgroundColor: 'primary.main',
                                            opacity: '0.5',
                                        }
                                    }}
                                >
                                    <Typography variant='nav' color="primary" fontWeight='700' sx={{
                                        display: { sm: 'none', md: 'block' },
                                    }}>
                                        {`0${index}`}
                                    </Typography>
                                    <Typography variant='nav' color="primary" textTransform='uppercase'>
                                        {link}
                                    </Typography>
                                    <Divider className={currentPage === link ? 'active' : ''}
                                        sx={{
                                            position: 'absolute',
                                            height: '3px',
                                            width: '100%',
                                            backgroundColor: currentPage === link ? 'primary.main' : 'transparent',
                                            bottom: "0px",
                                            left: '0px',
                                            marginLeft: '0px !important',
                                        }}
                                    />
                                </Stack>
                            </Link>
                        )
                    })
                }
            </Stack>
            {
                useMediaQuery(theme.breakpoints.down("sm")) && (
                    <>
                        <Image src='/assets/shared/icon-hamburger.svg' width={24} height={21}
                            onClick={() => setDrawerOpened(true)}
                        />
                        <Drawer
                            anchor='right'
                            open={drawerOpened}
                            onClose={() => setDrawerOpened(false)}
                            sx={{
                                '& > .MuiDrawer-paper, & > .MuiBackdrop-root ': {
                                    backgroundColor: 'transparent',
                                }
                            }}
                        >
                            <Stack direction='column' spacing={4}
                                alignItems='flex-start'
                                sx={{
                                    pt: 4.3,
                                    pl: 4,
                                    minHeight: '100vh',
                                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                    backdropFilter: 'blur(30px)',
                                    '& > *:first-child': {
                                        alignSelf: 'flex-end',
                                        mb: '64px !important',
                                        mr: '26px !important',
                                    },
                                }}
                            >
                                <Image src='/assets/shared/icon-close.svg' width={19} height={19}
                                    onClick={() => setDrawerOpened(false)}
                                />
                                {
                                    links.map((link, index) => {
                                        return (
                                            <Link key={index} href={`/${link !== 'home' ? link : ''}`}>
                                                <Stack direction="row" spacing={1.5}
                                                    alignItems='center'
                                                    sx={{
                                                        position: 'relative',
                                                        width: '100%',
                                                        p: 0.5,
                                                        pr: 11,
                                                        '&:hover': {
                                                            cursor: 'pointer',
                                                        },
                                                        '&:hover > hr:not(.active)': {
                                                            backgroundColor: 'primary.main',
                                                            opacity: '0.5',
                                                        }
                                                    }}>
                                                    <Typography variant='nav' color="primary" fontWeight='700' sx={{
                                                        display: { sm: 'none', md: 'block' },
                                                    }}>
                                                        {`0${index}`}
                                                    </Typography>
                                                    <Typography variant='nav' color="primary"
                                                        textTransform='uppercase'
                                                    >
                                                        {link}
                                                    </Typography>
                                                    <Divider className={currentPage === link ? 'active' : ''}
                                                        sx={{
                                                            position: 'absolute',
                                                            height: '100%',
                                                            width: '3px',
                                                            backgroundColor: currentPage === link ? 'primary.main' : 'transparent',
                                                            right: '0px',
                                                            marginLeft: '0px !important',
                                                        }}
                                                    />
                                                </Stack>
                                            </Link>
                                        )
                                    })
                                }
                            </Stack>
                        </Drawer >
                    </>
                )
            }
        </Stack >
    )
}