import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Dashboard() {
  const [wallet, setWallet] = useState<any>(null);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Demo user_id (replace with real session in production)
    const user_id = null; // isi dengan session user_id
    if (!user_id) return;
    async function fetchData() {
      setLoading(true);
      const { data: walletData } = await supabase.from("wallets").select("*").eq("user_id", user_id).single();
      const { data: txData } = await supabase.from("transactions").select("*").eq("user_id", user_id);
      setWallet(walletData);
      setTransactions(txData || []);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      {loading ? <div>Loading...</div> : (
        <>
          <div className="mb-4">SOL Balance: {wallet?.balance_sol}</div>
          <div className="mb-4">USD Balance: {wallet?.balance_usd}</div>
          <div className="mb-4">
            <h3 className="font-semibold">Transaction History</h3>
            <ul>
              {transactions.map(tx => (
                <li key={tx.id} className="border-b py-2">
                  {tx.type} - {tx.amount} {tx.status}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}