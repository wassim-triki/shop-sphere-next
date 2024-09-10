export default function Footer() {
  return (
    <div className="bg-muted p-6">
      <p className="text-center text-sm text-muted-foreground sm:text-base">
        <span>
          Copyright ©{new Date().getFullYear()} ShopSphere. All Rights
          Reserved.
        </span>
      </p>
    </div>
  );
}
