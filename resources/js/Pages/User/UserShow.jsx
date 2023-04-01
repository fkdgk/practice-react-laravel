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
        <div className="col-lg-5">
          <div className="card">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <div className="btn-group">
                  <Link
                    className='btn btn-default'
                    href={route('user.index')}
                  >一覧へ戻る</Link>
                  <Link
                    className='btn btn-default'
                    href={route('user.edit', [{ id: props.user.id }])}
                  >編集</Link>
                </div>
                <div className="">
                  <button className="btn btn-danger">ユーザ削除</button>
                </div>
              </div>

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
