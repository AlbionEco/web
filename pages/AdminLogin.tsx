
import React, { useState } from 'react';
import { Lock, ShieldCheck, ArrowRight } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Static secure credentials as requested
    if (password === 'Albion@2024') {
      localStorage.setItem('albion_auth', 'true');
      onLogin();
    } else {
      setError('Invalid Access Token');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="bg-blue-600 p-4 rounded-2xl inline-block mb-6 shadow-2xl shadow-blue-600/40">
            <ShieldCheck className="text-white w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Internal Control Center</h1>
          <p className="text-slate-400">Authorized Personnel Only</p>
        </div>

        <div className="bg-slate-800 rounded-3xl p-10 border border-slate-700 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400">Security Token</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input
                  type="password"
                  placeholder="Enter access code"
                  className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-400 text-xs mt-2 font-medium">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center group"
            >
              Authenticate <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-slate-500">
            Unauthorized access attempts are logged and reported.<br />
            © Albion Ecotech Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
