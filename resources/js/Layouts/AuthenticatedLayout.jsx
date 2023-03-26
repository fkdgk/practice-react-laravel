import { useState } from 'react';
import { Link } from '@inertiajs/react';
import route from 'ziggy-js';

export default function Authenticated({ auth, header, children }) {

    return (


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
                            <i className="far fa-bell"></i> Hello
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> 4 new messages
                                <span className="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-users mr-2"></i> 8 friend requests
                                <span className="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-file mr-2"></i> 3 new reports
                                <span className="float-right text-muted text-sm">2 days</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                        </div>
                    </li>
                </ul>
            </nav>



            <aside className="main-sidebar sidebar-dark-primary elevation-4">

                <Link href={route('dashboard')} className="brand-link">
                    <img src="img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '0.8' }} />
                    <span className="brand-text font-weight-light">Logo</span>
                </Link>


                <div className="sidebar">

                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">user name</a>
                        </div>
                    </div>


                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">



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
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">{header}</li>
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

    );
}
