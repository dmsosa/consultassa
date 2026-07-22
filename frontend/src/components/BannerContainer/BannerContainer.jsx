function BannerContainer({ children }) {
  return (
    <div className="banner py-5">
      <div className="container py-5">
        {children}
      </div>
    </div>
  );
}

export default BannerContainer;