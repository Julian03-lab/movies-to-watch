import AuthButtonServer from "@/components/landing/AuthButtonServer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-28 py-8 gap-6 bg-black-700">
      <h1 className="text-6xl font-semibold text-primary-500 tracking-[0.3em]">
        MOVIES TO WATCH
      </h1>
      <AuthButtonServer />
    </main>
  );
}
