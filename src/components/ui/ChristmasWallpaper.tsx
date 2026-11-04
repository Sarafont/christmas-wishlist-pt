import { TreePine } from "lucide-react";

export default function ChristmasWallpaper() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="grid h-full grid-cols-4 justify-items-center gap-y-12 py-8 sm:grid-cols-6 lg:grid-cols-8">
        {Array.from({ length: 160 }, (_, index) => (
          <TreePine
            key={index}
            size={22}
            strokeWidth={1.2}
            className="fill-current text-burgundy opacity-30"
          />
        ))}
      </div>
    </div>
  );
}
