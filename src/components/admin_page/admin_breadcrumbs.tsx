'use client';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function AdminBreadcrumbs({breadcrumbsList}: {breadcrumbsList: {text: string, path: string}[]}) {
    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb">
                {breadcrumbsList.map((item) => (
                    item.path === "#" ? (
                        <Typography sx={{ color: 'text.primary' }}>{item.text}</Typography>
                    ) : (
                        <Link underline="hover" color="inherit" href={item.path}>
                            {item.text}
                        </Link>
                    )
                ))}
            </Breadcrumbs>
        </Box>
    )
}