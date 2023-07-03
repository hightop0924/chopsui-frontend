export default function TradeHistroy({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h1 className="text-secondary-50 text-xl my-5">Trade History</h1>
      <div className=" h-[700px] rounded-3xl bg-blue-300">
        <h1 className="text-xl text-white text-center pt-80">
          NO record found
        </h1>
      </div>
    </div>
  );
}
