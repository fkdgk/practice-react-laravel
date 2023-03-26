import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit({ auth }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header='Profile'
        >
        </AuthenticatedLayout>
    );
}
