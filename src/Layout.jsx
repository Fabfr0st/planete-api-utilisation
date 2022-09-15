import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <main>
        <h1>Layout</h1>
        <Outlet />
      </main>
    </div>
  );
}
