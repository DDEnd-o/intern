import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function AddCategory() {
  return (
    <>
      <div className="wrapper">
        {/* Navbar */}
        <Navbar />
        {/* /Navbar */}

        {/* <!-- Main Sidebar Container --> */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* <!-- Sidebar --> */}
          <div className="sidebar">
            {/* <!-- Sidebar Menu --> */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* <!-- Add icons to the links using the .nav-icon className
               with font-awesome or any other icon font library --> */}
                <li className="nav-item has-treeview">
                  <Link to="/" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p>Thống kê</p>
                  </Link>
                </li>
                <li className="nav-item has-treeview menu-open">
                  <a href="!#" className="nav-link active">
                    <i className="nav-icon fas fa-chart-pie"></i>
                    <p>
                      Quản lý
                      <i className="right fas fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/list-category" className="nav-link active">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Danh mục</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/list-product" className="nav-link ">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Sản phẩm</p>
                      </Link>
                    </li>
                  </ul>
                  <li className="nav-item">
                    <Link to="/list-account" className="nav-link">
                      <i className="nav-icon far fa-user"></i>
                      <p>Tài khoản</p>
                    </Link>
                  </li>
                </li>
              </ul>
            </nav>
            {/* <!-- /.sidebar-menu --> */}
          </div>
          {/* <!-- /.sidebar --> */}
        </aside>

        {/* <!-- Content Wrapper. Contains page content --> */}
        <div className="content-wrapper">
          {/* <!-- Content Header (Page header) --> */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Danh mục</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item active">Danh mục</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- /.content-header --> */}

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <Link to="/list-category" className="btn btn-primary">
                        Quay lại
                      </Link>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div className="card-body">
                      {/* <!-- Thêm mới --> */}
                      <div>
                        <form method="post" action="" modelAttribute="category">
                          <div className="modal-body">
                            <div className="form-group">
                              <label>Tên</label>
                              <input
                                type="text"
                                className="form-control"
                                path="name"
                                value="Giày nam 2021"
                              />
                            </div>
                            <div className="form-group">
                              <label>Trạng thái</label>
                              <input
                                type="checkbox"
                                className="form-control"
                                path="status"
                                checked
                              />
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Bỏ
                            </button>
                            <button type="submit" className="btn btn-primary">
                              Lưu
                            </button>
                          </div>
                        </form>
                      </div>
                      {/* <!-- /Thêm mới --> */}
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!-- /.col --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container-fluid --> */}
            {/* <!-- /.content --> */}
          </div>
          {/* <!-- /.content-wrapper --> */}
        </div>
        {/* <!-- ./wrapper --> */}
      </div>
    </>
  );
}
export default AddCategory;
