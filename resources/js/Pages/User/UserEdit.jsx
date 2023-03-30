import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, Link, usePage } from '@inertiajs/react'
export default function UserShow({ auth }) {
  const { props } = usePage()
  console.log(props);
  return (
    <AuthenticatedLayout
      auth={auth}
      header='ユーザ編集'
    >
      <div className="row">
        <div className="col-lg-5">
          <div className="card">
            <div className="card-header">
              <Link
                className='btn btn-default'
                href={route('user.show', [{ id: props.user.id }])}
              >詳細へ戻る</Link>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>ID</th>
                    <td>{props.user.id}</td>
                  </tr>
                  <tr>
                    <th>名前</th>
                    <td>{props.user.name}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{props.user.email}</td>
                  </tr>
                  <tr>
                    <th>作成日</th>
                    <td>{props.user.created_at}</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
