import { Clock, Search } from "lucide-react";

interface WalletHeaderProps {
  username: string;
  walletName: string;
}

export default function WalletHeader({ username, walletName }: WalletHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 flex items-center justify-center">
          <span className="text-lg">🎨</span>
        </div>
        <div>
          <p className="text-xs text-gray-400">{username}</p>
          <h1 className="text-base font-semibold text-white">{walletName}</h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button data-testid="button-history" className="p-2">
          <Clock className="w-5 h-5 text-gray-400" />
        </button>
        <button data-testid="button-search" className="p-2">
          <Search className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
}
