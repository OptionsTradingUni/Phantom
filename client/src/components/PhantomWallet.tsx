import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import WalletHeader from './WalletHeader';
import BalanceDisplay from './BalanceDisplay';
import ActionButtons from './ActionButtons';
import TokenListItem from './TokenListItem';
import BottomNavigation from './BottomNavigation';
import { ChevronRight, Download } from 'lucide-react';
import clippyIcon from '@assets/IMG_5016_1762530333254.jpeg';
import solanaIcon from '@assets/IMG_5073_1762518833458.jpeg';
import usdtIcon from '@assets/IMG_5074_1762518833458.jpeg';
import jupiterIcon from '@assets/IMG_5075_1762518833458.jpeg';
import bonkIcon from '@assets/IMG_5076_1762518833458.jpeg';
import pythIcon from '@assets/IMG_5077_1762518833458.png';
import raydiumIcon from '@assets/IMG_5078_1762518833458.jpeg';

interface Token {
  icon: string;
  name: string;
  amount: number;
  symbol: string;
  value: number;
  change: number;
}

export default function PhantomWallet() {
  const walletRef = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState('@TheWealthPrince1');
  const [walletName, setWalletName] = useState('Side Wallet');

  const tokens: Token[] = [
    {
      icon: solanaIcon,
      name: 'Solana',
      amount: 2595.79, // Current SOL price ~$155
      symbol: 'SOL',
      value: 402347.83,
      change: -816.47,
    },
    {
      icon: usdtIcon,
      name: 'USDT',
      amount: 75000.00,
      symbol: 'USDT',
      value: 75183.26,
      change: -15.83,
    },
    {
      icon: clippyIcon,
      name: 'Clippy PFF',
      amount: 55327132.50, // $150k / $0.002711
      symbol: 'PFF',
      value: 150892.14,
      change: 3200.67,
    },
    {
      icon: jupiterIcon,
      name: 'Jupiter',
      amount: 12500.00,
      symbol: 'JUP',
      value: 45632.58,
      change: 892.38,
    },
    {
      icon: bonkIcon,
      name: 'Bonk',
      amount: 8500000.00,
      symbol: 'BONK',
      value: 18754.37,
      change: -345.91,
    },
    {
      icon: pythIcon,
      name: 'Pyth Network',
      amount: 25000.00,
      symbol: 'PYTH',
      value: 9876.49,
      change: 156.24,
    },
    {
      icon: raydiumIcon,
      name: 'Raydium',
      amount: 850.00,
      symbol: 'RAY',
      value: 2043.71,
      change: -42.57,
    },
  ];

  const totalValue = tokens.reduce((sum, token) => sum + token.value, 0);
  const totalChange = tokens.reduce((sum, token) => sum + token.change, 0);
  const changePercent = (totalChange / totalValue) * 100;

  const handleDownload = async () => {
    if (!walletRef.current) return;

    try {
      const canvas = await html2canvas(walletRef.current, {
        backgroundColor: '#0a0a0a',
        scale: 2,
        logging: false,
      });

      const link = document.createElement('a');
      link.download = `phantom-wallet-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      
      console.log('Screenshot downloaded successfully');
    } catch (error) {
      console.error('Failed to generate screenshot:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6 space-y-4 bg-[#1a1a1a] p-6 rounded-xl border border-gray-800">
          <h2 className="text-lg font-semibold text-white mb-4">Customize Wallet</h2>
          <div className="space-y-3">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-400 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                data-testid="input-username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="@username"
              />
            </div>
            <div>
              <label htmlFor="walletName" className="block text-sm font-medium text-gray-400 mb-2">
                Wallet Name
              </label>
              <input
                id="walletName"
                type="text"
                data-testid="input-wallet-name"
                value={walletName}
                onChange={(e) => setWalletName(e.target.value)}
                className="w-full px-3 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Wallet name"
              />
            </div>
          </div>
        </div>

        <div className="mb-4 flex justify-end">
          <button
            data-testid="button-download"
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover-elevate active-elevate-2 font-medium"
          >
            <Download className="w-4 h-4" />
            Download Screenshot
          </button>
        </div>

        <div
          ref={walletRef}
          className="w-full bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl"
          style={{ maxWidth: '414px', margin: '0 auto' }}
        >
          <div className="bg-[#0a0a0a] h-8 flex items-center justify-between px-4">
            <span className="text-white text-xs font-semibold">1:05</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex items-center gap-0.5">
                <div className="w-1 h-2 bg-white rounded-sm"></div>
                <div className="w-1 h-3 bg-white rounded-sm"></div>
                <div className="w-1 h-4 bg-white rounded-sm"></div>
                <div className="w-1 h-3 bg-white rounded-sm opacity-50"></div>
              </div>
              <div className="text-white text-xs font-semibold">66%</div>
            </div>
          </div>

          <WalletHeader username={username} walletName={walletName} />
          
          <BalanceDisplay 
            totalBalance={totalValue} 
            change={totalChange} 
            changePercent={changePercent} 
          />
          
          <ActionButtons />

          <div className="px-4 py-2 flex items-center justify-between">
            <h3 className="text-white text-lg font-semibold">Tokens</h3>
            <button data-testid="button-tokens-more" className="p-1">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="pb-4">
            {tokens.map((token) => (
              <TokenListItem key={token.symbol} {...token} />
            ))}
          </div>

          <div className="px-4 py-2 flex items-center gap-4 border-t border-gray-800">
            <button data-testid="button-discover" className="text-gray-400 text-sm font-medium">
              Discover
            </button>
            <button data-testid="button-following" className="text-white text-sm font-semibold border-b-2 border-purple-500 pb-1">
              Following
            </button>
          </div>

          <div className="flex items-center justify-center py-8">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center">
              <svg className="w-10 h-10 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>

          <BottomNavigation />
        </div>
      </div>
    </div>
  );
}
