import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, Link, usePage } from '@inertiajs/react'
export default function UserShow({ auth }) {
  const { props } = usePage()
  console.log(props);
  return (
    <AuthenticatedLayout
      auth={auth}
      header='ユーザ詳細'
    >
      <div className="row">
        <div className="col">
          <div className="card">

            <div className="card-body">

            </div>

          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
