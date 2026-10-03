"use client";
import { useState } from "react";
const periods = {
  "7 days": [12, 21, 17, 32, 25, 39, 46],
  "30 days": [26, 38, 30, 56, 44, 67, 82],
};
const initialLeads = [
  {
    name: "Alex Morgan",
    company: "Sample company A",
    project: "Web application",
    stage: "Discovery",
  },
  {
    name: "Sam Rivera",
    company: "Sample company B",
    project: "AI assistant",
    stage: "Qualified",
  },
  {
    name: "Jamie Lee",
    company: "Sample company C",
    project: "Operations dashboard",
    stage: "New",
  },
];
export default function DashboardDemo() {
  const [tab, setTab] = useState("Overview");
  const [period, setPeriod] = useState<keyof typeof periods>("7 days");
  const [runs, setRuns] = useState(0);
  const [enabled, setEnabled] = useState(true);
  const [filter, setFilter] = useState("");
  const data = periods[period];
  const leads = initialLeads.filter((l) =>
    `${l.name} ${l.company} ${l.project} ${l.stage}`
      .toLowerCase()
      .includes(filter.toLowerCase()),
  );
  return (
    <section id="playground" className="container-shell section-space">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / THE POSSIBILITIES, IN PRACTICE</p>
          <h2 className="section-title">
            Less scattered.
            <br />
            <span className="text-muted">More in control.</span>
          </h2>
        </div>
        <p>
          A glimpse of what your own system could feel like. Change the view.
          Run a sample workflow. Make yourself at home.
        </p>
      </div>
      <div className="dashboard">
        <aside className="dashboard-sidebar">
          <div className="dashboard-brand">
            <span className="brand-mark">↗</span> northline
            <span className="text-muted"> / OS</span>
          </div>
          <p className="eyebrow workspace-label">DEMO WORKSPACE</p>
          <nav aria-label="Demo dashboard views">
            {["Overview", "Leads", "Automations"].map((name, i) => (
              <button
                key={name}
                aria-pressed={tab === name}
                onClick={() => setTab(name)}
                className={tab === name ? "selected" : ""}
              >
                <span aria-hidden="true">{["◫", "◎", "⌁"][i]}</span>
                {name}
                {name === "Leads" && <small>3</small>}
              </button>
            ))}
          </nav>
          <div className="sandbox-note">
            <span className="status-dot" /> A safe place to explore.
            <p>Sample data. No live integrations.</p>
          </div>
        </aside>
        <div className="dashboard-main">
          <div className="dashboard-toolbar">
            <span>
              Workspace <span className="text-muted">/ {tab}</span>
            </span>
            <span className="demo-badge">INTERACTIVE DEMO</span>
          </div>
          <div className="dashboard-content">
            <div className="dashboard-title">
              <div>
                <h3>
                  {tab === "Overview"
                    ? "Your business, at a glance."
                    : tab === "Leads"
                      ? "Every opportunity, in view."
                      : "Goodbye, repetitive work."}
                </h3>
                <p>Illustrative operations workspace · all data is fictional</p>
              </div>
              <label className="period-select">
                <span className="sr-only">Demo reporting period</span>
                <select
                  value={period}
                  onChange={(e) =>
                    setPeriod(e.target.value as keyof typeof periods)
                  }
                >
                  <option>7 days</option>
                  <option>30 days</option>
                </select>
              </label>
            </div>
            {tab === "Overview" && (
              <>
                <div className="metric-grid">
                  {[
                    [
                      "Inquiries",
                      period === "7 days" ? "46" : "82",
                      "Sample pipeline",
                    ],
                    [
                      "Workflow runs",
                      String((period === "7 days" ? 128 : 512) + runs),
                      "Simulated executions",
                    ],
                    [
                      "Active workflows",
                      enabled ? "03" : "02",
                      "Demo configuration",
                    ],
                  ].map(([label, value, note]) => (
                    <div className="metric" key={label}>
                      <span>{label}</span>
                      <strong>
                        {value}
                        <span className="metric-dot" />
                      </strong>
                      <small>{note}</small>
                    </div>
                  ))}
                </div>
                <div className="chart-panel">
                  <div className="panel-heading">
                    <h4>Inquiry activity</h4>
                    <span>
                      <i className="status-dot" /> Sample inquiries
                    </span>
                  </div>
                  <div
                    className="chart"
                    role="img"
                    aria-label={`Sample inquiry trend for ${period}: ${data.join(", ")}. Fictional data.`}
                  >
                    <div className="chart-grid">
                      <span>100</span>
                      <span>50</span>
                      <span>0</span>
                    </div>
                    <svg
                      viewBox="0 0 660 150"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d={`M0,${145 - data[0] * 1.3} ${data.map((v, i) => `L${i * 110},${145 - v * 1.3}`).join(" ")} L660,150 L0,150Z`}
                        className="chart-area"
                      />
                      <polyline
                        points={data
                          .map((v, i) => `${i * 110},${145 - v * 1.3}`)
                          .join(" ")}
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="3"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </div>
                  <div className="chart-axis">
                    <span>{period === "7 days" ? "MON" : "WEEK 1"}</span>
                    <span>{period === "7 days" ? "WED" : "WEEK 2"}</span>
                    <span>{period === "7 days" ? "FRI" : "WEEK 3"}</span>
                    <span>{period === "7 days" ? "SUN" : "WEEK 4"}</span>
                  </div>
                </div>
              </>
            )}
            {tab === "Leads" && (
              <div className="leads-panel">
                <label className="text-sm" htmlFor="lead-search">
                  Search sample leads
                </label>
                <input
                  id="lead-search"
                  className="field mb-5"
                  placeholder="Search name, project, or stage…"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
                <div className="lead-table">
                  <table>
                    <caption className="sr-only">
                      Fictional leads for demonstration
                    </caption>
                    <thead>
                      <tr>
                        <th>Contact</th>
                        <th>Project</th>
                        <th>Stage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((l) => (
                        <tr key={l.name}>
                          <td>
                            {l.name}
                            <small>{l.company}</small>
                          </td>
                          <td>{l.project}</td>
                          <td>
                            <span className="stage-badge">{l.stage}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {leads.length === 0 && (
                    <p role="status" className="p-5 text-muted">
                      No sample leads match your search.
                    </p>
                  )}
                </div>
              </div>
            )}
            {tab === "Automations" && (
              <div className="automation-list">
                {[
                  "Inquiry qualification",
                  "Pipeline organization",
                  "Activity summary",
                ].map((name, i) => (
                  <div key={name}>
                    <span className="automation-icon" aria-hidden="true">
                      ⌁
                    </span>
                    <span>
                      <strong>{name}</strong>
                      <small>
                        {i === 0
                          ? "Website → Assistant → Demo pipeline"
                          : i === 1
                            ? "Sample lead → Stage assignment"
                            : "Demo events → Dashboard summary"}
                      </small>
                    </span>
                    {i === 0 ? (
                      <button
                        className="switch"
                        role="switch"
                        aria-checked={enabled}
                        aria-label="Enable inquiry qualification demo"
                        onClick={() => setEnabled(!enabled)}
                      >
                        <i />
                      </button>
                    ) : (
                      <span className="stage-badge">Enabled</span>
                    )}
                  </div>
                ))}
              </div>
            )}
            <div className="dashboard-lower">
              <div className="workflow-demo">
                <div className="panel-heading">
                  <h4>Try a workflow</h4>
                  <span>LOCAL SIMULATION</span>
                </div>
                <div className="mini-flow">
                  <span>Inquiry</span>
                  <i>→</i>
                  <span>Qualify</span>
                  <i>→</i>
                  <span>Pipeline</span>
                </div>
                <button
                  className="run-button"
                  disabled={!enabled}
                  onClick={() => setRuns((r) => r + 1)}
                >
                  ▷ Run sample workflow
                </button>
                {!enabled && (
                  <p className="text-xs text-muted mt-2">
                    Enable inquiry qualification in Automations to run.
                  </p>
                )}
              </div>
              <div className="activity-panel">
                <div className="panel-heading">
                  <h4>Activity feed</h4>
                  <span className="status-dot" />
                </div>
                <div aria-live="polite" className="activity-item">
                  <span className="activity-check">✓</span>
                  <div>
                    {runs > 0
                      ? `Sample run #${runs} completed`
                      : "Demo workspace ready"}
                    <small>
                      {runs > 0
                        ? "Simulated only. No CRM record or message sent."
                        : "Run a workflow to see an event here."}
                    </small>
                  </div>
                </div>
                <div className="activity-item muted-activity">
                  <span>◷</span>
                  <div>
                    Waiting for your next idea
                    <small>The real system starts with your brief.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="under-demo">
        <span aria-hidden="true">↳</span> This is a front-end demonstration, not
        a connected business account.{" "}
        <a href="/contact">Build a system like this ↗</a>
      </p>
    </section>
  );
}
