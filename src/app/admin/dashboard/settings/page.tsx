"use client";
import { useState, useEffect } from "react";

export default function AdminSettings() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const defaultSettings = [
    { key: "school_name", label: "School Name", placeholder: "Saraswati Convent School" },
    { key: "school_tagline", label: "School Tagline", placeholder: "Nurturing Minds, Building Futures" },
    { key: "established_year", label: "Established Year", placeholder: "1990" },
    { key: "principal_name", label: "Principal Name", placeholder: "Dr. XYZ" },
    { key: "admission_open", label: "Admissions Open? (yes/no)", placeholder: "yes" },
  ];

  useEffect(() => {
    fetch("/api/settings")
      .then(r => r.json())
      .then(data => {
        if (data.success) {
          const map: Record<string, string> = {};
          data.settings.forEach((s: any) => { map[s.key] = s.value || ""; });
          setSettings(map);
        }
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMsg("");
    try {
      const entries = Object.entries(settings).map(([key, value]) => ({ key, value }));
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings: entries }),
      });
      const data = await res.json();
      setMsg(data.success ? "Settings saved successfully!" : "Error: " + (data.error || "Unknown"));
    } catch {
      setMsg("Network error");
    } finally {
      setSaving(false);
    }
  };

  const fieldStyle: React.CSSProperties = { width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "1rem", boxSizing: "border-box" };
  const labelStyle: React.CSSProperties = { display: "block", marginBottom: "6px", fontWeight: "600", color: "#444" };

  return (
    <div>
      <h1 style={{ fontSize: "2rem", color: "var(--secondary-color)", marginBottom: "30px" }}>⚙️ Site Settings</h1>

      {msg && (
        <div style={{ padding: "12px", borderRadius: "6px", marginBottom: "20px", background: msg.startsWith("Error") ? "#ffebee" : "#e8f5e9", color: msg.startsWith("Error") ? "#c62828" : "#2e7d32" }}>
          {msg}
        </div>
      )}

      {loading ? <p>Loading...</p> : (
        <div style={{ background: "white", borderRadius: "12px", padding: "30px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", maxWidth: "700px" }}>
          {defaultSettings.map(({ key, label, placeholder }) => (
            <div key={key} style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>{label}</label>
              <input
                value={settings[key] || ""}
                onChange={e => setSettings({ ...settings, [key]: e.target.value })}
                placeholder={placeholder}
                style={fieldStyle}
              />
            </div>
          ))}

          <button onClick={handleSave} disabled={saving}
            style={{ padding: "12px 30px", background: "var(--primary-color)", color: "white", border: "none", borderRadius: "8px", fontSize: "1rem", fontWeight: "600", cursor: saving ? "not-allowed" : "pointer", opacity: saving ? 0.7 : 1 }}>
            {saving ? "Saving..." : "💾 Save Settings"}
          </button>
        </div>
      )}
    </div>
  );
}
