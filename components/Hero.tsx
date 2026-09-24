import Link from "next/link";
export default function Hero() {
  return (
    <section className="container-shell grid items-center gap-14 py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:py-24">
      <div>
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line px-3 py-2 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-[#688750]" /> Small team.
          Big-picture thinking.
        </div>
        <h1 className="max-w-2xl text-5xl font-medium leading-[1.07] tracking-[-0.055em] sm:text-6xl lg:text-[70px]">
          Better websites.
          <br />
          Smarter systems.
          <br />
          <span className="text-[#718069]">Room to grow.</span>
        </h1>
        <p className="mt-7 max-w-md text-base leading-7 text-muted">
          We build websites that work harder and automations that give you time
          back. Your next chapter starts with a team that gets it.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link href="/contact" className="button">
            Let’s build something <span aria-hidden="true">↗</span>
          </Link>
          <Link
            href="#work"
            className="border-b border-ink pb-1 text-sm font-semibold"
          >
            Explore our work <span aria-hidden="true">↓</span>
          </Link>
        </div>
        <div className="mt-10 flex items-center gap-3 text-xs text-muted">
          <div className="flex -space-x-2" aria-hidden="true">
            {["Dev", "Dev", "Lead"].map((x, i) => (
              <span
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-paper bg-[#dfe5d8] text-[9px] font-bold text-ink"
              >
                {x}
              </span>
            ))}
          </div>
          <span>
            2 developers. 1 dedicated point of contact.
            <br />
            <span className="text-ink">Built for businesses like yours.</span>
          </span>
        </div>
      </div>
      <div
        className="relative rounded-[28px] border border-[#dbe2d6] bg-[#e9eee3] p-5 pb-7 sm:p-9"
        aria-label="Illustration of a website connected to an automated business workflow"
      >
        <div className="mb-8 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.16em] text-muted">
          <span>Your business, connected</span>
          <span aria-hidden="true">✳</span>
        </div>
        <div className="overflow-hidden rounded-xl border border-white bg-white shadow-soft">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div className="flex gap-1" aria-hidden="true">
              <i className="h-1.5 w-1.5 rounded-full bg-[#cdd6c9]" />
              <i className="h-1.5 w-1.5 rounded-full bg-[#cdd6c9]" />
              <i className="h-1.5 w-1.5 rounded-full bg-[#cdd6c9]" />
            </div>
            <span className="text-[9px] text-muted">
              A BETTER DIGITAL EXPERIENCE
            </span>
            <span aria-hidden="true">↗</span>
          </div>
          <div className="grid grid-cols-[1.1fr_1fr] gap-3 bg-[#f6f5ef] p-6">
            <div>
              <p className="mb-7 text-[10px] font-bold">
                forma<span className="text-[#8b956c]">®</span>
              </p>
              <p className="font-serif text-3xl leading-[1.08] tracking-tight sm:text-4xl">
                Made for
                <br />
                everyday
                <br />
                <em>living.</em>
              </p>
              <div className="mt-5 inline-block rounded-full bg-ink px-3 py-2 text-[8px] text-white">
                Discover the collection ↗
              </div>
            </div>
            <div className="relative flex items-end justify-center overflow-hidden rounded-t-full bg-[#d6ddc8]">
              <div className="mb-8 h-24 w-20 rounded-t-[45%] rounded-b-xl bg-[#b89471] shadow-[12px_12px_0_0_#c4cbb8] sm:h-32 sm:w-24">
                <div className="mx-auto -mt-1 h-3 w-10 rounded-[50%] bg-[#6d604d]" />
              </div>
              <div className="absolute bottom-0 h-8 w-full bg-[#c6cdbb]" />
            </div>
          </div>
        </div>
        <div className="mx-auto h-8 w-px border-l border-dashed border-[#8b9b80]" />
        <div className="rounded-xl border border-white bg-white/90 p-5 shadow-soft">
          <div className="mb-4 flex justify-between text-xs">
            <span className="font-semibold">Less busywork. More business.</span>
            <span className="flex items-center gap-1 text-[10px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6d8a48]" />{" "}
              Connected
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            {["New inquiry", "Your CRM", "Follow-up"].map((x, i) => (
              <div key={x} className="contents">
                <div className="flex-1 rounded-lg bg-paper px-1 py-3 text-center">
                  <div className="mb-2 text-xl" aria-hidden="true">
                    {["↗", "⌘", "✓"][i]}
                  </div>
                  <div className="text-[9px] text-muted sm:text-[11px]">
                    {x}
                  </div>
                </div>
                {i < 2 && (
                  <span className="text-[#8c9b7e]" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-muted">
          <span aria-hidden="true">✧</span> Good design meets intelligent
          automation
        </div>
      </div>
    </section>
  );
}
