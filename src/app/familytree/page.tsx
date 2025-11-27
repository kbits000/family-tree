'use server'
import FamilyTree from '@/app/familytree/familytree';
import Footer from "@/components/footer/Footer";

export default async function FamilyTreePage() {
    return (
        <>
            <h1>Family Chart Page</h1>
            <FamilyTree/>
            <Footer/>
        </>
    )
}