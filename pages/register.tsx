import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/router";

export default function Register() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    solana_address: "",
    password: "",
    referral_code: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { data, error } = await supabase
      .from("users")
      .insert([form]);
    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }
    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input required type="text" placeholder="Full Name" className="w-full p-2 border rounded" value={form.full_name} onChange={e => setForm({ ...form, full_name: e.target.value })} />
        <input required type="email" placeholder="Email" className="w-full p-2 border rounded" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded" value={form.phone_number} onChange={e => setForm({ ...form, phone_number: e.target.value })} />
        <input required type="text" placeholder="Solana Address" className="w-full p-2 border rounded" value={form.solana_address} onChange={e => setForm({ ...form, solana_address: e.target.value })} />
        <input required type="password" placeholder="Password" className="w-full p-2 border rounded" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        <input type="text" placeholder="Referral Code (optional)" className="w-full p-2 border rounded" value={form.referral_code} onChange={e => setForm({ ...form, referral_code: e.target.value })} />
        <button type="submit" className="bg-primary text-secondary px-6 py-2 rounded font-bold w-full" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </form>
    </div>
  );
}