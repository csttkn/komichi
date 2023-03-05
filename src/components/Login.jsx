
function Login() {
  return (
    <>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">用户名：</span>
        </label>
        <input type="text" className="input input-bordered" />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">密码：</span>
        </label>
        <input type="text" className="input input-bordered" />
      </div>
      <div className="w-full max-w-xs">
        <button className="btn btn-wide w-full max-w-xs mt-3">登录</button>
      </div>
    </>
  );
}

export default Login;
