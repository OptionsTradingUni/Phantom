import { Home, Layers, Repeat2, Search, MessageCircle } from "lucide-react";

export default function BottomNavigation() {
  const navItems = [
    { icon: Home, label: 'Home', testId: 'nav-home', active: true },
    { icon: Layers, label: 'Portfolio', testId: 'nav-portfolio', active: false },
    { icon: Repeat2, label: 'Swap', testId: 'nav-swap', active: false },
    { icon: Search, label: 'Explore', testId: 'nav-explore', active: false },
    { icon: MessageCircle, label: 'Messages', testId: 'nav-messages', active: false },
  ];

  return (
    <div className="flex items-center justify-around px-4 py-3 bg-[#1a1a1a] border-t border-gray-800">
      {navItems.map((item) => (
        <button
          key={item.label}
          data-testid={item.testId}
          onClick={() => console.log(`${item.label} navigation clicked`)}
          className="flex flex-col items-center gap-1 p-2"
        >
          <item.icon className={`w-6 h-6 ${item.active ? 'text-purple-500' : 'text-gray-500'}`} />
        </button>
      ))}
    </div>
  );
}
