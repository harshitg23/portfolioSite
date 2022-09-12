import React from 'react'
import { BlogSection } from '../../Components';
import { VlogSection } from '../../Components/VlogSection';
import { MainLayout } from '../../styles/Layout';

export const Blog = () => {
    return (
        <MainLayout>
            <VlogSection />
            <BlogSection />
        </MainLayout >
    )
}
