import { Button } from "@/components/ui/button"

const App = () => (
  <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <header className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Hello World!</h1>
    </header>
    
    <main className="flex flex-1 flex-col items-center justify-center px-20 text-center">
          <div className="p-8">
      <Button>Click me</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive" size="sm">Delete</Button>
    </div>

      Fugiat veniam cillum tempor ipsum sint quis in commodo sint mollit tempor.
    </main>
  </div>
)

export default App
