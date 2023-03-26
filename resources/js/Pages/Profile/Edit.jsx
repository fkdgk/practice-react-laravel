import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react'

export default function Edit({ auth }) {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
    });

    function submit(e) {
        e.preventDefault()
        post(route('profile.update'))
    }


    return (
        <AuthenticatedLayout
            auth={auth}
            header='Profile'
        >
            <div className="row">
                <div className="col-md-6">
                    <div className="card card-primary">
                        <form onSubmit={submit}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="userName">user name</label>
                                    <input value={data.name} onChange={e => { setData('name', e.target.value) }} type="text" className="form-control" id="userName" placeholder="Enter user name" />
                                    {errors.name && <div>{errors.name}</div>}
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary" disabled={processing}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
