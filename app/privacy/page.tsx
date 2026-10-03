import { site } from "@/lib/site";
export const metadata = { title: "Privacy notice" };
export default function Privacy() {
  return (
    <article className="container-shell max-w-3xl py-20">
      <p className="eyebrow mb-5">Your information</p>
      <h1 className="section-title">Privacy notice</h1>
      <p className="mt-6 rounded-lg border border-line p-4 text-sm">
        Template notice: the agency must confirm its legal identity, retention
        period, and applicable privacy obligations before launch.
      </p>
      <div className="mt-8 space-y-6 leading-7 text-muted">
        <p>
          Northline collects the name, email address, optional phone number,
          company, project type, budget, timeline, submission source, and
          message you submit through the inquiry form or guided assistant so our
          team can respond to your project inquiry. Your submission is stored in
          our PostgreSQL database and processed by our hosting and database
          providers.
        </p>
        <p>
          The theme preference is stored locally in your browser. Assistant
          choices stay in page memory until you submit the brief. Dashboard and
          system-map demonstrations use fictional data and do not trigger
          external integrations. This site does not include advertising trackers
          or analytics. If you choose to book through Calendly, its own privacy
          policy applies on its website.
        </p>
        <p>
          We do not sell inquiry data. Access should be limited to the agency
          team handling your request. Contact us to request access, correction,
          or deletion of your inquiry, subject to applicable obligations.
        </p>
        <p>
          Privacy contact:{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
