import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    if (isAuthenticated) {
        navigate("/admin/dashboard", { replace: true });
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        const result = login(username, password);
        if (result.success) {
            navigate("/admin/dashboard");
        } else {
            setError(result.error);
        }
    };

    return (
        <div className="min-h-screen bg-cream flex items-center justify-center px-6">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-saddle mb-3">
                        Freeland Family Farms
                    </p>
                    <h1 className="font-display text-4xl text-coffee-deep">
                        Admin
                    </h1>
                    <p className="text-sm text-saddle/80 mt-2">
                        Sign in to edit landing page content
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-cream-warm border border-stroke rounded-3xl p-8 space-y-5"
                >
                    <div className="space-y-2">
                        <Label htmlFor="username" className="text-saddle text-xs uppercase tracking-wider">
                            Username
                        </Label>
                        <Input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="bg-cream border-stroke"
                            placeholder="admin"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-saddle text-xs uppercase tracking-wider">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="bg-cream border-stroke"
                            placeholder="••••••••"
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-red-600">{error}</p>
                    )}

                    <Button
                        type="submit"
                        className="w-full bg-coffee-deep text-cream hover:bg-coffee rounded-full py-6"
                    >
                        Sign in
                    </Button>
                </form>

                <p className="text-center mt-6">
                    <a href="/" className="text-sm text-saddle hover:text-coffee-deep transition-colors">
                        ← Back to site
                    </a>
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
