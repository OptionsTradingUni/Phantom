import { QrCode, Send, Repeat2, DollarSign } from "lucide-react";

export default function ActionButtons() {
  const actions = [
    { icon: QrCode, label: 'Receive', testId: 'button-receive' },
    { icon: Send, label: 'Send', testId: 'button-send' },
    { icon: Repeat2, label: 'Swap', testId: 'button-swap' },
    { icon: DollarSign, label: 'Buy', testId: 'button-buy' },
  ];

  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-4 gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            data-testid={action.testId}
            onClick={() => console.log(`${action.label} clicked`)}
            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#2a2a2a] hover-elevate active-elevate-2"
          >
            <action.icon className="w-6 h-6 text-purple-400" />
            <span className="text-xs text-white font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
