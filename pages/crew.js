import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import PageTitle from '../components/PageTitle'
import crewData from '../data/crewData.json'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Crew() {
    const [crewMemberIndex, setCrewMemberIndex] = useState(0);

    const theme = useTheme()
    const desktop = useMediaQuery(theme.breakpoints.up("md"))
    const tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <Head>
                <title>Crew</title>
            </Head>
            <Stack component="main"
                sx={{
                    backgroundImage: {
                        sm: 'url(/assets/crew/background-crew-tablet.jpg)',
                        xs: 'url(/assets/crew/background-crew-mobile.jpg)',
                        md: 'url(/assets/crew/background-crew-desktop.jpg)',
                    },
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    minHeight: '100vh',
                    justifyContent: { xs: 'flex-start', sm: 'space-between' },
                }}>
                <Navbar currentPage='crew' />
                <Stack direction={{ xs: "column" }}
                    justifyContent={{ md: "space-between" }}
                    alignItems={{ xs: "center", sm: "normal" }}
                    mt={{ xs: 0, sm: 0, md: '0px' }}
                    ml={{ xs: 0 }}
                    width="100%"
                    sx={{
                        '& > *:first-of-type': {
                            mb: { xs: '32px', sm: '0px' }
                        }
                    }}
                >
                    <PageTitle number='02' title='Meet your crew' />
                    <Stack direction={{ xs: "column", sm: "column-reverse", md: "row-reverse" }}
                        width="100%"
                        alignItems={{ xs: "center", md: "flex-end" }}
                        justifyContent={{ md: "space-between" }}
                        pl={{ md: "165.5px" }}
                        pr={{ md: "100px" }}
                    >
                        <Stack width={{ xs: '100%', sm: 'auto' }}
                            alignItems={{ xs: "center", md: "flex-end" }}
                            px={{ xs: '10px', sm: '0px' }}>
                            <img src={crewData[crewMemberIndex].images.webp}
                                alt={crewData[crewMemberIndex].name}
                                width={crewData[crewMemberIndex].images.width[desktop ? 'md' : tablet ? 'sm' : mobile ? 'xs' : 'xs']}
                                height={crewData[crewMemberIndex].images.height[desktop ? 'md' : tablet ? 'sm' : mobile ? 'xs' : 'xs']}
                            />
                            <Divider sx={{
                                display: { xs: 'block', sm: 'none' },
                                width: '100%',
                                height: '1px',
                                backgroundColor: "#383B4B",
                                mb: { xs: "32px", sm: "0px" }
                            }} />
                        </Stack>
                        <Stack direction={{ xs: "column-reverse", sm: "column" }}>
                            <Stack>
                                <Typography variant="h4" color="primary"
                                    textTransform="uppercase"
                                    mt={{ sm: '60px', md: '154px' }}
                                    mb={{ xs: "8px", md: "15px" }}
                                    textAlign={{ xs: 'center', md: 'left' }}
                                    sx={{
                                        opacity: '0.5',
                                        fontSize: { xs: "16px", sm: '24px' },
                                    }}>
                                    {crewData[crewMemberIndex].role}
                                </Typography>
                                <Typography variant="h3" color="primary"
                                    textTransform="uppercase"
                                    mb={{ xs: "16px", md: "27px" }}
                                    textAlign={{ xs: 'center', md: 'left' }}
                                    fontSize={{ xs: '24px', sm: '40px' }}
                                >
                                    {crewData[crewMemberIndex].name}
                                </Typography>
                                <Typography variant="body1" color="secondary"
                                    mx={{ xs: 'auto', md: 0 }}
                                    mb={{ xs: '15px', sm: "40px", md: "120px" }}
                                    maxWidth={{ xs: '327px', sm: '458px', md: '444px' }}
                                    textAlign={{ xs: 'center', md: 'left' }}
                                    lineHeight={{ xs: '25px', sm: '28px' }}
                                >
                                    {crewData[crewMemberIndex].bio}
                                </Typography>
                            </Stack>
                            <Stack direction="row" spacing="24px"
                                mb={{ xs: '32px', sm: '40px', md: '94px' }}
                                justifyContent={{ xs: 'center', md: 'flex-start' }}
                            >
                                {
                                    crewData.map((_, index) => (
                                        <Box key={index}
                                            className={crewMemberIndex === index ? 'active' : ''}
                                            width={{ xs: '10px', md: '15px' }}
                                            height={{ xs: '10px', md: '15px' }}
                                            sx={{
                                                backgroundColor: "primary.main",
                                                opacity: crewMemberIndex === index ? '1' : '0.17',
                                                borderRadius: '50%',
                                                '&:hover': {
                                                    cursor: 'pointer',
                                                },
                                                '&:not(.active):hover': {
                                                    opacity: '0.5'
                                                }
                                            }}
                                            onClick={() => setCrewMemberIndex(index)}
                                        />
                                    ))
                                }
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>

            </Stack>
        </>
    )
}