import { Button } from "@mui/material";
import Head from "next/head";

const IndexPage = () => (
  <main className="flex flex-col items-center justify-center h-screen ">
    <Head>
      <title>Home</title>
    </Head>
    <h1 className="text-xl font-bold text-blue-500 font-pacifico">
      Hello from Next.js 👋
    </h1>

    <p>
      <Button
        className="bg-black rounded-full capitalize hover:bg-teal-500 "
        variant="contained"
      >
        hello world
      </Button>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eaque
      ipsam reprehenderit in sunt aperiam pariatur dolore et? Quisquam quos
      ipsum provident impedit deserunt repellendus, sequi sit dolorum
      accusantium doloribus!
    </p>
  </main>
);

export default IndexPage;
