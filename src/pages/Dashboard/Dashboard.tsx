const metrics = [
  { label: 'Active workspaces', value: '24', change: '+12%' },
  { label: 'Running jobs', value: '138', change: '+8%' },
  { label: 'Monthly spend', value: '$4.8k', change: '-3%' },
] as const;

const projects = [
  { name: 'Climate modeling', owner: 'Research', status: 'Healthy' },
  { name: 'Notebook migration', owner: 'Platform', status: 'At risk' },
  { name: 'GPU benchmark', owner: 'ML Ops', status: 'Healthy' },
] as const;

function Dashboard() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-10">
      <div className="rounded-3xl border bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-primary">Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Workspace overview
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Dummy operational metrics for a Nebari deployment, including
              workspace usage, compute activity, and project health.
            </p>
          </div>
          <div className="rounded-2xl bg-primary/10 px-4 py-3 text-sm text-primary">
            Last updated 4 minutes ago
          </div>
        </div>

        <section
          aria-label="Dashboard metrics"
          className="mt-8 grid gap-4 md:grid-cols-3"
        >
          {metrics.map((metric) => (
            <article
              className="rounded-2xl border bg-background p-5"
              key={metric.label}
            >
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <strong className="text-3xl font-semibold">
                  {metric.value}
                </strong>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {metric.change}
                </span>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_18rem]">
          <section className="rounded-2xl border bg-background p-5">
            <h2 className="text-lg font-semibold">Project health</h2>
            <div className="mt-5 overflow-hidden rounded-xl border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 font-medium">Project</th>
                    <th className="px-4 py-3 font-medium">Owner</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {projects.map((project) => (
                    <tr key={project.name}>
                      <td className="px-4 py-3 font-medium">{project.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {project.owner}
                      </td>
                      <td className="px-4 py-3">{project.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <aside className="rounded-2xl border bg-background p-5">
            <h2 className="text-lg font-semibold">Recent activity</h2>
            <div className="mt-5 space-y-4 text-sm">
              <p className="rounded-xl bg-muted p-3">
                New workspace launched for Climate modeling.
              </p>
              <p className="rounded-xl bg-muted p-3">
                GPU benchmark completed with no failures.
              </p>
              <p className="rounded-xl bg-muted p-3">
                Platform team queued a notebook image update.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
