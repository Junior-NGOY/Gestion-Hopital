import React from 'react';
import { NavLink } from 'react-router-dom';

function Sider() {
  return (
    <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="../../index3.html" className="brand-link">
      <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: ".8" }}/>
      <span className="brand-text font-weight-light">Hope Hospital</span>
    </a>
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
        </div>
        <div className="info">
          <a href="/" className="d-block">Dr. Georges K.</a>
        </div>
      </div>
      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item">
                <NavLink to='/structures' className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Structure</p>
                </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/patients" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
                    <p>Patient</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
                    <p>Utilisateur</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/rdvs" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
                    <p>Rendez-vous</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i className="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="../../index.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../../index2.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../../index3.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="../widgets.html" className="nav-link">
              <i className="nav-icon fas fa-th"></i>
              <p>
                Widgets
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="nav-icon fas fa-copy"></i>
              <p>
                Layout Options
                <i className="fas fa-angle-left right"></i>
                <span className="badge badge-info right">6</span>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="../layout/top-nav.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Top Navigation</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../layout/top-nav-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Top Navigation + Sidebar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../layout/boxed.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Boxed</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../layout/fixed-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Fixed Sidebar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../layout/fixed-sidebar-custom.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Fixed Sidebar <small>+ Custom Area</small></p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../layout/fixed-topnav.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Fixed Navbar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../layout/fixed-footer.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Fixed Footer</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="../layout/collapsed-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Collapsed Sidebar</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-header">EXAMPLES</li>
          <li className="nav-item">
            <a href="../calendar.html" className="nav-link">
              <i className="nav-icon far fa-calendar-alt"></i>
              <p>
                Calendar
                <span className="badge badge-info right">2</span>
              </p>
            </a>
          </li>
        </ul>
      </nav>
     
    </div>
   
  </aside>
    </div>
  )
}

export default Sider