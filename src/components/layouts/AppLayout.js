import { Link } from "gatsby";
import * as React from "react";

const Layout = ({ location, title, children, className = "" }) => {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location?.pathname === rootPath;

  return (
    <div className={`global-wrapper flex flex-col w-100 min-h-screen bg-base-300 ${className}`} data-is-root-path={isRootPath}>
      {/* <header className="global-header">{header}</header> */}
      <div className="navbar bg-green text-gray h-14 mb-10">
        <div className="flex-none px-2 mx-2">
          <Link className="text-xl font-bold" to="/">
            {title || 'Better Recycle Malaysia'}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="items-stretch flex">
            <Link className="btn btn-ghost btn-sm rounded-btn" to="/map">
              Map
            </Link>
            <Link className="btn btn-ghost btn-sm rounded-btn" to="/blog">
              Blog
            </Link>
            <Link className="btn btn-ghost btn-sm rounded-btn" to="/video">
              Video
            </Link>
          </div>
        </div>
      </div>
      <div className="container grow flex flex-col mx-auto px-2">
        <main className="grow">{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          ❤️
        </footer>
      </div>
    </div>
  );
};

export default Layout;
