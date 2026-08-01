"use client";
import { useState, useEffect } from "react";
import { CldUploadWidget } from "next-cloudinary";

export default function AdminGallery() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      if (data.success) {
        setItems(data.items);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    try {
      const res = await fetch(`/api/gallery?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        fetchItems();
      } else {
        alert("Delete failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUploadSuccess = async (result: any) => {
    const info = result.info;
    
    // Save to DB
    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "New Upload",
          type: info.resource_type === "video" ? "video" : "photo",
          cloudinaryUrl: info.secure_url,
          cloudinaryPublicId: info.public_id,
          thumbnailUrl: info.thumbnail_url || info.secure_url,
          category: "General",
        })
      });
      const data = await res.json();
      if (data.success) {
        fetchItems();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--secondary-color)' }}>Gallery Manager</h1>
        
        <CldUploadWidget 
          uploadPreset="saraswati_preset" 
          onSuccess={handleUploadSuccess}
          options={{ maxFiles: 5 }}
        >
          {({ open }) => {
            return (
              <button 
                onClick={() => open()}
                style={{ padding: '10px 20px', background: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                + Upload Media
              </button>
            );
          }}
        </CldUploadWidget>
      </div>

      {loading ? (
        <p>Loading gallery items...</p>
      ) : items.length === 0 ? (
        <div style={{ padding: '40px', background: 'white', borderRadius: '8px', textAlign: 'center', color: '#888' }}>
          No media found. Upload some photos or videos!
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {items.map(item => (
            <div key={item.id} style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <img 
                src={item.thumbnailUrl || item.cloudinaryUrl} 
                alt={item.title} 
                style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
              />
              <div style={{ padding: '15px' }}>
                <h4 style={{ margin: '0 0 5px', fontSize: '1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</h4>
                <p style={{ margin: '0 0 15px', color: '#888', fontSize: '0.8rem', textTransform: 'capitalize' }}>{item.type} • {item.category}</p>
                <button 
                  onClick={() => handleDelete(item.id)}
                  style={{ width: '100%', padding: '8px', background: '#ffebee', color: '#c62828', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
