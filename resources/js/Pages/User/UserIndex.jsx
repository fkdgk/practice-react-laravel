import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function UserIndex({ auth }) {
  return (
    <AuthenticatedLayout
      auth={auth}
      header='Profile'
    >
      <div>UserIndex</div>
    </AuthenticatedLayout>
  )
}
