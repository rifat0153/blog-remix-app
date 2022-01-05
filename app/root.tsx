import {
  Link,
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import tailwindStyles from "./tailwind.css";

export const meta: MetaFunction = () => {
  return { title: "Blog App" };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStyles }];
};

export default function App() {
  return (
    <Document title={"Blog App"}>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

interface DocumentProp {
  children: JSX.Element;
  title: string;
}

function Document(props: DocumentProp) {
  return (
    <html lang="en">
      <head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {props.children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <nav
        className="flex justify-between px-10 py-2 
      bg-slate-200 border-b-2 border-slate-300"
      >
        <Link to="/" className="text-3xl">
          Remix
        </Link>

        <ul className="flex space-x-2">
          <li>
            <Link to="/posts" className="text-xl">
              Posts
            </Link>
          </li>
          <li>
            <Link to="/posts/new" className="text-xl">
              Test
            </Link>
          </li>
        </ul>
      </nav>
      <div className="">{children}</div>
    </>
  );
}
