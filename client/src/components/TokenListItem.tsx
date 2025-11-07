interface TokenListItemProps {
  icon: string;
  name: string;
  amount: number;
  symbol: string;
  value: number;
  change: number;
}

export default function TokenListItem({ icon, name, amount, symbol, value, change }: TokenListItemProps) {
  const isNegative = change < 0;
  
  return (
    <button
      data-testid={`token-${symbol.toLowerCase()}`}
      onClick={() => console.log(`${name} clicked`)}
      className="w-full flex items-center gap-3 px-4 py-3 hover-elevate active-elevate-2"
    >
      <div className="w-12 h-12 rounded-full overflow-hidden bg-[#2a2a2a] flex items-center justify-center flex-shrink-0">
        <img src={icon} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 text-left">
        <h3 className="text-white font-semibold text-base">{name}</h3>
        <p className="text-gray-400 text-sm">
          {amount.toLocaleString('en-US', { maximumFractionDigits: 6 })} {symbol}
        </p>
      </div>
      <div className="text-right">
        <p className="text-white font-semibold text-base">
          ${value.toFixed(2)}
        </p>
        <p className={`text-sm font-medium ${isNegative ? 'text-red-500' : 'text-green-500'}`}>
          {isNegative ? '-' : '+'}${Math.abs(change).toFixed(2)}
        </p>
      </div>
    </button>
  );
}
