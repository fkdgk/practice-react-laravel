import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
export default function Edit({ auth }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header='Profile'
        >
            <div class="row">
                <div class="col-md-6">
                    <div class="card card-primary">
                        <form>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="userName">user name</label>
                                    <input type="text" class="form-control" id="userName" placeholder="Enter user name" />
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
