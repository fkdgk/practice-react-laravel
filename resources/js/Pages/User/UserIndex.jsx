import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router, useForm, Link, usePage } from '@inertiajs/react'
import route from 'ziggy-js';
export default function UserIndex({ auth }) {
  const { props } = usePage()
  console.log(props);
  return (
    <AuthenticatedLayout
      auth={auth}
      header='ユーザ一覧'
    >
      <div className="row">
        <div className="col">
          <div className="card">

            <div className="card-body table-responsive">
              <table className="table table-sm table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Date</th>
                    <th>created</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    props.users.map((user, index) => {
                      return (
                        <tr key={index} onClick={() => router.visit(route('user.show', user))} role='button'>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.created_at}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
