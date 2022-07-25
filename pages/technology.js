import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import technologyData from '../data/technologyData.json'
import Navbar from '../components/Navbar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery';
import PageTitle from '../components/PageTitle'

export default function Technology() {
    const [technologyIndex, setTechnologyIndex] = useState(0);

    const theme = useTheme()
    const desktop = useMediaQuery(theme.breakpoints.up("md"))
    const tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <Head>
                <title>Technology</title>
            </Head>
            <Stack component="main"
                sx={{
                    backgroundImage: {
                        xs: 'url(/assets/technology/background-technology-mobile.jpg)',
                        sm: 'url(/assets/technology/background-technology-tablet.jpg)',
                        md: 'url(/assets/technology/background-technology-desktop.jpg)',
                    },
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    minHeight: '100vh',
                }}>
                <Navbar currentPage='technology' />
                <Stack direction="column" mx={{ xs: 0, md: 0 }} mt={{ sm: 1, md: 4.5 }}
                    mb={{ sm: 3, md: 5 }}
                    alignItems={{ xs: "center", sm: "normal" }}
                    sx={{
                        '& > *:first-of-type': {
                            mb: { xs: '32px', sm: '60px', md: '24px' }
                        }
                    }}
                >
                    <PageTitle number='03' title='Space launch 101' />
                    <Stack direction={{ xs: "column", md: "row-reverse" }}
                        justifyContent={{ md: "space-between" }}
                        alignItems={{ xs: "center" }}
                        ml={{ xs: 0, md: '165.5px' }}
                    >
                        <img src={technologyData[technologyIndex].images[desktop ? 'portrait' : 'landscape']}
                            alt={technologyData[technologyIndex].name}
                            width={desktop ? '515px' : '100%'}
                            height={desktop ? '527px' : 'auto'}
                        />
                        <Stack direction={{ xs: "column", md: "row" }}
                            mt={{ xs: '34px', sm: '56px', md: '0px' }}
                        >
                            <Stack direction={{ xs: "row", md: "column" }}
                                justifyContent={{ xs: "center" }}
                                spacing={{ xs: '16px', md: '32px' }}
                                mb={{ xs: '26px', sm: '44px', md: '0px' }}
                            >
                                {
                                    technologyData.map((_, index) => (
                                        <Typography key={index}
                                            variant="h4"
                                            color={index === technologyIndex ? 'dark' : 'primary'}
                                            backgroundColor={index === technologyIndex ? 'primary.main' : 'transparent'}
                                            width={{ xs: '40px', sm: '60px', md: '80px' }}
                                            height={{ xs: '40px', sm: '60px', md: '80px' }}
                                            fontSize={{ xs: '16px', md: '32px' }}
                                            sx={{
                                                border: '1px solid rgba(255, 255, 255, 0.25)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                '&:hover': {
                                                    cursor: 'pointer',
                                                    border: '1px solid rgba(255, 255, 255, 1)',
                                                }
                                            }}
                                            onClick={() => setTechnologyIndex(index)}
                                        >
                                            {index + 1}
                                        </Typography>
                                    ))
                                }
                            </Stack>
                            <Stack direction="column" ml={{ md: '80px' }}>
                                <Typography
                                    variant="nav"
                                    fontSize={{ xs: '14px', sm: '16px' }}
                                    color="secondary"
                                    textTransform="uppercase"
                                    mb={{ xs: '9px', sm: '16px', md: '11px' }}
                                    textAlign={{ xs: "center", md: "left" }}
                                >
                                    The terminology...
                                </Typography>
                                <Typography variant='h3'
                                    fontSize={{ xs: '24px', sm: '40px', md: '56px' }}
                                    color="primary"
                                    textTransform="uppercase"
                                    mb={{ xs: '16px', md: '17px' }}
                                    textAlign={{ xs: "center", md: "left" }}
                                >
                                    {technologyData[technologyIndex].name}
                                </Typography>
                                <Typography variant='body1'
                                    color="secondary"
                                    maxWidth={{ xs: '327px', sm: "458px", md: '444px' }}
                                    textAlign={{ xs: "center", md: "left" }}
                                    mb={{ xs: '15px', md: '0px' }}
                                    lineHeight={{ xs: '28px', md: '32px' }}
                                >
                                    {technologyData[technologyIndex].description}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}