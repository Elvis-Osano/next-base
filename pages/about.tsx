import Link from "next/link";

const AboutPage = () => (
  <div className="flex flex-col items-center justify-center h-screen ">
    <h1 className="text-xl font-bold ">About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </div>
);

export default AboutPage;
