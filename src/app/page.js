const mockStats = [
  { label: "Total Revenue", value: "$24,500", change: "+18.2%" },
  { label: "Active Users", value: "1,230", change: "+5.4%" },
  { label: "New Signups", value: "321", change: "+12.1%" },
  { label: "Conversion Rate", value: "4.8%", change: "+0.9%" },
];

const mockActivity = [
  {
    id: 1,
    user: "John Doe",
    action: "Upgraded to Pro",
    amount: "$49",
    date: "2025-11-18",
  },
  {
    id: 2,
    user: "Sarah Smith",
    action: "New signup",
    amount: "$0",
    date: "2025-11-18",
  },
  {
    id: 3,
    user: "Michael Brown",
    action: "Cancelled subscription",
    amount: "-$29",
    date: "2025-11-17",
  },
  {
    id: 4,
    user: "Anna Lee",
    action: "New signup",
    amount: "$0",
    date: "2025-11-17",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
  <div className="px-6 py-5 border-b border-slate-800">
    <h1 className="text-2xl font-bold tracking-tight">
      SaaS<span className="text-indigo-400">Board</span>
    </h1>
    <p className="text-xs text-slate-400 mt-1">Analytics dashboard demo</p>
  </div>

  <nav className="px-4 py-4 space-y-1 text-sm">
    <button className="w-full text-left px-3 py-2 rounded-lg bg-slate-800 font-medium">
      Overview
    </button>
    <button className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
      Customers
    </button>
    <button className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
      Billing
    </button>
    <button className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
      Settings
    </button>
  </nav>

  {/* Move this up, not at the very bottom */}
  <div className="px-4 pt-2 pb-4 text-xs text-slate-500">
    Logged in as <span className="text-slate-200">demo@user.com</span>
  </div>
</aside>




      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-slate-800 flex items-center justify-between px-4 md:px-8 bg-slate-900">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Overview</h2>
            <p className="text-xs text-slate-400">Key metrics for your SaaS product</p>
          </div>

          <div className="flex items-center gap-3">
            <select className="bg-slate-950 border border-slate-700 text-sm rounded-lg px-3 py-2 text-slate-200" defaultValue="30d">
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>

            <button className="hidden sm:inline-flex items-center px-3 py-2 text-xs rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-400">
              Download report
            </button>
          </div>
        </header>

        <main className="flex-1 px-4 md:px-8 py-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* KPI Cards */}
            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {mockStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-lg flex flex-col gap-2">
                  <p className="text-xs text-slate-400 uppercase tracking-wide">{stat.label}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-xs text-emerald-400">{stat.change} vs last period</p>
                </div>
              ))}
            </section>

            <section className="grid gap-6 lg:grid-cols-3">
              {/* Chart */}
              <div className="lg:col-span-2 rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-lg">
                <div className="h-56 rounded-lg border border-dashed border-slate-700 flex items-center justify-center text-xs text-slate-500">
                  Chart placeholder – coming soon
                </div>
              </div>

              {/* Activity */}
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-lg">
                <h3 className="text-sm font-semibold mb-4">Recent activity</h3>

                <div className="space-y-4 text-sm">
                  {mockActivity.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b border-slate-800 pb-3 last:border-b-0 last:pb-0">
                      <div>
                        <p className="font-medium text-slate-100">{item.user}</p>
                        <p className="text-xs text-slate-400">{item.action}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-400">{item.date}</p>
                        <p className="text-sm font-semibold">{item.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
