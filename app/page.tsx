import ProfileUpdateForm from "@/components/ProfileUpdateForm";
import TransactionForm from "@/components/TransactionForm";
import TransactionProfile from "@/components/TransactionProfile";

export default function Home() {
  return (
    <div className="flex items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-col justify-between items-center h-[230vh]">
        <TransactionProfile />
        <TransactionForm />
        <ProfileUpdateForm />
      </main>
    </div>
  );
}
