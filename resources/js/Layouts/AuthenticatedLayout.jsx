import { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import route from 'ziggy-js';

export default function Authenticated({ auth, header, children }) {
    const { props } = usePage();
    console.log(props)
    return (
        <>
            <Head title={header} />

            <div className="wrapper">

                <nav className="main-header navbar navbar-expand navbar-white navbar-light">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <Link href={route('dashboard')} className="nav-link">Home</Link>
                        </li>
                    </ul>


                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="far fa-bell"></i> {auth.user.name}
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <Link className='dropdown-item' href={route('profile.edit')}><i className="fas fa-user mr-2"></i> profile</Link>
                                <div className="dropdown-divider"></div>
                                <Link as='button' method='post' href={route('logout')} className='dropdown-item dropdown-footer'>LogOut</Link>
                            </div>
                        </li>
                    </ul>
                </nav>



                <aside className="main-sidebar sidebar-dark-primary elevation-4">

                    <Link href={route('dashboard')} className="brand-link">
                        <img src="/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '0.8' }} />
                        <span className="brand-text font-weight-light">Logo</span>
                    </Link>


                    <div className="sidebar">

                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">



                                <li className="nav-item">
                                    <Link href={route('user.index')} className='nav-link'>
                                        <i className="nav-icon fa fa-users"></i>
                                        <p>ユーザ一覧</p>
                                    </Link>

                                </li>
                                <li className="nav-item">
                                    <a href="../widgets.html" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>Widgets</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../widgets.html" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>Widgets</p>
                                    </a>
                                </li>


                            </ul>
                        </nav>

                    </div>

                </aside>


                <div className="content-wrapper">

                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>{header}</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">

                                        {
                                            props.breadcrumbs.map((breadcrumb, index) => {
                                                return (
                                                    breadcrumb.is_current_page
                                                        ?
                                                        <li className="breadcrumb-item active" key={index}>{breadcrumb.title}</li>
                                                        :
                                                        <li className="breadcrumb-item" key={index}>
                                                            <Link href={breadcrumb.url}>{breadcrumb.title}</Link>
                                                        </li>
                                                )
                                            })
                                        }

                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="content">
                        {children}
                    </section>
                </div>

                <footer className="main-footer">
                    <div className="float-right d-none d-sm-block">
                        <b>Version</b> 3.2.0
                    </div>
                    <strong>Copyright &copy; 2014-2021 company name.</strong> All rights reserved.
                </footer>
                <aside className="control-sidebar control-sidebar-dark">
                </aside>
            </div>
        </>


    );
}
