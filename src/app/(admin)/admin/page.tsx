import Footer from '@/components/footer/Footer';
// import Link from 'next/link'
import Link from '@/components/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AdminSideBar from "@/components/admin_page/admin_side_sidebar";

export default function AdminPage() {
    return (
        <div>
            {/*<Link href="/admin/individuals">Individuals 555553Page</Link>*/}
            <AdminSideBar selectedButton={"Main"}/>
            <Typography
                sx={{
                    textAlign: 'center',
                }}
                variant="h3"
                gutterBottom={true}
            >
                Admin Page
            </Typography>
            <Button
                variant="contained"
                component={Link}
                href={'/admin/individuals'}
            >
                Individuals Page
            </Button>
            <Footer/>
        </div>
    )
}