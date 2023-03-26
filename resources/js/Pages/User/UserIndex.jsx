import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function UserIndex() {
  return (
    <AuthenticatedLayout
      header='Profile'
    >
      <div>UserIndex</div>
    </AuthenticatedLayout>
  )
}
