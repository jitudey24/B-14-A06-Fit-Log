// app/loading.tsx
//
// Next.js App Router convention: এই ফাইল app/page.tsx (বা যেকোনো route
// segment) এর পাশে রাখলে, ওই segment-এর data fetch শেষ না হওয়া পর্যন্ত
// Next.js automatically এটা দেখাবে — কোনো manual isLoading state ছাড়াই।
//
// যদি client component-এ manual state দিয়ে দেখাতে চান, নিচে
// <LoadingScreen /> কম্পোনেন্টটা আলাদাভাবে import করে
// {isLoading && <LoadingScreen />} লিখে ব্যবহার করতে পারবেন।

export default function Loading() {
  return <LoadingScreen />;
}

export function LoadingScreen() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4">
      {/* SPINNING DUMBBELL RING */}
      <div className="relative flex h-24 w-24 items-center justify-center">
        <span className="absolute inset-0 rounded-full border-4 border-white/10" />
        <span className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#C2F800]" />
        <span className="text-3xl">🏋️</span>
      </div>

      {/* BOUNCING DOTS */}
      <div className="mt-6 flex gap-2">
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#C2F800] [animation-delay:-0.3s]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#C2F800] [animation-delay:-0.15s]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#C2F800]" />
      </div>

      {/* TEXT */}
      <p className="mt-6 text-sm font-bold uppercase tracking-widest text-zinc-500">
        Loading workouts…
      </p>
    </main>
  );
}
