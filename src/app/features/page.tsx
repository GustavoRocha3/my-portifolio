import { Typography } from "@mui/material";

export default function FeaturesPage() {
  return (
    <main className="pt-20 container mx-auto max-w-[1200px] flex flex-col items-center gap-5">
      <section className="sm:py-10 md:py-12 lg:py-16 mx-7 flex flex-col items-center gap-5 bg-[#0A192F] text-white">
        <Typography variant="h2" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Features
        </Typography>
        <Typography className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          This page is under construction. Stay tuned for updates!
        </Typography>
      </section>
    </main>
  );
}