import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Hardcoded for now, will fetch from DB later
  const announcements = [
    "Admissions Open for 2025–26 Session! Enroll your child today.",
    "Parent-Teacher Meeting scheduled for next Saturday.",
    "Annual Sports Day coming up in November."
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AnnouncementBar announcements={announcements} />
      <Header />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
