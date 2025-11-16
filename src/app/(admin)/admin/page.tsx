import Footer from '@/components/footer/Footer';
import Link from 'next/link'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AdminSideBar from "@/components/admin_page/admin_side_sidebar";


export default function AdminPage() {
    return (
        <div>
            <Typography
                sx={{
                    textAlign: 'center',
                }}
                variant="h3"
                gutterBottom={true}
            >
                Admin Page
            </Typography>
            <Button variant="contained">
                <Link href="/admin/individuals">Individuals Page</Link>
            </Button>
            <AdminSideBar />
            <Footer/>
        </div>
    )
}