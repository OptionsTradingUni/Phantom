import { useRef } from 'react';
import html2canvas from 'html2canvas';
import WalletHeader from './WalletHeader';
import BalanceDisplay from './BalanceDisplay';
import ActionButtons from './ActionButtons';
import TokenListItem from './TokenListItem';
import BottomNavigation from './BottomNavigation';
import { ChevronRight, Download } from 'lucide-react';
import clippyIcon from '@assets/IMG_5070_1762517854497.jpeg';
import solanaIcon from '@assets/stock_images/solana_sol_cryptocur_7f7961d1.jpg';
import usdtIcon from '@assets/stock_images/tether_usdt_cryptocu_97637975.jpg';
import jupiterIcon from '@assets/stock_images/jupiter_jup_cryptocu_f0933738.jpg';
import bonkIcon from '@assets/stock_images/bonk_dog_meme_crypto_48664918.jpg';
import pythIcon from '@assets/stock_images/pyth_network_cryptoc_dcae9149.jpg';
import raydiumIcon from '@assets/stock_images/raydium_ray_cryptocu_fec3bd41.jpg';

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

  const tokens: Token[] = [
    {
      icon: solanaIcon,
      name: 'Solana',
      amount: 2040.816326530612, // $400k / ~$196 per SOL
      symbol: 'SOL',
      value: 400000.00,
      change: -816.32,
    },
    {
      icon: usdtIcon,
      name: 'USDT',
      amount: 75000.00,
      symbol: 'USDT',
      value: 75000.00,
      change: -15.30,
    },
    {
      icon: clippyIcon,
      name: 'Clippy PFF',
      amount: 55327132.50, // $150k / $0.002711
      symbol: 'PFF',
      value: 150000.00,
      change: 3200.45,
    },
    {
      icon: jupiterIcon,
      name: 'Jupiter',
      amount: 12500.00,
      symbol: 'JUP',
      value: 45632.50,
      change: 892.15,
    },
    {
      icon: bonkIcon,
      name: 'Bonk',
      amount: 8500000.00,
      symbol: 'BONK',
      value: 18700.00,
      change: -345.20,
    },
    {
      icon: pythIcon,
      name: 'Pyth Network',
      amount: 25000.00,
      symbol: 'PYTH',
      value: 9800.00,
      change: 156.80,
    },
    {
      icon: raydiumIcon,
      name: 'Raydium',
      amount: 850.00,
      symbol: 'RAY',
      value: 2000.00,
      change: -42.30,
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
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
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

          <WalletHeader username="@TheWealthPrince1" walletName="Side Wallet" />
          
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
