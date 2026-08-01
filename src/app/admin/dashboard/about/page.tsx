"use client";
import { useState, useEffect } from "react";
import { CldUploadWidget } from "next-cloudinary";

export default function AdminAbout() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editItem, setEditItem] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/about");
      const data = await res.json();
      if (data.success) setItems(data.items);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = async () => {
    setSaving(true);
    setMsg("");
    try {
      const res = await fetch("/api/about", {
        method: editItem.id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editItem),
      });
      const data = await res.json();
      if (data.success) {
        setMsg("Saved successfully!");
        setEditItem(null);
        fetchItems();
      } else {
        setMsg("Error: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      setMsg("Network error");
    } finally {
      setSaving(false);
    }
  };

  const cardStyle: React.CSSProperties = {
    background: "white",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    marginBottom: "20px",
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "2rem", color: "var(--secondary-color)" }}>About Us Manager</h1>
        <button
          onClick={() => setEditItem({ role: "director", name: "", designation: "", message: "", photoUrl: "", photoPublicId: "" })}
          style={{ padding: "10px 20px", background: "var(--primary-color)", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
        >
          + Add New
        </button>
      </div>

      {msg && <div style={{ padding: "12px", borderRadius: "6px", marginBottom: "20px", background: msg.startsWith("Error") ? "#ffebee" : "#e8f5e9", color: msg.startsWith("Error") ? "#c62828" : "#2e7d32" }}>{msg}</div>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {items.map(item => (
            <div key={item.id} style={cardStyle}>
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                {item.photoUrl && <img src={item.photoUrl} alt={item.name} style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover" }} />}
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 5px", textTransform: "capitalize" }}>{item.role} — {item.name}</h3>
                  <p style={{ margin: "0 0 5px", color: "#666" }}>{item.designation}</p>
                  <p style={{ margin: 0, color: "#888", fontSize: "0.9rem" }}>{item.message?.substring(0, 100)}...</p>
                </div>
                <button
                  onClick={() => setEditItem({ ...item })}
                  style={{ padding: "8px 16px", background: "#e3f2fd", color: "#1565c0", border: "none", borderRadius: "6px", cursor: "pointer" }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <div style={{ ...cardStyle, textAlign: "center", color: "#888", padding: "40px" }}>
              No entries yet. Add Director and Principal details.
            </div>
          )}
        </div>
      )}

      {/* Edit Modal */}
      {editItem && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "20px" }}>
          <div style={{ background: "white", borderRadius: "12px", padding: "30px", width: "100%", maxWidth: "600px", maxHeight: "90vh", overflowY: "auto" }}>
            <h2 style={{ marginTop: 0, color: "var(--secondary-color)" }}>{editItem.id ? "Edit" : "Add"} Entry</h2>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>Role</label>
              <select value={editItem.role} onChange={e => setEditItem({ ...editItem, role: e.target.value })}
                style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ddd" }}>
                <option value="director">Director</option>
                <option value="principal">Principal</option>
              </select>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>Name</label>
              <input value={editItem.name} onChange={e => setEditItem({ ...editItem, name: e.target.value })}
                style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ddd" }} />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>Designation</label>
              <input value={editItem.designation || ""} onChange={e => setEditItem({ ...editItem, designation: e.target.value })}
                style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ddd" }} />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>Message</label>
              <textarea value={editItem.message || ""} onChange={e => setEditItem({ ...editItem, message: e.target.value })}
                rows={5} style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ddd", resize: "vertical" }} />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>Photo</label>
              {editItem.photoUrl && <img src={editItem.photoUrl} alt="preview" style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", marginBottom: "10px", display: "block" }} />}
              <CldUploadWidget uploadPreset="saraswati_preset" onSuccess={(result: any) => {
                const info = result.info;
                setEditItem({ ...editItem, photoUrl: info.secure_url, photoPublicId: info.public_id });
              }}>
                {({ open }) => (
                  <button type="button" onClick={() => open()}
                    style={{ padding: "8px 16px", background: "#f5f5f5", border: "1px solid #ddd", borderRadius: "6px", cursor: "pointer" }}>
                    {editItem.photoUrl ? "Change Photo" : "Upload Photo"}
                  </button>
                )}
              </CldUploadWidget>
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              <button onClick={() => setEditItem(null)}
                style={{ padding: "10px 20px", background: "#f5f5f5", border: "none", borderRadius: "6px", cursor: "pointer" }}>
                Cancel
              </button>
              <button onClick={handleSave} disabled={saving}
                style={{ padding: "10px 20px", background: "var(--primary-color)", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", opacity: saving ? 0.7 : 1 }}>
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
