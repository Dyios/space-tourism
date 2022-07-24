import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function PageTitle({ number, title }) {
    return (
        <Stack direction="row" spacing={{ xs: 2, sm: 3 }} ml={{ sm: 5, md: 20 }}>
            <Typography component="h1" variant="h5"
                color="primary" sx={{ opacity: 0.25 }}
            >
                {number}
            </Typography>
            <Typography component="h1" variant="h5" textTransform="uppercase"
                color="primary"
            >
                {title}
            </Typography>
        </Stack>
    )
}