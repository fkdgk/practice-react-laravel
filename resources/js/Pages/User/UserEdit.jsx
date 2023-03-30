import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, Link, usePage } from '@inertiajs/react'
export default function UserShow({ auth }) {
  const { props } = usePage()
  console.log(props);
  const { data, setData, post, processing, errors } = useForm({
    id: props.user.id,
    name: props.user.name,
    email: props.user.email,
  });

  function submit(e) {
    e.preventDefault()
    post(route('user.update'))
  }

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
              <form onSubmit={submit}>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>ID</th>
                      <td>
                        {props.user.id}
                      </td>
                  </tr>
                  <tr>
                    <th>名前</th>
                      <td>
                        <input type="text" value={data.name} onChange={(e) => { setData('name', e.target.value) }} className='form-control' />
                        {
                          errors.name && <div className="text-danger small">
                            {errors.name}
                          </div>
                        }
                      </td>
                  </tr>
                  <tr>
                    <th>Email</th>
                      <td>
                        <input type="text" value={data.email} onChange={(e) => { setData('email', e.target.value) }} className='form-control' />
                      </td>
                  </tr>
                  <tr>
                    <th>作成日</th>
                    <td>{props.user.created_at}</td>
                  </tr>
                </tbody>
              </table>
                <button type="submit" disabled={processing} className='btn btn-primary'>更新</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
