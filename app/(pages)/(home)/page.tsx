export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <p className="text-4xl font-extrabold text-center mt-10">Home Page</p>

      <w3m-button />
      <w3m-onramp-widget />
    </div>
  );
}
