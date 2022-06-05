import Link from "next/link";

const IndexPage = () => (
  <div className="flex flex-col items-center justify-center h-screen ">
    <h1 className="text-xl font-bold ">Hello from Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

export default IndexPage;
