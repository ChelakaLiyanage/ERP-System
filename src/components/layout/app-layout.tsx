import Sidebar from "./sidebar"
import AppBar from "./appbar"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <AppBar />

        <main className="p-6 bg-muted/40 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  )
}