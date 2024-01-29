import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <h1 class="max-6-xs my-16 text-6xl font-thin uppercase text-sky-700">
        Hello world!
      </h1>
      <A href="/chat" class="rounded-lg bg-blue-800 p-3 text-xl text-white">
        ➡️ Go chat!
      </A>
    </main>
  );
}
