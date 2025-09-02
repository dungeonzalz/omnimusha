import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/router";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(e: any) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", form.email)
      .single();
    if (!data || error) {
      setError("Invalid credentials");
    } else {
      router.push("/dashboard");
    }
    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-4" onSubmit={handleLogin}>
        <input required type="email" placeholder="Email" className="w-full p-2 border rounded" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <input required type="password" placeholder="Password" className="w-full p-2 border rounded" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        <button type="submit" className="bg-primary text-secondary px-6 py-2 rounded font-bold w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </form>
    </div>
  );
}