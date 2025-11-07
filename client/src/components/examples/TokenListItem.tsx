import TokenListItem from '../TokenListItem';

export default function TokenListItemExample() {
  return (
    <TokenListItem
      icon="https://cryptologos.cc/logos/solana-sol-logo.png"
      name="Solana"
      amount={0.00433}
      symbol="SOL"
      value={0.66}
      change={-0.02}
    />
  );
}
