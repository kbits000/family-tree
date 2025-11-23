
import Typography from '@mui/material/Typography';
import AdminSideBar from "@/components/admin_page/admin_side_sidebar";
import Footer from '@/components/footer/Footer';
import Box from '@mui/material/Box';
import AdminBreadcrumbs from "@/components/admin_page/admin_breadcrumbs";
import IndividualsList from "@/components/admin_page/individuals_list";

export default function AdminIndividualsPage() {
    return (
        <Box>
            <AdminSideBar selectedButton={"Individuals"} />
            <AdminBreadcrumbs
                breadcrumbsList={ [ {text: "Admin", path: "/admin"}, {text: 'Individuals', path: "#"} ] }
            />
            <Typography
                sx={{
                    textAlign: 'center',
                    margin: 2,
                }}
                variant="h4"
                gutterBottom={true}
            >
                Admin Page Individuals
            </Typography>
            <Box >
                <IndividualsList />
            </Box>
            <Footer />
        </Box>
    )
}