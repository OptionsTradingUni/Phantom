interface BalanceDisplayProps {
  totalBalance: number;
  change: number;
  changePercent: number;
}

export default function BalanceDisplay({ totalBalance, change, changePercent }: BalanceDisplayProps) {
  const isNegative = change < 0;
  
  return (
    <div className="px-4 py-6">
      <h2 className="text-5xl font-bold text-white mb-2">
        ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </h2>
      <div className="flex items-center gap-2">
        <span className={`text-sm font-medium ${isNegative ? 'text-red-500' : 'text-green-500'}`}>
          {isNegative ? '-' : '+'}${Math.abs(change).toFixed(4)}
        </span>
        <span className={`text-xs px-2 py-1 rounded-md ${isNegative ? 'bg-red-500/20 text-red-500' : 'bg-green-500/20 text-green-500'}`}>
          {isNegative ? '' : '+'}{changePercent.toFixed(2)}%
        </span>
      </div>
    </div>
  );
}
